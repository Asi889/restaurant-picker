/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import { useStore } from "react-redux";
import { StateProp } from "../src/types/FetchSubRestaurantTypes";
import { splitAndTrim } from "../src/utils";

type Props = {
  index: number;

};

const SelectedAndTop: React.FC<Props> = (props) => {

  const { index } = props;
  const store = useStore()
  const stat = store.getState() as StateProp

  return (
    <div className={`grid gap-y-12  -top-[227px]`} >
      <div className={` rounded-full text-center relative img-wrapper `} key={index}>
        {stat?.restaurants.fiftyRestaurants[index]?.photo?.logo
          ?
          <img
            src={stat?.restaurants.fiftyRestaurants[index]?.photo.logo ?? ''}
            alt="Picture of the author"
            className="w-[200px] h-[200px] rounded-full mx-auto"
            
          />
          :
          <div className="font-bold text-base bg-purple  text-center my-4 grid items-center text-white w-[200px] h-[200px]">
            {splitAndTrim(stat?.restaurants.fiftyRestaurants[index]?.title)}
          </div>
        }

      </div>
      <div className=" text-center relative img-wrapper ">
        {!stat?.restaurants.selectedRestaurant?.photo?.logo

          ?
          <div className={`slot-macihne-text leading-4 text-base bg-purple text-center my-4 grid items-center relative text-white w-[200px] h-[200px]`}>
            {splitAndTrim(stat?.restaurants.selectedRestaurant?.title)}
          </div>
          :
            <img
              src={stat?.restaurants.selectedRestaurant?.photo.logo}
              alt=""
              className="w-[200px] h-[200px] rounded-full mx-auto"
            />

        }

      </div>
    </div>
  );
};
export default SelectedAndTop;
