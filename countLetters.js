const assertEqual = require('./assertEqual');

// takes in a string and outputs the amount letters excluding space
const countLetters = (str) => {
  const letterCount = {};
  for (const char of str) {
    if (char === ' ') continue;
    letterCount[char] = (letterCount[char] || 0) + 1;
  }
  return letterCount;
};

const result1 = countLetters('hello there');

assertEqual(result1['h'], 2);
assertEqual(result1['e'], 3);
assertEqual(result1[' '], undefined);
assertEqual(result1['o'], 1);

module.exports = countLetters;
