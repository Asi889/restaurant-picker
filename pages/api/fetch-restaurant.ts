import { NextApiRequest, NextApiResponse } from "next";
import { destroyCookie, setCookie } from "nookies";
import { scrapeRestaurants } from "../../backend/fetchRestaurant";
import { LOCATION_COOKIE } from "../../src/consts";

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
  res: NextApiResponse
) {
  const { NODE_ENV } = process.env;
  const { method } = req;

  switch (method) {
    case "POST":
      const cityName = req.body.cityName ?? "telaviv";
      const restaurants = await scrapeRestaurants(cityName);
      destroyCookie({ res }, LOCATION_COOKIE);
      setCookie({ res }, LOCATION_COOKIE, JSON.stringify(cityName), {
        secure: NODE_ENV === "production",
        maxAge: 2592000, //30 days
        httpOnly: true,
        path: "/",
      });
      res.status(200).json(restaurants);

      break;
    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
