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

    }, 1900)

    checkFilters();

    setTimeout(() => {
      selectedActivSet(true);
      armFlagSet(false);
      armButtonFlagSet(true);
    }, 2700);

  };
  const [touchStart, setTouchStart] = useState<number|null>(null)
  const [touchEnd, setTouchEnd] = useState<number|null>(null)

  // the required distance between touchStart and touchEnd to be detected as a swipe
  const minSwipeDistance = 50

  const onTouchStart = (e:React.TouchEvent<HTMLDivElement>) => {
    setTouchEnd(null) // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientY)
  }

  const onTouchMove = (e:React.TouchEvent<HTMLDivElement>) => setTouchEnd(e.targetTouches[0].clientY)

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isUpSwipe = distance > minSwipeDistance
    const isDownSwipe = distance < -minSwipeDistance
    if (isDownSwipe){
      triggerArm()
    }
    // add your conditional logic here
  }
  return (
    <div className={`w-full text-center mx-auto flex items-center max-w-[764px] small-mobile md:max-w-[850px]`}

      onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
      <SlotArm triggerArm={triggerArm} armFlag={armFlag} armButtonFlag={armButtonFlag} />
      <div className="bg-[#FFD700 ] golda px-4 py-4 relative w-full rounded-[31px] mt-10 h-auto ">
        <div className="absolute w-6 h-6 z-40 right-0 top-0 bottom-0 my-auto -translate-x-2">
          <RightTtriangle />
        </div>
        <Slot slotTransition={slotTransition} refindex={1} firstMessage={firstMessage} firstMessageEffect={firstMessageEffect} />
        <div className="absolute w-6 h-6 z-40 left-0 top-0 bottom-0 my-auto translate-x-2">
          <Triangle givenclass=" " />
        </div>
      </div>
      <LeftRing />
    </div>
  );
};

export default connect()(Restaurants);
