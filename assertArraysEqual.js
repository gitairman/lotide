const eqArrays = (arr1, arr2) =>
  arr1.length === arr2.length && Array.isArray(arr1)
    ? arr1.every((e, i) => e === arr2[i])
    : false

const assertArraysEqual = function (arr1, arr2) {
  const result = eqArrays(arr1, arr2)
  console.log(
    `${result ? '✅✅✅' : '🛑🛑🛑'} Assertion ${
      result ? 'Passed' : 'Failed'
    }: ${arr1} ${result ? '===' : '!=='} ${arr2}`
  )
}

//TEST CODE
assertArraysEqual([1, 2, 3], [1, 2, 3])
assertArraysEqual([1, 2, 3], [1, '2', 3])
assertArraysEqual([], [1, '2', 3])
assertArraysEqual([], [])
assertArraysEqual([1], [1, 2])
assertArraysEqual([], [1])
assertArraysEqual(1, [])
assertArraysEqual([], 1)
assertArraysEqual(1, 1)
