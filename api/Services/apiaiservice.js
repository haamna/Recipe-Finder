var apiai = require('apiai');
var app = apiai("4505c8543b8045059c362be1864f1d19");
var q = require('q');
 
var request = app.textRequest('<Your text query>');
var deferred = q.defer();
 
request.on('response', function(response) {
	deferred.resolve(response.result.intentName);
});
 
request.on('error', function(error) {
    deferred.reject(err);
});
 
request.end();
return deferred.promise;

module.exports = request