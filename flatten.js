const eqArrays = (arr1, arr2) =>
  Array.isArray(arr1) && Array.isArray(arr2) && arr1.length === arr2.length
    ? arr1.every((e, i) => e === arr2[i])
    : false;

const assertArraysEqual = function(arr1, arr2) {
  const result = eqArrays(arr1, arr2);
  result && console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  !result && console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
};

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
