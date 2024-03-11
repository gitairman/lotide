// eqArrays takes in two arrays and determines if they are equal
// nested arrays are also handled with recursion
const eqArrays = (arr1, arr2) => {
  // helper function to check that both inputs are arrays and of same length
  const checkArrAndLength = (e1, e2) => {
    const areArrays = Array.isArray(e1) && Array.isArray(e2);
    const areSameLength = e1.length === e2.length;
    return areArrays && areSameLength;
  };

  // if arr1 and arr2 are both arrays and same length, return the
  // result of checking every element in the arrays for equality
  if (checkArrAndLength(arr1, arr2)) {
    return arr1.every((arr1El, i) => {
      const arr2El = arr2[i];
      // if an element of the array is yet another array, recursive case
      if (checkArrAndLength(arr1El, arr2El)) return eqArrays(arr1El, arr2El);
      return arr1El === arr2El;
    });
  }
  return false;
};

module.exports = eqArrays;