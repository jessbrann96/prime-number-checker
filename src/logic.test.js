import isPrime from './logic';



it("tests that prime number checker works with prime number", ()=> {
  const num = 5;
  expect(isPrime(num)).toBe(true)
});

