const eqArrays = require('../eqArrays');

const assert = require('chai').assert;

describe('#eqArrays', () => {
  it('returns true for [1, 2, 3], [1, 2, 3]', () => {
    const result = eqArrays([1, 2, 3], [1, 2, 3]);
    const expected = true;
    assert.strictEqual(result, expected);
  });
  it('returns false for [1, 2, 3], [1, "2", 3]', () => {
    const result = eqArrays([1, 2, 3], [1, '2', 3]);
    const expected = false;
    assert.strictEqual(result, expected);
  });
  it('returns false for [1], [1, 2]', () => {
    const result = eqArrays([1], [1, 2]);
    const expected = false;
    assert.deepEqual(result, expected);
  });
  it('returns true for [5, [2, 3], [8, [9, 10, [15, 20, 30]]], [4]], [5, [2, 3], [8, [9, 10, [15, 20, 30]]], [4]]', () => {
    const result = eqArrays(
      [5, [2, 3], [8, [9, 10, [15, 20, 30]]], [4]],
      [5, [2, 3], [8, [9, 10, [15, 20, 30]]], [4]]
    );
    const expected = true;
    assert.strictEqual(result, expected);
  });
});
