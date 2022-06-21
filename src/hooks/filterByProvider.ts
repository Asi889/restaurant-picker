import {store} from '../redux/store';
import { setFiftyRestaurants, setSelectedRestaurant } from "../redux/actions/clienActions";
import { shuffle } from "./shuffle";
import { getRandomFromArray } from "../utils";
import { StateProp } from "../types/FetchSubRestaurantTypes";


export const filterByProvider= (provider: string) =>{
    let state: StateProp | any 
    state = store.getState();
    if (provider === "both") {
        store.dispatch(setFiftyRestaurants(shuffle([...state.restaurants.allRestaurants?.both]).splice(0,50)))
        store.dispatch(setSelectedRestaurant(getRandomFromArray([...state.restaurants.allRestaurants?.both])))
    }
    if (provider === "woltRestaurants" || provider === "tenbisRestaurants") {
        store.dispatch(setFiftyRestaurants(state.restaurants.allRestaurants[provider].splice(0,50)))
        store.dispatch(setSelectedRestaurant(getRandomFromArray(state.restaurants.allRestaurants[provider].splice(0,50))))
      }
}