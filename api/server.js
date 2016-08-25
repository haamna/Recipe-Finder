// initialise express in project
var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
// run Express
var app = express();
//requiring the mongoose model from models/recipes.js
var Recipes = require('./Models/recipes');
// var init = require('./Routes/init');
var apiAiService = require('./Services/apiaiservice.js');
var apiai = require('apiai');

//giving external browsers the whole app (not just one html page) upon the request they send to the server (as it's angular its an spa)
app.use(express.static(__dirname + '/app/'));
// process application
app.use(bodyParser.urlencoded({ extended: false }));
// process application/json
app.use(bodyParser.json());

var PAGE_ACCESS_TOKEN = 'EAAD66wWseoIBAAZB5t8GCdlG5j2XOw6b9iEwAB4DYlaUUZBLk68JE3mGkmEz7ZAG7bIP1SELAZBHcJv4gAzvUywsvYCThvk0Oj6y5vKjyP1vyUxyC0IovOctLpZA6RqBEBax5XnH9JnLdmz1hR5oCwxRpgquTj1ZCfDTt5j4nbEAZDZD';
// start express on port 8080 (spin up Server)
app.listen(process.env.PORT || 8080, function() {
  console.log('Server Started on http://localhost:8080');
  console.log('Press CTRL + C to stop server');
});

// index route
app.get('/', function(req, res) {
  res.send('This is a testBot')
});

// Facebook Webhook (facebook verification)
app.get('/webhook', function(req, res) {
  if (req.query['hub.verify_token'] === 'recipefinder_verify_token') {
    res.send(req.query['hub.challenge']);
  } else {
    res.send('Invalid verify token, make sure the validation tokens match');
  }
});
// Receiving messages - listening for POST callbacks at our webhook, all callbacks will be made to this webhook
app.post('/webhook', function(req, res) {
  var data = req.body;
  // checking that request is coming from fb page itself
  if (data.object == 'page') {
    // iterate over each entry (the user messages coming in,in packets of data / iterate over each messaging event 
    data.entry.forEach(function(pageEntry) {
      // for each individual message
      pageEntry.messaging.forEach(function(messagingEvent) {
        console.log(messagingEvent);
        var senderID = messagingEvent.sender.id;
        // var events = req.body.entry[0].messaging;
        // for (i = 0; i < events.length; i++) {
        //   var event = events[i];
        //   if (event.message && event.message.text) {
        // send to api.ai
        if (messagingEvent && messagingEvent.message && messagingEvent.message.text) {
          var text = messagingEvent.message.text;
          console.log(text);
          apiAiService
            .getIntent(text)
            .then(function(intent) {
              console.log(intent);
              // go to dababase and fetch recipe belonging to that intent
              //Recipes.findOne({ "intent": intent }, function(err, recipe) {
              Recipe.find({}, function(err, objectsArray){
                console.log(recipe);
                if (err || !objectsArray) {
                  sendTextMessage(senderID, 'sorry no recipes found, try another search');
                } else {
                   sendTextMessage(senderID, objectsArray);
                // } else (messagingEvent.postback) {
                  // receivedPostback(messagingEvent);                   
                }
              });
            });
        }
        //   }
        // }
      });
    });
    // var recipientID = messagingEvent.recipient.id;	
    // var senderID = messagingEvent.sender.id;
    // Recipe.find({
    //     'intent':
    //   })
    //   .then(function(record) {
    //     sendGenericResponse(senderID, title, desc, imageUrl, url);
    //   });
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
    //   });
    // });
    // assuming all went well need to send back a 200 within 20 seconds, to let us know you've succesfully received the callback.  Otherwise the request will time out.
    // res.sendStatus(200);
    // }
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
  console.log("Connected to db at /data/db");
});

// creating a stucture for the response
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

  // templated message
// function sendGenericMessage(recipientId, messageText, recipe) {
//   var messageData = {
//     recipient: {
//       id: recipientId     
//     },
//     message:{
//       attachment: {
//         type: "template",
//         payload: {
//           template_type: "generic",
//           elements: [
//             {
//             title: recipe.title,
//             imageUrl: recipe.imageUrl,
//             url: recipe.url,
//             buttons: [{
//               type: "web_url",
//               url: recipe.url,
//               title: "View recipe"
//             }, {
//               type: "postback",
//               title: "Call Postback",
//               payload: "Payload for this first bubble",
//             }]
//           }]
//         }
//       }
//     }
//   };
//   callSendAPI(messageData);
// }

// function receivedPostback(event) {
//   var senderID = event.sender.id;
//   var recipientID = event.recipient.id;
//   var timeOfPostback = event.timestamp;

//   // The 'payload' param is a developer-defined field which is set in a postback 
//   // button for Structured Messages. 
//   var payload = event.postback.payload;

//   console.log("Received postback for user %d and page %d with payload '%s' " + 
//     "at %d", senderID, recipientID, payload, timeOfPostback);

//   // When a postback is called, we'll send a message back to the sender to 
//   // let them know it was successful
//   sendTextMessage(senderID, "Postback called");
// }

// actual message getting sent, json format, for text msg
function callSendAPI(messageData) {
  request({
    uri: 'https://graph.facebook.com/v2.6/me/messages',
    qs: { access_token: PAGE_ACCESS_TOKEN },
    method: 'POST',
    json: messageData

  }, function(error, response, body) {
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