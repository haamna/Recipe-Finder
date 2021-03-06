var apiai = require('apiai');
var app = apiai("4505c8543b8045059c362be1864f1d19");
var q = require('q');

function getIntent(message) {
  var request = app.textRequest(message);
  var deferred = q.defer();

  request.on('response', function(response) {
    console.log(response.result.metadata.intentName);
    deferred.resolve(response.result.metadata.intentName);
  });

  request.on('error', function(error) {
    console.log(error);
    deferred.reject(error);
  });

  request.end();
  return deferred.promise;
}



module.exports.getIntent = getIntent;