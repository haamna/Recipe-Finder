// initialise express in project
var express = require('express');
var bodyParser = require('body-parser');
var request = require('request'); 
// run Express
var app = express();
//requiring the mongoose model from models/recipes.js
var Recipe = require('./models/Recipes');
var init = require('./Routes/init');

//giving external browsers the whole app (not just one html page) upon the request they send to the server (as it's angular its an spa)
app.use(express.static(__dirname + '/app/'));
// process application
app.use(bodyParser.urlencoded({extended: false}));
// process application/json
app.use(bodyParser.json());

var PAGE_ACCESS_TOKEN = 'EAAD66wWseoIBAAZB5t8GCdlG5j2XOw6b9iEwAB4DYlaUUZBLk68JE3mGkmEz7ZAG7bIP1SELAZBHcJv4gAzvUywsvYCThvk0Oj6y5vKjyP1vyUxyC0IovOctLpZA6RqBEBax5XnH9JnLdmz1hR5oCwxRpgquTj1ZCfDTt5j4nbEAZDZD';
// start express on port 8080 (spin up Server)
app.listen(process.env.PORT || 8080, function() {
	console.log('Server Started on http://localhost:8080');
	console.log('Press CTRL + C to stop server');

// app.get('/', function(req,res){
// 	res.send('This is a testBot')
// });

// Facebook Webhook (facebook verification)
app.get('/', function(req,res){
	if (req.query['hub.verify_token']==='recipefinder_verify_token'){
		res.send(req.query['hub.challenge']);
	} else {
		res.send('Invalid verify token, make sure the validation tokens match');
	}
});
// Receiving messages - listening for POST callbacks at our webhook, all callbacks will be made to this webhook
app.post('/webhook', function(req,res){
	var data = req.body;
	// checking that request is coming from fb page itself
	if (data.object =='page'){
	// iterate over each entry (the user messages coming in,in packets of data / iterate over each messaging event - the actual text message
	data.entry.forEach(function(pageEntry){
		pageEntry.mesaging.forEach(function(messagingEvent){
			var events = req.body.entry[0].messaging;
			for (i=0; i < events.length; i++) {
				var event = events[i];
				if (event.message && event.message.text) {
					// send to api.ai
					var text = messagingEvent.message.text;
					apiAiService
					.getIntent(text)
					.then function(intent){
						// go to dababase and fetch recipe belonging to that intent
						var recipes = Recipes.find({"intent":intent}, function(err, recipe){
							if (err){
								console.log(err);
							} else {
								console.log(recipe)
							}))

						}
							
						if (recipes) {
							// send button or card message


						} else {
							sendTextMessage(senderID, 'no recipes found');
						}

						console.log('apiai intent: ')
						sendResponse(intent, sender, event)
					};
				}
			}
		})
	})





	
	
		

				// var recipientID = messagingEvent.recipient.id;

				
				var senderID = messagingEvent.sender.id;
				Recipe.find({
					'intent': 
				})
				.then(function (record) {
					sendGenericResponse(senderID, title, desc, imageUrl, url);
				});
				// sendTextMessage(senderID, 'hello from bot');


				// sendGenericResponse(senderID, title, desc, imageUrl, url);
			// 	if (messagingEvent.optin){
			// 		receivedAuthentication(messagingEvent);	
			// 	} else if (messagingEvent.message) {
			// 		receivedMessage(messagingEvent);
			// 	} else if (messagingEvent.delivery) {
			// 		receivedDeliveryConfirmation(messagingEvent);
			// 	} else if (messagingEvent.postback) {
			// 		receivedPostback(messagingEvent);
			// 	} else {
			// 		console.log("Webhook received unknown messagingEvent: ", messagingEvent);
			// 	}
			});
		 });
		// assuming all went well need to send back a 200 within 20 seconds, to let us know you've succesfully received the callback.  Otherwise the request will time out.
		res.sendStatus(200);
	}
});

// create instance of Mongoose and connect to our local / MongoDB database at the directory specified earlier
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/recipe-finder');
// log to console any errors or successful connection
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	console.log("Connected to db at /data/db")
});

});
// json format - for plain text msg - what sends to user
function sendTextMessage(recipientId, messageText) {
  var messageData = {
    recipient: {
      id: recipientId
    },
    message: {
      text: messageText
    }
  };

  callSendAPI(messageData);
}

function callSendAPI(messageData) {
  request({
    uri: 'https://graph.facebook.com/v2.6/me/messages',
    qs: { access_token: PAGE_ACCESS_TOKEN },
    method: 'POST',
    json: messageData

  }, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var recipientId = body.recipient_id;
      var messageId = body.message_id;

      console.log("Successfully sent generic message with id %s to recipient %s", 
        messageId, recipientId);
    } else {
      console.error("Unable to send message.");
      console.error(response);
      console.error(error);
    }
  });  
}