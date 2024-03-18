// takes in a string and returns an object with the letters
// as keys and the amount of each letter as the values
const countLetters = (str) => {
  const letterCount = {};
  for (const char of str) {
    if (char === ' ') continue;
    letterCount[char] = (letterCount[char] || 0) + 1;
  }
  return letterCount;
};

module.exports = countLetters;
