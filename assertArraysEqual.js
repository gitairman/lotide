const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arr1, arr2) {
  const result = eqArrays(arr1, arr2);
  result && console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  !result && console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
};

//TEST CODE
// assertArraysEqual([1, 2, 3], [1, 2, 3]);
// assertArraysEqual([1, 2, 3], [1, '2', 3]);
// assertArraysEqual([], [1, '2', 3]);
// assertArraysEqual([], []);
// assertArraysEqual([1], [1, 2]);
// assertArraysEqual([], [1]);
// assertArraysEqual(1, []);
// assertArraysEqual([], 1);
// assertArraysEqual(1, 1);

module.exports = assertArraysEqual;