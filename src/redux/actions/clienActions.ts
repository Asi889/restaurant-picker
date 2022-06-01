import { ActionTypes } from "../contants/action-type";

export const setRestaurants = (restaurants:[{}])=>{
    return {
        type: ActionTypes.SET_RESTAURANTS,
        payload: restaurants
    }
}
