const countLetters = require('../countLetters');

const assert = require('chai').assert;

describe('#countLetters', () => {
  it("returns an object { h: 2, e: 3, l: 2, o: 1, t: 1, r: 1} for 'hello there'", () => {
    const result = countLetters('hello there');
    const expected = { h: 2, e: 3, l: 2, o: 1, t: 1, r: 1 };
    assert.deepEqual(result, expected);
  });
  it("returns an empty object for ' '", () => {
    const result = countLetters(' ');
    const expected = {};
    assert.deepEqual(result, expected);
  });
});
