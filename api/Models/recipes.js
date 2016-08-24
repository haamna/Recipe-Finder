var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a model for using schema
var Recipe = mongoose.model('Recipe', new Schema({
  title: {
    type: String,
    required: true
  },
  imageurl: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true,
    unique: true
  },
  intent: {
    type: String,
    required: true
  },
  one: {
    type: String,
  },
  two: {
    type: String,
  },
  three: {
    type: String,
  }
}));

// making it available to node applications
module.exports = Recipe;