import axios from "axios";
import React, { useEffect } from "react";
import {
  setCurrentCity,
  setFiftyRestaurants,
  setRestaurants,
  setSelectedRestaurant,
  setUserLatLon,
} from "../src/redux/actions/clienActions";
import { connect, useDispatch } from "react-redux";
import Container from "../components/Container";
import { FetchRestaurantType } from "../src/types/FetchRestaurantTyp";
import { shuffle } from "../src/hooks/shuffle";
import { getRandomFromArray } from "../src/utils";
import { NextSeo } from "next-seo";
import { LAT_LON_COOKIE, LOCATION_COOKIE } from "../src/consts";
import { parseCookies } from "nookies";
import { GetServerSidePropsContext } from "next";

const Home = ({
  allRestaurants,
  cityName,
  locationCookie,
}: {
  allRestaurants: FetchRestaurantType;
  cityName: string;
  locationCookie: { lat: number; lon: number } | null;
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (locationCookie) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (position) => {
          dispatch(
            setUserLatLon({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            })
          );
          const { data: allRestaurants } = await axios.post(
            `/api/fetch-by-location`,
            {
              location: {
                lat: position.coords.latitude,
                lon: position.coords.longitude,
              },
            }
          );
          dispatch(
            setRestaurants({
              tenbisRestaurants: allRestaurants?.tenBisData,
              woltRestaurants: allRestaurants?.woltData,
              both: [
                ...allRestaurants?.woltData,
                ...allRestaurants?.tenBisData,
              ],
            })
          );
          let maxed = shuffle([
            ...allRestaurants?.woltData,
            ...allRestaurants?.tenBisData,
          ]).splice(0, 50);
          dispatch(setFiftyRestaurants(maxed));
          dispatch(setSelectedRestaurant(getRandomFromArray(shuffle(maxed))));
        });
      }
    }
  }, [locationCookie]);
  useEffect(() => {
    dispatch(
      setRestaurants({
        tenbisRestaurants: allRestaurants?.tenBisData,
        woltRestaurants: allRestaurants?.woltData,
        both: shuffle([
          ...allRestaurants?.woltData,
          ...allRestaurants?.tenBisData,
        ]),
      })
    );
    let maxed = shuffle([
      ...allRestaurants?.woltData,
      ...allRestaurants?.tenBisData,
    ]).splice(0, 50);
    dispatch(setFiftyRestaurants(maxed));
    dispatch(setSelectedRestaurant(getRandomFromArray(shuffle(maxed))));
    dispatch(setCurrentCity(cityName));
  }, [allRestaurants?.tenBisData, allRestaurants?.woltData, dispatch]);

  const seoObj = {
    title: "הזמנת אוכל רנדומלית | Whats for dinner",
    description: "מתלבטים מה להזמין בוולט או תן ביס? הגרילו ארוחה להזמנה",
    openGraph: {
      type: "website",
      locale: "he_IS",
      site_name: "Whats4Dinner design",
    },
  };

  return (
    <>
      <NextSeo {...seoObj} />
      <Container />
    </>
  );
};
export default connect()(Home);

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const cityName = parseCookies(context)[LOCATION_COOKIE] ?? "telaviv";
  const locationCookie = parseCookies(context)[LAT_LON_COOKIE];
  let allRestaurants = {
    city: {
      name: cityName,
    },
    woltData: [],
    tenBisData: [],
  };
  try {
    const { data } = await axios.post(
      `${process.env.FRONT_URL}/api/fetch-restaurant`,
      {
        cityName,
      }
    );
    allRestaurants = data;
  } catch (error) {}

  return {
    props: {
      allRestaurants,
      cityName,
      locationCookie: locationCookie ? JSON.parse(locationCookie) : null,
    },
  };
}
