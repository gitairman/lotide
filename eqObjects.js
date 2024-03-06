const assertEqual = function (actual, expected) {
  const result = actual === expected
  console.log(
    `${result ? '✅✅✅' : '🛑🛑🛑'} Assertion ${
      result ? 'Passed' : 'Failed'
    }: ${actual} ${result ? '===' : '!=='} ${expected}`
  )
}

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

const shirtObject = { colour: 'red', size: 'medium' }
const anotherShirtObject = { size: 'medium', colour: 'red' }
assertEqual(eqObjects(shirtObject, anotherShirtObject), true)

const longSleeveShirtObject = {
  size: 'medium',
  colour: 'red',
  sleeveLength: 'long',
}
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false)

const multiColorShirtObject = { colors: ['red', 'blue'], size: 'medium' }
const anotherMultiColorShirtObject = { size: 'medium', colors: ['red', 'blue'] }
assertEqual(
  eqObjects(multiColorShirtObject, anotherMultiColorShirtObject),
  true
) // => true

const longSleeveMultiColorShirtObject = {
  size: 'medium',
  colors: ['red', 'blue'],
  sleeveLength: 'long',
}
assertEqual(
  eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject),
  false
) // => false
