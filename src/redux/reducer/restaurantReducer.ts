
import { ActionTypes } from "../contants/action-type";

const initioalState:[] = [];

interface Action {type: string, payload: any};

export const restaurantReducer = (state = initioalState, action: Action) => {

    switch (action.type) {

        case ActionTypes.SET_SELECTED_RESTAURANT: 
            // console.log(action);
            // console.log("action");

            return {  selectedRestaurant: action.payload };

        default:
            return state;
    }


}