import { WoltRestaurant } from "../../src/types/FetchRestaurantTyp";
import { isJsonString, isWeekPast } from "../../src/utils";

const fs = require('fs');
const fsp = require('fs').promises
const WOLT_API = `https://restaurant-api.wolt.com`

export const getWoltRestaurants = async (lat: string, lon: string, slug: string): Promise<WoltRestaurant[]> => {
    const localPath = `./backend/data/wolt-restaurants-${slug}.json`;
    const isFileExists = fs.existsSync(localPath)
    if (isFileExists) {
        const file_data = await fsp.readFile(localPath)
        const json_data = file_data && isJsonString(file_data) ? JSON.parse(file_data) : null

        if (json_data && !isWeekPast(json_data.lastScrapeDate) && json_data.restaurants) {
          return json_data.restaurants;
        }
    }

    
    try {
        const fetchUrl = `${WOLT_API}/v1/pages/restaurants?lat=${lat}&lon=${lon}`;
        console.log('fetching wolt restaurants' ,fetchUrl );
        const response = await fetch(fetchUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })

        const data = await response.json() as Root;
        
        console.log('fetching wolt restaurants' ,fetchUrl );

        const res = [] as WoltRestaurant[];
        data.sections.forEach((section) => {

            section.items?.forEach((item) => {
                if (item.venue) {
                    res.push({
                        description: item.description,
                        image: item.image?.url ?? '',
                        title: item.title,
                        name: item.venue.name,
                        track_id: item.track_id,
                        address: item.venue.address,
                        venue_id: item.venue.id,
                        location: item.venue.location,
                        short_description: item.venue.short_description ?? '',
                        slug: item.venue.slug,
                        tags: item.venue.tags,
                        link:{
                            url:`https://wolt.com/en/isr/${data.city ? data.city : slug}/venue/${item.venue.slug}`,
                        }
                    });
                }
            });
        });
        if(isFileExists){
            await fsp.unlink(localPath)
        }

        const dataToSave = JSON.stringify({
            lastScrapeDate: new Date().getTime(),
            fetchUrl,
            restaurants: res,
        },null,4);

        fs.writeFile(localPath,  dataToSave, { flag: 'wx' }, function (err:any) {
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







// TYPESCRIPT OF JSON 
export interface Root {
    city: string
    city_data: CityData
    configuration_debug: ConfigurationDebug
    created: Created
    expires_in_seconds: number
    name: string
    page_title: string
    sections: Section[]
    show_large_title: boolean
    show_map: boolean
    track_id: string
  }
  
  export interface CityData {
    country_code_alpha2: string
    country_code_alpha3: string
    has_frontpage: boolean
    location: Location
    name: string
    slug: string
  }
  
  export interface Location {
    coordinates: number[]
    type: string
  }
  
  export interface ConfigurationDebug {
    a: number
    b: number
  }
  
  export interface Created {
    $date: number
  }
  
  export interface Section {
    items: Item[]
    link: Link2
    name: string
    template: string
    title?: string
  }
  
  export interface Item {
    description?: string
    image?: Image
    link: Link
    quantity_str?: string
    template: string
    title: string
    track_id: string
    category?: string
    filtering?: Filtering
    sorting?: Sorting
    venue?: Venue
    overlay?: string
    quantity?: number
  }
  
  export interface Image {
    blurhash: string
    url: string
    variants: string[]
  }
  
  export interface Link {
    target: string
    target_sort: string
    target_title: string
    title: string
    type: string
    venue_mainimage_blurhash?: string
  }
  
  export interface Filtering {
    filters: Filter[]
  }
  
  export interface Filter {
    id: string
    values: string[]
  }
  
  export interface Sorting {
    sortables: Sortable[]
  }
  
  export interface Sortable {
    id: string
    value: number
  }
  
  export interface Venue {
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
    rating?: Rating
    short_description: string
    show_wolt_plus: boolean
    slug: string
    tags: string[]
  }
  
  export interface Badge {
    text: string
    variant: string
  }
  
  export interface Rating {
    rating: number
    score: number
  }
  
  export interface Link2 {
    target: string
    target_sort: string
    target_title: string
    title: string
    type: string
  }
  