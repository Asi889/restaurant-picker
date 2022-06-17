// SettingsContainer

import React, { useEffect, useState, createRef } from "react";
import LocationIcon from "./svgs/LocationIcon";
import FiltertIcon from "./svgs/FilterIcon";
import Image from "next/image";
import tenbislogo from "../public/images/tenbislogo.png";
import woltlogo from "../public/images/woltlogo.png";
import { Dialog } from "@headlessui/react";
import KosherIcon from "./svgs/filterFoodTypes/KosherIcon";
import VegetarianIcon from "./svgs/filterFoodTypes/VegetarianIcon";
import VeganIcon from "./svgs/filterFoodTypes/VeganIcon";
import DessertIcon from "./svgs/filterFoodTypes/DessertIcon";
import HamburgerIcon from "./svgs/filterFoodTypes/HamburgerIcon";
import SushiIcon from "./svgs/filterFoodTypes/SushiIcon";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { useStore } from "react-redux";
import { setFilterType } from "../src/redux/actions/clienActions";

type FilteredTypes = {
  woltRestaurants: boolean;
  tenbisRestaurants: boolean;
  kosher: boolean;
  vegan: boolean;
}

type Props = {
  closeModal: any; // Function?
  setRestaurantAmount: Function; //
  selectedproviderSet: Function;
  selectedprovider: string;
  filterTypesSet: Function;
  filterTypes: any;// FilteredTypes
  filterCategory: Function;
};
const FilterFoodType: React.FC<Props> = (props) => {
  const { closeModal, setRestaurantAmount, selectedproviderSet, selectedprovider, filterTypesSet, filterTypes, filterCategory } = props;
  const dispatch = useDispatch()
  const store = useStore()
  let stat: any
  stat=  store.getState()
  const filterTypes1 = stat?.restaurants.filterTypes
  const filterType= (name:any)=>{

    // filterTypesSet({...filterTypes, [name]:!filterTypes[name] })
    
    switch (name) {
      
      case "tenbisRestaurants":
        
        if(filterTypes.woltRestaurants === false){
          return     
        }
        if(filterTypes.woltRestaurants === true && filterTypes.tenbisRestaurants === true){
          // filterTypesSet({...filterTypes,tenbisRestaurants: !filterTypes.tenbisRestaurants  })
          dispatch(setFilterType({...filterTypes1, tenbisRestaurants: !filterTypes1.tenbisRestaurants }))
          setRestaurantAmount("woltRestaurants")      
          return
        }
        if(filterTypes.woltRestaurants === true && filterTypes.tenbisRestaurants === false){
          // filterTypesSet({...filterTypes,tenbisRestaurants: !filterTypes.tenbisRestaurants  })
          dispatch(setFilterType({...filterTypes1, tenbisRestaurants: !filterTypes1.tenbisRestaurants }))
          setRestaurantAmount("both")      
          return
        }
        
        return;
        
        case "woltRestaurants":
          // console.log("both innnn33");
          
          if(filterTypes.tenbisRestaurants === false){
            return
          }
          if(filterTypes.woltRestaurants === true && filterTypes.tenbisRestaurants === true){
            // filterTypesSet({...filterTypes,woltRestaurants: !filterTypes.woltRestaurants  })
            dispatch(setFilterType({...filterTypes1, woltRestaurants: !filterTypes1.woltRestaurants }))
            setRestaurantAmount("tenbisRestaurants")      
            return
          }
          if(filterTypes.woltRestaurants === false && filterTypes.tenbisRestaurants === true){
            // filterTypesSet({...filterTypes,woltRestaurants: !filterTypes.woltRestaurants  })
            dispatch(setFilterType({...filterTypes1, woltRestaurants: !filterTypes1.woltRestaurants }))
            setRestaurantAmount("both")      
            return
          }
          
          return;
          case "kosher":
            // filterTypesSet({...filterTypes,kosher: !filterTypes.kosher  })
            dispatch(setFilterType({...filterTypes1, kosher: !filterTypes1.kosher }))
          // console.log("both innnn33");
          
         

        return;
    
      default:
        break;
    }
    

  }

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
      <div className="flex gap-x-4 mt-4 items-baseline">
        <div className={`w-20 p-3 rounded-lg  ${filterTypes.tenbisRestaurants ? " bg-slate-100" : ""} `} onClick={()=>filterType('tenbisRestaurants')}>
          <Image src={tenbislogo}    className="" alt="" />
          <h3>תן ביס</h3>
        </div>
        <div  className={`w-24  p-3 rounded-lg grid text-center ${filterTypes.woltRestaurants ? " bg-slate-100" : ""}`} onClick={()=>filterType('woltRestaurants')} >
          <Image src={woltlogo} className="" alt="" />
          <h3>וולט</h3>
        </div>
      </div>

      <div className="w-full mx-auto h-[1px] bg-[#3C1E57] mt-2 "></div>

      <div className="flex gap-x-4 pt-4 mt-1 ">
        <button  onClick={()=>filterCategory("kosher")}>

          <KosherIcon givenClass="stroke-gray-200 opacity-60"  />
          <h3>רק כשר</h3>
        </button>
        
        <div className="">
          <VegetarianIcon givenClass="stroke-gray-200 opacity-90"  />
          <h3>צמחוני</h3>
        </div>
        <div className="">
          <VeganIcon givenClass="stroke-gray-200 opacity-60"  />
          <h3>טבעוני</h3>
        </div>
      </div>
      <div className="grid justify-start mt-3">
          <DessertIcon  givenClass="stroke-gray-200 opacity-60" />
          <h3>קינוח</h3>

      </div>
      <div className="flex gap-x-4 mt-4 items-baseline">
        <div className="">
          <div className="pb-2">

          <HamburgerIcon givenClass="stroke-gray-200 opacity-60"  />
          </div>
          <h3>המבורגר</h3>
        </div>
        <div className="">
          <SushiIcon  givenClass="stroke-gray-200 opacity-60" />
          <h3>סושי</h3>
        </div>

      </div>
    </div>
  );
};

export default connect()(FilterFoodType);
