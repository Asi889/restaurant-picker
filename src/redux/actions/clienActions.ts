import { ActionTypes } from "../contants/action-type";

export const setRestaurants = (restaurants: [{}]) => {
  return {
    type: ActionTypes.SET_RESTAURANTS,
    payload: restaurants,
  };
};
export const setSelectedRestaurant1 = (ff: any) => {
  return {
    type: ActionTypes.SET_SELECTED_RESTAURANT,
    payload: "",
  };
};
