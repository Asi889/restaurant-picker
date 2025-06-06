import { setFilterType } from "../redux/actions/clienActions";
import { store } from "../redux/store";
import { StateProp } from "../types/FetchSubRestaurantTypes";
import { filterByProvider } from "./filterByProvider";

export const filterProviderType = (name: string) => {
  let state: StateProp | any;
  state = store.getState();
  let filterTypes = state.restaurants.filterTypes;

  switch (name) {
    case "tenbisRestaurants":
      if (filterTypes.woltRestaurants === false) {
        store.dispatch(
          setFilterType({
            ...filterTypes,
            woltRestaurants: !filterTypes.woltRestaurants,
          })
        );
        return;
      }

      if (
        filterTypes.woltRestaurants === true &&
        filterTypes.tenbisRestaurants === true
      ) {
        store.dispatch(
          setFilterType({
            ...filterTypes,
            tenbisRestaurants: !filterTypes.tenbisRestaurants,
          })
        );
        return;
      }

      if (
        filterTypes.woltRestaurants === true &&
        filterTypes.tenbisRestaurants === false
      ) {
        store.dispatch(
          setFilterType({
            ...filterTypes,
            tenbisRestaurants: !filterTypes.tenbisRestaurants,
          })
        );
        return;
      }

      return;

    case "woltRestaurants":
      if (filterTypes.tenbisRestaurants === false) {
        store.dispatch(
          setFilterType({
            ...filterTypes,
            tenbisRestaurants: !filterTypes.tenbisRestaurants,
          })
        );
        return;
      }

      if (
        filterTypes.woltRestaurants === true &&
        filterTypes.tenbisRestaurants === true
      ) {
        store.dispatch(
          setFilterType({
            ...filterTypes,
            woltRestaurants: !filterTypes.woltRestaurants,
          })
        );
        return;
      }

      if (
        filterTypes.woltRestaurants === false &&
        filterTypes.tenbisRestaurants === true
      ) {
        store.dispatch(
          setFilterType({
            ...filterTypes,
            woltRestaurants: !filterTypes.woltRestaurants,
          })
        );
        return;
      }

      return;

    default:
      break;
  }
};
