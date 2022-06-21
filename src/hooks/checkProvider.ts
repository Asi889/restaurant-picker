import {store} from '../redux/store';
import { setFiftyRestaurants, setSelectedRestaurant } from "../redux/actions/clienActions";
import { shuffle } from "./shuffle";
import { getRandomFromArray } from "../utils";
import { StateProp } from "../types/FetchSubRestaurantTypes";
import { TenBisRestaurant } from '../types/FetchRestaurantTyp';
import { useStore } from 'react-redux';
import { myImageLoader } from './myImageLoader';


export function checkProvider () {
    // const store = useStore();
    // let stat: any;
    // stat = store.getState();
    // const splitandtrim = (string: string) => {
    //     let splited = string.split("|");
    //     return splited[0].trim();
    //   };
    // const provider = stat?.restaurants.selectedRestaurant.provider;
    // const providerFind =
    //   stat?.restaurants.selectedRestaurant.provider === "wolt"
    //     ? "tenbisRestaurants"
    //     : "woltRestaurants";
    // const otherProvider = stat.restaurants.allRestaurants[providerFind].find(
    //   (restaurant: TenBisRestaurant) =>
    //     restaurant.name ===
    //     splitandtrim(stat?.restaurants.selectedRestaurant.name)
    // );
    // // debugger
    // return(
    //     <>
    //     </>
    // )
    // return(
    //     <div>
    // )
}