const assertArraysEqual = require('./assertArraysEqual');

// takes in an array and returns the array with all its values at a depth of 0
const flatten = (arr, newArr = []) => {
  for (const el of arr) {
    if (Array.isArray(el)) flatten(el, newArr);
    else newArr.push(el);
  }
  return newArr;
};

module.exports = flatten;
