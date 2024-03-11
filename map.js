const assertArraysEqual = require('./assertArraysEqual');

const words = ['ground', 'control', 'to', 'major', 'tom'];

const map = (array, callback) => {
  const results = [];

  for (const item of array) {
    results.push(callback(item));
  }
  return results;
};

//TEST CODE
assertArraysEqual(
  map(words, (word) => word.length),
  [6, 7, 2, 5, 3]
);
assertArraysEqual(
  map(words, (word) => word.toUpperCase()),
  ['GROUND', 'CONTROL', 'TO', 'MAJOR', 'TOM']
);
assertArraysEqual(
  map(words, (word) => (word.length > 4 ? word : 'too short')),
  ['ground', 'control', 'too short', 'major', 'too short']
);
assertArraysEqual(
  map(words, (word) => (word === 'tom' ? 'fred' : word)),
  ['ground', 'control', 'to', 'major', 'fred']
);

module.exports = map;