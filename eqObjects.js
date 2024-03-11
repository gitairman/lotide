const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

// eqObjects takes in two objects and returns true or false, based on a perfect match.
const eqObjects = (obj1, obj2) => {
  const notSameLength = Object.keys(obj1).length !== Object.keys(obj2).length;

  if (notSameLength) return false;
  // loop through all of object 1 keys and values
  for (const [key, obj1Val] of Object.entries(obj1)) {
    if (!obj2.hasOwnProperty(key)) return false;

    const obj2Val = obj2[key];
    // if the objects properties are arrays...
    const areArrays = Array.isArray(obj1Val) && Array.isArray(obj2Val);
    if (areArrays) {
      if (eqArrays(obj1Val, obj2Val)) continue;
      return false;
    }

    // if an object property values are objects...
    const areObjects =
      typeof obj1Val === 'object' && typeof obj2Val === 'object';
    const areNotNull = obj1Val !== null && obj2Val !== null;
    if (areObjects && areNotNull) {
      if (eqObjects(obj1Val, obj2Val)) continue;
      return false;
    }
    // if the object property values are just values...
    if (obj1Val !== obj2Val) return false;
  }
  return true;
};

module.exports = eqObjects;
