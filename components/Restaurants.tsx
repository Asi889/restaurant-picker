/* eslint-disable react/jsx-key */
import React, { useEffect, useState, useCallback } from "react";
import { connect } from 'react-redux';
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
import { shuffle } from "../src/hooks/shuffle";
import { useDispatch } from "react-redux";
import { setFiftyRestaurants, setSelectedRestaurant } from "../src/redux/actions/clienActions";
import { useStore } from "react-redux";

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
  const dispatch = useDispatch()
  const store = useStore()
  let stat: any
  stat=  store.getState()
  
  const triggerArm = () => {
    slotTriggerSet("arm-down");
    setTimeout(() => {
      slotTriggerSet("");
    }, 1000);

    slotTransitionSet("bbotom");
    setTimeout(() => {
      slotTransitionSet("front-spin");
    }, 200);
    // console.log(selectedprovider);
    
    // debugger
    if(stat?.restaurants.selectedProvider === "both"){
       dispatch(setSelectedRestaurant(getRandomFromArray([stat?.restaurants.allRestaurants?.woltRestaurants, stat?.restaurants.allRestaurants?.tenbisRestaurants,])))
       
      //  selectedRestaurantSet(getRandomFromArray([...allTheRestaurants?.woltRestaurants, ...allTheRestaurants?.tenbisRestaurants,]));
      //  let allR= [...allTheRestaurants?.tenbisRestaurants, ...allTheRestaurants?.woltRestaurants]
       let allR1= [stat?.restaurants.allRestaurants?.tenbisRestaurants, stat?.restaurants.allRestaurants?.woltRestaurants]
      //  maxRestaurantsSet(shuffle(allR).filter((restaurant: any, index: number) => index < 50 && restaurant));
       dispatch(setFiftyRestaurants(shuffle(allR1).splice(0,50)));
      } else{
        dispatch(setSelectedRestaurant(getRandomFromArray(stat?.restaurants.allRestaurants[stat?.restaurants.selectedProvider])))
        // selectedRestaurantSet(getRandomFromArray(allTheRestaurants[selectedprovider]));
        dispatch(setFiftyRestaurants(shuffle(stat?.restaurants.allRestaurants[stat?.restaurants.selectedProvider])));
        // maxRestaurantsSet(shuffle(allTheRestaurants[selectedprovider]).filter((restaurant: any, index: number) => index < 50 && restaurant));

    }
    
  };

  

  return (
    <div className="w-full  text-center ">
      <div className="max-w-[850px] mx-auto flex items-center">
                <SlotArm triggerArm={triggerArm} slotTrigger={slotTrigger} />
        <div className="bg-[#FDA73B]  px-1 md:px-4  py-1 md:py-4  relative w-full rounded-xl mt-20  ">
            <Triangle givenclass="rotate-90 absolute w-16 md:w-32 h-16 md:h-32 z-30 left-0 md:left-3 top-12 md:top-36" />
            <Triangle givenclass="-rotate-90 absolute w-16 md:w-32 h-16 md:h-32 z-30 right-0 md:right-3 top-12 md:top-36" /> 
          <div className="bg-[#D45E3A]   px-1 md:px-4  py-1 md:py-4  relative inline-block rounded-xl">
            <div className="max-h-[160px] md:max-h-[360px]  w-full grid grid-cols-3 gap-x-1   py-1  px-1  bg-gray-800 overflow-hidden rounded-lg">
            {/* <div className="max-h-[160px]  flex gap-x-1   py-1  px-1  bg-gray-800 overflow-hidden rounded-lg"> */}
              {refs.map((ref: any, index: number) => (
              <Slot
                ref={ref}
                key={index}
                restaurants={maxRestaurants}
                selectedRestaurant={selectedRestaurant}
                slotTransition={slotTransition}
                refindex={index}
                selectedprovider={selectedprovider}
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

export default connect()(Restaurants) ;
