/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import { useStore } from "react-redux";
import { StateProp } from "../src/types/FetchSubRestaurantTypes";
import { splitAndTrim } from "../src/utils";

type Props = {
  index: number;

};

const NO_LOGO = 'https://d25t2285lxl5rf.cloudfront.net/images/shops/34465.jpeg'

const SelectedAndTop: React.FC<Props> = (props) => {

  const { index } = props;
  const store = useStore()
  const stat = store.getState() as StateProp

  return (
    <div className={`grid gap-y-2 `} >
      <div className={` rounded-full text-center relative img-wrapper w-[200px] h-[120px]`} key={index}>
        {stat?.restaurants.fiftyRestaurants[index]?.photo?.logo && NO_LOGO !==stat?.restaurants.fiftyRestaurants[index]?.photo?.logo
          ?
          <img
            src={stat?.restaurants.fiftyRestaurants[index]?.photo.logo ?? ''}
            alt={stat?.restaurants.fiftyRestaurants[index]?.name}
            className="w-[150px] h-[150px] rounded-full mx-auto"
            
          />
          :
          <h2 className="font-bold  bg-purple  text-center my-4 grid items-center text-white w-full h-full alfa text-2xl">
            {splitAndTrim(stat?.restaurants.fiftyRestaurants[index]?.title)}
          </h2>
        }

      </div >
      <div className=" text-center relative img-wrapper  w-[200px] h-[120px]">
        {stat?.restaurants.selectedRestaurant?.photo?.logo && NO_LOGO !== stat?.restaurants.selectedRestaurant?.photo?.logo
          ?
            <img
              src={stat?.restaurants.selectedRestaurant?.photo.logo ?? ''}
              alt=""
              className="w-[150px] h-[150px] rounded-full mx-auto"
            />
          :
          <h2 className={`slot-macihne-text leading-7 bg-purple text-center my-4 grid items-center relative text-white alfa text-2xl w-full h-full rounded-lg `}>
            {splitAndTrim(stat?.restaurants.selectedRestaurant?.title)}
          </h2>
        }

      </div>
    </div>
  );
};
export default SelectedAndTop;
