/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";
import { useStore } from "react-redux";
import { connect } from "react-redux";
import WoltLogo from "./svgs/WoltLogo";
import TenBisLogo from "./svgs/TenBisLogo";
import { TenBisRestaurant } from "../src/types/FetchRestaurantTyp";
import Image from "next/image";
import { myImageLoader } from "../src/hooks/myImageLoader";
import { checkTime, splitAndTrim } from "../src/utils";
import { StateProp } from "../src/types/FetchSubRestaurantTypes";

interface Props { }

const ChosenRestaurant: React.FC<Props> = (props) => {
  // const {} = props;
  const store = useStore();
  const state = store.getState() as StateProp;
  const selectedRestaurant = state?.restaurants.selectedRestaurant
  console.log(selectedRestaurant);

  const CheckProviders = () => {
    const provider = selectedRestaurant.provider;
    const providerFind = selectedRestaurant.provider === "wolt" ? "tenbisRestaurants" : "woltRestaurants";
    const otherProvider = state.restaurants.allRestaurants[providerFind].find((restaurant: TenBisRestaurant) =>
      restaurant.name.toLocaleLowerCase() === splitAndTrim(selectedRestaurant.name).toLowerCase()
    );

    return (
      <div className={`flex mt-3 mb-5 justify-center gap-x-5 px-2`}>

        <a className="flex w-1/2 bg-white/20 p-2 rounded-2xl flex-col justify-center space-y-1 text-center" target="_blank" rel="noopener noreferrer" href={selectedRestaurant?.link?.url}>
          <div className="w-full px-2 h-full flex items-center justify-center">
            {provider === 'wolt' ? <WoltLogo /> : <TenBisLogo />}
          </div>
          <p>להזמנה דרך
            &nbsp;
            {provider === 'wolt' ? 'וולט' : 'תן ביס'}
          </p>
        </a>
        {otherProvider && (
          <a className="flex w-1/2 bg-white/20 p-2 rounded-2xl flex-col justify-center space-y-1 text-center" target="_blank" rel="noopener noreferrer" href={otherProvider?.link?.url}>
            <div className="w-full px-2 h-full flex items-center justify-center">

              {otherProvider.provider === 'wolt' ? <WoltLogo /> : <TenBisLogo />}
            </div>
            <p>להזמנה דרך
              &nbsp;
              {otherProvider.provider === 'wolt' ? 'וולט' : 'תן ביס'}
            </p>
          </a>
        )}
      </div>
    );
  };

  return (

    <section className="bg-purple text-white mt-6 rounded-xl pt-4 w-full border border-green overflow-hidden">
      <div className="px-1">
        <h2 className="text-white text-center mb-4 text-xl">
          <span>{checkTime()}</span>
          &nbsp;
          <b className="text-green">
            {splitAndTrim(selectedRestaurant?.title)}
          </b>
        </h2>

        <CheckProviders />

        <ul className="space-y-1 mt-3 pb-4">
          <li>
            <a className="text-white-90" href={`https://www.google.com/maps/search/?api=1&query=${selectedRestaurant.location[0]},${selectedRestaurant.location[1]}`} target="_blank" rel="noopener noreferrer">
              כתובת: {selectedRestaurant?.address}
            </a>
          </li>
          <li>{selectedRestaurant?.short_description}</li>
          <li>{selectedRestaurant.tags.join(',')}</li>
        </ul>
      </div>
      {selectedRestaurant?.image && (
        <img className="w-full" src={selectedRestaurant.image} alt={selectedRestaurant.title} />
      )}
    </section>


  );
};

export default connect()(ChosenRestaurant);
