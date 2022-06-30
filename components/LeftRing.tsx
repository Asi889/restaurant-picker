/* eslint-disable react/jsx-key */
import React, { useEffect, useState, createRef } from "react";
import Image from "next/image";


const LeftRing = () => {


  return (

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
