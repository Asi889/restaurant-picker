// SettingsContainer
import React from "react";
import { connect, useSelector } from "react-redux";
import HamburgerIcon from "..//svgs/filterFoodTypes/HamburgerIcon";
import KosherIcon from "..//svgs/filterFoodTypes/KosherIcon";
import LeafeIcon from "..//svgs/filterFoodTypes/LeafeIcon";
import ManyLeafeIcon from "..//svgs/filterFoodTypes/ManyLeafeIcon";
import PizzaIcon from "..//svgs/filterFoodTypes/PizzaIcon";
import SushiIcon from "..//svgs/filterFoodTypes/SushiIcon";
import FiltertIcon from "..//svgs/FilterIcon";
import TenBisLogo from "..//svgs/TenBisLogo";
import WoltLogo from "../svgs/WoltLogo";
import DessertIcon from "../svgs/filterFoodTypes/DessertIcon";
import { filterByCategoryTypes } from "../../src/hooks/filterByCategoryTypes";
import { filterProviderType } from "../../src/hooks/filterProviderType";


const FilterFoodType = ({closeModal} :{closeModal:()=>void}) => {
  const filterTypes = useSelector((state: any) => state.restaurants.filterTypes)
  const subFilterTypes = useSelector((state: any) => state.restaurants.subFilterTypes)

  return (
    <div className="bg-white text-purple-dark">
      <div className="flex justify-between items-start">
        <a href="" className="">
          <FiltertIcon

            pathClass="fill-black cursor-pointer"
            givenclass="w-11 h-11 "
          />
          <h3 className="text-sm">איפוס</h3>
        </a>
        <h2 className="font-thin underline px-2 text-lg">סינון</h2>
        <button onClick={closeModal}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </button>
      </div>
      <div className="flex gap-x-4 mt-4 items-end">
        <button className={`transition h-28 justify-center text-center w-28 flex flex-col items-stretch  p-3 rounded-lg ${filterTypes.tenbisRestaurants ? "bg-slate-100" : ""} `} 
        onClick={() => filterProviderType('tenbisRestaurants')}>
          <TenBisLogo />
          <h3 className="mt-auto">תן ביס</h3>
        </button>
        <button className={`transition h-28 justify-center text-center w-28 flex flex-col items-stretch  p-3 rounded-lg ${filterTypes.woltRestaurants ? "bg-slate-100" : ""}`} 
        onClick={() => filterProviderType('woltRestaurants')} >
          <WoltLogo />
          <h3 className="mt-auto">וולט</h3>
        </button>
      </div>

      <hr className="border-purple my-3" />

      <div className="flex gap-x-2 pt-4 mt-1 items-end  h-24">
        <button onClick={() => filterByCategoryTypes("kosher")} className={`w-20 h-full grid place-content-center transition rounded-lg p-2 ${subFilterTypes.kosher ? "bg-slate-300" : "bg-slate-50"}`}>
          <KosherIcon givenClass={`w-14 h-10 ${subFilterTypes.kosher ? "" : "stroke-gray-500 opacity-60"}`} />
          <h3>רק כשר</h3>
        </button>
        <button onClick={() => filterByCategoryTypes("vegetarian")} className={`w-20 h-full grid place-content-center transition rounded-lg p-2 ${subFilterTypes.vegetarian ? "bg-slate-300" : "bg-slate-50"}`}>
          <LeafeIcon givenClass={` w-14 h-10 ${subFilterTypes.vegetarian ? "" : "stroke-gray-200 opacity-60"}`} />
          <h3>צמחוני</h3>
        </button>
        <button onClick={() => filterByCategoryTypes("vegan")} className={`w-20 h-full grid place-content-center transition rounded-lg p-2 ${subFilterTypes.vegan ? "bg-slate-300" : "bg-slate-50"}`}>
          <div className="h-9">
            <ManyLeafeIcon givenClass={` ${subFilterTypes.vegan ? "" : "stroke-gray-200 opacity-60"}`} />
          </div>
          <h3>טבעוני</h3>
        </button>
      </div>
      <div className="flex gap-x-2 mt-5">
        <button onClick={() => filterByCategoryTypes("dessert")} className={`w-20 h-full grid place-content-center transition rounded-lg p-2 ${subFilterTypes.dessert ? "bg-slate-300" : "bg-slate-50"}`}>
          <DessertIcon givenClass={` w-[60px] h-[40px] ${subFilterTypes.dessert ? "" : "stroke-gray-200 opacity-60"}`} />
          <h3>קינוח</h3>
        </button>
      </div>
      <div className="flex gap-x-2 mt-2 h-24">
        <button onClick={() => filterByCategoryTypes("burgers")} className={`w-20 h-full grid place-content-center transition rounded-lg p-2 ${subFilterTypes.burgers ? "bg-slate-300" : "bg-slate-50"}`}>
          <HamburgerIcon givenClass={`h-12 ${subFilterTypes.burgers ? "" : "stroke-gray-200 opacity-60 "}`} />
          <h3>המבורגר</h3>
        </button>
        <button onClick={() => filterByCategoryTypes("pizza")} className={`w-20 h-full grid place-content-center transition rounded-lg p-2 ${subFilterTypes.pizza ? "bg-slate-300" : "bg-slate-50"}`}>
          <PizzaIcon givenClass={`h-12    ${subFilterTypes.pizza ? "" : "stroke-gray-200 opacity-60 "}`} />
          <h3>פיצה</h3>
        </button>
        <button onClick={() => filterByCategoryTypes("asian")} className={`w-20 h-full grid place-content-center transition rounded-lg p-2 ${subFilterTypes.asian ? "bg-slate-300" : "bg-slate-50"}`}>
          <SushiIcon givenClass={`h-12   ${subFilterTypes.asian ? "" : "stroke-gray-200 opacity-60 "}`} />
          <h3>אסייתי</h3>
        </button>

      </div>
    </div>
  );
};

export default connect()(FilterFoodType);
