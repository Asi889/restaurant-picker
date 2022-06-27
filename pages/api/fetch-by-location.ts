import { NextApiRequest, NextApiResponse } from "next";
import { destroyCookie, setCookie } from "nookies";
import { scrapeRestaurantsByLocation } from "../../backend/fetchRestaurant";
import { LAT_LON_COOKIE, LOCATION_COOKIE } from "../../src/consts";

/**
 * @swagger
 * /api/fetch-by-location:
 *   post:
 *     description: Returns the hello world
 *     requestBody:
 *       content:
 *        application/json:
 *         schema:
 *          type: object
 *         properties:
 *         location:
 *          type: object
 *         example:
 *          location: {lat: 32.0803408, lon: 34.7806387}
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
      const location = req.body.location;
      if(!location || !location.lat || !location.lon) {
        res.status(400).json({error: "Missing location"});
        return;
      }
      
      const restaurants = await scrapeRestaurantsByLocation(location);
      destroyCookie({ res }, LAT_LON_COOKIE);
      setCookie({ res }, LAT_LON_COOKIE, JSON.stringify(location), {
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
