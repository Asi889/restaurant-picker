import { NextApiRequest, NextApiResponse } from 'next';
import { scrapeRestaurants } from '../../backend/fetchRestaurant';


/**
 * @swagger
 * /api/fetch-restaurant:
 *   post:
 *     description: Returns the hello world
 *     requestBody:
 *       content:
 *        application/json:
 *         schema:
 *          type: object
 *         properties:
 *         cityName:
 *          type: string
 *         example:
 *          cityName: 'Tel-Aviv'
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
      let { cityName } = req.body ?? 'tel-aviv';
      if(!cityName){
        cityName = 'tel-aviv';
      }
      const restaurants=  await scrapeRestaurants(cityName);
      res.status(200).json(restaurants);

      break;
    default:
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
