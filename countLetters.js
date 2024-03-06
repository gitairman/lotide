const assertEqual = function (actual, expected) {
  const result = actual === expected
  console.log(
    `${result ? '✅✅✅' : '🛑🛑🛑'} Assertion ${
      result ? 'Passed' : 'Failed'
    }: ${actual} ${result ? '===' : '!=='} ${expected}`
  )
}

const countLetters = (str) => {
  const letterCount = {}
  for (let char of str)
    if (char !== ' ') letterCount = (letterCount[char] || 0) + 1
  return letterCount
}

const result1 = countLetters('hello there')

assertEqual(result1['h'], 2)
assertEqual(result1['e'], 3)
assertEqual(result1[' '], undefined)
assertEqual(result1['o'], 1)
