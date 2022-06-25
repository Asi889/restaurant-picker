import { RestaurantType } from "./FetchRestaurantTyp";

export interface FilterTypes {
  woltRestaurants: boolean;
  tenbisRestaurants: boolean;
}

export interface subFilterTypes {
  kosher: boolean;
  vegan: boolean;
  vegetarian: boolean;
  dessert: boolean;
  burgers: boolean;
  asian: boolean;
  pizza: boolean;
}

export type StateProp = {
  restaurants: Restaurant;
  userLocation: {};
};

export type Restaurants = {
  both: RestaurantType[];
  tenbisRestaurants: RestaurantType[];
  woltRestaurants: RestaurantType[];
};

export type Restaurant = {
  allRestaurants: Restaurants;
  filterTypes: FilterTypes;
  subFilterTypes: subFilterTypes;
  selectedRestaurant: RestaurantType;
  fiftyRestaurants:  RestaurantType[];
  filteredByCategory:  RestaurantType[];;
  selectedProvider: "both";
};
