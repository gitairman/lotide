const takeUntil = require('../takeUntil');

const assert = require('chai').assert;

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];

describe('#takeUntil', () => {
  it('returns [1, 2, 5, 7, 2] for [1, 2, 5, 7, 2, -1, 2, 4, 5], (data) => data === -1)', () => {
    const result = takeUntil(data1, (data) => data === -1);
    const expected = [1, 2, 5, 7, 2];
    assert.deepEqual(result, expected);
  });
  it('returns [1, 2, 5] for [1, 2, 5, 7, 2, -1, 2, 4, 5], (data) => data === 7', () => {
    const result = takeUntil(data1, (data) => data === 7);
    const expected = [1, 2, 5];
    assert.deepEqual(result, expected);
  });
  it('returns [1, 2, 5, 7, 2, -1] for [1, 2, 5, 7, 2, -1, 2, 4, 5], (_, i) => i === 6', () => {
    const result = takeUntil(data1, (_, i) => i === 6);
    const expected = [1, 2, 5, 7, 2, -1];
    assert.deepEqual(result, expected);
  });
  it('returns [1, 2, 5, 7, 2, -1, 2, 4, 5] for [1, 2, 5, 7, 2, -1, 2, 4, 5], (data) => data > 7', () => {
    const result = takeUntil(data1, (data) => data > 7);
    const expected = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    assert.deepEqual(result, expected);
  });
});
