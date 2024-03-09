const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];

const takeUntil = (array, callback) => {
  const results = [];

  for (const [i, item] of array.entries()) {
    if (callback(item, i)) break;
    results.push(array[i]);
  }
  return results;
};

const eqArrays = (arr1, arr2) =>
  Array.isArray(arr1) && Array.isArray(arr2) && arr1.length === arr2.length
    ? arr1.every((e, i) => e === arr2[i])
    : false;

const assertArraysEqual = function(arr1, arr2) {
  const result = eqArrays(arr1, arr2);
  result && console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  !result && console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
};

//TEST CODE
assertArraysEqual(
  takeUntil(data1, (data) => data === -1),
  [1, 2, 5, 7, 2]
);
assertArraysEqual(
  takeUntil(data1, (data) => data === 7),
  [1, 2, 5]
);
assertArraysEqual(
  takeUntil(data1, (_, i) => i === 6),
  [1, 2, 5, 7, 2, -1]
);
assertArraysEqual(
  takeUntil(data1, (data) => data > 7),
  [1, 2, 5, 7, 2, -1, 2, 4, 5]
);
