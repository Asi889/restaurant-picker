import path from "path";
import { RestaurantType } from "../../src/types/FetchRestaurantTyp";
import { isJsonString, isWeekPast } from "../../src/utils";

const fs = require('fs');
const fsp = require('fs').promises
const TENIS_API = `https://www.10bis.co.il/NextApi/`


function dataToRestaurant(restaurant: RestaurantsList, slug: string): RestaurantType {
  const tags = restaurant.restaurantCuisineKeysList;
  if (restaurant.isKosher) tags.push('kosher');
  if (restaurant.isVegan) tags.push('vegan');
  if (restaurant.isGlutenFree) tags.push('gluten free');
  if (restaurant.isEnvironmentFriendly) tags.push('environment friendly');
  const res = {
    name: restaurant.restaurantName,
    score: restaurant.reviewsRankDecimal * 2, //reviewsRank
    title: restaurant.restaurantName,
    venue_id: `${restaurant.restaurantId}`,
    address: restaurant.restaurantAddress,
    track_id: `${restaurant.restaurantId}`,
    location: [
      restaurant.longitude,
      restaurant.latitude
    ],
    photo: {
      image: restaurant.restaurantHeaderImageUrl ? restaurant.restaurantHeaderImageUrl : restaurant.profileImageUrl,
      logo: restaurant.restaurantLogoUrl
    },
    description: Object.values(restaurant.localizationNames).map(v => v).join(', '),
    short_description: Object.values(restaurant.localizationNames).map(v => v).join(', '),
    slug: slug,
    tags,
    link: {
      url: `https://www.10bis.co.il/next/en/restaurants/menu/delivery/${restaurant.restaurantId}`
    },
    provider: "tenBis" as any,
  };
  return res;
}
//searchRestaurants?shoppingCartGuid=62cdb613-b452-4502-98f2-96cadfe99eab&culture=he-IL&uiCulture=en&isMobileDevice=false&timestamp=1654581284389&deliveryMethod=delivery&cityName=Holon&streetName=Golda+Me%27ir+Street&houseNumber=7&latitude=32.0122878&longitude=34.7794304&cityId=10&streetId=5987&isBigCity=true&addressKey=10-5987-7&locationType=residential
export const get10BisRestaurants = async (query: LocationQueryParams, slug: string): Promise<RestaurantType[]> => {
  const jsonDir = path.join(process.cwd(), 'json')
  const localPath = `${jsonDir}/10bis-restaurants-${slug}.json`;
  const isFileExists = fs.existsSync(localPath)
  if (isFileExists) {
    const file_data = await fsp.readFile(localPath, 'utf-8')
    const json_data = file_data && isJsonString(file_data) ? JSON.parse(file_data) : null

    // if (json_data && !isWeekPast(json_data.lastScrapeDate) && json_data.restaurants) {
    if (json_data && json_data.restaurants) {
      return json_data.restaurants;
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
    const res = [] as RestaurantType[];
    data.Data.restaurantsList.forEach(restaurant => {
      const restaurantObj = dataToRestaurant(restaurant, slug);
      res.push(restaurantObj);
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

export const get10ByLatLon = async (location: { lat: number, lon: number }): Promise<RestaurantType[]> => {
  const slug = `${location.lat}-${location.lon}`;
  // const getCityData = await fetch(`https://www.latlong.net/c/?lat=${location.lat}&long=${location.lon}`);
  // // const geoData = await getCityData.json() as any;
  
  // console.log(geoData);
  
  const query = {
    shoppingCartGuid: '6c3e5ed3-5b5a-4f8c-acf0-43ce5d4a5b57',
    culture: 'he-IL',
    uiCulture: 'en',
    // cityName: ``,
    // streetName: ``,
    // houseNumber: 0,
    latitude: location.lat,
    longitude: location.lon,
    cityId: 1,
    streetId: 1,
    isBigCity: true,
    // addressKey: '24-8144-5',
    locationType: 'residential',

  }
  try {
    const searchParams = new URLSearchParams();
    Object.entries(query).forEach(([key, value]) => searchParams.append(key, value.toString()));
    const fetchUrl = `${TENIS_API}/searchRestaurants?${searchParams.toString()}`;
    console.log('fetching 10bis restaurants', fetchUrl);
    const response = await fetch(fetchUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })

    const data = await response.json() as Restaurants;

    console.log('fetching 10bis restaurants', data);
    const res = [] as RestaurantType[];
    data.Data.restaurantsList.forEach(restaurant => {
      const restaurantObj = dataToRestaurant(restaurant, slug);
      res.push(restaurantObj);
    })
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
