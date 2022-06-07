import { TenBisRestaurant } from "../../src/types/10Bis";
import { WoltRestaurant } from "../../src/types/Wolt";
import { isJsonString, isWeekPast } from "../../src/utils";

const fs = require('fs');
const fsp = require('fs').promises
const TENIS_API = `https://www.10bis.co.il/NextApi/`
//searchRestaurants?shoppingCartGuid=62cdb613-b452-4502-98f2-96cadfe99eab&culture=he-IL&uiCulture=en&isMobileDevice=false&timestamp=1654581284389&deliveryMethod=delivery&cityName=Holon&streetName=Golda+Me%27ir+Street&houseNumber=7&latitude=32.0122878&longitude=34.7794304&cityId=10&streetId=5987&isBigCity=true&addressKey=10-5987-7&locationType=residential
// export const get10BisRestaurants = async (lat: string, lon: string, slug: string): Promise<TenBisRestaurant[]> => {
export const get10BisRestaurants = async (query:LocationQueryParams, slug: string): Promise<any> => {
  const localPath = `./backend/data/10bis-restaurants-${slug}.json`;
  const isFileExists = fs.existsSync(localPath)
  if (isFileExists) {
    const file_data = await fsp.readFile(localPath)
    const json_data = file_data && isJsonString(file_data) ? JSON.parse(file_data) : null

    if (json_data && !isWeekPast(json_data.lastScrapeDate)) {
      return json_data;
    }
  }


  try {
    const searchParams = new URLSearchParams();
    Object.entries(query.queryParam).forEach(([key,value]) => searchParams.append(key, value.toString()));

    const fetchUrl = `${TENIS_API}/searchRestaurants?${searchParams.toString()}`;
    console.log('fetching wolt restaurants', fetchUrl);
    const response = await fetch(fetchUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })

    const data = await response.json();

    console.log('fetching 10bis restaurants', data);
    // const res = [] as WoltRestaurant[];
    const res = data

    if (isFileExists) {
      await fsp.unlink(localPath)
    }

    const dataToSave = JSON.stringify({
      lastScrapeDate: new Date().getTime(),
      fetchUrl,
      restaurants: res,
    }, null, 4);

    fs.writeFile(localPath, dataToSave, { flag: 'wx' }, function (err: any) {
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
interface LocationQueryParams {
  name: string;
  slug: string;
  queryParam: {
      shoppingCartGuid: string;
      culture: string;
      uiCulture: string;
      isMobileDevice: boolean;
      timestamp: number;
      deliveryMethod: string;
      cityId: number;
      streetId: number;
      houseNumber: number;
      addressKey: string;
  };
}