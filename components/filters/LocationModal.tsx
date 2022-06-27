// SettingsContainer

import axios from "axios";
import React, { useState } from "react";
import { useStore } from "react-redux";
import { woltCities } from "../../src/types/ListOfCities";
import { shuffle } from "../../src/hooks/shuffle";
import { setCurrentCity, setFiftyRestaurants, setRestaurants, setSelectedRestaurant, setUserLatLon } from "../../src/redux/actions/clienActions";
import { StateProp } from "../../src/types/FetchSubRestaurantTypes";
import { getRandomFromArray } from "../../src/utils";
import LocationIcon from "../svgs/LocationIcon";
import { Loader } from "../texts/Loader";

const LocationModal = ({ closeModal }: { closeModal: () => void }) => {
  const store = useStore();
  const state = store.getState() as StateProp

  const [loading, setLoading] = useState(false)

  const changeLocation = async (cityName: string) => {
    setLoading(true)
    store.dispatch(setCurrentCity(cityName));
 
    const { data: allRestaurants } = await axios.post(`/api/fetch-restaurant`, {
      cityName
    });

    store.dispatch(setRestaurants({
      tenbisRestaurants: allRestaurants?.tenBisData,
      woltRestaurants: allRestaurants?.woltData,
      both: [...allRestaurants?.woltData, ...allRestaurants?.tenBisData]
    }));
    let maxed = shuffle([...allRestaurants?.woltData, ...allRestaurants?.tenBisData]).splice(0, 50);
    store.dispatch(setFiftyRestaurants(maxed))
    store.dispatch(setSelectedRestaurant(getRandomFromArray(shuffle(maxed))))
    setLoading(false)
    closeModal();

  }

  const setUserLocation = async () => {
    setLoading(true)
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        store.dispatch(setUserLatLon({ latitude: position.coords.latitude, longitude: position.coords.longitude }));
        const { data: allRestaurants } = await axios.post(`/api/fetch-by-location`, {
          location: {
            lat: position.coords.latitude,
            lon: position.coords.longitude
          }
        });
        store.dispatch(setRestaurants({
          tenbisRestaurants: allRestaurants?.tenBisData,
          woltRestaurants: allRestaurants?.woltData,
          both: [...allRestaurants?.woltData, ...allRestaurants?.tenBisData]
        }));
        let maxed = shuffle([...allRestaurants?.woltData, ...allRestaurants?.tenBisData]).splice(0, 50);
        store.dispatch(setFiftyRestaurants(maxed))
        store.dispatch(setSelectedRestaurant(getRandomFromArray(shuffle(maxed))))
        setLoading(false)
        closeModal();
      }), () => {
        console.log('error');
        setLoading(false)

        // TODO: add eror
      }
    } else {
      // TODO: add eror
      console.log('error');
      setLoading(false)
    }
  }

  return (
    <div className="bg-[#FFFFFF] h-full overflow-auto mx-auto">
      {loading && <Loader />}
      <div className="flex justify-between">
        <h2 className="font-thin underline px-2 text-lg mx-auto">מיקום - למה יצאת מתל אביב?</h2>

        <button onClick={closeModal}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </button>
      </div>
      <button
        onClick={setUserLocation}
        className={`grid place-content-center text-center w-full mt-6 bg-slate-50 rounded py-1
        ${state.restaurants.location.latitude && state.restaurants.location.longitude ? 'bg-slate-300' : ''}
        `}>
        <LocationIcon givenclass="w-12 mx-auto" />
        <div className="font-bold">השתמש במיקום הנוכחי שלי</div>
        <div className="font-thin px-1 text-sm">
          מומלץ לקבלת תוצאות טובות יותר (יש לתת הרשאות)
        </div>
      </button>
      <hr className="border-purple my-3" />

      <ul className="text-center space-y-1">
        {woltCities.map((city) => (
          <li key={city.slug}>
            <button
              onClick={() => changeLocation(city.slug)}
              className={`w-full  active:bg-[#F7F5F5] py-4 rounded ${state.restaurants.location.city === city.slug ? "bg-purple text-white" : "bg-slate-50 text-purple-dark"}`}
            >
              {city.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LocationModal;
