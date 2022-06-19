// SettingsContainer
import React, { useEffect } from "react";
import LocationIcon from "./svgs/LocationIcon";
import FiltertIcon from "./svgs/FilterIcon";
import Image from "next/image";
import tenbislogo from "../public/images/tenbislogo.png";
import woltlogo from "../public/images/woltlogo.png";
import KosherIcon from "./svgs/filterFoodTypes/KosherIcon";
import VegetarianIcon from "./svgs/filterFoodTypes/VegetarianIcon";
import VeganIcon from "./svgs/filterFoodTypes/VeganIcon";
import DessertIcon from "./svgs/filterFoodTypes/DessertIcon";
import HamburgerIcon from "./svgs/filterFoodTypes/HamburgerIcon";
import SushiIcon from "./svgs/filterFoodTypes/SushiIcon";
import { connect, useSelector } from "react-redux";
import {filterProviderType} from '../src/hooks/filterProviderType';
import {filterByCategoryTypes} from '../src/hooks/filterByCategoryTypes';

type Props = {
  closeModal: any; // Function?
}
type FilterT = {
   woltRestaurants: boolean ,tenbisRestaurants: boolean
}
const FilterFoodType: React.FC<Props> = (props) => {

  const { closeModal } = props;
  
  const filterTypes = useSelector((state:any) => state.restaurants.filterTypes)
  
  return (
    <div className="bg-[#FFFFFF]   z-40">
        <div className="flex justify-between items-center">
          <a href="" className="">filterByCategoryTypes
            <FiltertIcon
              
              pathClass="fill-black cursor-pointer"
              givenclass="w-11 h-11 "
            />
            <h3 className="text-sm">איפוס</h3>
          </a>
          <h2>פילטר הזמנות</h2>
          <div onClick={closeModal}>
            <span className="font-bold">X</span>
          </div>
        </div>
      <div className="flex gap-x-4 mt-4 items-baseline">
        <div className={`w-20 p-3 rounded-lg  ${filterTypes.tenbisRestaurants ? " bg-slate-100" : ""} `} onClick={()=>filterProviderType('tenbisRestaurants')}>
          <Image src={tenbislogo}    className="" alt="" />
          <h3>תן ביס</h3>
        </div>
        <div  className={`w-24  p-3 rounded-lg grid text-center ${filterTypes.woltRestaurants ? " bg-slate-100" : ""}`} onClick={()=>filterProviderType('woltRestaurants')} >
          <Image src={woltlogo} className="" alt="" />
          <h3>וולט</h3>
        </div>
      </div>

      <div className="w-full mx-auto h-[1px] bg-[#3C1E57] mt-2 "></div>

      <div className="flex gap-x-4 pt-4 mt-1 ">
        <button  onClick={()=>filterByCategoryTypes("kosher")}>
          <KosherIcon givenClass="stroke-gray-200 opacity-60"  />
          <h3>רק כשר</h3>
        </button>
        <div className="flex gap-x-4 pt-4 mt-1">
        <button  onClick={()=>filterByCategoryTypes("vegetarian")}>
          <VegetarianIcon givenClass="stroke-gray-200 opacity-90"  />
          <h3>צמחוני</h3>
        </button>
        </div>
        <div className="">
        <button  onClick={()=>filterByCategoryTypes("vegan")}>
          <VeganIcon givenClass="stroke-gray-200 opacity-60"  />
          <h3>טבעוני</h3>
        </button>
        </div>
      </div>
      <div className="grid justify-start mt-3">
      <button  onClick={()=>filterByCategoryTypes("dessert")}>
          <DessertIcon  givenClass="stroke-gray-200 opacity-60" />
          <h3>קינוח</h3>
      </button>
      </div>
      <div className="flex gap-x-4 mt-4 items-baseline">
        <div className="">
          <div className="pb-2">
          <button  onClick={()=>filterByCategoryTypes("vegetarian")}>
          <HamburgerIcon givenClass="stroke-gray-200 opacity-60"  />
          <h3>המבורגר</h3>
          </button>
          </div>
        </div>
        <div className="">
        <button  onClick={()=>filterByCategoryTypes("vegetarian")}>
          <SushiIcon  givenClass="stroke-gray-200 opacity-60" />
          <h3>סושי</h3>
        </button>
        </div>

      </div>
    </div>
  );
};

export default connect()(FilterFoodType);
