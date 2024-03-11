const eqObjects = require('./eqObjects');

const assertObjectsEqual = (actual, expected) => {
  const inspect = require('util').inspect;
  const result = eqObjects(actual, expected);
  result && console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  !result && console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
};

// assertObjectsEqual(
//   { colour: 'blue', name: 'Aaron' },
//   { name: 'Aaron', colour: 'blue' }
// );
// assertObjectsEqual(
//   { colour: 'red', name: 'Aaron' },
//   { name: 'Aaron', colour: 'blue' }
// );
// assertObjectsEqual(
//   { colour: 'red', name: 'Aaron', hobbies: ['tennis', 'soccer'] },
//   { name: 'Aaron', colour: 'red', hobbies: ['tennis', 'soccer'] }
// );
// assertObjectsEqual(
//   { hobbies: ['soccer', 'tennis'] },
//   { hobbies: ['tennis', 'soccer'] }
// );
// assertObjectsEqual({}, {});
// assertObjectsEqual({ test: 'test' }, {});

module.exports = assertObjectsEqual;