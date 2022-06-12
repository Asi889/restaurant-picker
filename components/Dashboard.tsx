/* eslint-disable react/jsx-key */
import React, { useEffect, useState, createRef } from "react";
import {set50Restaurants} from '../src/utils'

import { useSelector } from "react-redux";
import Restaurants from "./Restaurants";
import SlotArm from "./SlotArm";
type FilteredTypes = {
  woltRestaurants: boolean;
  tenbisRestaurants: boolean;
  kosher: boolean;
  vegan: boolean;
}

type Props = {
  filterTypesSet: Function;
  filterTypes: any; //FilteredTypes 
  filteredRestaurantsSet: Function;
  filteredRestaurants: Array<object>
  selectedproviderSet: Function;
  selectedprovider: string
  setRestaurantAmount: Function;
  
};

const Dashboard: React.FC<Props> = (props) => {
  const { filterTypesSet, filterTypes, filteredRestaurantsSet, selectedproviderSet, selectedprovider, setRestaurantAmount } = props;
  
  const filterType= (e:any)=>{

    filterTypesSet({...filterTypes, [e.target.name]:!filterTypes[e.target.name] })
    
    switch (e.target.name) {
      
      case "tenbisRestaurants":
        if(filterTypes.woltRestaurants === false){
          filterTypesSet({...filterTypes,tenbisRestaurants:true  })
        }
        selectedproviderSet("both")
        setRestaurantAmount()      
        return;

        case "woltRestaurants":
          if(filterTypes.tenbisRestaurants === false){
            filterTypesSet({...filterTypes,woltRestaurants:true  })
            return
          }

        return;
    
      default:
        break;
    }
    
  
  }

  return (
    <div className="w-full  bg-slate-900 text-center">
      <div className="grid"></div>
      <div className="text-white flex items-center justify-center gap-x-1 flex-wrap max-w-[200px] mx-auto flex-col">
        <div className="flex gap-x-2">
          <div className="flex items-center"  onClick={(e:any)=>filterType(e)}>
            <input type="checkbox" name="tenbisRestaurants" value={filterTypes.tenbisRestaurants} onChange={(e:any)=>filterType(e)} checked={filterTypes.tenbisRestaurants} placeholder="tenbis" id="" />
            <label htmlFor="tenbis">10bis</label>
          </div>
          <div className="flex items-center"  onClick={(e:any)=>filterType(e)}>
            <input type="checkbox" name="woltRestaurants" value={filterTypes.woltRestaurants} onChange={(e:any)=>filterType(e)} checked={filterTypes.woltRestaurants} placeholder="wolt" id=""    />
            <label htmlFor="wolt">wolt</label>
          </div>
        </div>
        <div className="flex items-center">
          <input type="checkbox" name="kosher" value={filterTypes.kosher} placeholder="kosher" id="" />
          <label htmlFor="kopsher">kosher</label>
        </div>
        <div className="flex items-center">
          <input type="checkbox" name="vegan" value={filterTypes.vegan} placeholder="vegan" id="" />
          <label htmlFor="vegan">vegan</label>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
