import axios from "axios";
import React, { useEffect } from "react";
import { setCurrentCity, setFiftyRestaurants, setRestaurants, setSelectedRestaurant } from "../src/redux/actions/clienActions";
import { connect, useDispatch } from "react-redux";
import Container from "../components/Container";
import { FetchRestaurantType } from "../src/types/FetchRestaurantTyp";
import { shuffle } from "../src/hooks/shuffle";
import { getRandomFromArray } from "../src/utils";
import { NextSeo } from "next-seo";
import { LOCATION_COOKIE } from "../src/consts";
import { parseCookies } from "nookies";
import { GetServerSidePropsContext } from "next";
import ContainerCheck from "../components/ContainerCheck";


const Home = ({ allRestaurants,cityName }: { allRestaurants: FetchRestaurantType,cityName:string }) => {
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(setRestaurants({
      tenbisRestaurants: allRestaurants?.tenBisData,
      woltRestaurants: allRestaurants?.woltData,
      both: [...allRestaurants?.woltData, ...allRestaurants?.tenBisData]
    }));
    let maxed = shuffle([...allRestaurants?.woltData, ...allRestaurants?.tenBisData]).splice(0, 50);
    dispatch(setFiftyRestaurants(maxed))
    dispatch(setSelectedRestaurant(getRandomFromArray(shuffle(maxed))))
    dispatch(setCurrentCity(cityName));

  }, [allRestaurants?.tenBisData, allRestaurants?.woltData, dispatch])


  const seoObj = {
    title: 'הזמנת אוכל רנדומלית | Whats for dinner',
    description: 'מתלבטים מה להזמין בוולט או תן ביס? הגרילו ארוחה להזמנה',
    openGraph: {
      type: 'website',
      locale: 'he_IS',
      site_name: 'Whats4Dinner design',
    },
  };

  return (
    <>
      <NextSeo {...seoObj}/>
      {/* <ContainerCheck /> */}
      <Container />
    </>
  )
};
export default connect()(Home);


export async function getServerSideProps(context:GetServerSidePropsContext) {
  const cityName = parseCookies(context)[LOCATION_COOKIE]?? 'telaviv' ;
  let allRestaurants ={
    city: {
      name: cityName,
  },
  woltData: [],
  tenBisData: [],
  };
  try {
    const { data } = await axios.post(`${process.env.FRONT_URL}/api/fetch-restaurant`, {
      cityName
    });
    allRestaurants = data
    console.log(data);
  } catch(error){
    console.log(error);
    
  }
  
  return {
    props: {
      allRestaurants,
      cityName,
    },
  };
}
