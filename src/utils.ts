import { TenBisRestaurant, WoltRestaurant } from "./types/FetchRestaurantTyp";
import { store } from "../src/redux/store";
import { setFiftyRestaurants, setFilterByCategory, setSelectedRestaurant } from "./redux/actions/clienActions";
import { shuffle } from "./hooks/shuffle";
import { StateProp } from "./types/FetchSubRestaurantTypes";

type RestaurantData = {
    city: object;
    tenBisData: Array<object>;
    woltData: Array<object>;
};


export const getRandomFromArray = <Type>(allRestaurants: Type[] | any = []): Type => {
    let randomIndex: any = "";
    randomIndex = Math.floor(Math.random() * allRestaurants.length);
    return allRestaurants[randomIndex]
    // selectedRestaurantSet(allRestaurants.woltData[randomIndex]);
}
export const splitAndTrim = (string: string): string => {
    let [splitted] = string.split("|");
    return splitted.trim();
}
export const returnFilters = () => {
    let state: StateProp | any
    state = store.getState();
    let types = Object.entries(state?.restaurants.filterTypes)
    return types.map(([key, value], index) => {
        if (value) {
            return key === "tenbisRestaurants" ? "תן ביס" : "וולט"
        }
    }).join(", ")
}


// a function that return a greed by the time of the day with swtich case/
export const checkTime = (): string => {
    const hour = new Date().getHours();
    let strings = ["נראה שהערב מזמינים"];
    if (hour >= 0 && hour < 3) {
        strings = ['המאנץ׳ של הלילה הוא', 'כל אחת והשעה שלה, הלילה יצא'];
    } else if (hour >= 3 && hour < 8) {
        strings = ['נראה שהבוקר מזמינים' ,'קצת מוקדם אבל הבוקר מזמינים'];
    } else if (hour > 8 && hour <= 15) {
        strings = ['נראה שלצהריים מזמינים' ,'הופה, הצהריים מזמינים', 'צהריים במשרד? תזמינו'];
    }else if (hour > 14 && hour <= 20) {
        strings = ['לארוחת ערב מזמינים' ,'הערב מזמינים'];
    }else if (hour > 20 && hour < 24) {
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

    window.navigator.vibrate(100);
}

export const returnSubFilters = () => {
    let state = store.getState() as StateProp;
    // state = 
    let subTypes = Object.entries(state?.restaurants.subFilterTypes)
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

            default:
                break;
        }
    }
    return subTypes.map(([key, value], index) => value ? `${subTypes.length - 1 != index ? ", " : ""} ` + checkKey(key) : "")
}

export function checkFilters() {

    let beforRest: WoltRestaurant[] | TenBisRestaurant[] | WoltRestaurant[] & TenBisRestaurant[] = []
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
        store.dispatch(setFiftyRestaurants(shuffle([...state.restaurants.allRestaurants[provider]]).splice(0, 50)))
        store.dispatch(setSelectedRestaurant(getRandomFromArray(shuffle([...state.restaurants.allRestaurants[provider]]))))
        return
    }
    // now length check to fill 50 restaurants
    let beforeLength = beforRest.length
    if (beforeLength < 50) {
        let restAmout = 50 - beforeLength
        let filledArray = state.restaurants.allRestaurants[provider].splice(0, restAmout)

        filledArray = [...filledArray, beforRest]
        store.dispatch(setFiftyRestaurants(shuffle(filledArray)))
        store.dispatch(setSelectedRestaurant(getRandomFromArray(filledArray)))
        return
    }

    store.dispatch(setFiftyRestaurants(shuffle(beforRest).splice(0, 50)))
    store.dispatch(setSelectedRestaurant(getRandomFromArray(beforRest)))
    return
}

export const set50Restaurants = (allTheRestaurants: any, selectedprovider: string) => {
    let checkk = allTheRestaurants[selectedprovider]?.filter((restaurant: any, index: number) => index < 50 && restaurant);
    // debugger

    return checkk
}


// const API_KEY =`AIzaSyDoijedNld5C1N291eOknHfLH4vB18fxtc`;


export const getLatLon = async (cityName: string): Promise<{ lat: string, lon: string, address: Address }> => {
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