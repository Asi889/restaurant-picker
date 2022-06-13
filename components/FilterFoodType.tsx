// SettingsContainer

import React, { useEffect, useState, createRef } from "react";
import LocationIcon from "./svgs/LocationIcon";
import FiltertIcon from "./svgs/FilterIcon";
import Image from "next/image";
import tenbislogo from "../public/images/tenbislogo.png"
import woltlogo from "../public/images/woltlogo.png"

type Props = {
  filterActiv: boolean;
  filterActivSet: Function;
};
const FilterFoodType: React.FC<Props> = (props) => {
  const { filterActivSet, filterActiv } = props;

  return (
    <div className="bg-[#FFFFFF]  max-w-[90%] h-[80%]  pt-4 left-0 right-0 mx-auto absolute mt-4 z-40">
      <div className="flex justify-around items-center">
        <a href="" className="">
          <FiltertIcon filterActiv={false} filterActivSet={() => {console.log("");}} pathClass="fill-black cursor-pointer" givenclass="w-11 h-11 "/>
          <h3 className="text-sm">איפוס</h3>
        </a>
        <h2>פילטר הזמנות</h2>
        <a onClick={() => filterActivSet(!filterActiv)} href="">
          <span>X</span>
        </a>
      </div>
      <div className="flex mt-4">
        <div className="w-10 h-10">

            <Image src={tenbislogo} className=""   alt=""/>
        </div>
        <div className="w-24 h-24">

            <Image src={woltlogo} className="w-10 h-10" alt=""/>
        </div>
        
      </div>
    </div>
  );
};

export default FilterFoodType;
