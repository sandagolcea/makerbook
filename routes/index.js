var express = require('express');
var router = express.Router();
var https = require('https');
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'MakerBook' });
});

router.post('/user/profile', function(req, res, next){
  var user=req.body.username;
  var headers = {
      'User-Agent': user,
  }
 
  var options = {
      url: 'https://api.github.com/users/' + user,
      headers: headers
  };

  request(options, function(error, response, body){
    if (!error && response.statusCode == 200) {
      var info = JSON.parse(body);
      res.render('user', { title: 'Makerbook', userinfo: info });
    }
  });  
});

router.get('/user/new', function(req,res,next){
  res.render('./user/new', { title: 'New Maker'});
});

module.exports = router;
