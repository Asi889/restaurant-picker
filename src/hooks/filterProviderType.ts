import { TenBisRestaurant, WoltRestaurant } from "../types/FetchRestaurantTyp";
import {store} from '../redux/store';
import { setFiftyRestaurants, setFilterType } from "../redux/actions/clienActions";
import { shuffle } from "./shuffle";
import { filterByProvider } from "./filterByProvider";
type Restaurants = {
    both: WoltRestaurant[] & TenBisRestaurant[];
    tenbisRetaurants: TenBisRestaurant[];
    woltRetaurants: WoltRestaurant[];
  };
type Restaurant = {
    allRestaurants: Restaurants,
    fiftyRestaurants: [],
    filterTypes: {woltRestaurants: boolean, tenbisRestaurants: boolean},
    filteredByCategory: [],
    selectedProvider: "both",
    selectedRestaurant: {},
    subFilterTypes: {kosher: boolean, vegan: boolean, vegetarian: boolean, dessert: boolean},
    userLocation: {}
  };

type Restaurant11 = {
    restaurants: Restaurant;
    userLocation: {};
  };

export const filterProviderType= (name: string) =>{

    let state: Restaurant11 | any 
    state = store.getState();
    let filterTypes= state.restaurants.filterTypes

    switch (name) {
      
        case "tenbisRestaurants":
          
          if(filterTypes.woltRestaurants === false){
            return     
          }
  
          if(filterTypes.woltRestaurants === true && filterTypes.tenbisRestaurants === true){
            store.dispatch(setFilterType({...filterTypes, tenbisRestaurants: !filterTypes.tenbisRestaurants }))
            filterByProvider("woltRestaurants")      
            return
          }
  
          if(filterTypes.woltRestaurants === true && filterTypes.tenbisRestaurants === false){
            store. dispatch(setFilterType({...filterTypes, tenbisRestaurants: !filterTypes.tenbisRestaurants }))
            filterByProvider("both")      
            return
          }
          
          return;
          
          case "woltRestaurants":
            if(filterTypes.tenbisRestaurants === false){
              return
            }
  
            if(filterTypes.woltRestaurants === true && filterTypes.tenbisRestaurants === true){
              store.dispatch(setFilterType({...filterTypes, woltRestaurants: !filterTypes.woltRestaurants }))
              filterByProvider("tenbisRestaurants")      
              return
            }
  
            if(filterTypes.woltRestaurants === false && filterTypes.tenbisRestaurants === true){
              store.dispatch(setFilterType({...filterTypes, woltRestaurants: !filterTypes.woltRestaurants }))
              filterByProvider("both")      
              return
            }
            
            return;
              
        default:
          break;
      }
}