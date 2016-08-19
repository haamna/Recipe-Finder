var Recipe = require('../Models/recipes');
var newRecipe = Recipe (
 	{
 		title : "Fresh herb infused Quinoa Salad",
 		imageurl: "http://cleanfoodcrush.com/wp-content/uploads/2016/08/Fresh-herb-infused-Quinoa-Salad.jpg",
 		url: "http://cleanfoodcrush.com/herb-quinoa-salad/",
 		one: "Gluten Free",
 		two: "Lunch",
 		three: "Salad",
 	}
 );
// saving newly created recipe in the database
newRecipe.save(function(err){
	if (err) {
		console.log(err)
	} else {
		console.log("Recipe Added")
	}
});

var newRecipe = Recipe (
	{
		title : "Veggie and Hummus Sandwich",
 		imageurl: "http://www.cookingclassy.com/wp-content/uploads/2016/04/veggie_hummus_sandwich9.-1.jpg",
 		url: "http://www.cookingclassy.com/2016/04/veggie-hummus-sandwich/",
 		one: "Vegetarian",
 		two: "Lunch",
 		three: "Sandwichs",
 	}
 );
newRecipe.save(function(err){
	if (err) {
		console.log(err)
	} else {
		console.log("Recipe Added")
	}
});

var newRecipe = Recipe (
	{
		title : "Teriyaki Chicken Lettuce Wraps",
 		imageurl: "http://www.cookingclassy.com/wp-content/uploads/2016/05/honey_teriyaki_chicken_lettuce_wraps2...jpg",
 		url: "http://www.cookingclassy.com/2016/05/teriyaki-chicken-lettuce-wraps/",
 		one: "Gluten Free",
 		two: "Dinner",
 		three: "Protein",
 	}
 );
newRecipe.save(function(err){
	if (err) {
		console.log(err)
	} else {
		console.log("Recipe Added")
	}
});

var newRecipe = Recipe (
	{
		title : "Veggie Hummus Cucumber Boats",
 		imageurl: "http://www.skinnytaste.com/wp-content/uploads/2016/07/Cucumber-Hummus-Boats-5.jpg",
 		url: "http://www.skinnytaste.com/veggie-hummus-cucumber-boats/",
 		one: "Vegan",
 		two: "Snacks/Sides",
 		three: "Appetisers",
 	}
 );
newRecipe.save(function(err){
	if (err) {
		console.log(err)
	} else {
		console.log("Recipe Added")
	}
});

var newRecipe = Recipe (
	{
		title : "Vegan Strawberry Ice Cream",
 		imageurl: "http://farm5.static.flickr.com/4134/4790116046_636315d3b5.jpg",
 		url: "http://www.davidlebovitz.com/vegan-strawberry-ice-cream-recipe/",
 		one: "Vegan",
 		two: "Dessert",
 		three: "Frozen Treats",
 	}
 );
newRecipe.save(function(err){
	if (err) {
		console.log(err)
	} else {
		console.log("Recipe Added")
	}
});

var newRecipe = Recipe (
	{
		title : "Chopped Power Salad with Creamy Parsley Dressing",
 		imageurl: "http://meaningfuleats.com/wp-content/uploads/2014/04/IMG_30361.jpg",
 		url: "http://meaningfuleats.com/chopped-power-salad-with-creamy-parsley-dressing-gluten-free-dairy-free/",
 		one: "GLuten Free",
 		two: "Lunch",
 		three: "Salad",
 	}
 );
newRecipe.save(function(err){
	if (err) {
		console.log(err)
	} else {
		console.log("Recipe Added")
	}
});

var newRecipe = Recipe (
	{
		title : "Healthy 5 Ingredient Granola Bars",
 		imageurl: "http://cdn.minimalistbaker.com/wp-content/uploads/2013/05/5-Ingredient-Granola-Bars-MinimalistBaker.com_.jpg",
 		url: "http://minimalistbaker.com/healthy-5-ingredient-granola-bars/",
 		one: "",
 		two: "",
 		three: "",
 	});
newRecipe.save(function(err){
	if (err) {
		console.log(err)
	} else {
		console.log("Recipe Added")
	}
});

var newRecipe = Recipe (
	{
		title : "Nutella Peanut Butter Cups",
 		imageurl: "http://67.media.tumblr.com/1f40553f455586801b853e3898fee49f/tumblr_inline_nnxn6wM0X01tovgdd_500.jpg",
 		url: "http://thenutellanut.tumblr.com/post/118304644487/nutella-peanut-butter-cups",
 		one: "Gluten Free",
 		two: "Dessert",
 		three: "Bars/Slices",
 	}
 );
newRecipe.save(function(err){
	if (err) {
		console.log(err)
	} else {
		console.log("Recipe Added")
	}
});

var newRecipe = Recipe (
	{
		title : "Nutella and Banana Pancakes",
 		imageurl: "http://67.media.tumblr.com/32712463ee95610f226d66ebda97d84a/tumblr_inline_npbdhe7gZ11tovgdd_500.jpg",
 		url: "http://thenutellanut.tumblr.com/post/120523356324/nutella-and-banana-pancakes",
 		one: "Gluten Free",
 		two: "Breakfast",
 		three: "Pancakes",
 	}
 );
newRecipe.save(function(err){
	if (err) {
		console.log(err)
	} else {
		console.log("Recipe Added")
	}
});

var newRecipe = Recipe (
	{
		title : " 2 Ingredient Nutella Brownies",
 		imageurl: "http://67.media.tumblr.com/18d163c19d82a202cdbb725b106d3cd2/tumblr_inline_no1juu3bij1tovgdd_500.jpg",
 		url: "http://thenutellanut.tumblr.com/post/118458861076/2-ingredient-nutella-brownies",
 		one: "Gluten Free",
 		two: "Dessert",
 		three: "Bars/Slices",
 	}
 );
newRecipe.save(function(err){
	if (err) {
		console.log(err)
	} else {
		console.log("Recipe Added")
	}
});




// model.exports = router;		

