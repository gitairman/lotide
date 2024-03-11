const flatten = require('../flatten');

const assert = require('chai').assert;

describe('#flatten', () => {
  it('returns [1, 2, 3, 4, 5, 6] for [1, 2, [3, 4], 5, [6]]', () => {
    const result = flatten([1, 2, [3, 4], 5, [6]]);
    const expected = [1, 2, 3, 4, 5, 6];
    assert.deepEqual(result, expected);
  });
  it('returns [1] for [1]', () => {
    const result = flatten([1]);
    const expected = [1];
    assert.deepEqual(result, expected);
  });
  it('returns [] for []', () => {
    const result = flatten([]);
    const expected = [];
    assert.deepEqual(result, expected);
  });
  it('returns [1, 2, 3, 4, 5, 6] for [1, 2, 3, 4, 5, 6]', () => {
    const result = flatten([1, 2, 3, 4, 5, 6]);
    const expected = [1, 2, 3, 4, 5, 6];
    assert.deepEqual(result, expected);
  });
  it('returns [1, 2, [3, 4, [8, 9, [10, 11, [1]]]], 5, [6]] for [1, 2, 3, 4, 8, 9, 10, 11, 1, 5, 6]', () => {
    const result = flatten([1, 2, [3, 4, [8, 9, [10, 11, [1]]]], 5, [6]]);
    const expected = [1, 2, 3, 4, 8, 9, 10, 11, 1, 5, 6];
    assert.deepEqual(result, expected);
  });
});
