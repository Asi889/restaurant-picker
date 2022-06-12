
import { ActionTypes } from "../contants/action-type";

const initioalState:{} = {};

interface Action {type: string, payload: any};

export const selectedRestaurantReducer = (state = initioalState, action: Action) => {

    switch (action.type) {
        case ActionTypes.SET_RESTAURANTS: 
            // console.log(action);
            // console.log("action");

            return { restaurants: action.payload };

        default:
            return state;
    }


}