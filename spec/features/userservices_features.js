describe('New user page', function(){
  before(function() {
    casper.start('http://localhost:3000/');
  });

  describe('prompts user for', function() {

    before(function() {
      casper.open("http://localhost:3000/user/new");
    });

    it('prompts user for username', function(){

      casper.then(function(){
        expect("body").to.include.text("Enter your github user name");
      });
    });

    it('prompts user for username', function(){

      casper.then(function(){
        expect("body").to.include.text("Enter your github password");
      });
    });  
    
  }) // end of tests for prompts.


});