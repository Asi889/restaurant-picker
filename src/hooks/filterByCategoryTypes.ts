import { TenBisRestaurant, WoltRestaurant } from "../types/FetchRestaurantTyp";
import {store} from '../redux/store';
import { setSubFilterType } from "../redux/actions/clienActions";
import { checkFilters } from "../utils";

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

export const filterByCategoryTypes= (category: string) =>{
    let state:  any 
    state = store.getState();
    // debugger
    store.dispatch(setSubFilterType({...state?.restaurants?.subFilterTypes,[category]: !state?.restaurants?.subFilterTypes[category]}))
    //  debugger
    checkFilters()
    
}