describe('New user page', function(){
  before(function() {
    casper.start('http://localhost:3000/user/new'); // tells the browser where to navigate to at the start.
  });

  describe('prompts user for', function() {

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


});