const assertEqual = function (actual, expected) {
  const result = actual === expected
  console.log(
    `${result ? '✅✅✅' : '🛑🛑🛑'} Assertion ${
      result ? 'Passed' : 'Failed'
    }: ${actual} ${result ? '===' : '!=='} ${expected}`
  )
}

const head = (arr) => arr[0]

// TEST CODE
assertEqual(head([5, 6, 7]), 5)
assertEqual(head(['Hello', 'Lighthouse', 'Labs']), 'Hello')
console.log(`value is: ${head([])}`)
