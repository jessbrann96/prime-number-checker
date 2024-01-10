import isPrime from './logic';

it("tests that prime number checker works with prime number", ()=> {
  const num = 5;
  expect(isPrime(num)).toBe(true)
});

it("tests that prime number checker works with non prime number", ()=> {
  const num = 6;
  expect(isPrime(num)).toBe(false)
});

it("tests that prime number checker works with 0", ()=> {
  const num = 0;
  expect(isPrime(num)).toBe(false)
});

it("tests that prime number checker works with non number", ()=> {
  const num = "n";
  expect(isPrime(num)).toBe(false)
});
// TODO - add in a check later on to make sure non-number entries show up as an error rather than just being false (for now, false is what we expect)
// Same goes for the zero entry, for now we expect a false response but should really give an error when logic is developed further