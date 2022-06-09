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

export async function getServerSideProps() {
  // const  { data: all_restaurants } = await axios.get('http://localhost:3009/all-restaurants')
  const { data: all_restaurants } = await axios.get(
    "https://restaurant-api.wolt.com/v1/pages/restaurants?lat=32.087236876497585&lon=34.78698525756491"
  );
  // const  { data: all_restaurants } = await axios.get('https://www.10bis.co.il/NextApi/searchRestaurants?shoppingCartGuid=c79f120a-5d27-4071-8d8d-4bc9b119bf1f&culture=he-IL&uiCulture=he&isMobileDevice=false&timestamp=1654159780356&deliveryMethod=delivery&cityName=%D7%AA%D7%9C+%D7%90%D7%91%D7%99%D7%91-%D7%99%D7%A4%D7%95&streetName=%D7%A9%D7%A8%D7%99%D7%A8%D7%90+%D7%92%D7%90%D7%95%D7%9F&houseNumber=17&latitude=32.0464866&longitude=34.763086&cityId=24&streetId=8201&isBigCity=true&addressKey=24-8201-17&locationType=residential')

  return {
    props: {
      allRestaurants: all_restaurants,
    },
  };
}
