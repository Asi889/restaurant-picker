import axios from "axios";
import React, { useEffect } from "react";
import { setFiftyRestaurants, setRestaurants, setSelectedRestaurant } from "../src/redux/actions/clienActions";
import { connect, useDispatch } from "react-redux";
import Container from "../components/Container";
import { FetchRestaurantType } from "../src/types/FetchRestaurantTyp";
import { shuffle } from "../src/hooks/shuffle";
import { getRandomFromArray } from "../src/utils";
import { NextSeo } from "next-seo";


const Home = ({ allRestaurants }: { allRestaurants: FetchRestaurantType }) => {
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

  }, [allRestaurants?.tenBisData, allRestaurants?.woltData, dispatch])


  const seoObj = {
    title: 'הזמנת אוכל רנודומלית | Whats for Dinner',
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
      <Container />
    </>
  )
};
export default connect()(Home);


export async function getServerSideProps() {
  const { FRONT_URL } = process.env;
  const { data: allRestaurants } = await axios.post(`${FRONT_URL}/api/fetch-restaurant`, {
    cityName: 'tel-aviv'
  });

  return {
    props: {
      allRestaurants
    },
  };
}
