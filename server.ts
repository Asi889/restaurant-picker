const scrapeRestaurants = require('./backend/fetchRestaurant');
const woltCities = require('./src/types/ListOfCities');

const cities= woltCities;
cities.forEach((city) => {
  scrapeRestaurants(city.slug);
});