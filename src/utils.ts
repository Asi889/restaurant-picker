// const API_KEY =`AIzaSyDoijedNld5C1N291eOknHfLH4vB18fxtc`;
export const getLatLon = async (cityName: string):Promise<{lat:string, lon:string, address:Address}> => {
    try {
        const response = await fetch(`https://nominatim.openstreetmap.org/search/${cityName}?format=json&addressdetails=1&limit=1`);
        const data = await response.json() as LocationResData[];        
        return { ...data[0] };
    } catch (error) {
        throw new Error('No Lat Lon found');
    }
}

export const slugify = (text: string) => {
    return
    return text.toString().toLowerCase()
        .replace(/\s+/g, '-')           // Replace spaces with -
        .replaceAll('-', '')           // Replace - with nothing
        .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
        .replace(/\-\-+/g, '-')         // Replace multiple - with single -
        .replace(/^-+/, '')             // Trim - from start of text
        .replace(/-+$/, '');            // Trim - from end of text
}

export function isJsonString(str:string) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

export const isWeekPast = (lastScrapeDate: number) => {
    if(!lastScrapeDate) return false;
    const lastWeek =     new Date().setDate(new Date().getDate() - 7)
    return lastWeek > lastScrapeDate;
}
 interface LocationResData {
    place_id: number
    licence: string
    osm_type: string
    osm_id: number
    boundingbox: string[]
    lat: string
    lon: string
    display_name: string
    class: string
    type: string
    importance: number
    address: Address
  }
  
   export interface Address {
    residential: string
    suburb: string
    city: string
    state_district: string
    state: string
    "ISO3166-2-lvl4": string
    country: string
    country_code: string
  }