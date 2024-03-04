const assertEqual = function (actual, expected) {
  const result = actual === expected
  console.log(
    `${result ? '✅✅✅' : '🛑🛑🛑'} Assertion ${
      result ? 'Passed' : 'Failed'
    }: ${actual} ${result ? '===' : '!=='} ${expected}`
  )
}

// TEST CODE
assertEqual('Lighthouse Labs', 'Bootcamp')
assertEqual(1, 1)
assertEqual(1, 5)
assertEqual('Lighthouse Labs', 'Lighthouse Labs')
