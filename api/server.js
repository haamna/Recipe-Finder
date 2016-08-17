// initialise express in project
var express = require('express');
var bodyParser = require('body-parser');
var request = require('request'); 
// run Express
var app = express();
//requiring the mongoose model from models/recipes.js
// var Recipe = require('./models/Recipes');
var init = require('./Routes/init');

// telling/giving external browsers to get the whole app (not just one html page) upon the request they send to the server (as it's angular its a spa).
app.use(express.static(__dirname + '/app/'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


// start express on port 8080
app.listen(8080, function() {
	console.log('Server Started on http://localhost:8080');
	console.log('Press CTRL + C to stop server');

// create API endpoint with GET request
app.get('/', function(req,res){
	res.send('This is a TestBot Server');
});

// Facebook Webhook
app.get('/webhook', function(req,res){
	if (req.query['hub.verify_token']==='testbot_verify_token'){
		res.send(req.query['hub.challenge']);
	}else {
		res.send('Invalid verify token');
	}
});

// create instance of Mongoose and connect to our local / MongoDB database at the directory specified earlier
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/recipe-finder');
// log to console any errors or successful connection
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	console.log("Connected to db at /data/db")
});











});
