const mongoose = require('mongoose')
const Schema = mongoose.Schema

const restaurantSchema = new Schema({
  title: String,
  score: [String],
  address: {
    primary: String,
    secondery: String
  },
  categories: [String],
  location: String,
  img: String
})

const Type = mongoose.model('restaurant', restaurantSchema)
module.exports = Type


