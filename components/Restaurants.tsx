/* eslint-disable react/jsx-key */
import React, { useState } from "react";
import { connect } from 'react-redux';
import { checkFilters } from "../src/utils";
import Slot from "./Slot";
import SlotArm from "./SlotArm";
import Triangle from "./svgs/Triangle";
import { TenBisRestaurant, WoltRestaurant } from "../src/types/FetchRestaurantTyp";

type Props = {
  selectedActivSet: Function;
  selectedActiv: boolean;
};
interface Slot {
  children: JSX.Element | JSX.Element[];
}

const Restaurants: React.FC<Props> = (props) => {
  const {selectedActivSet,selectedActiv}= props;
  const [slotTransition, slotTransitionSet] = useState<any>(false);
  const [armFlag,armFlagSet] = useState(false)
  const [armButtonFlag,armButtonFlagSet] = useState(true)
  const refs = [React.createRef(), React.createRef(), React.createRef()];

  const triggerArm = () => {
    armFlagSet(true)

    if(armButtonFlag===true){
      armButtonFlagSet(false)
    }

    if(selectedActiv === true){
      selectedActivSet(false)
    } 

    slotTransitionSet("bbotom");
    setTimeout(() => {
      slotTransitionSet("front-spin");
    }, 200);

    checkFilters();

    setTimeout(() => {
      selectedActivSet(true)
      armFlagSet(false)
      armButtonFlagSet(true)
    }, 2700);
  };

  return (
    <div className="w-full text-center px-5">
      <div className="max-w-[850px] mx-auto flex items-center">
                <SlotArm triggerArm={triggerArm} armFlag={armFlag} armButtonFlag={armButtonFlag} />
        <div className="bg-[#FDA73B] px-1 md:px-4 py-1 md:py-4 relative w-full rounded-xl mt-10  ">
          {/* <div className="absolute skew-y-6 h-[50px] w-[100px] bg-red-200 -top-[53px]"></div> */}
            <Triangle givenclass="rotate-90 absolute w-16 md:w-32 h-16 md:h-32 z-30 left-0 md:left-3 top-12 md:top-36" />
            <Triangle givenclass="-rotate-90 absolute w-16 md:w-32 h-16 md:h-32 z-30 right-0 md:right-3 top-12 md:top-36" /> 
          <div className="bg-[#D45E3A] px-1 md:px-4 py-1 md:py-4 relative inline-block rounded-xl">
            <div className="max-h-[160px] md:max-h-[360px] w-full grid grid-cols-3 gap-x-1 py-1 px-1 bg-gray-800 overflow-hidden rounded-lg">
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
