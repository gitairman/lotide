const eqArrays = (arr1, arr2) =>
  Array.isArray(arr1) && Array.isArray(arr2) && arr1.length === arr2.length
    ? arr1.every((e, i) => e === arr2[i])
    : false;

const assertArraysEqual = function(arr1, arr2) {
  const result = eqArrays(arr1, arr2);
  result && console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  !result && console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
};

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
