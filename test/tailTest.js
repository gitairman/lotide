const tail = require('../tail');

const assert = require('chai').assert;

// TEST CODE
const testArr1 = [5, 6, 7, 'a', 10],
  testArr2 = [null, null, null, null],
  testArr3 = [],
  result1 = tail(testArr1),
  result2 = tail(testArr2),
  result3 = tail(testArr3);

describe('#tail', () => {
  it('returns an array with a length of 2 for [1, 2, 3]', () => {
    assert.strictEqual(tail([1, 2, 3]).length, 2);
  });
  it("returns [6, 7, 'a', 10] for [5, 6, 7, 'a', 10]", () => {
    assert.deepEqual(result1, [6, 7, 'a', 10]);
  });
  it('returns [null, null, null] for [null, null, null, null]', () => {
    assert.deepEqual(result2, [null, null, null]);
  });
  it('returns [] for []', () => {
    assert.deepEqual(result3, []);
  });
});