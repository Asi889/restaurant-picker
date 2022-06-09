import React, { useEffect, useState, createRef } from "react";
import Image from "next/image";
import { myImageLoader } from "../src/hooks/myImageLoader";

type Props = {
  selectedRestaurant: any;
  restaurants: Array<object>;
  index: number;
};

const SelectedAndTop: React.FC<Props> = (props) => {
  const { index, restaurants, selectedRestaurant } = props;
  

  return (
    <div
      className={`grid gap-y-12  -top-[227px]`}
    >
      <div className="w-[55px] h-[55px] rounded-full text-center relative img-wrapper ">
        {/* {lastRestaurant?.title} */}
        <Image
          loader={() => myImageLoader(restaurants[index]?.image?.url)}
          // src={""}
          src={
            selectedRestaurant?.image?.url
              ? selectedRestaurant?.image?.url
              : "https://tenbis-static.azureedge.net/restaurant-cuisine-type-icon-image/asianFusion.png"
          }
          // src={restaurants[index]?.image?.url ? restaurants[index]?.image?.url : "https://tenbis-static.azureedge.net/restaurant-cuisine-type-icon-image/asianFusion.png" }
          alt="Picture of the author"
          layout="fill"
          className="w-[400px] h-[100px] rounded-full "
          id="img-round"
        />
      </div>
      <div className="w-[55px] h-[55px] rounded-full text-center relative img-wrapper ">
        <Image
          loader={() => myImageLoader(selectedRestaurant?.image?.url)}
          // src={selectedRestaurant?.image?.url  }
          src={
            selectedRestaurant?.image?.url
              ? selectedRestaurant?.image?.url
              : "https://tenbis-static.azureedge.net/restaurant-cuisine-type-icon-image/asianFusion.png"
          }
          alt="Picture of the author"
          layout="fill"
          className="w-[400px] h-[100px] rounded-full "
          id="img-round"
        />
        {/* {selectedRestaurant?.title} */}
      </div>
    </div>
  );
};
export default SelectedAndTop;
