import axios from "axios";
import React, { useEffect, useState } from "react";
import { setRestaurants, setSelectedRestaurant1 } from "../src/redux/actions/clienActions";
// import { useDispatch } from "react-redux";
// import Restaurants from  '../components/Restaurants';
import Slots from "../components/Slot";
import { useDispatch } from "react-redux";
import Restaurants from "../components/Restaurants";
import Container from "../components/Container";
import Image from "next/image";
import { FetchRestaurantType, TenBisRestaurant, WoltRestaurant } from "../src/types/FetchRestaurantTyp";
import {getRandomFromArray, set50Restaurants} from '../src/utils'
interface IUser {
  name: string;
}
type Props = {
  state: Array<object>;
};
type AllResObj = {
  tenBisRestaurants: TenBisRestaurant[];
  woltRestaurants: WoltRestaurant[];
}


const Home = ({ allRestaurants }: {allRestaurants:FetchRestaurantType}) => {
  // const dispatch = useDispatch(setSelectedRestaurant1(allRestaurants.tenBisData[0]));

  const [selectedRestaurant, selectedRestaurantSet] = useState<any>([]);
  const [allTheRestaurants, allTheRestaurantsSet] = useState<any>({tenbisRestaurants:[],woltRestaurants:[]});
  const [maxRestaurants, maxRestaurantsSet] = useState<any>([]); // 50 restaurants

  
useEffect(() => {
    allTheRestaurantsSet({tenbisRestaurants: allRestaurants?.tenBisData, woltRestaurants: allRestaurants?.woltData})
    maxRestaurantsSet(allRestaurants?.woltData.filter((restaurant: any, index: number) => index < 50 && restaurant))
  
},[ allRestaurants])
  
  
  return <Container allTheRestaurants={allTheRestaurants} selectedRestaurantSet={selectedRestaurantSet} selectedRestaurant={selectedRestaurant} maxRestaurantsSet={maxRestaurantsSet} maxRestaurants={maxRestaurants} />
};
export default Home;


export async function getServerSideProps() {
  const { FRONT_URL } = process.env;
  const { data: allRestaurants } = await axios.post(`${FRONT_URL}/api/fetch-restaurant`, {
    cityName:'tel-aviv'
  }); 

  return {
    props: {
      allRestaurants
    },
  };
}
