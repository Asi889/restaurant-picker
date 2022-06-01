import { useEffect, useState } from "react";
import { useSelector } from "react-redux";


export default function Restaurants() {
    const [restaurantsAll, setRestaurantsAll] = useState([])
    const restaurant_data = useSelector(state => state?.allRestaurants?.restaurants);
    console.log(restaurant_data);
    console.log("restaurant_data");
    useEffect(() => {
        setRestaurantsAll(restaurant_data)
    }, [restaurant_data])

    return (
        <div>
            {restaurantsAll && restaurantsAll.map((restaurant, index) => (
                <div className="shubi" key={index}>
                    {restaurant.title}
                </div>
            ))}
            yoyoy 222
        </div>
    )
}