/* eslint-disable react/jsx-key */
import React, { useEffect, useState, createRef } from "react";
import { useSelector } from "react-redux";
import Restaurants from "./Restaurants";
import SlotArm from './SlotArm';
type Props = {
  allRestaurants: any;
  setRandomRestaurant: Function;
  selectedRestaurant: object;
  
};
interface Slot {
  children: JSX.Element | JSX.Element[];
}

const Container: React.FC<Props> = (props) => {
  const { allRestaurants, setRandomRestaurant, selectedRestaurant } = props;

  
  useEffect(() => {
   
  }, [ ]);

  return (
    <div className="w-full h-screen bg-slate-900 text-center">
     <Restaurants allRestaurants={allRestaurants} setRandomRestaurant={setRandomRestaurant} selectedRestaurant={selectedRestaurant} />
    </div>
  );
};

export default Container;
