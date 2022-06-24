import  { combineReducers } from 'redux';
import {restaurantReducer} from './restaurantReducer';
import {userLocationReducer} from './userLocationReducer';

const reducers = combineReducers({
    restaurants: restaurantReducer,
    userLocation: userLocationReducer
})
export default reducers