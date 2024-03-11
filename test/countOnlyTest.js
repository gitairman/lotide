const countOnly = require('../countOnly');

const assert = require('chai').assert;

const firstNames = [
  'Karl',
  'Salima',
  'Agouhanna',
  'Fang',
  'Kavith',
  'Jason',
  'Salima',
  'Fang',
  'Joe',
];

const testObj1 = {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: false,
};
const testObj2 = {
  Jason: false,
  Karima: false,
  Fang: false,
  Agouhanna: false,
};

describe('#countOnly', () => {
  it('returns { Jason: 1, Fang: 2 } for { Jason: true, Karima: true, Fang: true, Agouhanna: false }', () => {
    const result = countOnly(firstNames, testObj1);
    const expected = { Jason: 1, Fang: 2 };
    assert.deepEqual(result, expected);
  });
  it('returns {} for { Jason: false, Karima: true, Fang: false, Agouhanna: false }', () => {
    const result = countOnly(firstNames, testObj2);
    const expected = {};
    assert.deepEqual(result, expected);
  });
});
