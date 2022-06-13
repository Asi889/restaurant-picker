import React, { useEffect, useState } from "react";
import {
  TenBisRestaurant,
  WoltRestaurant,
} from "../src/types/FetchRestaurantTyp";
import Dashboard from "./Dashboard";
import Restaurants from "./Restaurants";
import { set50Restaurants } from "../src/utils";
import {shuffle} from "../src/hooks/shuffle";
import NavBar from './NavBar';
import Triangle from "./svgs/Triangle"
import Image from "next/image";
import woltlogo from "../public/images/woltlogo.png";
import tenbislogo from "../public/images/tenbislogo.png";
import SettingsContainer from "./SettingsContainer";
import FilterFoodType from "./FilterFoodType";
import FilterLocation from "./FilterLocation";

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
  const {selectedRestaurantSet, selectedRestaurant, allTheRestaurants, maxRestaurantsSet, maxRestaurants,} = props;

  const [filteredRestaurants, filteredRestaurantsSet] = useState<Array<object>>( [{}]);
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
  const [filterActiv, filterActivSet] = useState<boolean>(false)
  const [locationActiv, locationActivSet] = useState<boolean>(false)

  const setRestaurantAmount = (provider:string) => {
    selectedproviderSet(provider)
    // debugger
    if (provider === "both") {
      let allR= [...allTheRestaurants?.tenbisRestaurants, ...allTheRestaurants?.woltRestaurants]
      maxRestaurantsSet(shuffle(allR).filter((restaurant: any, index: number) => index < 50 && restaurant));
    }
    if (
      provider === "woltRestaurants" || provider === "tenbisRestaurants") {

      maxRestaurantsSet(
        allTheRestaurants[provider].filter(
          (restaurant: any, index: number) => index < 50 && restaurant
        )
      );
    }
    
  };
  useEffect(()=>{
console.log("shazam");

  },[])

  return (
    <div className="w-full h-screen bg-[#3C1E57] text-center">

      {filterActiv && <FilterFoodType filterActiv={filterActiv} filterActivSet={filterActivSet} />}
      {locationActiv && <FilterLocation locationActiv={locationActiv} locationActivSet={locationActivSet} />}
      
      {/* <Dashboard
        filterTypesSet={filterTypesSet}
        filterTypes={filterTypes}
        filteredRestaurants={filteredRestaurants}
        filteredRestaurantsSet={filteredRestaurantsSet}
        selectedproviderSet={selectedproviderSet}
        selectedprovider={selectedprovider}
        setRestaurantAmount={setRestaurantAmount}
      /> */}
      <NavBar />
      <Restaurants
        selectedRestaurantSet={selectedRestaurantSet}
        selectedRestaurant={selectedRestaurant}
        allTheRestaurants={allTheRestaurants}
        maxRestaurants={maxRestaurants}
        selectedprovider={selectedprovider}
        maxRestaurantsSet={maxRestaurantsSet}
      />

      <SettingsContainer filterActiv={filterActiv} filterActivSet={filterActivSet} locationActiv={locationActiv} locationActivSet={locationActivSet} />
      
     
    </div>
  );
};

export default Container;
