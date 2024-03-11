const assertArraysEqual = require('./assertArraysEqual');

// takes in a string and returns an object with the characters as keys and an array of indexes where they are found as values
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

module.exports = letterPositions;
