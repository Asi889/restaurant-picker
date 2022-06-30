/* eslint-disable react/jsx-key */
import React, { useEffect, useState, createRef } from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import { shuffle } from "../src/hooks/shuffle";
import { myImageLoader } from "../src/hooks/myImageLoader";
import SelectedAndTop from "./SelectedAndTop";
type Props = {
  
};

const LeftRing: React.FC<Props> = (props) => {
  const {} = props;

  return (
    // <button className=" inline-block relative top-9 md:top-8" disabled={!selectedActiv} onClick={()=>triggerArm()}>
    //   <div className="bg-[#D9D9D9] w-6 md:w-10 h-16 md:h-24 inline-block relative cursor-pointer rounded-r-lg mx-auto">
    //     <div className=" bg-[#797878] w-3 md:w-6 h-8 md:h-14 relative right-2 "></div>
    //     <div className={`handle relative w-2 md:w-4 h-20 md:h-32 bg-gray-600 rounded-t-lg bottom-20 md:bottom-32 right-[10px] md:right-3  ${slotTrigger}`} >
    //       <div className="w-5 md:w-10 h-5 md:h-10 rounded-full bg-red-600 absolute -top-3 -left-[6px] md:-left-[10px]"></div>
    //     </div>
    //   </div>
    // </button>
    <div id="slot-trigger" className={"slot-triggerDown rotate-180"} >
                   
                    <div className={`ring1 `}>
                        <div className={`shadow`}></div>
                    </div>
                    <div className={`ring2 `}>
                        <div className={`shadow `}></div>
                    </div>
                </div>
    
  );
};

export default LeftRing;
