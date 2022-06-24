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
import WoltLogo from "./svgs/WoltLogo";
import TenBisLogo from "./svgs/TenBisLogo";
import LeafeIcon from "./svgs/filterFoodTypes/LeafeIcon";
import ManyLeafeIcon from "./svgs/filterFoodTypes/ManyLeafeIcon";
import PizzaIcon from "./svgs/filterFoodTypes/PizzaIcon";

type Props = {
  closeModal: any; // Function?
}
type FilterT = {
   woltRestaurants: boolean ,tenbisRestaurants: boolean
}
const FilterFoodType: React.FC<Props> = (props) => {

  const { closeModal } = props;
  
  const filterTypes = useSelector((state:any) => state.restaurants.filterTypes)
  const subFilterTypes = useSelector((state:any) => state.restaurants.subFilterTypes)
  
  return (
    <div className="bg-[#FFFFFF]   z-40">
        <div className="flex justify-between items-center">
          <a href="" className="">
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
      <div className="flex gap-x-4 mt-4 items-end">
        <div className={`w-20 p-3 rounded-lg  ${filterTypes.tenbisRestaurants ? " bg-slate-100" : ""} `} onClick={()=>filterProviderType('tenbisRestaurants')}>
          
        <div className=" self-end w-16 h-16">
              <TenBisLogo />
              </div>
          <h3>תן ביס</h3>
        </div>
        <div  className={`w-24  p-3 rounded-lg grid text-center ${filterTypes.woltRestaurants ? " bg-slate-100" : ""}`} onClick={()=>filterProviderType('woltRestaurants')} >
        <div className={`grid h-full`}>

            <div className="w-20 h-full ttt">
               <WoltLogo  /> 
            </div>
            <div>

          <h3>וולט</h3>
            </div>
        </div>
        </div>
      </div>

      <div className="w-full mx-auto h-[1px] bg-[#3C1E57] mt-2 "></div>

      <div className="flex gap-x-8 pt-4 mt-1 items-end pr-2">
        <button  onClick={()=>filterByCategoryTypes("kosher")}>
          <KosherIcon givenClass={`w-14 h-14 ${subFilterTypes.kosher ? "" : "stroke-gray-500 opacity-60"}`}  />
          <h3>רק כשר</h3>
        </button>
        <div className="flex gap-x-4 pt-4 mt-1">
        <button  onClick={()=>filterByCategoryTypes("vegetarian")}>
          <LeafeIcon givenClass={` w-14 h-14 ${subFilterTypes.vegetarian ? "" : "stroke-gray-200 opacity-60"}`}/>
          <h3>צמחוני</h3>
        </button>
        </div>
        <div className=" ">
        <button  onClick={()=>filterByCategoryTypes("vegan")}>
            <ManyLeafeIcon givenClass={` ${subFilterTypes.vegan ? "" : "stroke-gray-200 opacity-60"}`}/>
          <h3>טבעוני</h3>
        </button>
        </div>
      </div>
      <div className="grid justify-start mt-5 w-20">
        <button  onClick={()=>filterByCategoryTypes("dessert")}>
          <DessertIcon  givenClass={` w-[60px] h-[60px] ${subFilterTypes.dessert ? "" : "stroke-gray-200 opacity-60"}`} />
          <h3>קינוח</h3>
        </button>
      </div>
      <div className="flex gap-x-8 mt-2 items-baseline pr-2">
        <div className="">
          <div className="pb-2 ">
          <button  onClick={()=>filterByCategoryTypes("burgers")}>
          <HamburgerIcon givenClass={`w-16 h-16  ${subFilterTypes.burgers ? "" : "stroke-gray-200 opacity-60 "}`}  />
          <h3>המבורגר</h3>
          </button>
          </div>
        </div>
        <div className="">
        <button  onClick={()=>filterByCategoryTypes("asian")}>
          <SushiIcon  givenClass={` h-16 w-16 mb-3  ${subFilterTypes.asian ? "" : "stroke-gray-200 opacity-60 "}`} />
          <h3>אסייתי</h3>
        </button>
        </div>
        <div className="">
        <button  onClick={()=>filterByCategoryTypes("pizza")}>
          <PizzaIcon  givenClass={` h-16 w-16   ${subFilterTypes.pizza ? "" : "stroke-gray-200 opacity-60 "}`} />
          <h3>פיצה</h3>
        </button>
        </div>

      </div>
{/* </div> */}
    </div>
  );
};

export default connect()(FilterFoodType);
