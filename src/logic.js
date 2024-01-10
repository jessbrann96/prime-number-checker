// Added the logic separately so that I can test it independently of rendering the app (makes TDD easier as well)

export default function isPrime (num) {
    for(let i = 2; i < num; i++)
      if(num % i === 0) return false;
    return num > 1;
  }
