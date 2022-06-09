/* eslint-disable react/jsx-key */
import React, { useEffect, useState, createRef } from "react";
import { useSelector } from "react-redux";
import Slot from "./Slot";
import SlotArm from './SlotArm';
type Props = {
  allRestaurants: any;
  setRandomRestaurant: Function;
  selectedRestaurant: object;
  
};
interface Slot {
  children: JSX.Element | JSX.Element[];
}

const Restaurants: React.FC<Props> = (props) => {
  const { allRestaurants, setRandomRestaurant, selectedRestaurant } = props;

  const [slotTransition, slotTransitionSet] = useState<any>(false);
  const [maxRestaurants, maxRestaurantsSet] = useState<Array<any>>([]);
  const [slotTrigger, slotTriggerSet] = useState<string>("");
  
  const refs= [React.createRef(),React.createRef(),React.createRef()]
  let items = allRestaurants?.sections[1].items;

  
  const triggerArm = () => {
    
    slotTriggerSet("arm-down");
    setTimeout(() => {
      slotTriggerSet("");
    }, 1000);
    
    // setTimeout(() => {
      
      slotTransitionSet(!slotTransition);
      // }, 500);
      // debugger
      
      
      setRandomRestaurant();
  };
  
  useEffect(() => {
    const minRes = items?.filter(
      (restaurant: any, index: number) => index < 50 && restaurant
    );
    maxRestaurantsSet(minRes);
    console.log("im in bithes!!!!!");
  }, [ items]);

  return (
    <div className="w-full  text-center ">
      <div className="max-w-[700px] mx-auto">

      <div className="bg-[#78C0A8]  px-5 md:px-10 py-5 md:py-10 relative inline-block rounded-lg mt-20">
        
        <div className="max-h-[150px] md:max-h-[300px] flex gap-x-1 md:gap-x-5  py-1 md:py-3 px-1 md:px-3 bg-gray-800 overflow-hidden">
          {refs.map((ref:any,index:number)=>(
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
        <div className="bg-gray-800 max-w-[150px] md:max-w-[400px] h-10 md:h-20 mx-auto mt-5 md:mt-10"></div>
      </div>
      <SlotArm triggerArm={triggerArm} slotTrigger={slotTrigger} />
      </div>
      
    </div>
  );
};

export default Restaurants;
