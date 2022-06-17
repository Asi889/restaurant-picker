/* eslint-disable react/jsx-key */
import React, { useEffect, useState, createRef, forwardRef } from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import { shuffle } from "../src/hooks/shuffle";
import {myImageLoader} from '../src/hooks/myImageLoader';
import SelectedAndTop from './SelectedAndTop';
import { useStore } from "react-redux";
type Props = {
  selectedRestaurant: any;
  restaurants: Array<object>;
  slotTransition: boolean;
  refindex:number
  ref: any
  selectedprovider: string;
};

const Slot: React.ForwardRefRenderFunction <any, Props> = (props:any, ref: any) => {
  const store = useStore()
  let stat: any
  stat=  store.getState()
  console.log(stat?.restaurants)
  
  
  const {
    selectedRestaurant,
    restaurants,
    slotTransition,
    refindex,
    selectedprovider
  } = props;

const splitandtrim= (string:any)=>{
let splited= string.split('|')
 return splited[0].trim()
}


  return (
          <div  key={refindex} className="w-full border bg-white border-red-200 px-1   overflow-hidden ">
            <div className="  mx-auto  grid gap-y-8 relative overflow-hidden slot-container ">

              
              <div ref={ref} className={`relative   grid gap-y-16  justify-center ${slotTransition ? slotTransition  : "bbotom"} }`}>
              <SelectedAndTop index={refindex} restaurants={restaurants} selectedRestaurant={selectedRestaurant} splitandtrim={splitandtrim}  />
          
                {
                  shuffle(stat?.restaurants.fiftyRestaurants).map(
                // {restaurants &&
                //   shuffle(restaurants)?.map(
                    (restaurant: any, index: number) => {
                      // if (index < 50) {
                        return (
                          <div className={` rounded-full text-center relative img-wrapper `} key={index}>
                            {restaurant?.image.includes("wolt")
                             ? 
                            <div className="font-bold text-base bg-[#280F3F] h-[70px] text-center grid items-center text-white">
                              {splitandtrim(restaurant?.title)}
                            </div>
                            : 
                            <div className="w-16 h-16">

                              <Image
                                loader={() => myImageLoader(restaurant?.image)}
                                src={restaurant?.image ? restaurant?.image : "https://tenbis-static.azureedge.net/restaurant-cuisine-type-icon-image/asianFusion.png" }
                                alt="alt"
                                layout="fill" 
                                className="w-[400px] h-[100px] rounded-full "
                                // id="img-round"
                              />
                            </div>
                            }
                                    
                          </div>
                        );
                      // }
                    }
                  )}
              </div>
            </div>
          </div>
  );
};

export default React.forwardRef(Slot);
