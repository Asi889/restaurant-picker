import axios from "axios";
import React, { useEffect, useState } from "react";
import { setFiftyRestaurants, setRestaurants, setSelectedRestaurant } from "../src/redux/actions/clienActions";
// import { useDispatch } from "react-redux";
// import Restaurants from  '../components/Restaurants';
import Slots from "../components/Slot";
import { useDispatch } from "react-redux";
import Restaurants from "../components/Restaurants";
import Container from "../components/Container";
import Image from "next/image";
import { FetchRestaurantType, TenBisRestaurant, WoltRestaurant } from "../src/types/FetchRestaurantTyp";
import {getRandomFromArray, set50Restaurants} from '../src/utils';
import {shuffle} from "../src/hooks/shuffle";
import { useStore } from "react-redux";
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
  const dispatch = useDispatch()
  const store = useStore()
  let stat: any
  stat=  store.getState()
  const [selectedRestaurant, selectedRestaurantSet] = useState<any>([]);
  const [allTheRestaurants, allTheRestaurantsSet] = useState<any>({tenbisRestaurants:[],woltRestaurants:[],both:[]});
  const [maxRestaurants, maxRestaurantsSet] = useState<any>([]); // 50 restaurants
  
  
  console.log(allRestaurants);
  console.log("allRestaurants");
  useEffect(() => {
    dispatch(setRestaurants({tenbisRestaurants: allRestaurants?.tenBisData, woltRestaurants: allRestaurants?.woltData, both:[...allRestaurants?.woltData, ...allRestaurants?.tenBisData]}));
    // let maxed= shuffle([...allRestaurants?.woltData, ...allRestaurants?.tenBisData]).filter((restaurant: any, index: number) => index < 50 && restaurant)
    let maxed= shuffle([...allRestaurants?.woltData, ...allRestaurants?.tenBisData]).splice(0,50);
    dispatch(setFiftyRestaurants(maxed))
    // allTheRestaurantsSet({tenbisRestaurants: allRestaurants?.tenBisData, woltRestaurants: allRestaurants?.woltData, both:[...allRestaurants?.woltData, ...allRestaurants?.tenBisData]})    
    // maxRestaurantsSet(shuffle([...allRestaurants?.woltData, ...allRestaurants?.tenBisData]).filter((restaurant: any, index: number) => index < 50 && restaurant))
    

    

  },[allRestaurants?.tenBisData, allRestaurants?.woltData,dispatch])
//   const runOnStart= ()=>{
//     dispatch(setRestaurants({tenbisRestaurants: allRestaurants?.tenBisData, woltRestaurants: allRestaurants?.woltData, both:[...allRestaurants?.woltData, ...allRestaurants?.tenBisData]}));
//     // let maxed= shuffle([...allRestaurants?.woltData, ...allRestaurants?.tenBisData]).filter((restaurant: any, index: number) => index < 50 && restaurant)
//     let maxed= shuffle([...allRestaurants?.woltData, ...allRestaurants?.tenBisData]).splice(0,50);
//     dispatch(setFiftyRestaurants(maxed))

// }
// runOnStart()
  
  
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
