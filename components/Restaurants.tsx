/* eslint-disable react/jsx-key */
import React, { useState } from "react";
import { connect } from 'react-redux';
import { checkFilters } from "../src/utils";
import Slot from "./Slot";
import SlotArm from "./SlotArm";
import Triangle from "./svgs/Triangle";
import { TenBisRestaurant, WoltRestaurant } from "../src/types/FetchRestaurantTyp";

type Props = {};
interface Slot {
  children: JSX.Element | JSX.Element[];
}

const Restaurants: React.FC<Props> = (props) => {
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

    checkFilters()
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
              {refs.map((ref: any, index: number) => (
              <Slot
                ref={ref}
                key={index}
                slotTransition={slotTransition}
                refindex={index}
              />
              ))}
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};



export default connect()(Restaurants) ;
