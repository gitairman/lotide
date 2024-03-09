const assertEqual = function(actual, expected) {
  const result = actual === expected;
  result && console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  !result && console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

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

    // if an object property value is an object...
    if (typeof obj1Val === 'object' && typeof obj2Val === 'object') {
      if (!eqObjects(obj1Val, obj2Val)) return false;
      continue;
    }

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

assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false);
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false);