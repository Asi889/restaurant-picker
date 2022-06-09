import axios from "axios";
import React, { useEffect, useState } from "react";
import { setRestaurants } from "../src/redux/actions/clienActions";
// import { useDispatch } from "react-redux";
// import Restaurants from  '../components/Restaurants';
import Slots from "../components/Slot";
import { useDispatch } from "react-redux";
import Restaurants from "../components/Restaurants";
import Container from "../components/Container";
import Image from "next/image";
interface IUser {
  name: string;
}
type Props = {
  state: Array<object>;
};


const Home: React.FC<Props> = ({ allRestaurants }: any) => {
  const dispatch = useDispatch();
  const [selectedRestaurant, selectedRestaurantSet] = useState<any>([]);
  
  const setRandomRestaurant = () => {
    let randomIndex: any = "";
    randomIndex = Math.floor(Math.random() * allRestaurants.sections[1].items.length);
    selectedRestaurantSet(allRestaurants.sections[1].items[randomIndex]);
  };

  return <Container allRestaurants={allRestaurants} setRandomRestaurant={setRandomRestaurant} selectedRestaurant={selectedRestaurant} /> 
};
export default Home;

// export async function getServerSideProps() {
  
//     const  { data: all_restaurants } = await axios.get('http://localhost:3009/all-restaurants')
 
//   return {
//     props: {
     
//       allRestaurants: all_restaurants,
//     },
//   };
// }
