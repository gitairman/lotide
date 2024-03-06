const assertEqual = function (actual, expected) {
  const result = actual === expected
  console.log(
    `${result ? '✅✅✅' : '🛑🛑🛑'} Assertion ${
      result ? 'Passed' : 'Failed'
    }: ${actual} ${result ? '===' : '!=='} ${expected}`
  )
}

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = (allItems, itemsToCount) => {
  const countObj = {}
  for (let item of allItems) {
    if (itemsToCount[item]) countObj[item] = (countObj[item] || 0) + 1
  }
  return countObj
}

const firstNames = [
  'Karl',
  'Salima',
  'Agouhanna',
  'Fang',
  'Kavith',
  'Jason',
  'Salima',
  'Fang',
  'Joe',
]

const result1 = countOnly(firstNames, {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: false,
})

assertEqual(result1['Jason'], 1)
assertEqual(result1['Karima'], undefined)
assertEqual(result1['Fang'], 2)
assertEqual(result1['Agouhanna'], undefined)
