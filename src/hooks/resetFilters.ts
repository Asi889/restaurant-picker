import {
  setFilterType,
  setSubFilterType,
} from "./../redux/actions/clienActions";
import { store } from "../redux/store";
import { StateProp } from "../types/FetchSubRestaurantTypes";
export const resetFilters = () => {
  let state: StateProp | any;
  state = store.getState();
  let filterTypes = state.restaurants.filterTypes;
  store.dispatch(
    setFilterType({
      ...filterTypes,
      tenbisRestaurants: true,
      woltRestaurants: true,
    })
  );

  store.dispatch(
    setSubFilterType({
      ...state?.restaurants?.subFilterTypes,
      asian: false,
      burgers: false,
      dessert: false,
      kosher: false,
      pizza: false,
      vegan: false,
      vegetarian: false,
    })
  );
};
