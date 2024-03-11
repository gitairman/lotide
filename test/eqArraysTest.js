const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

// TEST CODE
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [1, '2', 3]), false);
assertEqual(eqArrays([], [1, '2', 3]), false);
assertEqual(eqArrays([], []), true);
assertEqual(eqArrays([1], [1, 2]), false);
assertEqual(eqArrays([], [1]), false);
assertEqual(eqArrays(1, []), false);
assertEqual(eqArrays([], 1), false);
assertEqual(eqArrays(1, 1), false);

assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true);
assertEqual(
  eqArrays(
    [5, [2, 3], [8, [9, 10, [15, 20, 30]]], [4]],
    [5, [2, 3], [8, [9, 10, [15, 20, 30]]], [4]]
  ),
  true
);

assertEqual(
  eqArrays(
    [[2, 3], [4]],
    [
      [2, 3],
      [4, 5],
    ]
  ),
  false
);
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false);
