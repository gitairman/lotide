const assertEqual = require('./assertEqual');

const eqArrays = (arr1, arr2) => {
  // helper function to check that both inputs are arrays and of same length
  const checkArrAndLength = (e1, e2) => {
    const areArrays = Array.isArray(e1) && Array.isArray(e2);
    const areSameLength = e1.length === e2.length;
    return areArrays && areSameLength;
  };

  // if arr1 and arr2 are both arrays and same length, return the
  // result of checking every element in the arrays for equality
  if (checkArrAndLength(arr1, arr2)) {
    return arr1.every((arr1El, i) => {
      const arr2El = arr2[i];
      // if an element of the array is yet another array, recursive case
      if (checkArrAndLength(arr1El, arr2El)) return eqArrays(arr1El, arr2El);
      return arr1El === arr2El;
    });
  }
  return false;
};

// TEST CODE
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
// assertEqual(eqArrays([1, 2, 3], [1, '2', 3]), false);
// assertEqual(eqArrays([], [1, '2', 3]), false);
// assertEqual(eqArrays([], []), true);
// assertEqual(eqArrays([1], [1, 2]), false);
// assertEqual(eqArrays([], [1]), false);
// assertEqual(eqArrays(1, []), false);
// assertEqual(eqArrays([], 1), false);
// assertEqual(eqArrays(1, 1), false);

// assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true);
// assertEqual(
//   eqArrays(
//     [5, [2, 3], [8, [9, 10, [15, 20, 30]]], [4]],
//     [5, [2, 3], [8, [9, 10, [15, 20, 30]]], [4]]
//   ),
//   true
// );

// assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false);
// assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false);

module.exports = eqArrays;