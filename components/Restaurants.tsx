/* eslint-disable react/jsx-key */
import React, { useState } from "react";
import { connect } from "react-redux";
import { checkFilters, vibrate } from "../src/utils";
import LeftRing from "./LeftRing";
import Slot from "./Slot";
import SlotArm from "./SlotArm";
import RightTtriangle from "./svgs/RightTtriangle";
import Triangle from "./svgs/Triangle";

type Props = {
  selectedActivSet: Function;
  selectedActiv: boolean;
};
interface Slot {
  children: JSX.Element | JSX.Element[];
}

const Restaurants: React.FC<Props> = (props) => {
  const { selectedActivSet, selectedActiv } = props;
  const [slotTransition, slotTransitionSet] = useState<any>(false);
  const [armFlag, armFlagSet] = useState(false);
  const [armButtonFlag, armButtonFlagSet] = useState(true);
  const [firstMessage, firstMessageSet] = useState<boolean>(false);
  const [firstMessageEffect, firstMessageEffectSet] = useState<boolean>(false);
  const [shake, shakeSet] = useState<boolean>(false);

  const triggerArm = () => {
    firstMessageEffectSet(true)
    armFlagSet(true);
    
    if (armButtonFlag === true) {
      armButtonFlagSet(false);
    }

    if (selectedActiv === true) {
      selectedActivSet(false);
    }
    vibrate();
    slotTransitionSet("bbotom");
    
    setTimeout(() => {
      slotTransitionSet("front-spin");
    }, 200);

    setTimeout(() => {
      firstMessageSet(true)
      
    },1900)
    setTimeout(() => {
      shakeSet(true)
      
    },2400)
    setTimeout(() => {
      shakeSet(false)
      
    },4000)
    
    checkFilters();
    
    setTimeout(() => {
      selectedActivSet(true);
      armFlagSet(false);
      armButtonFlagSet(true);
    }, 2700);

  };

  return (
    <div className={`w-full text-center mx-auto flex items-center max-w-[764px] small-mobile md:max-w-[850px] ${shake ? "shakeit" : ""}`}>
      <SlotArm triggerArm={triggerArm} armFlag={armFlag} armButtonFlag={armButtonFlag} />
      <div className="bg-[#FFD700 ] golda px-4 md:px-10 py-4 md:py-4 relative w-full rounded-[31px] mt-10 h-auto ">
        <div className="absolute w-12 md:w-24 h-16 md:h-32 z-40 right-0 md:right-11 top-16 md:top-20 ">
          <RightTtriangle />
        </div>
        <Slot slotTransition={slotTransition} refindex={1} firstMessage={firstMessage} firstMessageEffect={firstMessageEffect} />
        <div className="absolute w-12 md:w-24 h-16 md:h-32 z-40 left-0 md:left-[43px] top-16 md:top-20">
          <Triangle givenclass=" " />
        </div>
      </div>
      <LeftRing />
    </div>
  );
};

export default connect()(Restaurants);
