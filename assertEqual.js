const assertEqual = function(actual, expected) {
  const result = actual === expected;
  result && console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  !result && console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

// TEST CODE
// assertEqual('Lighthouse Labs', 'Bootcamp');
// assertEqual(1, 1);
// assertEqual(1, 5);
// assertEqual('Lighthouse Labs', 'Lighthouse Labs');

module.exports = assertEqual;