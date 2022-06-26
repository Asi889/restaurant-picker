import { NextApiRequest, NextApiResponse } from 'next';
import { woltCities } from '../../backend/data/ListOfCities';
import { scrapeRestaurants } from '../../backend/fetchRestaurant';


/**
 * @swagger
 * /api/create-restaurant:
 *   post:
 *     description: Create All the cities by wolt
 *     requestBody:
 *       content:
 *        application/json:
 *         schema:
 *          type: object
 *         properties:
 *     responses:
 *       200:
 *         description: return created city data  
 */


export default async function fetchRestaurant(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { NODE_ENV } = process.env;
  const { method } = req;
  
  switch (method) {
    case 'POST':
      const cities= woltCities;
      cities.forEach((city) => {
        scrapeRestaurants(city.slug);
      });
      
      res.status(200).json(200);

      break;
    default:
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
