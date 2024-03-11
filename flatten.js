const assertArraysEqual = require('./assertArraysEqual');

// takes in an array and returns the array with all its values at a depth of 0
const flatten = (arr, newArr = []) => {
  for (const el of arr) {
    if (Array.isArray(el)) flatten(el, newArr);
    else newArr.push(el);
  }
  return newArr;
};

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([1]), [1]);
assertArraysEqual(flatten([]), []);
assertArraysEqual(flatten([1, 2, 3, 4, 5, 6]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(
  flatten([1, 2, [3, 4, [8, 9, [10, 11, [1]]]], 5, [6]]),
  [1, 2, 3, 4, 8, 9, 10, 11, 1, 5, 6]
);
assertArraysEqual(
  flatten([1, 2, [3, 4, [8, 9, [[], 11, [1]]]], 5, [6]]),
  [1, 2, 3, 4, 8, 9, 11, 1, 5, 6]
);

module.exports = flatten;
