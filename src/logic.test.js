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
