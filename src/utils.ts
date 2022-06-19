import { TenBisRestaurant, WoltRestaurant } from "./types/FetchRestaurantTyp";
import {store} from "../src/redux/store";
import { setFiftyRestaurants, setFilterByCategory, setSelectedRestaurant } from "./redux/actions/clienActions";
import { shuffle } from "./hooks/shuffle";

type RestaurantData = {
    city: object;
    tenBisData: Array<object>;
    woltData: Array<object>;
  };
type Restaurants = {
    both: WoltRestaurant[] & TenBisRestaurant[];
    tenbisRetaurants: TenBisRestaurant[];
    woltRetaurants: WoltRestaurant[];
  };
type Restaurant11 = {
    restaurants: Restaurant;
    userLocation: {};
  };
type Restaurant = {
    allRestaurants: Restaurants,
    fiftyRestaurants: [],
    filterTypes: {woltRestaurants: boolean, tenbisRestaurants: boolean},
    filteredByCategory: [],
    selectedProvider: "both",
    selectedRestaurant: {},
    subFilterTypes: {kosher: boolean, vegan: boolean, vegetarian: boolean, dessert: boolean},
    userLocation: {}
  };

export const getRandomFromArray = <Type>(allRestaurants: Type[] |any=[]):Type =>{
    let randomIndex: any = "";
    randomIndex = Math.floor(Math.random() * allRestaurants.length);
    return allRestaurants[randomIndex]
    // selectedRestaurantSet(allRestaurants.woltData[randomIndex]);
}
export function checkFilters(){

    let beforRest: WoltRestaurant[] | TenBisRestaurant[] | WoltRestaurant[] & TenBisRestaurant[] = []
    let state: Restaurant11 | any 
    state = store.getState();
    const provider = state?.restaurants?.filterTypes.woltRestaurants && state?.restaurants?.filterTypes.tenbisRestaurants ? "both" : state?.restaurants?.filterTypes.woltRestaurants ? "woltRestaurants" : "tenbisRestaurants"
    
    
    for (let key in state.restaurants.subFilterTypes) {
        if(state.restaurants.subFilterTypes[key] === true){
            debugger
            for(let restaurant of state.restaurants.allRestaurants[provider]){
                if(restaurant.tags.includes(key)){
                    beforRest=[...beforRest,restaurant]
                }
            }
        }
    }
    const areFalse = Object.values(state.restaurants.subFilterTypes).every(value => value === false);
    if(areFalse){
        store.dispatch(setFiftyRestaurants(shuffle([...state.restaurants.allRestaurants[provider]]).splice(0,50)))
        store.dispatch(setSelectedRestaurant(getRandomFromArray(shuffle([...state.restaurants.allRestaurants[provider]]))))
        return
    }
    console.log(beforRest);

    // now length check to fill 50 restaurants
    let beforeLength =  beforRest.length
    if(beforeLength < 50){
      let restAmout = 50- beforeLength
      let filledArray = state.restaurants.allRestaurants[provider].splice(0,restAmout)

      filledArray= [...filledArray,beforRest ]
      store.dispatch(setFiftyRestaurants(shuffle(filledArray)))
      store.dispatch(setSelectedRestaurant(getRandomFromArray(filledArray)))
      return
    }
    
    store.dispatch(setFiftyRestaurants(shuffle(beforRest).splice(0,50)))
    store.dispatch(setSelectedRestaurant(getRandomFromArray(beforRest)))
    return 
}

export const set50Restaurants = (allTheRestaurants: any, selectedprovider: string) =>{
    let checkk= allTheRestaurants[selectedprovider]?.filter((restaurant: any, index: number) => index < 50 && restaurant);
    // debugger

    return checkk
}


// const API_KEY =`AIzaSyDoijedNld5C1N291eOknHfLH4vB18fxtc`;


export const getLatLon = async (cityName: string):Promise<{lat:string, lon:string, address:Address}> => {
    try {
        const response = await fetch(`https://nominatim.openstreetmap.org/search/${cityName}?format=json&addressdetails=1&limit=1`);
        const data = await response.json() as LocationResData[];        
        return { ...data[0] };
    } catch (error) {
        throw new Error('No Lat Lon found');
    }
}

export const slugify = (text: string) => {
    return text.toString().toLowerCase()
        .replace(/\s+/g, '-')           // Replace spaces with -
        .replaceAll('-', '')           // Replace - with nothing
        .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
        .replace(/\-\-+/g, '-')         // Replace multiple - with single -
        .replace(/^-+/, '')             // Trim - from start of text
        .replace(/-+$/, '');            // Trim - from end of text
}

export function isJsonString(str:string) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

export const isWeekPast = (lastScrapeDate: number) => {
    if(!lastScrapeDate) return false;
    const lastWeek =     new Date().setDate(new Date().getDate() - 7)
    return lastWeek > lastScrapeDate;
}
 interface LocationResData {
    place_id: number
    licence: string
    osm_type: string
    osm_id: number
    boundingbox: string[]
    lat: string
    lon: string
    display_name: string
    class: string
    type: string
    importance: number
    address: Address
  }
  
   export interface Address {
    residential: string
    suburb: string
    city: string
    state_district: string
    state: string
    "ISO3166-2-lvl4": string
    country: string
    country_code: string
  }