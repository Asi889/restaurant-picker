import { WoltRestaurant, TenBisRestaurant } from './../../types/FetchRestaurantTyp';
import { ActionTypes } from "../contants/action-type";
// ({tenbisRestaurants: allRestaurants?.tenBisData, woltRestaurants: allRestaurants?.woltData, both:[...allRestaurants?.woltData, ...allRestaurants?.tenBisData]})
type AllRestaurants = {
  tenbisRestaurants: TenBisRestaurant[];
  woltRestaurants: WoltRestaurant[];
  both: WoltRestaurant[] & TenBisRestaurant[]
};
type FilterTypes = {
  woltRestaurants: boolean,
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

export const setSelectedRestaurant = (restaurant: WoltRestaurant | TenBisRestaurant) => {
  return {
    type: ActionTypes.SET_SELECTED_RESTAURANT,
    payload: restaurant,
  };
};
export const setFiftyRestaurants = (restaurants: WoltRestaurant[] | TenBisRestaurant[] | WoltRestaurant[] & TenBisRestaurant[] ) => {
// export const setFiftyRestaurants = (restaurants: any  ) => {
  return {
    type: ActionTypes.SET_FIFTY_RESTAURANTS,
    payload: restaurants,
  };
};
export const setFilterType = (filterTypes: FilterTypes  ) => {
  return {
    type: ActionTypes.SET_FILTERֹֹֹ_TYPE,
    payload: filterTypes
  };
};

export const setFilterByCategory = (filteredByCategory: WoltRestaurant[] | TenBisRestaurant[] | WoltRestaurant[] & TenBisRestaurant[]   ) => {
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
