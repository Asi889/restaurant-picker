
import { ActionTypes } from "../contants/action-type";

const initioalState:[] = [];

interface Action {type: string, payload: any};

export const restaurantReducer = (state = initioalState, action: Action) => {

    switch (action.type) {
        case ActionTypes.SET_RESTAURANTS: 

            return { ...state, restaurants: action.payload };

        default:
            return state;
    }


}