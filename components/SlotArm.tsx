/* eslint-disable react/jsx-key */
import React, { useEffect, useState, createRef } from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import { shuffle } from "../src/hooks/shuffle";
import { myImageLoader } from "../src/hooks/myImageLoader";
import SelectedAndTop from "./SelectedAndTop";
type Props = {
  triggerArm: Function;
  slotTrigger: string;
};

const SlotArm: React.FC<Props> = (props) => {
  const { triggerArm,slotTrigger } = props;

  return (
    <div className=" inline-block relative" onClick={()=>triggerArm()}>
      <div className="bg-[#78C0A8] w-7 h-16 inline-block relative cursor-pointer rounded-r-lg">
        <div className=" bg-[#548a79] w-3 h-8 relative left-[27%] top-0"></div>
        <div
          className={`handle relative w-2 h-20 bg-gray-600 rounded-t-lg bottom-20 left-[9px] ${slotTrigger}`}
        >
          <div className="w-5 h-5 rounded-full bg-red-600 absolute -top-3 -left-[6px]"></div>
        </div>
      </div>
    </div>
    
  );
};

export default SlotArm;
{/* <div
          id="slot-trigger"
          onClick={triggerArm}
          className={`sith ${slotTrigger}`}
        >
          <div className="arm">
            <div className="knob"></div>
          </div>
          <div className="arm-shadow"></div>
          <div className="ring1">
            <div className="shadow"></div>
          </div>
          <div className="ring2">
            <div className="shadow"></div>
          </div>
        </div> */}