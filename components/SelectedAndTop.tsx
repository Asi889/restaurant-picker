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
      <div className={`w-[70px] h-[70px] md:w-[200px] md:h-[200px] rounded-full text-center relative img-wrapper `} key={index}>
        {stat?.restaurants.fiftyRestaurants[index]?.photo?.logo
          ?
          <img
            src={stat?.restaurants.fiftyRestaurants[index]?.photo.logo ?? ''}
            alt="Picture of the author"
            className="w-[400px] h-[100px] rounded-full "
          />
          :
          <div className="font-bold text-base bg-purple h-[70px] text-center grid items-center text-white">
            {splitAndTrim(stat?.restaurants.fiftyRestaurants[index]?.title)}
          </div>
        }

      </div>
      <div className=" text-center relative img-wrapper ">
        {!stat?.restaurants.selectedRestaurant?.photo?.logo

          ?
          <div className="font-bold text-base bg-purple h-[70px] text-center grid items-center text-white relative">
            {splitAndTrim(stat?.restaurants.selectedRestaurant?.title)}
          </div>
          :
          <div className="w-16 h-16 ">
            <img
              src={stat?.restaurants.selectedRestaurant?.photo.logo}
              alt="Picture of the author"
              className="rounded-full "
            />
          </div>

        }

      </div>
    </div>
  );
};
export default SelectedAndTop;
