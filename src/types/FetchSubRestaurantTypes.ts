import { TenBisRestaurant, WoltRestaurant } from "./FetchRestaurantTyp";

export interface FilterTypes {
  woltRestaurants: boolean;
  tenbisRestaurants: boolean;
}

export interface subFilterTypes {
  kosher: boolean;
  vegan: boolean;
  vegetarian: boolean;
  dessert: boolean;
}

export type StateProp = {
  restaurants: Restaurant;
  userLocation: {};
};

export type Restaurants = {
  both: WoltRestaurant[] & TenBisRestaurant[];
  tenbisRestaurants: TenBisRestaurant[];
  woltRestaurants: WoltRestaurant[];
};

export type Restaurant = {
  allRestaurants: Restaurants;
  filterTypes: FilterTypes;
  subFilterTypes: subFilterTypes;
  selectedRestaurant: {};
  fiftyRestaurants: [];
  filteredByCategory: [];
  selectedProvider: "both";
};
