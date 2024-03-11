const assertArraysEqual = require('./assertArraysEqual');

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];

// takes in an array and a callback, and returns a new array containing the values for which the result of calling the callback on each element of the original array is true.
const takeUntil = (array, callback) => {
  const results = [];

  for (const [i, item] of array.entries()) {
    if (callback(item, i)) break;
    results.push(array[i]);
  }
  return results;
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

module.exports = takeUntil;
