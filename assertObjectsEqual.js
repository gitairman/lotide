const eqArrays = (arr1, arr2) =>
  arr1.length === arr2.length ? arr1.every((e, i) => e === arr2[i]) : false

// eqObjects takes in two objects and returns true or false, based on a perfect match.
const eqObjects = (obj1, obj2) => {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) return false
  for (let [key, val] of Object.entries(obj1)) {
    if (
      // if a key in obj1 is not found in obj2 or the value in matching keys is not the same return false
      !obj2.hasOwnProperty(key) ||
      (Array.isArray(val) && Array.isArray(obj2[key]))
        ? !eqArrays(val, obj2[key])
        : obj2[key] !== val
    )
      return false
  }
  return true
}

const assertObjectsEqual = (actual, expected) => {
  const inspect = require('util').inspect
  const result = eqObjects(actual, expected)
  console.log(
    `${result ? '✅✅✅' : '🛑🛑🛑'} Assertion ${
      result ? 'Passed' : 'Failed'
    }: ${inspect(actual)} ${result ? '===' : '!=='} ${inspect(expected)}`
  )
}

assertObjectsEqual(
  { colour: 'blue', name: 'Aaron' },
  { name: 'Aaron', colour: 'blue' }
)
assertObjectsEqual(
  { colour: 'red', name: 'Aaron' },
  { name: 'Aaron', colour: 'blue' }
)
assertObjectsEqual({}, {})
assertObjectsEqual({ test: 'test' }, {})
