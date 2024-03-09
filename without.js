const eqArrays = (arr1, arr2) =>
  Array.isArray(arr1) && Array.isArray(arr2) && arr1.length === arr2.length
    ? arr1.every((e, i) => e === arr2[i])
    : false;

const assertArraysEqual = function(arr1, arr2) {
  const result = eqArrays(arr1, arr2);
  result && console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  !result && console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
};

// filter out the items of the source array that
// cannot be found in the itemsToRemove array
// const without = (source, itemsToRemove) =>
//   source.filter(
//     (srcEl) => itemsToRemove.findIndex((toRmEl) => toRmEl === srcEl) === -1
// findIndex looks for first item in the array that
// equals the item currently being looked at in the
// source array and returns -1 if it is not found
// )

const without = (source, itemsToRemove) => {
  const newArr = [];
  for (const sourceItem of source) {
    let itemFound = false;
    for (const item of itemsToRemove) {
      if (item === sourceItem) {
        itemFound = true;
        break;
      }
    }
    if (!itemFound) newArr.push(sourceItem);
  }
  return newArr;
};

//TEST CODE
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(['1', '2', '3'], [1, 2, '3']), ['1', '2']);
assertArraysEqual(without([4, 'a', '2', 'c', 5], [1, 2, '3', 'a', 6, 5]), [
  4,
  '2',
  'c',
]);
const words = ['hello', 'world', 'lighthouse'];
without(words, ['lighthouse']);
assertArraysEqual(words, ['hello', 'world', 'lighthouse']);
