
// v1/pages/restaurants?lat=32.087236876497585&lon=34.78698525756491

import { FetchRestaurantType } from "../src/types/FetchRestaurantTyp";
import { getLatLon, slugify } from "../src/utils";
import { TenBisCities } from "../src/types/ListOfCities";
import { get10BisRestaurants, get10ByLatLon } from "./scrape/10bis";
import { getWoltByLatLon, getWoltRestaurants } from "./scrape/wolt";


export const scrapeRestaurants = async (cityName: string): Promise<FetchRestaurantType> => {

    const slug = slugify(cityName);
    const { lat, lon } = await getLatLon(cityName);
    const tenBisQuery = TenBisCities.find(c => c.slug === slug);
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
        woltData: woltData ? woltData : [],
        tenBisData: tenBisData ? tenBisData : [],
    }
}





export const scrapeRestaurantsByLocation = async (location: { lat: number, lon: number }): Promise<FetchRestaurantType> => {

    // const slug = slugify(cityName);
    // const { lat, lon } = location;
    let tenBisData = null

    // if (lat) {
    const woltData = await getWoltByLatLon(location);
    // }
    tenBisData = await get10ByLatLon(location);

    return {
        city: {
            name: 'cityName',
            citySlug: 'slug',
            lat: location.lat.toString(),
            lon: location.lon.toString(),
        },
        woltData: woltData ? woltData : [],
        tenBisData: tenBisData ? tenBisData : [],
    }
}





