import { TenBisRestaurant } from "../../src/types/10Bis";
import { WoltRestaurant } from "../../src/types/Wolt";
import { isJsonString, isWeekPast } from "../../src/utils";

const fs = require('fs');
const fsp = require('fs').promises
const TENIS_API = `https://www.10bis.co.il/NextApi/`
//searchRestaurants?shoppingCartGuid=62cdb613-b452-4502-98f2-96cadfe99eab&culture=he-IL&uiCulture=en&isMobileDevice=false&timestamp=1654581284389&deliveryMethod=delivery&cityName=Holon&streetName=Golda+Me%27ir+Street&houseNumber=7&latitude=32.0122878&longitude=34.7794304&cityId=10&streetId=5987&isBigCity=true&addressKey=10-5987-7&locationType=residential
// export const get10BisRestaurants = async (lat: string, lon: string, slug: string): Promise<TenBisRestaurant[]> => {
export const get10BisRestaurants = async (query: LocationQueryParams, slug: string): Promise<any> => {
  const localPath = `./backend/data/10bis-restaurants-${slug}.json`;
  const isFileExists = fs.existsSync(localPath)
  if (isFileExists) {
    const file_data = await fsp.readFile(localPath)
    const json_data = file_data && isJsonString(file_data) ? JSON.parse(file_data) : null

    if (json_data && !isWeekPast(json_data.lastScrapeDate)) {
      return json_data;
    }
  }


  try {
    const searchParams = new URLSearchParams();
    Object.entries(query.queryParam).forEach(([key, value]) => searchParams.append(key, value.toString()));

    const fetchUrl = `${TENIS_API}/searchRestaurants?${searchParams.toString()}`;
    console.log('fetching wolt restaurants', fetchUrl);
    const response = await fetch(fetchUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })

    const data = await response.json() as Restaurants;

    console.log('fetching 10bis restaurants', data);
    const res = [] as TenBisRestaurant[];
    data.Data.restaurantsList.forEach(restaurant => {
      const tags =restaurant.restaurantCuisineKeysList;
      if(restaurant.isKosher) tags.push('kosher');
      if(restaurant.isVegan) tags.push('vegan');
      if(restaurant.isGlutenFree) tags.push('gluten free');
      if(restaurant.isEnvironmentFriendly) tags.push('environment friendly');
      res.push({
        name: restaurant.restaurantName,
        title: restaurant.restaurantName,
        venue_id: `${restaurant.restaurantId}`,
        address: restaurant.restaurantAddress,
        track_id: `${restaurant.restaurantId}`,
        location: [
          restaurant.longitude,
          restaurant.latitude
        ],
        image: restaurant.restaurantLogoUrl,
        short_description: Object.values(restaurant.localizationNames).map(v => v).join(', '),
        slug: slug,
        tags,
        link: {
          url: `https://www.10bis.co.il/next/en/restaurants/menu/delivery/${restaurant.restaurantId}`
        },
      })
    })

    if (isFileExists) {
      await fsp.unlink(localPath)
    }

    const dataToSave = JSON.stringify({
      lastScrapeDate: new Date().getTime(),
      fetchUrl,
      restaurants: res,
    }, null, 4);

    fs.writeFile(localPath, dataToSave, { flag: 'wx' }, function (err: any) {
      if (err) throw err;
      console.log("It's saved!");
    });
    return res

  } catch (error) {
    console.log(error);

    console.log('NO WOLT RESTAURANTS FOUND');

    return []
  }

}





// TYPESCRIPT OF JSON 
interface LocationQueryParams {
  name: string;
  slug: string;
  queryParam: {
    shoppingCartGuid: string;
    culture: string;
    uiCulture: string;
    isMobileDevice: boolean;
    timestamp: number;
    deliveryMethod: string;
    cityId: number;
    streetId: number;
    houseNumber: number;
    addressKey: string;
  };
}






// 10 bis INTAERCAES 



export interface Restaurants {
  Errors: any[]
  Success: boolean
  Data: Data
  ShoppingCartGuid: string
}

export interface Data {
  restaurantsList: RestaurantsList[]
  poolTimeStart: PoolTimeStart
  poolTimeEnd: PoolTimeEnd
  poolTimeDelivery: PoolTimeDelivery
  SecondOrderedByConfigUsed: boolean
}

export interface RestaurantsList {
  restaurantId: number
  restaurantName: string
  localizationNames: LocalizationNames
  restaurantAddress: string
  restaurantCityName: string
  restaurantLogoUrl: string
  restaurantPhone: string
  restaurantCuisineKeysList: string[]
  restaurantCuisineTypes: RestaurantCuisineTypes
  distanceFromUser: number
  isOpenNow: boolean
  isActive: boolean
  isDeliveryEnabled: boolean
  isPickupEnabled: boolean
  openTime: string
  closeTime: string
  deliveryTimeInMinutes: number
  deliveryTimeStr: string
  estimatedArrivalTime: string
  longitude: number
  latitude: number
  deliveryRemarks: string
  numOfReviews: number
  reviewsRank: number
  reviewsRankDecimal: number
  discountPercent: number
  discountAvailable: boolean
  isKosher: boolean
  isVegan: boolean
  isGlutenFree: boolean
  isEnvironmentFriendly: boolean
  kosherString: string
  deliveryFee: number
  deliveryFeeAmount: number
  minimumPriceForOrder: number
  isPooledOrderRestaurant: boolean
  pooledOrderSum: number
  estimatedNumberOfOrdersInPoolOrder: number
  tags: Tag[]
  priorityInList: number
  restaurantHeaderImageUrl: string
  isTerminalActive: boolean
  restaurantPopularityScore: number
  discountedDeliveryFee: number
  minOrderTotalForDeliveryFeeDiscount: number
  tipEnabled: boolean
  futureOrdersAvailable: boolean
  futureOrderSupported: boolean
  announcement: string
  profileImageUrl: string
  isScoober: boolean
  voucherRestaurant: boolean
  tempClosedReason: string
  futureOrderTodayBeginTime: any
}

export interface LocalizationNames {
  he: string
  en: string
}

export interface RestaurantCuisineTypes {
  sandwichesWraps?: string
  meatGrill?: string
  salads?: string
  coffeeHouse?: string
  pizza?: string
  pasta?: string
  glutenFree?: string
  burgers?: string
  veganFood?: string
  indian?: string
  homeMade?: string
  asianFusion?: string
  japaneseSushi?: string
  bakery?: string
  fish?: string
  poke?: string
  seafood?: string
  patisserie?: string
  SmoothiesAndShakes?: string
  gelato?: string
  convenienceStore?: string
  bar?: string
  falafel?: string
  humus?: string
  soup?: string
  mexican?: string
  chocolate?: string
  guestTray?: string
  dairy?: string
  cakesAndCookie?: string
}

export interface Tag {
  type: string
  value: string
  imageUrl: any
  companyId: number
}

export interface PoolTimeStart {
  Ticks: number
  Days: number
  Hours: number
  Milliseconds: number
  Minutes: number
  Seconds: number
  TotalDays: number
  TotalHours: number
  TotalMilliseconds: number
  TotalMinutes: number
  TotalSeconds: number
}

export interface PoolTimeEnd {
  Ticks: number
  Days: number
  Hours: number
  Milliseconds: number
  Minutes: number
  Seconds: number
  TotalDays: number
  TotalHours: number
  TotalMilliseconds: number
  TotalMinutes: number
  TotalSeconds: number
}

export interface PoolTimeDelivery {
  Ticks: number
  Days: number
  Hours: number
  Milliseconds: number
  Minutes: number
  Seconds: number
  TotalDays: number
  TotalHours: number
  TotalMilliseconds: number
  TotalMinutes: number
  TotalSeconds: number
}
