describe('New user page', function(){
  before(function() {
    casper.start('http://localhost:3000/');
  });

  it('greets user', function(){
    casper.then(function(){
      expect("body").to.include.text("MakerBook");
    });
  });
});