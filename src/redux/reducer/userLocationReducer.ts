
import { ActionTypes } from "../contants/action-type";

const initioalState:{} = {};

interface Action {type: string, payload: any};

export const userLocationReducer = (state = initioalState, action: Action) => {

    switch (action.type) {
        case ActionTypes.SET_USER_LOCATION: 

            return { user_location: action.payload };

        default:
            return state;
    }


}