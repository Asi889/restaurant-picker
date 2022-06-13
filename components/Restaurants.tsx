/* eslint-disable react/jsx-key */
import React, { useEffect, useState, createRef } from "react";
import { useSelector } from "react-redux";
import {
  TenBisRestaurant,
  WoltRestaurant,
} from "../src/types/FetchRestaurantTyp";
import { getRandomFromArray } from "../src/utils";
import Slot from "./Slot";
import SlotArm from "./SlotArm";
import {set50Restaurants} from '../src/utils'
import Triangle from "./svgs/Triangle";

type Props = {
  // allRestaurants: WoltRestaurant[] | TenBisRestaurant[];
  selectedRestaurantSet: any;
  selectedRestaurant: any;
  allTheRestaurants: any;
  maxRestaurants: Array<object>;
  selectedprovider: string;
  maxRestaurantsSet: Function;
};
interface Slot {
  children: JSX.Element | JSX.Element[];
}

const Restaurants: React.FC<Props> = (props) => {
  const {selectedRestaurantSet, selectedRestaurant, allTheRestaurants, maxRestaurants, selectedprovider, maxRestaurantsSet} = props;

  const [slotTransition, slotTransitionSet] = useState<any>(false);
  const [slotTrigger, slotTriggerSet] = useState<string>("");

  const refs = [React.createRef(), React.createRef(), React.createRef()];
  
  const triggerArm = () => {
    slotTriggerSet("arm-down");
    setTimeout(() => {
      slotTriggerSet("");
    }, 1000);

    slotTransitionSet("bbotom");
    setTimeout(() => {
      slotTransitionSet("front-spin");
    }, 200);
    if(selectedprovider=== " both"){

      selectedRestaurantSet(getRandomFromArray([...allTheRestaurants?.woltRestaurants, ...allTheRestaurants?.tenbisRestaurants,]));
    } else{
        selectedRestaurantSet(getRandomFromArray(allTheRestaurants[selectedprovider]));

    }
    maxRestaurantsSet(set50Restaurants(allTheRestaurants,selectedprovider))
  };

  

  return (
    <div className="w-full  text-center ">
      <div className="max-w-[700px] mx-auto">
                <SlotArm triggerArm={triggerArm} slotTrigger={slotTrigger} />
        <div className="bg-[#FDA73B]  px-1  py-1  relative inline-block rounded-xl mt-20 ">
            <Triangle givenclass="rotate-90 absolute w-16 h-16 z-30 left-0 top-12" />
            <Triangle givenclass="-rotate-90 absolute w-16 h-16 z-30 right-0 top-12" /> 
          <div className="bg-[#D45E3A]   px-1  py-1  relative inline-block rounded-xl">
            <div className="max-h-[160px]  flex gap-x-1   py-1  px-1  bg-gray-800 overflow-hidden rounded-lg">
              {refs.map((ref: any, index: number) => (
              <Slot
                ref={ref}
                key={index}
                restaurants={maxRestaurants}
                selectedRestaurant={selectedRestaurant}
                slotTransition={slotTransition}
                refindex={index}
              />
              ))}
          </div>
          {/* <div className="bg-gray-800 max-w-[150px] md:max-w-[400px] h-10 md:h-20 mx-auto mt-5 md:mt-10"></div> */}
        </div>
        </div>
      </div>
    </div>
  );
};

export default Restaurants;
