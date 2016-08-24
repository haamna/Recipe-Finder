var router = require('express').Router();
// get all records
router.get('/', function(req,res){
	Recipe.find({}, function(err, objectsArray){
		if (err) {
			console.log(err);
			res.status(400)
			.json({err:err});
		} else {
			res.json(objectsArray);
		}
	});

});

// get a specific record by ID
router.get('/:recipeId',function(req,res){
	Recipe.findOne({"_id":req.params.objectId}, function(err,object){
		if(err){
			console.log(err);
			res.status(400)
			   .json({err:err})
		}
		else{
			res.json(object)
		}
	})
});

// adding new data
router.post('/', function(req,res){
	var object = req.body;
	var newObject = Model(object);
	newObject.save(function(err){
		if(err){
			console.log(err);
			res.status(400)
			   .json({err:err})
		}
		else{
			res.json(object)
		}
	})
});

router.put('/:', function(req, res){

});

router.delete('/:', function(req,res){
	res.send('')

});