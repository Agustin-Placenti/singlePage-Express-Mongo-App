const mongoose = require('mongoose')

const Schema = mongoose.Schema

const VideoGameSchema = Schema({
    name: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
        min: 0,
      },
      evaluation: {
        type: Number,
        required: true,
        // TODO make theese validations on AddVideoGame inputs
        min: 0,
        max: 10,
      },
      image: {
        type: String,
        // required: true,
      },
}, {
  timestamps: true
})

module.exports = mongoose.model('videogames', VideoGameSchema)