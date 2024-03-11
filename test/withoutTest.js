const without = require('../without');

const assert = require('chai').assert;

const words = ['hello', 'world', 'lighthouse'];

describe('#without', () => {
  it('returns [2, 3] for [1, 2, 3], [1]', () => {
    const result = without([1, 2, 3], [1]);
    const expected = [2, 3];
    assert.deepEqual(result, expected);
  });
  it("returns ['1', '2'] for ['1', '2', '3'], [1, 2, '3']", () => {
    const result = without(['1', '2', '3'], [1, 2, '3']);
    const expected = ['1', '2'];
    assert.deepEqual(result, expected);
  });
  it("returns ['hello', 'world'] for ['hello', 'world', 'lighthouse'], ['lighthouse']", () => {
    const result = without(words, ['lighthouse']);
    const expected = ['hello', 'world'];
    assert.deepEqual(result, expected);
  });
});
