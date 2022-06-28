import { RestaurantType } from "../../types/FetchRestaurantTyp";
import { Restaurant } from "../../types/FetchSubRestaurantTypes";
import { ActionTypes } from "../contants/action-type";
// ({tenbisRestaurants: allRestaurants?.tenBisData, Restaurants: allRestaurants?.woltData, both:[...allRestaurants?.woltData, ...allRestaurants?.tenBisData]})
type AllRestaurants = {
  tenbisRestaurants: RestaurantType[];
  woltRestaurants: RestaurantType[];
  both: RestaurantType[]
};
type FilterTypes = {
  Restaurants: boolean,
  tenbisRestaurants: boolean,
  
};
type SubFilterTypes = {
  kosher: boolean,
  vegan: boolean,
  vegetarian: boolean
  dessert: boolean
};


export const setRestaurants = (restaurants: AllRestaurants) => {
  return {
    type: ActionTypes.SET_RESTAURANTS,
    payload: restaurants,
  };
};

export const setSelectedRestaurant = (restaurant: RestaurantType ) => {
  return {
    type: ActionTypes.SET_SELECTED_RESTAURANT,
    payload: restaurant,
  };
};
export const setFiftyRestaurants = (restaurants: RestaurantType[] ) => {
// export const setFiftyRestaurants = (restaurants: any  ) => {
  return {
    type: ActionTypes.SET_FIFTY_RESTAURANTS,
    payload: restaurants,
  };
};
export const setUserLatLon = (payload:{latitude:number | null, longitude:number | null}) => {
  return {
    type: ActionTypes.SET_USER_LAT_LON,
    payload
  };
};
export const setCurrentCity = (payload:string  ) => {
  return {
    type: ActionTypes.SET_CURRENT_CITY,
    payload
  };
};
export const setFilterType = (filterTypes: FilterTypes  ) => {
  return {
    type: ActionTypes.SET_FILTERֹֹֹ_TYPE,
    payload: filterTypes
  };
};

export const setFilterByCategory = (filteredByCategory: Restaurant[]  ) => {
  return {
    type: ActionTypes.SET_FILTERֹֹֹED_BY_CATEGORY,
    payload: filteredByCategory
  };
};

export const setSubFilterType = (subFilterTypes: SubFilterTypes  ) => {
  return {
    type: ActionTypes.SET_SUB_FILTERֹֹֹ_TYPE,
    payload: subFilterTypes
  };
};

export const setProvider = (provider: string  ) => {
  return {
    type: ActionTypes.SET_SELECTED_PROVIDER,
    payload: provider,
  };
};
