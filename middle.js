const assertArraysEqual = require('./assertArraysEqual')

// return the middle elements of an array
const middle = (arr) => {
  // if array has 2 elements or less, there is no middle so return empty array
  if (arr.length <= 2) return [];
  const isEven = arr.length % 2 === 0,
    midStartIdx = isEven ? arr.length / 2 - 1 : Math.floor(arr.length / 2),
    midEndIdx = isEven ? midStartIdx + 2 : midStartIdx + 1;
  return arr.slice(midStartIdx, midEndIdx);
};

assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
