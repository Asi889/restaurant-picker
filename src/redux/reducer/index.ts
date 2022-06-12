import  { combineReducers } from 'redux';
import {restaurantReducer} from './restaurantReducer';
import {selectedRestaurantReducer} from './selectedRestaurantReducer';

const reducers = combineReducers({
    restaurants: restaurantReducer,
    selectedRestaurant: selectedRestaurantReducer
})
export default reducers