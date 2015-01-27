var express = require('express');
var router = express.Router();
var https = require('https');

/* GET home page. */
router.get('/', function(req, res, next) {
  var headers = {
      'User-Agent': 'jaircazarin',
  }
 
  var options = {
      host: 'api.github.com',
      port: 443,
      path: '/users/jaircazarin',
      method: 'GET',
      headers: headers
  };
 
  var req = https.get(options, function(gitHubResp) {
    console.log("Got response: " + gitHubResp.statusCode);
    gitHubResp.setEncoding('utf8');
    var gitHubInfo = '';
    // another chunk of data has been recieved, so append it to `str`
    gitHubResp.on('data', function (chunk) {
      gitHubInfo += chunk;
    });
 
    gitHubResp.on('end', function () {
      var gitty = JSON.parse(gitHubInfo);
      res.render('index', { title: 'Express', userinfo: gitty });
    });
  })
  .on('error', function(e) {
      console.log("Got error: " + e.message);
  });

});

module.exports = router;
