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
import ChosenRestaurant from "./ChosenRestaurant";
import { useDispatch } from "react-redux";
import { connect } from 'react-redux';
import { useStore } from 'react-redux';
import {setFiftyRestaurants, setFilterType, setProvider} from '../src/redux/actions/clienActions';


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
  const dispatch = useDispatch()
  const [filterTypes, filterTypesSet] = useState<any>({
    woltRestaurants: true,
    tenbisRestaurants: true,
    kosher: false,
    vegan: false,
    vegetarian: false
  });
  const [selectedprovider, selectedproviderSet] = useState(
    filterTypes.woltRestaurants === true && filterTypes.tenbisRestaurants === false
      ? "woltRestaurants"
      : filterTypes.woltRestaurants === false && filterTypes.tenbisRestaurants === true
      ? "tenbisRestaurants"
      : filterTypes.woltRestaurants === true && filterTypes.tenbisRestaurants === true
      ? "both"
      : "both"
  );
  const [selectedActiv, selectedActivSet] = useState<boolean>(false)
  const [filterActiv, filterActivSet] = useState<boolean>(false)
  const [locationActiv, locationActivSet] = useState<boolean>(false)
  const store = useStore()
  let stat: any
  stat=  store.getState()
  const filterTypes1 = stat?.restaurants.filterTypes
  const allStoreRestaurants = stat?.restaurants.allRestaurants
  const storeSelectedProvider= stat?.restaurants.selectedProvider
  console.log("stat");
  
  useEffect(()=>{
    console.log("stat11");
    
  })
  
  

  const setRestaurantAmount = (provider:string) => {
    dispatch(setProvider(provider))
    selectedproviderSet(provider)
    // debugger
    if (provider === "both") {
      let allR= [...allTheRestaurants?.tenbisRestaurants, ...allTheRestaurants?.woltRestaurants]
      let allR1= [...allStoreRestaurants?.tenbisRestaurants, ...allStoreRestaurants?.woltRestaurants]
      dispatch(setFiftyRestaurants(shuffle(allR1).filter((restaurant: any, index: number) => index < 50 && restaurant)))
      // maxRestaurantsSet(shuffle(allR).filter((restaurant: any, index: number) => index < 50 && restaurant));
    }
    if (provider === "woltRestaurants" || provider === "tenbisRestaurants") {
      dispatch(setFiftyRestaurants(allStoreRestaurants[provider].filter((restaurant: any, index: number) => index < 50 && restaurant)))
      // maxRestaurantsSet(
      //   allTheRestaurants[provider].filter(
      //     (restaurant: any, index: number) => index < 50 && restaurant
      //   )
      // );
    }
    
  };

  const filterCategory =(category: string)=>{
    // filterTypesSet({...filterTypes,[category]: !filterTypes[category]})
    dispatch(setFilterType({...filterTypes1,[category]:!filterTypes1[category] }))

    // let categoryFilter= allTheRestaurants[selectedprovider].filter(
    //   (restaurant: any, index: number) =>  restaurant.tags.includes(category)
    // )
    let categoryFilter1= allStoreRestaurants[storeSelectedProvider].filter(
      (restaurant: any, index: number) =>  restaurant.tags.includes(category)
      )
      // maxRestaurantsSet(categoryFilter.filter((restaurant: any, index: number) => index < 50 && restaurant ));
      dispatch(setFiftyRestaurants(categoryFilter1?.filter((restaurant: any, index: number) => index < 50 && restaurant )))
  }
  

  return (
    <div className="w-full h-screen bg-[#3C1E57] text-center">
      
      <NavBar />
      <Restaurants
        selectedRestaurantSet={selectedRestaurantSet}
        selectedRestaurant={selectedRestaurant}
        allTheRestaurants={allTheRestaurants}
        maxRestaurants={maxRestaurants}
        selectedprovider={selectedprovider}
        maxRestaurantsSet={maxRestaurantsSet}
        
      />
      {selectedActiv 
      ?
      <ChosenRestaurant selectedRestaurant={selectedRestaurant} />
        :
        <SettingsContainer setRestaurantAmount={setRestaurantAmount} selectedproviderSet={selectedproviderSet} selectedprovider={selectedprovider} filterTypesSet={filterTypesSet} filterTypes={filterTypes} filterCategory={filterCategory} />
         }

      
    </div>
  );
};

export default  connect()(Container);
