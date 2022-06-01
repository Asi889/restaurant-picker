import axios from 'axios';
import { useEffect, useState } from 'react';
import { setRestaurants } from '../src/redux/actions/clienActions';
// import { useDispatch } from "react-redux";
import Restaurants from  '../components/Restaurants'
import {useDispatch} from 'react-redux';


export default function Home({allRestaurants}: any) {

// const [restaurants, setRestaurants] = useState([]);
const dispatch = useDispatch();

// console.log(allRestaurants);
useEffect(()=>{
  dispatch(setRestaurants(allRestaurants))
  // console.log("1");
},[])

  return (
    <div>
      <Restaurants />
    </div>
  )
}


export async function getServerSideProps() {
  
    const  { data: all_restaurants } = await axios.get('http://localhost:3009/all-restaurants')
 
  return {
    props: {
     
      allRestaurants: all_restaurants,
    },
  };
}
