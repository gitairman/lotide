const eqArrays = (arr1, arr2) =>
  Array.isArray(arr1) && Array.isArray(arr2) && arr1.length === arr2.length
    ? arr1.every((e, i) => e === arr2[i])
    : false;

// eqObjects takes in two objects and returns true or false, based on a perfect match.
const eqObjects = (obj1, obj2) => {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;
  // loop through all of object 1 keys and values
  for (const [key, obj1Val] of Object.entries(obj1)) {

    if (!obj2.hasOwnProperty(key)) return false;

    const obj2Val = obj2[key];
    // if an object property value is an array...
    if (Array.isArray(obj1Val) && Array.isArray(obj2Val)) {
      if (!eqArrays(obj1Val, obj2Val)) return false;
      continue;
    }

    if (obj1Val !== obj2Val) return false;
  }
  return true;
};

const assertObjectsEqual = (actual, expected) => {
  const inspect = require('util').inspect;
  const result = eqObjects(actual, expected);
  result && console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  !result && console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
};

assertObjectsEqual(
  { colour: 'blue', name: 'Aaron' },
  { name: 'Aaron', colour: 'blue' }
);
assertObjectsEqual(
  { colour: 'red', name: 'Aaron' },
  { name: 'Aaron', colour: 'blue' }
);
assertObjectsEqual(
  { colour: 'red', name: 'Aaron', hobbies: ['tennis', 'soccer'] },
  { name: 'Aaron', colour: 'red', hobbies: ['tennis', 'soccer'] }
);
assertObjectsEqual(
  { hobbies: ['soccer', 'tennis'] },
  { hobbies: ['tennis', 'soccer'] }
);
assertObjectsEqual({}, {});
assertObjectsEqual({ test: 'test' }, {});
