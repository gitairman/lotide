const letterPositions = require('../letterPositions');

const assert = require('chai').assert;

describe('#letterPositions', () => {
  it('returns { h: [0], e: [1], l: [2, 3], o: [4] } for "hello"', () => {
    const result = letterPositions('hello');
    const expected = { h: [0], e: [1], l: [2, 3], o: [4] };
    assert.deepEqual(result, expected);
  });
  it('returns {} for ""', () => {
    const result = letterPositions('');
    const expected = {};
    assert.deepEqual(result, expected);
  });
  it('returns {} for undefined', () => {
    const result = letterPositions();
    const expected = {};
    assert.deepEqual(result, expected);
  });
});
