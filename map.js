const words = ['ground', 'control', 'to', 'major', 'tom']

const map = (array, callback) => {
  const results = []

  for (let item of array) {
    results.push(callback(item))
  }
  return results
}

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
assertArraysEqual(
  map(words, (word) => word.length),
  [6, 7, 2, 5, 3]
)
assertArraysEqual(
  map(words, (word) => word.toUpperCase()),
  ['GROUND', 'CONTROL', 'TO', 'MAJOR', 'TOM']
)
assertArraysEqual(
  map(words, (word) => (word.length > 4 ? word : 'too short')),
  ['ground', 'control', 'too short', 'major', 'too short']
)
assertArraysEqual(
  map(words, (word) => (word === 'tom' ? 'fred' : word)),
  ['ground', 'control', 'to', 'major', 'fred']
)
