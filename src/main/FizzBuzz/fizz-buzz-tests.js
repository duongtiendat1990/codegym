
QUnit.test( "fizz test", function( assert ) {
  let number = 3;
  let expected = "FIZZ";
  let actual = fizzBuzz(number);
  assert.equal( expected,actual, "Passed!" );
});
QUnit.test( "number test", function( assert ) {
  let number = 4;
  let expected = 4;
  let actual = fizzBuzz(number);
  assert.equal( expected,actual, "Passed!" );
});
