import { woltCities } from "./types/ListOfCities";
import { store } from "../src/redux/store";
import { shuffle } from "./hooks/shuffle";
import { setFiftyRestaurants, setSelectedRestaurant } from "./redux/actions/clienActions";
import { RestaurantType } from "./types/FetchRestaurantTyp";
import { StateProp } from "./types/FetchSubRestaurantTypes";

export const getRandomFromArray = <Type>(allRestaurants: Type[] | any = []): Type => {
    let randomIndex: any = "";
    randomIndex = Math.floor(Math.random() * allRestaurants.length);
    console.log(allRestaurants);
    
    return allRestaurants[randomIndex]
    // selectedRestaurantSet(allRestaurants.woltData[randomIndex]);
}
export const splitAndTrim = (string: string): string => {
    if(!string) return "";
    let [splitted] = string.split("|");
    return splitted.trim();
}



// a function that return a greed by the time of the day with swtich case/
export const checkTime = (): string => {
    const hour = new Date().getHours();
    let strings = ["נראה שהערב מזמינים"];
    if (hour >= 0 && hour < 3) {
        strings = ['המאנץ׳ של הלילה הוא', 'כל אחת והשעה שלה, הלילה יצא'];
    } else if (hour >= 3 && hour < 9) {
        strings = ['נראה שהבוקר מזמינים' ,'קצת מוקדם אבל הבוקר מזמינים' ,'תביאו פחמימות אני במחזור'];
    } else if (hour > 9 && hour <= 16) {
        strings = ['נראה שלצהריים מזמינים' ,'הופה, הצהריים מזמינים', 'צהריים במשרד? תזמינו'];
    }else if (hour > 16 && hour <= 22) {
        strings = ['לארוחת ערב מזמינים' ,'הערב מזמינים'];
    }else if (hour > 22 && hour < 24) {
        strings = ['מאנץ׳ הלילה שלכם הוא', 'הלילה מזמינים'];
    }
    return strings[Math.floor(Math.random() * strings.length)];
}

export const vibrate = () => {
    if (!window) {
        return;
    }

    if (!window.navigator) {
        return;
    }

    if (!window.navigator.vibrate) {
        return;
    }

    window.navigator.vibrate([800, 10, 10, 800]);
}

export const returnFilters = () => {
    let state = store.getState() as StateProp;
    
    const checkKey = (key: string) => {
        switch (key) {
            case "kosher":
                return "כשר"

            case "vegan":
                return "טבעוני"

            case "vegetarian":
                return "צמחוני"

            case "dessert":
                return "קינוח"

            case "burgers":
                return "המבורגר"

            case "asian":
                return "אסייתי"

            case "pizza":
                return "פיצה"

            case "woltRestaurants":
                return "וולט"

            case "tenbisRestaurants":
                return "תן ביס"

            default:
                break;
        }
    }

    let allTypes: any = {...state?.restaurants.filterTypes, ...state?.restaurants.subFilterTypes}
    

    return Object
    .keys(allTypes)
    .filter(key => allTypes[key] === true)
    .map(key =>checkKey(key))
    .join(', ')

}

export function checkFilters() {

    let beforRest = [] as RestaurantType[]
    let state: StateProp | any
    state = store.getState();
    const provider = state?.restaurants?.filterTypes.woltRestaurants && state?.restaurants?.filterTypes.tenbisRestaurants ? "both" : state?.restaurants?.filterTypes.woltRestaurants ? "woltRestaurants" : "tenbisRestaurants"


    for (let key in state.restaurants.subFilterTypes) {
        if (state.restaurants.subFilterTypes[key] === true) {
            
            for (let restaurant of state.restaurants.allRestaurants[provider]) {
                if (restaurant.tags.includes(key)) {
                    beforRest = [...beforRest, restaurant]
                }
                if (key === "burgers") {
                    if (restaurant.tags.includes("burger")) {
                        beforRest = [...beforRest, restaurant]
                    }
                }
                if (key === "asian") {
                    if (restaurant.tags.includes("asianFusion")) {
                        beforRest = [...beforRest, restaurant]
                    }
                }
            }
        }
    }
    const areFalse = Object.values(state.restaurants.subFilterTypes).every(value => value === false);
    if (areFalse) {
        if(state.restaurants.allRestaurants[provider].length < 50){
            let restAmout = 50 - state.restaurants.allRestaurants[provider].length
            let filledArray = state.restaurants.allRestaurants["both"].filter((restaurant: any, index: number) => index < restAmout && restaurant)
            store.dispatch(setFiftyRestaurants(shuffle([...filledArray, ...state.restaurants.allRestaurants[provider]])))
            
        }else{
            
            store.dispatch(setFiftyRestaurants(shuffle([...state.restaurants.allRestaurants[provider]]).filter((restaurant: any, index: number) => index < 50 && restaurant)))
        }
        console.log(getRandomFromArray(shuffle([...state.restaurants.allRestaurants[provider]])));
        store.dispatch(setSelectedRestaurant(getRandomFromArray(shuffle([...state.restaurants.allRestaurants[provider]]))))
        return
    }
    // now length check to fill 50 restaurants
    let beforeLength = beforRest.length
    if (beforeLength < 50) {
        let restAmout = 50 - beforeLength
        let filledArray = state.restaurants.allRestaurants[provider].filter((restaurant: any, index: number) => index < restAmout && restaurant)

        filledArray = [...filledArray, ...beforRest]
        store.dispatch(setFiftyRestaurants(shuffle(filledArray)))
        store.dispatch(setSelectedRestaurant(getRandomFromArray(filledArray)))
        return
    }

    store.dispatch(setFiftyRestaurants(shuffle(beforRest).filter((restaurant: any, index: number) => index < 50 && restaurant)))
    store.dispatch(setSelectedRestaurant(getRandomFromArray(beforRest)))
    return
}

export const set50Restaurants = (allTheRestaurants: any, selectedprovider: string) => {
    let checkk = allTheRestaurants[selectedprovider]?.filter((restaurant: any, index: number) => index < 50 && restaurant);
    // debugger

    return checkk
}


// const API_KEY =`AIzaSyDoijedNld5C1N291eOknHfLH4vB18fxtc`;


export const getLatLon = async (cityName: string): Promise<{ lat: string, lon: string, address: Address | undefined }> => {
    const slug = slugify(cityName);
    const savedAddress =  woltCities.find((city: any) => city.slug === slug);
    if(savedAddress && savedAddress.location.lat && savedAddress.location.lon) {
        return {
            lat: savedAddress.location.lat.toString(),
            lon: savedAddress.location.lon.toString(),
            address: undefined
        }
    }
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

export function isJsonString(str: string) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}


export const isWeekPast = (lastScrapeDate: number) => {
    if (!lastScrapeDate) return false;
    const lastWeek = new Date().setDate(new Date().getDate() - 7)
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


