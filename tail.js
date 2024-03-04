const assertEqual = function(actual, expected) {
  const result = actual === expected;
  console.log(
    `${result ? '✅✅✅' : '🛑🛑🛑'} Assertion ${
      result ? 'Passed' : 'Failed'
    }: ${actual} ${result ? '===' : '!=='} ${expected}`
  );
};

const tail = (arr) => arr.slice(1);

console.log(tail([]));
console.log(tail([5]));

// TEST CODE
const testArr1 = [5, 6, 7, 'a', 10],
  testArr2 = [null, null, null, null],
  testArr3 = [];
testArr1.forEach((e, i, arr) => i > 0 && assertEqual(e, tail(arr)[i - 1]));
testArr2.forEach((e, i, arr) => i > 0 && assertEqual(e, tail(arr)[i - 1]));
testArr3.forEach((e, i, arr) => i > 0 && assertEqual(e, tail(arr)[i - 1]));
// ensure original array is not modified
tail(testArr1);
assertEqual(testArr1.length, 5);
testArr1.forEach((e, i, arr) => assertEqual(e, arr[i]));
testArr1.forEach((e, i, arr) => assertEqual(e, tail(arr)[i - 1]));
