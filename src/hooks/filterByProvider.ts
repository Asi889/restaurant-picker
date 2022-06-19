import { TenBisRestaurant, WoltRestaurant } from "../types/FetchRestaurantTyp";
import {store} from '../redux/store';
import { setFiftyRestaurants, setSelectedRestaurant } from "../redux/actions/clienActions";
import { shuffle } from "./shuffle";
import { getRandomFromArray } from "../utils";
type Restaurants = {
    both: WoltRestaurant[] & TenBisRestaurant[];
    tenbisRetaurants: TenBisRestaurant[];
    woltRetaurants: WoltRestaurant[];
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

type Restaurant11 = {
    restaurants: Restaurant;
    userLocation: {};
  };

export const filterByProvider= (provider: string) =>{
    let state: Restaurant11 | any 
    state = store.getState();
    if (provider === "both") {
        // let allR1= [...allRestaurants?.both]
        store.dispatch(setFiftyRestaurants(shuffle([...state.restaurants.allRestaurants?.both]).splice(0,50)))
        store.dispatch(setSelectedRestaurant(getRandomFromArray([...state.restaurants.allRestaurants?.both])))
    }
    if (provider === "woltRestaurants" || provider === "tenbisRestaurants") {
        store.dispatch(setFiftyRestaurants(state.restaurants.allRestaurants[provider].splice(0,50)))
        store.dispatch(setSelectedRestaurant(getRandomFromArray(state.restaurants.allRestaurants[provider].splice(0,50))))
      }
}