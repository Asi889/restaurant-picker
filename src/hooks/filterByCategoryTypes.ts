import {store} from '../redux/store';
import { setSubFilterType } from "../redux/actions/clienActions";
import { checkFilters } from "../utils";
import { StateProp } from "../types/FetchSubRestaurantTypes";


export const filterByCategoryTypes= (category: string) =>{
    let state:  StateProp | any 
    state = store.getState();
    // debugger
    store.dispatch(setSubFilterType({...state?.restaurants?.subFilterTypes,[category]: !state?.restaurants?.subFilterTypes[category]}))
    //  debugger
    checkFilters()
    
}