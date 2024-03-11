const findKey = require('../findKey');

const assert = require('chai').assert;

const testObj = {
  'Blue Hill': { stars: 1 },
  Akaleri: { stars: 3 },
  noma: { stars: 2 },
  elBulli: { stars: 3 },
  Ora: { stars: 2 },
  Akelarre: { stars: 3 },
};
const testCallback1 = (x) => x.stars === 1;
const testCallback2 = (x) => x.stars === 2;
const testCallback3 = (x) => x.stars === 3;
const testCallback4 = (x) => x.stars === 4;

describe('#findKey', () => {
  it("returns 'Blue Hill' for { 'Blue Hill': { stars: 1 }, Akaleri: { stars: 3 }, noma: { stars: 2 }, elBulli: { stars: 3 }, Ora: { stars: 2 }, kelarre: { stars: 3 }, (x) => x.stars === 1", () => {
    const result = findKey(testObj, testCallback1);
    const expected = 'Blue Hill';
    assert.strictEqual(result, expected);
  });
  it("returns 'noma' for { 'Blue Hill': { stars: 1 }, Akaleri: { stars: 3 }, noma: { stars: 2 }, elBulli: { stars: 3 }, Ora: { stars: 2 }, kelarre: { stars: 3 }, (x) => x.stars === 2", () => {
    const result = findKey(testObj, testCallback2);
    const expected = 'noma';
    assert.strictEqual(result, expected);
  });
  it("returns 'Akaleri' for { 'Blue Hill': { stars: 1 }, Akaleri: { stars: 3 }, noma: { stars: 2 }, elBulli: { stars: 3 }, Ora: { stars: 2 }, kelarre: { stars: 3 }, (x) => x.stars === 3", () => {
    const result = findKey(testObj, testCallback3);
    const expected = 'Akaleri';
    assert.strictEqual(result, expected);
  });
  it("returns undefined for { 'Blue Hill': { stars: 1 }, Akaleri: { stars: 3 }, noma: { stars: 2 }, elBulli: { stars: 3 }, Ora: { stars: 2 }, kelarre: { stars: 3 }, (x) => x.stars === 4", () => {
    const result = findKey(testObj, testCallback4);
    const expected = undefined;
    assert.strictEqual(result, expected);
  });
});
