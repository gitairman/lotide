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
    const areObjects = typeof obj1Val === 'object' && typeof obj2Val === 'object';
    const areNotNull = obj1Val !== null && obj2Val !== null;
    if (areObjects && areNotNull) {
      if (eqObjects(obj1Val, obj2Val)) continue;
      return false;
    }
    // lastly, if the property values
    if (obj1Val !== obj2Val) return false;
  }
  return true;
};

const shirtObject = { colour: 'red', size: 'medium' };
const anotherShirtObject = { size: 'medium', colour: 'red' };
assertEqual(eqObjects(shirtObject, anotherShirtObject), true);

const longSleeveShirtObject = {
  size: 'medium',
  colour: 'red',
  sleeveLength: 'long',
};
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);

const multiColorShirtObject = { colors: ['red', 'blue'], size: 'medium' };
const anotherMultiColorShirtObject = { size: 'medium', colors: ['red', 'blue'] };
assertEqual(
  eqObjects(multiColorShirtObject, anotherMultiColorShirtObject),
  true
); // => true

const longSleeveMultiColorShirtObject = {
  size: 'medium',
  colors: ['red', 'blue'],
  sleeveLength: 'long',
};
assertEqual(
  eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject),
  false
); // => false

assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);
assertEqual(
  eqObjects(
    { a: { z: 1, x: { l: 3, m: { g: 7, h: 2 } } }, b: 2 },
    { a: { z: 1, x: { l: 3, m: { g: 7, h: 2 } } }, b: 2 }
  ),
  true
);

assertEqual(
  eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }),
  false
);
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false);

module.exports = eqObjects;