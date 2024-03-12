// takes in an array and a callback, and returns a new array containing the values for which the result of calling the callback on each element of the original array is true.
const takeUntil = (array, callback) => {
  const results = [];

  for (const [i, item] of array.entries()) {
    if (callback(item, i)) break;
    results.push(array[i]);
  }
  return results;
};

module.exports = takeUntil;
