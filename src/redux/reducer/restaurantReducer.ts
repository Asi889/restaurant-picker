
import { ActionTypes } from "../contants/action-type";

const initioalState11:[] = [];


const initioalState:{} ={
    allRestaurants:[],
    filterTypes:{
        woltRestaurants: true,
        tenbisRestaurants: true, 
    },
    subFilterTypes:{
        kosher: false,
        vegan: false,
        vegetarian: false,
        dessert: false,
    },
    selectedRestaurant:{},
    fiftyRestaurants:[],
    filteredByCategory:[],
    selectedProvider: "both"
};

interface Action {type: string, payload: any};



export const restaurantReducer = (state = initioalState, action: Action) => {

    switch (action.type) {

        case ActionTypes.SET_RESTAURANTS: 

            return {  ...state, allRestaurants: action.payload };


        case ActionTypes.SET_SELECTED_RESTAURANT: 
        
        
            return {  ...state, selectedRestaurant: action.payload };


        case ActionTypes.SET_FIFTY_RESTAURANTS: 
        
            return {  ...state, fiftyRestaurants: action.payload };

        case ActionTypes.SET_FILTERֹֹֹ_TYPE: 
        
            return {  ...state, filterTypes: action.payload };

        case ActionTypes.SET_SUB_FILTERֹֹֹ_TYPE: 
        
            return {  ...state, subFilterTypes: action.payload };

        case ActionTypes.SET_SELECTED_PROVIDER: 
        
            return {  ...state, selectedProvider: action.payload };

        case ActionTypes.SET_FILTERֹֹֹED_BY_CATEGORY: 
        
            return {  ...state, filteredByCategory: action.payload };

        default:
            return state;
    }


}