
import { RestaurantType } from "../../types/FetchRestaurantTyp";
import { Restaurant, StateProp } from "../../types/FetchSubRestaurantTypes";
import { ActionTypes } from "../contants/action-type";


// const initialState: Restaurant = {
const initialState: any = {
    filterTypes: {
        woltRestaurants: true,
        tenbisRestaurants: true,
    },
    allRestaurants: [] as RestaurantType[],
    subFilterTypes: {
        kosher: false,
        vegan: false,
        vegetarian: false,
        dessert: false,
        burgers: false,
        asian: false,
        pizza: false
    },
    selectedRestaurant: null as RestaurantType | null,
    fiftyRestaurants: [] as RestaurantType[],
    filteredByCategory: [] as RestaurantType[],
    selectedProvider: "",
    location: {
        city: 'telaviv',
        latitude: null,
        longitude: null,
    }

};

interface Action { type: string, payload: any };



export const restaurantReducer = (state = initialState, action: Action) => {

    switch (action.type) {


        case ActionTypes.SET_USER_LAT_LON:
            return { ...state, location: { ...state.location, ...action.payload } };
        case ActionTypes.SET_CURRENT_CITY:
            return { ...state, location: { city: action.payload } };
        case ActionTypes.SET_RESTAURANTS:

            return { ...state, allRestaurants: action.payload };


        case ActionTypes.SET_SELECTED_RESTAURANT:


            return { ...state, selectedRestaurant: action.payload };


        case ActionTypes.SET_FIFTY_RESTAURANTS:

            return { ...state, fiftyRestaurants: action.payload };

        case ActionTypes.SET_FILTERֹֹֹ_TYPE:

            return { ...state, filterTypes: action.payload };

        case ActionTypes.SET_SUB_FILTERֹֹֹ_TYPE:

            return { ...state, subFilterTypes: action.payload };

        case ActionTypes.SET_SELECTED_PROVIDER:

            return { ...state, selectedProvider: action.payload };

        case ActionTypes.SET_FILTERֹֹֹED_BY_CATEGORY:

            return { ...state, filteredByCategory: action.payload };

        default:
            return state;
    }


}