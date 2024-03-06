const eqArrays = (arr1, arr2) =>
  arr1.length === arr2.length && Array.isArray(arr1)
    ? arr1.every((e, i) => e === arr2[i])
    : false

const assertEqual = function (actual, expected) {
  const result = actual === expected
  console.log(
    `${result ? '✅✅✅' : '🛑🛑🛑'} Assertion ${
      result ? 'Passed' : 'Failed'
    }: ${actual} ${result ? '===' : '!=='} ${expected}`
  )
}

// TEST CODE
console.log(eqArrays([1, 2, 3], [1, 2, 3]))
console.log(eqArrays([1, 2, 3], [3, 2, 1]))
console.log(eqArrays(['1', '2', '3'], ['1', '2', '3']))
console.log(eqArrays(['1', '2', '3'], ['1', '2', 3]))

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)
assertEqual(eqArrays([1, 2, 3], [1, '2', 3]), false)
assertEqual(eqArrays([], [1, '2', 3]), false)
assertEqual(eqArrays([], []), true)
assertEqual(eqArrays([1], [1, 2]), false)
assertEqual(eqArrays([], [1]), false)
assertEqual(eqArrays(1, []), false)
assertEqual(eqArrays([], 1), false)
assertEqual(eqArrays(1, 1), false)
