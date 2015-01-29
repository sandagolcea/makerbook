var system = require('system');

describe('New user page', function(){

  describe('prompts user for', function() {

    before(function() {
      casper.start('http://localhost:3000/user/new'); // tells the browser where to navigate to at the start.
    });

    it('username', function(){

      casper.then(function(){
        expect("body").to.include.text("Enter your github user name");
      });
    });

    it('password', function(){

      casper.then(function(){
        expect("body").to.include.text("Enter your github password");
      });
    });  

  }) // end of tests for prompts.

  describe('user enters correct', function() {

    it('username and password', function() {
      casper.start('http://localhost:3000/user/new', function() {
        this.fill('form#signupform', {
          'username': system.env.GITHUBUSERNAME,
          'password': system.env.GITHUBPWD
        }, true); // 'true' means that the form is submitted after values are entered.
      });

      casper.then(function(){
        expect("body").to.include.text("Welcome");
      });
    });
  });

  describe('user enters incorrect', function() {

    it('username and password', function() {
      casper.start('http://localhost:3000/user/new', function() {
        this.fill('form#signupform', {
          'username': 'ptolemybarnes',
          'password': 'mistakenpassword'
        }, true);
      });

      casper.then(function(){
        expect("body").to.not.include.text("Ptolemy");
      });
    });
  });
});