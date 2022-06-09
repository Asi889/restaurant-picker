/* eslint-disable react/jsx-key */
import React, { useEffect, useState, createRef } from "react";
import { useSelector } from "react-redux";
import Restaurants from "./Restaurants";
import SlotArm from './SlotArm';
type Props = {
  allRestaurants: any;
  
};
interface Slot {
  children: JSX.Element | JSX.Element[];
}

const Dashboard: React.FC<Props> = (props) => {
  const { allRestaurants } = props;

  
  useEffect(() => {
   
  }, [ ]);

  return (
    <div className="w-full h-screen bg-slate-900 text-center">
        <div>
            bu
        </div>
     
    </div>
  );
};

export default Dashboard;
