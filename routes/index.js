var express = require('express');
var router = express.Router();
var https = require('https');
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {

  var headers = {
      'User-Agent': 'jaircazarin',
  }
 
  var options = {
      url: 'https://api.github.com/users/jaircazarin',
      headers: headers
  };

  request(options, function(error, response, body){
    if (!error && response.statusCode == 200) {
      var info = JSON.parse(body);
      res.render('index', { title: 'Express', userinfo: info });
    }
  });

});

module.exports = router;
