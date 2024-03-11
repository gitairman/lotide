const assertEqual = require('./assertEqual')

// function findKeyByValue takes in an object and a value. It scans the
// object and returns the first key which contains the given value. If no
// key with that given value is found, then it should return undefined.
const findKeyByValue = (obj, value) => {
  for (const [key, val] of Object.entries(obj)) {
    if (val === value) return key
  }
}

const bestTVShowsByGenre = {
  sciFi: 'The Expanse',
  comedy: 'Brooklyn Nine-Nine',
  drama: 'The Wire',
}

assertEqual(findKeyByValue(bestTVShowsByGenre, 'The Wire'), 'drama')
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined)
assertEqual(findKeyByValue(bestTVShowsByGenre, 'Brooklyn Nine-Nine'), 'comedy')
assertEqual(findKeyByValue(bestTVShowsByGenre, 'The Expanse'), 'sciFi')
