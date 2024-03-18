const eqArrays = require('./eqArrays');

// assertArraysEqual takes in two arrays and outputs a message if they are equal or not
const assertArraysEqual = function (arr1, arr2) {
  const result = eqArrays(arr1, arr2);
  result && console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  !result && console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
};

module.exports = assertArraysEqual;
