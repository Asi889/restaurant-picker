/* eslint-disable react/jsx-key */
import React, { useState } from "react";
import { connect } from 'react-redux';
import { checkFilters, vibrate } from "../src/utils";
import FiltersContainer from "./filters/FiltersContainer";
import LeftRing from "./LeftRing";
import RedFiltersContainer from "./redmachine/RedFiltersContainer";
import Slot from "./Slot";
import SlotArm from "./SlotArm";
import SlotArmCheck from "./SlotArmCheck";
import SlotCheck from "./SlotCheck";
import Machine from "./svgs/Machine";
import RightTtriangle from "./svgs/RightTtriangle";
import Triangle from "./svgs/Triangle";

type Props = {
  selectedActivSet: Function;
  selectedActiv: boolean;
};
interface Slot {
  children: JSX.Element | JSX.Element[];
}

const RestaurantsCheck: React.FC<Props> = (props) => {
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
    <div className="w-full text-center mx-auto flex items-center max-w-[764px] small-mobile md:max-w-[850px] relative">
                {/* <SlotArm triggerArm={triggerArm} armFlag={armFlag} armButtonFlag={armButtonFlag} /> */}
                <SlotArmCheck triggerArm={triggerArm} armFlag={armFlag} armButtonFlag={armButtonFlag} />
                <div>

                <Machine />
                </div>
                <div className="absolute  w-36 h-12 top-[29px] right-[122px] grid items-center bg-[#D60D0D] text-4xl font-extrabold ">
                    <h1 className="yellowandred">Winner</h1>
                </div>
        {/* <div className="bg-[#FFD700 ] golda px-4 md:px-10 py-4 md:py-4 relative w-full rounded-[31px] mt-10 h-auto "> */}
            {/* <RightTtriangle />  */}
            {/* </div> */}
              <SlotCheck
                slotTransition={slotTransition}
                refindex={1}
              />
                      <RedFiltersContainer />

          {/* <div className="absolute w-16 md:w-24 h-16 md:h-32 z-30 left-0 md:left-[43px] top-16 md:top-20"> */}
            {/* <Triangle givenclass=" " /> */}
          {/* </div> */}
    </div>
  );
};



export default connect()(RestaurantsCheck) ;
