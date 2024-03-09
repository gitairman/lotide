const eqArrays = (arr1, arr2) =>
  Array.isArray(arr1) && Array.isArray(arr2) && arr1.length === arr2.length
    ? arr1.every((e, i) => e === arr2[i])
    : false;

const assertArraysEqual = function(arr1, arr2) {
  const result = eqArrays(arr1, arr2);
  result && console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  !result && console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
};

// return the middle elements of an array
const middle = (arr) => {
  // if array has 2 elements or less, there is no middle so return empty array
  if (arr.length <= 2) return [];
  const even = arr.length % 2 === 0,
    midStartIdx = even ? arr.length / 2 - 1 : Math.floor(arr.length / 2),
    midEndIdx = even ? midStartIdx + 2 : midStartIdx + 1;
  return arr.slice(midStartIdx, midEndIdx);
};

assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
