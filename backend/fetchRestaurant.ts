import { getLatLon, slugify } from "./utils";
const fs = require('fs');
const fsp = require('fs').promises

const WOLT_API = `https://restaurant-api.wolt.com`
interface WoltRestaurant {
    description?: string
    image: string
    title: string
    track_id: string
    name: string;

    address: string;
    venue_id: string;
    location: [string, string];
    short_description: string;
    slug: string;
    tags: string[];

}
// v1/pages/restaurants?lat=32.087236876497585&lon=34.78698525756491

const getWoltRestaurants = async (lat: string, lon: string, cityName: string): Promise<WoltRestaurant[]> => {
    const slug = slugify(cityName);
    const localPath = `./backend/data/wolt-restaurants-${slug}.json`
    if (fs.existsSync(localPath)) {
        const file_data = await fsp.readFile(localPath)
        const json_data = file_data ? JSON.parse(file_data) : null

        if (json_data && json_data?.length) {
            return json_data;
        }
    }

    console.log('fetching wolt restaurants');

    try {
        const response = await fetch(`${WOLT_API}/v1/pages/restaurants?lat=${lat}&lon=${lon}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })

        const data = await response.json();
        const res = [] as WoltRestaurant[];
        data.sections.forEach((section: any) => {

            section.items?.forEach((item: any) => {
                if (item.venue) {
                    res.push({
                        description: item.description,
                        image: item.image?.url,
                        title: item.title,
                        name: item.name,
                        track_id: item.track_id,
                        address: item.venue.address,
                        venue_id: item.venue.id,
                        location: item.venue.location,
                        short_description: item.venue.short_description,
                        slug: item.venue.slug,
                        tags: item.venue.tags,
                    });
                }
            });
        });

        fs.writeFile(localPath, data, { flag: 'wx' }, function (err:any) {
            if (err) throw err;
            console.log("It's saved!");
        });
        return res

    } catch (error) {
        console.log(error);
        
        console.log('NO WOLT RESTAURANTS FOUND');

        return []
    }

}
export const scrapeRestaurants = async (cityName: string) => {
    const { lat, lon } = await getLatLon(cityName);

    const woltData = await getWoltRestaurants(lat, lon, cityName);

    console.log(woltData.length);
    return {
        city: {
            name: cityName,
            lat,
            lon
        },
        woltData
    }
}



export interface Image {
    blurhash: string
    url: string
    variants: string[]
}


interface Sorting {
    sortables: Sortable[]
}

interface Sortable {
    id: string
    value: number
}

interface Venue {
    address: string
    badges: Badge[]
    categories: any[]
    city: string
    currency: string
    delivers: boolean
    delivery_price: string
    delivery_price_highlight: boolean
    delivery_price_int: number
    estimate: number
    estimate_range: string
    franchise: string
    id: string
    location: number[]
    name: string
    online: boolean
    price_range: number
    product_line: string
    short_description: string
    show_wolt_plus: boolean
    slug: string
    tags: string[]
}

interface Badge {
    text: string
    variant: string
}






