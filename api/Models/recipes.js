var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema (for individual recipe)
// var recipeSchema = ;

// create a model for using schema
var Recipe = mongoose.model('Recipe', new Schema({
	Title: {
		type: String,
		required: true
	},
	imageurl: {
		type: String,
		required: true
	},	 
	url: {
		type: String,
		required: true
	},
	one: {
		type: String,
	},
	two:{
		type: String,
	},
	three:{
		type: String,
	}	
}));

// making it available to Node applications
module.exports = Recipe;
