var Recipe = require('../Models/recipes');
var newRecipe = Recipe({
  title: "Fresh herb infused Quinoa Salad",
  imageUrl: "http://cleanfoodcrush.com/wp-content/uploads/2016/08/Fresh-herb-infused-Quinoa-Salad.jpg",
  url: "http://cleanfoodcrush.com/herb-quinoa-salad/",
  intent: "gf_lunch_salad",
  one: "Gluten Free",
  two: "Lunch",
  three: "Salad",
});
// saving newly created recipe in the database
newRecipe.save(function(err) {
  if (err) {
    console.log(err)
  } else {
    console.log("Fresh herb infused Quinoa Salad")
  }
});

var newRecipe = Recipe({
  title: "Veggie and Hummus Sandwich",
  imageUrl: "http://www.cookingclassy.com/wp-content/uploads/2016/04/veggie_hummus_sandwich9.-1.jpg",
  url: "http://www.cookingclassy.com/2016/04/veggie-hummus-sandwich",
  intent: "veg_lunch_sw",
  one: "Vegetarian",
  two: "Lunch",
  three: "Sandwichs",
});
newRecipe.save(function(err) {
  if (err) {
    console.log(err)
  } else {
    console.log("Veggie and Hummus Sandwich")
  }
});

var newRecipe = Recipe({
  title: "Teriyaki Chicken Lettuce Wraps",
  imageUrl: "http://www.cookingclassy.com/wp-content/uploads/2016/05/honey_teriyaki_chicken_lettuce_wraps2...jpg",
  url: "http://www.cookingclassy.com/2016/05/teriyaki-chicken-lettuce-wraps/",
  intent: "gf_dinner_protein",
  one: "Gluten Free",
  two: "Dinner",
  three: "Protein",
});
newRecipe.save(function(err) {
  if (err) {
    console.log(err)
  } else {
    console.log("Teriyaki Chicken Lettuce Wraps")
  }
});

var newRecipe = Recipe({
  title: "Veggie Hummus Cucumber Boats",
  imageUrl: "http://www.skinnytaste.com/wp-content/uploads/2016/07/Cucumber-Hummus-Boats-5.jpg",
  url: "http://www.skinnytaste.com/veggie-hummus-cucumber-boats/",
  intent: "vegan_snack_appetiser",
  one: "Vegan",
  two: "Snacks/Sides",
  three: "Appetisers",
});
newRecipe.save(function(err) {
  if (err) {
    console.log(err)
  } else {
    console.log("Veggie Hummus Cucumber Boats")
  }
});

var newRecipe = Recipe({
  title: "Vegan Strawberry Ice Cream",
  imageUrl: "http://farm5.static.flickr.com/4134/4790116046_636315d3b5.jpg",
  url: "http://www.davidlebovitz.com/vegan-strawberry-ice-cream-recipe/",
  intent: "vegan_dessert_frozentreats",
  one: "Vegan",
  two: "Dessert",
  three: "Frozen Treats",
});
newRecipe.save(function(err) {
  if (err) {
    console.log(err)
  } else {
    console.log("Vegan Strawberry Ice Cream")
  }
});

var newRecipe = Recipe({
  title: "Chopped Power Salad with Creamy Parsley Dressing",
  imageUrl: "http://meaningfuleats.com/wp-content/uploads/2014/04/IMG_30361.jpg",
  url: "http://meaningfuleats.com/chopped-power-salad-with-creamy-parsley-dressing-gluten-free-dairy-free/",
  intent: "gf_lunch_salad",
  one: "Gluten Free",
  two: "Lunch",
  three: "Salad",
});
newRecipe.save(function(err) {
  if (err) {
    console.log(err)
  } else {
    console.log("Chopped Power Salad with Creamy Parsley Dressing")
  }
});

var newRecipe = Recipe({
  title: "Healthy 5 Ingredient Granola Bars",
  imageUrl: "http://cdn.minimalistbaker.com/wp-content/uploads/2013/05/5-Ingredient-Granola-Bars-MinimalistBaker.com_.jpg",
  url: "http://minimalistbaker.com/healthy-5-ingredient-granola-bars/",
  intent: "vegan_snack_bar",
  one: "vegan",
  two: "snacks/sides",
  three: "bars/slices",
});
newRecipe.save(function(err) {
  if (err) {
    console.log(err)
  } else {
    console.log("Healthy 5 Ingredient Granola Bars")
  }
});

var newRecipe = Recipe({
  title: "Nutella Peanut Butter Cups",
  imageUrl: "http://67.media.tumblr.com/1f40553f455586801b853e3898fee49f/tumblr_inline_nnxn6wM0X01tovgdd_500.jpg",
  url: "http://thenutellanut.tumblr.com/post/118304644487/nutella-peanut-butter-cups",
  intent: "gf_dessert_bars",
  one: "Gluten Free",
  two: "Dessert",
  three: "Bars/Slices",
});
newRecipe.save(function(err) {
  if (err) {
    console.log(err)
  } else {
    console.log("Nutella Peanut Butter Cups")
  }
});

var newRecipe = Recipe({
  title: "Nutella and Banana Pancakes",
  imageUrl: "http://67.media.tumblr.com/32712463ee95610f226d66ebda97d84a/tumblr_inline_npbdhe7gZ11tovgdd_500.jpg",
  url: "http://thenutellanut.tumblr.com/post/120523356324/nutella-and-banana-pancakes",
  intent: "gf_breakfast_pancakes",
  one: "Gluten Free",
  two: "Breakfast",
  three: "Pancakes",
});
newRecipe.save(function(err) {
  if (err) {
    console.log(err)
  } else {
    console.log("Nutella and Banana Pancakes")
  }
});

var newRecipe = Recipe({
  title: "2 Ingredient Nutella Brownies",
  imageUrl: "http://67.media.tumblr.com/18d163c19d82a202cdbb725b106d3cd2/tumblr_inline_no1juu3bij1tovgdd_500.jpg",
  url: "http://thenutellanut.tumblr.com/post/118458861076/2-ingredient-nutella-brownies",
  intent: "gf_dessert_bars",
  one: "Gluten Free",
  two: "Dessert",
  three: "Bars/Slices",
});
newRecipe.save(function(err) {
  if (err) {
    console.log(err)
  } else {
    console.log("2 Ingredient Nutella Brownies")
  }
});

var newRecipe = Recipe({
  title: "Double Crunch Peanut Butter And Chocolate Chip Fudge",
  imageUrl: "https://i0.wp.com/wholefoodsimply.com/wp-content/uploads/2016/05/double-crunch-PB-choc-chip-fudge.jpg?w=819&ssl=1",
  url: "",
  intent: "veg_side_bar",
  one: "vegetarian",
  two: "snacks/sides",
  three: "Bars/Slices",
});
newRecipe.save(function(err) {
  if (err) {
    console.log(err)
  } else {
    console.log("Double crunch peanut butter and chocolate chip fudge")
  }
});




// model.exports = router;