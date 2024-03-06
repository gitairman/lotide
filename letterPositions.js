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

const letterPositions = (str) => {
  const results = {}

  for (let [i, char] of str.split('').entries())
    if (char !== ' ')
      results[char] ? results[char].push(i) : (results[char] = [i])

  return results
}

assertArraysEqual(letterPositions('hello').e, [1])
assertArraysEqual(letterPositions('hello there neighbour').n, [12])
