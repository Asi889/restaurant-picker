/* eslint-disable react/jsx-key */
import React, { useState } from "react";
import { connect } from 'react-redux';
import { checkFilters, vibrate } from "../src/utils";
import LeftRing from "./LeftRing";
import Slot from "./Slot";
import SlotArm from "./SlotArm";
import Triangle from "./svgs/Triangle";

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
    vibrate()
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
    <div className="w-full text-center mx-auto flex items-center max-w-[600px] md:max-w-[850px]">
                <SlotArm triggerArm={triggerArm} armFlag={armFlag} armButtonFlag={armButtonFlag} />
        <div className="bg-[#FFD700 ] golda px-20 md:px-10 py-4 md:py-4 relative w-full rounded-[48px] mt-10 h-auto ">
            <Triangle givenclass="rotate-90 absolute w-16 md:w-32 h-16 md:h-32 z-30 left-0 md:left-3 top-12 md:top-36" />
            <Triangle givenclass="-rotate-90 absolute w-16 md:w-32 h-16 md:h-32 z-30 right-0 md:right-3 top-12 md:top-36" /> 
              <Slot
                slotTransition={slotTransition}
                refindex={1}
              />
              {/* <div className="slot-shadow bg-black w-60 h-5 left-[82px] opacity-30 bottom-4 absolute"></div>
              <div className="slot-shadow bg-black w-60 h-5 top-4 opacity-30 absolute"></div> */}
              
        </div>
                <LeftRing  />
    </div>
  );
};



export default connect()(Restaurants) ;
