import React, { useEffect } from "react";
import Image from "next/image";
import { myImageLoader } from "../src/hooks/myImageLoader";
import { useStore } from "react-redux";
import { splitAndTrim } from "../src/utils";

type Props = {
  index: number;

};

const SelectedAndTop: React.FC<Props> = (props) => {

  const { index } = props;
  const store = useStore()
  let stat: any
  stat=  store.getState()

  return (
    <div className={`grid gap-y-12  -top-[227px]`} >
      {/* <div className="w-[55px] h-[55px] rounded-full text-center relative img-wrapper "> */}
      <div className={`w-[70px] h-[70px] md:w-[200px] md:h-[200px] rounded-full text-center relative img-wrapper `} key={index}>
        {stat?.restaurants.fiftyRestaurants[index]?.image?.includes("wolt")
        ?
        <div className="font-bold text-base bg-[#280F3F] h-[70px] text-center grid items-center text-white">
          {splitAndTrim(stat?.restaurants.fiftyRestaurants[index]?.title)}
        </div>
        :
        <Image
          loader={() => myImageLoader(stat?.restaurants.fiftyRestaurants[index+2]?.image)}
          src={stat?.restaurants.fiftyRestaurants[index]?.image ? stat?.restaurants.fiftyRestaurants[index]?.image : "https://tenbis-static.azureedge.net/restaurant-cuisine-type-icon-image/asianFusion.png"}
          alt="Picture of the author"
          layout="fill"
          className="w-[400px] h-[100px] rounded-full "
        />
        }
        
      </div>
      <div className=" text-center relative img-wrapper ">
        {stat?.restaurants.selectedRestaurant?.image?.includes("wolt")
        
        ?
        <div className="font-bold text-base bg-[#280F3F] h-[70px] text-center grid items-center text-white relative">
          {splitAndTrim(stat?.restaurants.selectedRestaurant?.title)}
        </div>
        :
        <div className="w-16 h-16 ">
          <Image
            loader={() => myImageLoader(stat?.restaurants.selectedRestaurant?.image)}
            src={stat?.restaurants.selectedRestaurant?.image ? stat?.restaurants.selectedRestaurant?.image : "https://tenbis-static.azureedge.net/restaurant-cuisine-type-icon-image/asianFusion.png"}
            alt="Picture of the author"
            layout="fill"
            className="rounded-full "
          />
        </div>
        
        }
        
      </div>
    </div>
  );
};
export default SelectedAndTop;
