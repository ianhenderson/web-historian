var path = require('path');
var fs = require('fs');
var archive = require('../helpers/archive-helpers');

exports.headers = headers = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10, // Seconds.
  'Content-Type': "text/html"
};

exports.serveAssets = function(res, asset) {
  // Write some code here that helps serve up your static files!
  // (Static files are things like html (yours or archived from others...), css, or anything that doesn't change often.)
};

// As you progress, keep thinking about what helper functions you can put here!

// Following util functions are from Fred's node.js solution lecture
exports.sendResponse = function(response, data, status){
  status = status || 200;
  response.writeHead(status, headers);
  response.end(data);
};

exports.send404 = function(response){
  exports.sendResponse(response, null, 404);
};

exports.collectData = function(request, callback){
  var data = "";
  request.on('data', function(partial){
    data += partial;
  });
  request.on('end', function(){
    // var message = JSON.parse(data);
    callback(data); // changed message => data
  });
};