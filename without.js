const assertArraysEqual = require('./assertArraysEqual');

// filter out the items of the source array that
// cannot be found in the itemsToRemove array
// const without = (source, itemsToRemove) =>
//   source.filter(
//     (srcEl) => itemsToRemove.findIndex((toRmEl) => toRmEl === srcEl) === -1
// findIndex looks for first item in the array that
// equals the item currently being looked at in the
// source array and returns -1 if it is not found
// )

// const without = (source, itemsToRemove) => {
//   const newArr = []
//   for (const sourceItem of source) {
//     let itemFound = false
//     for (const item of itemsToRemove) {
//       if (item === sourceItem) {
//         itemFound = true
//         break
//       }
//     }
//     if (!itemFound) newArr.push(sourceItem)
//   }
//   return newArr
// }

// recursive solution
// const without = (source, itemsToRemove, newArr = []) => {

//   if (source.length === 0) return newArr;

//   // helper function to compare each element in the source array
//   // to the items in the itemsToRemove
//   const findItems = (src, iTr) => {
//     if (iTr.length === 0) return newArr.push(src[0]);
//     if (src[0] !== iTr[0]) return findMatch(src, iTr.slice(1));
//   };

//   findItems(source, itemsToRemove);

//   return without(source.slice(1), itemsToRemove, newArr);
// };

// one-liner using built-in method
// const without = (source, itemsToRemove) => source.filter((el) => !itemsToRemove.includes(el))

//TEST CODE
assertArraysEqual(without([1, 2, 3], [1]), [2, 3])
assertArraysEqual(without(['1', '2', '3'], [1, 2, '3']), ['1', '2']);
assertArraysEqual(without([4, 'a', '2', 'c', 5], [1, 2, '3', 'a', 6, 5]), [
  4,
  '2',
  'c',
])
const words = ['hello', 'world', 'lighthouse']
without(words, ['lighthouse'])
assertArraysEqual(words, ['hello', 'world', 'lighthouse'])
