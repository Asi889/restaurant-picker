import React, { useEffect } from "react";
import { useStore } from "react-redux";
import { connect } from "react-redux";
import WoltLogo from "./svgs/WoltLogo";
import TenBisLogo from "./svgs/TenBisLogo";
import {TenBisRestaurant} from "../src/types/FetchRestaurantTyp";
import Image from "next/image";
import { myImageLoader } from "../src/hooks/myImageLoader";
import { checkTime, splitAndTrim } from "../src/utils";

interface Props {}

const ChosenRestaurant: React.FC<Props> = (props) => {
  // const {} = props;
  const store = useStore();
  let stat: any;
  stat = store.getState();
  let selectedRestaurant= stat?.restaurants.selectedRestaurant
  
  const returnCheckProviders = () => {
    const provider = selectedRestaurant.provider;
    const checkIfBothRProvider= stat.restaurants.filterTypes.woltRestaurants && stat.restaurants.filterTypes.woltRestaurants ? true : false
    const providerFind = selectedRestaurant.provider === "wolt" ? "tenbisRestaurants" : "woltRestaurants";
    const otherProvider = stat.restaurants.allRestaurants[providerFind].find((restaurant: TenBisRestaurant) =>
    restaurant.name === splitAndTrim(selectedRestaurant.name)
    );

    return (
      /////////LOGOS///////////
      // <div className="grid gap-y-4 justify-between ">
      <div className={`${!otherProvider ? "flex gap-x-4" : "grid gap-y-4"} justify-around mt-4 result_img_wraper items-end`}>
        
        {provider === "wolt" && otherProvider ? (
          <div className="flex gap-x-12 111111111111111 items-end">
            {checkIfBothRProvider ? 
            <a className="grid content-end w-26 h-24" href={selectedRestaurant?.link?.url}>
              <div className="w-20 h-10 ttt">
               <WoltLogo  /> 
              </div>
              <p>להזמנה דרך וולט</p>
            </a> : ""}
            <a className="grid content-end" href={otherProvider?.link?.url}>
              <div className=" self-end w-16 h-16">
              <TenBisLogo />
              </div>
              <p>להזמנה דרך תן-ביס</p>
            </a>
          </div>
        ) : provider === "tenBis" && otherProvider ? (
          <div className="flex gap-x-12 2222222222222222">
            <a  href={otherProvider?.link?.url}>
              {checkIfBothRProvider ?<div  className="grid content-end w-26 h-24">
              <div className="w-20 h-10 ttt">
               <WoltLogo  /> 
              </div>
                <p>להזמנה דרך וולט</p>
              </div> : ""}
            </a>
            <a className="grid content-end" href={selectedRestaurant?.link?.url} >
            <div className=" self-end w-16 h-16">
              <TenBisLogo />
              </div>
              <p>להזמנה דרך תן-ביס</p>
            </a>
          </div>
        ) : provider === "wolt" && !otherProvider ? (
          <a className="w-26" href={selectedRestaurant?.link?.url} >
            <div className="h-10 w-20 ">
            <WoltLogo />
            </div>
            <p>להזמנה דרך וולט</p>
          </a>
        ) : provider === "tenBis" && !otherProvider ? (
          <a className="w-26" href={selectedRestaurant?.link?.url}>
            <div className="w-16">
            <TenBisLogo />
            </div>
            <p>להזמנה דרך תן-ביס</p>
          </a>
        ) : (
          ""
        )}

        {otherProvider ? (
         
          ""
        ) : (
          <div className="imgg-wraper">
            <Image
              src={selectedRestaurant?.image}
              layout="raw"
              className="w-24 h-20"
              height={100}
              width={100}
              alt=""
              loader={() =>
                myImageLoader(selectedRestaurant?.image)
              }
            />
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="bg-[#280F3F] px-2 text-white">
      <p className="text-white"> נראה {checkTime()} מזמינים :</p>
      <p className="text-white">
        {" "}
        {stat?.restaurants.selectedRestaurant?.title}
      </p>
      
      {returnCheckProviders()}

      <div className="grid gap-y-4 mt-3">
        <p>{stat?.restaurants.selectedRestaurant?.address}</p>
        <p>{stat?.restaurants.selectedRestaurant?.short_description}</p>
      </div>
    </div>
  );
};

export default connect()(ChosenRestaurant);
