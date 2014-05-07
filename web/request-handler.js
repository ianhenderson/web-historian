var path = require('path');
var archive = require('../helpers/archive-helpers');
var http = require('http-helpers');
// require more modules/folders here!

exports.handleRequest = function (req, res) {
  http.collectData(req, function(data){
    // Store data (url list) in file and/or parse it
    var receivedMsg = "URLs received!";
    http.sendResponse(res, receivedMsg);
  });
  res.end(archive.paths.list); // "archives/sites.txt"
};
