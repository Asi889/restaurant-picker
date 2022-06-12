import React, { useEffect, useState } from "react";
import {
  TenBisRestaurant,
  WoltRestaurant,
} from "../src/types/FetchRestaurantTyp";
import Dashboard from "./Dashboard";
import Restaurants from "./Restaurants";
import { set50Restaurants } from "../src/utils";

interface AllResObj {
  tenBisRestaurants: TenBisRestaurant[];
  woltRestaurants: WoltRestaurant[];
}
interface ContainerProps {
  // allRestaurants: WoltRestaurant[] | TenBisRestaurant[];
  selectedRestaurantSet: Function;
  selectedRestaurant: any;
  allTheRestaurants: any; //AllResObj
  maxRestaurantsSet: Function;
  maxRestaurants: [{}];
}
const Container: React.FC<ContainerProps> = (props) => {
  const {
    selectedRestaurantSet,
    selectedRestaurant,
    allTheRestaurants,
    maxRestaurantsSet,
    maxRestaurants,
  } = props;

  // const [maxRestaurants, maxRestaurantsSet] = useState<Array<any>>([]); // 50 restaurants
  const [filteredRestaurants, filteredRestaurantsSet] = useState<Array<object>>(
    [{}]
  );
  const [filterTypes, filterTypesSet] = useState<any>({
    woltRestaurants: true,
    tenbisRestaurants: false,
    kosher: false,
    vegan: false,
  });
  const [selectedprovider, selectedproviderSet] = useState(
    filterTypes.woltRestaurants === true && filterTypes.tenbisRestaurants === false
      ? "woltRestaurants"
      : filterTypes.woltRestaurants === false && filterTypes.tenbisRestaurants === true
      ? "tenbisRestaurants"
      : filterTypes.woltRestaurants === true && filterTypes.tenbisRestaurants === true
      ? "both"
      : "woltRestaurants"
  );

  const setRestaurantAmount = () => {
    if (selectedprovider === "both") {
      
      maxRestaurantsSet(
        [
          ...allTheRestaurants?.woltRestaurants,
          ...allTheRestaurants?.tenbisRestaurants,
        ].filter((restaurant: any, index: number) => index < 50 && restaurant)
      );
    }
    if (
      selectedprovider === "woltRestaurants" || selectedprovider === "tenbisRestaurants") {
      console.log(selectedprovider);
      console.log(selectedprovider);

      maxRestaurantsSet(
        allTheRestaurants[selectedprovider].filter(
          (restaurant: any, index: number) => index < 50 && restaurant
        )
      );
    }
    
  };

  return (
    <div className="w-full h-screen bg-slate-900 text-center">
      <Dashboard
        filterTypesSet={filterTypesSet}
        filterTypes={filterTypes}
        filteredRestaurants={filteredRestaurants}
        filteredRestaurantsSet={filteredRestaurantsSet}
        selectedproviderSet={selectedproviderSet}
        selectedprovider={selectedprovider}
        setRestaurantAmount={setRestaurantAmount}
      />
      <Restaurants
        selectedRestaurantSet={selectedRestaurantSet}
        selectedRestaurant={selectedRestaurant}
        allTheRestaurants={allTheRestaurants}
        maxRestaurants={maxRestaurants}
        selectedprovider={selectedprovider}
        maxRestaurantsSet={maxRestaurantsSet}
      />
    </div>
  );
};

export default Container;
