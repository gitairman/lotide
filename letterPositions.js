const assertArraysEqual = require('./assertArraysEqual');

const letterPositions = (str) => {
  const results = {};

  for (let [i, char] of str.split('').entries()) {
    if (char === ' ') continue;
    results[char] ? results[char].push(i) : (results[char] = [i]);
  }

  return results;
};

assertArraysEqual(letterPositions('hello').e, [1]);
assertArraysEqual(letterPositions('hello there neighbour').n, [12]);
