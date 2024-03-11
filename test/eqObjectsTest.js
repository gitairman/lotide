const eqObjects = require('../eqObjects');

const assert = require('chai').assert;

const shirtObject = { colour: 'red', size: 'medium' };
const anotherShirtObject = { size: 'medium', colour: 'red' };
const longSleeveShirtObject = {
  size: 'medium',
  colour: 'red',
  sleeveLength: 'long',
};
const multiColorShirtObject = { colors: ['red', 'blue'], size: 'medium' };
const anotherMultiColorShirtObject = {
  size: 'medium',
  colors: ['red', 'blue'],
};
const longSleeveMultiColorShirtObject = {
  size: 'medium',
  colors: ['red', 'blue'],
  sleeveLength: 'long',
};

describe('#eqObjects', () => {
  it('returns true for { a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }', () => {
    const result = eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 });
    const expected = true;
    assert.strictEqual(result, expected);
  });
  it('returns true for { a: { z: 1, x: { l: 3, m: { g: 7, h: 2 } } }, b: 2 }, { a: { z: 1, x: { l: 3, m: { g: 7, h: 2 } } }, b: 2 }', () => {
    const result = eqObjects(
      { a: { z: 1, x: { l: 3, m: { g: 7, h: 2 } } }, b: 2 },
      { a: { z: 1, x: { l: 3, m: { g: 7, h: 2 } } }, b: 2 }
    );
    const expected = true;
    assert.strictEqual(result, expected);
  });
  it('returns false { a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }', () => {
    const result = eqObjects(
      { a: { y: 0, z: 1 }, b: 2 },
      { a: { z: 1 }, b: 2 }
    );
    const expected = false;
    assert.deepEqual(result, expected);
  });
  it('returns false for { colors: ["red", "blue"], size: "medium" }, { size: "medium", colors: ["red", "blue"], sleeveLength: "long"}', () => {
    const result = eqObjects(
      multiColorShirtObject,
      longSleeveMultiColorShirtObject
    );
    const expected = false;
    assert.strictEqual(result, expected);
  });
});
