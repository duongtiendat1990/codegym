QUnit.test( "hello test", function( assert ) {
  let number = 3;
  let expected = "FIZZ";
  let actual = fizzBuzz(number)
  assert.equal(actual,expected, "Passed!" );
});
