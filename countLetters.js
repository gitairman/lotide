// takes in a string and outputs the amount letters excluding space
const countLetters = (str) => {
  const letterCount = {};
  for (const char of str) {
    if (char === ' ') continue;
    letterCount[char] = (letterCount[char] || 0) + 1;
  }
  return letterCount;
};

module.exports = countLetters;
