
// v1/pages/restaurants?lat=32.087236876497585&lon=34.78698525756491

import { FetchRestaurantType } from "../src/types/FetchRestaurantTyp";
import { getLatLon, slugify } from "../src/utils";
import { TenBisCities } from "./data/10BisDataByCityName";
import { get10BisRestaurants } from "./scrape/10bis";
import { getWoltRestaurants } from "./scrape/wolt";


export const scrapeRestaurants = async (cityName: string):Promise<FetchRestaurantType> => {
    const slug = slugify(cityName);
    const { lat, lon } = await getLatLon(cityName);
    const tenBisQuery = TenBisCities.find(c => c.slug === slug) || TenBisCities[0];
    let woltData = null
    let tenBisData = null

    if (lat) {
        woltData = await getWoltRestaurants(lat, lon, slug);
    }
    if (tenBisQuery) {
        tenBisData = await get10BisRestaurants(tenBisQuery, slug);
    }

    return {
        city: {
            name: cityName,
            citySlug: slug,
            lat,
            lon
        },
        woltData,
        tenBisData,
    }
}





