const tail = require('../tail');
const assertEqual = require('../assertEqual');

// TEST CODE
const testArr1 = [5, 6, 7, 'a', 10],
  testArr2 = [null, null, null, null],
  testArr3 = [],
  result1 = tail(testArr1),
  result2 = tail(testArr2),
  result3 = tail(testArr3);

assertEqual(tail([5]).length, 0);
testArr1.forEach((e, i) => i > 0 && assertEqual(e, result1[i - 1]));
testArr2.forEach((e, i) => i > 0 && assertEqual(e, result2[i - 1]));
testArr3.forEach((e, i) => i > 0 && assertEqual(e, result3[i - 1]));
assertEqual(result1.length, testArr1.length - 1);
