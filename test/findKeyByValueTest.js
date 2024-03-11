const findKeyByValue = require('../findKeyByValue');

const assert = require('chai').assert;

const bestTVShowsByGenre = {
  sciFi: 'The Expanse',
  comedy: 'Brooklyn Nine-Nine',
  drama: 'The Wire',
};

describe('#findKeyByValue', () => {
  it('returns "drama" for { sciFi: "The Expanse", comedy: "Brooklyn Nine-Nine", drama: "The Wire" }, "The Wire"', () => {
    const result = findKeyByValue(bestTVShowsByGenre, 'The Wire');
    const expected = 'drama';
    assert.deepEqual(result, expected);
  });
  it('returns undefined for { sciFi: "The Expanse", comedy: "Brooklyn Nine-Nine", drama: "The Wire" }, "That \'70s Show"', () => {
    const result = findKeyByValue(bestTVShowsByGenre, "That '70s Show");
    const expected = undefined;
    assert.deepEqual(result, expected);
  });
  it('returns "comedy" for { sciFi: "The Expanse", comedy: "Brooklyn Nine-Nine", drama: "The Wire" }, "Brooklyn Nine-Nine"', () => {
    const result = findKeyByValue(bestTVShowsByGenre, 'Brooklyn Nine-Nine');
    const expected = 'comedy';
    assert.deepEqual(result, expected);
  });
  it('returns sciFi for { sciFi: "The Expanse", comedy: "Brooklyn Nine-Nine", drama: "The Wire" }, "The Expanse"', () => {
    const result = findKeyByValue(bestTVShowsByGenre, 'The Expanse');
    const expected = 'sciFi';
    assert.deepEqual(result, expected);
  });
});
