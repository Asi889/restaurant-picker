/* eslint-disable react/jsx-key */
import React, { useEffect, useState, createRef, forwardRef } from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import { shuffle } from "../src/hooks/shuffle";
import {myImageLoader} from '../src/hooks/myImageLoader';
import SelectedAndTop from './SelectedAndTop';
type Props = {
  selectedRestaurant: any;
  restaurants: Array<object>;
  slotTransition: boolean;
  refindex:number
  ref: any
};

const Slot: React.ForwardRefRenderFunction <any, Props> = (props:any, ref: any) => {

  const {
    selectedRestaurant,
    restaurants,
    slotTransition,
    refindex,
  } = props;


  return (
          <div  key={refindex} className="w-full border bg-white border-red-200 px-1 md:px-4  overflow-hidden ">
            <div className="  mx-auto  grid gap-y-8 relative overflow-hidden slot-container ">

              
              {/* <div ref={ref} className={`relative bottom-[94%] grid gap-y-16 transition ease-out duration-1000 delay-500 justify-center ${!slotTransition}`}> */}
              <div ref={ref} className={`relative   grid gap-y-16  justify-center ${slotTransition ? slotTransition  : "bbotom"} }`}>
              {/* <div ref={ref} className={`relative bottom-[95%] grid gap-y-16 transition ease-out duration-1000 delay-500 justify-center ${!slotTransition ? "translate-y-[22px] blure-none" : "translate-y-[94%]"}`}> */}
              <SelectedAndTop index={refindex} restaurants={restaurants} selectedRestaurant={selectedRestaurant}  />
          
                {restaurants &&
                  shuffle(restaurants)?.map(
                    (restaurant: any, index: number) => {
                      if (index < 50) {
                        return (
                          <div className={`w-[55px] h-[55px] rounded-full text-center relative img-wrapper `} key={index}>
                            {/* {restaurant.title} */}
                            <Image
                              loader={() => myImageLoader(restaurant?.image)}
                              src={restaurant?.image ? restaurant?.image : "https://tenbis-static.azureedge.net/restaurant-cuisine-type-icon-image/asianFusion.png" }
                              alt="alt"
                              layout="fill" 
                              className="w-[400px] h-[100px] rounded-full "
                              id="img-round"
                            />        
                          </div>
                        );
                      }
                    }
                  )}
              </div>
            </div>
          </div>
  );
};

export default React.forwardRef(Slot);
