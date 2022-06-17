import React, { useEffect, useState } from "react";
import {
  TenBisRestaurant,
  WoltRestaurant,
} from "../src/types/FetchRestaurantTyp";
import Dashboard from "./Dashboard";
import Restaurants from "./Restaurants";
import { set50Restaurants } from "../src/utils";
import { shuffle } from "../src/hooks/shuffle";
import NavBar from "./NavBar";
import Triangle from "./svgs/Triangle";
import Image from "next/image";
import woltlogo from "../public/images/woltlogo.png";
import tenbislogo from "../public/images/tenbislogo.png";
import SettingsContainer from "./SettingsContainer";
import FilterFoodType from "./FilterFoodType";
import FilterLocation from "./FilterLocation";

interface Props {
  //   // allRestaurants: WoltRestaurant[] | TenBisRestaurant[];
  //   selectedRestaurantSet: Function;
  selectedRestaurant: any;
  //   allTheRestaurants: any; //AllResObj
  //   maxRestaurantsSet: Function;
  //   maxRestaurants: [{}];
}
const ChosenRestaurant: React.FC<Props> = (props) => {
  const { selectedRestaurant } = props;

  return (
    <div className="bg-[#280F3F] px-2 mx-auto max-w-[350px] text-white">
      <p className="text-white"> נראה שהערב מזמינים :</p>
      <p className="text-white"> {selectedRestaurant?.title}</p>

      <div className="flex gap-x-4 justify-between ">
        <a className="w-24" href={selectedRestaurant?.link?.url}>
          <Image src={woltlogo} alt="" />
          <p>להזמנה דרך וולט</p>
        </a>
a
        <div className="w-20">
          <Image src={tenbislogo} alt="" />
          <p>להזמנה דרך תן-ביס</p>
        </div>
      </div>
      <div className="grid gap-y-4">
        <p>{selectedRestaurant?.address}</p>
        <p>{selectedRestaurant?.short_description}</p>

      </div>
    </div>
  );
};

export default ChosenRestaurant;
