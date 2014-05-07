var path = require('path');
var archive = require('../helpers/archive-helpers');
var http = require('./http-helpers');
// require more modules/folders here!

// GET response: serve index.html / loadiing/html / etc.
var getIndex = function(request, response){
  http.sendResponse(response, {results: messages}); // change to serve index.html
};

// POST response: receive list of URLs to archive
var postURLs = function(request, response){
  http.collectData(request, function(data){
    // Store data (url list) in file and/or parse it
    var receivedMsg = "URLs received!";
    http.sendResponse(response, receivedMsg);
  });
  response.end(archive.paths.list); // "archives/sites.txt"
};

var actions = {
  'GET': getIndex,
  'POST': postURLs,
  // 'OPTIONS': options
};

exports.handleRequest = function (request, response) {
  console.log("Now serving request" + request.method + "for " + request.url);
  var action = actions[request.method];
  if (action){
    action(request, response);
  } else {
    utils.send404(response);
  }
};




