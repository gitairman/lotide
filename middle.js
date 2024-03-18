// takes in an array and returns the middle element(s) of an array
const middle = (arr) => {
  // if array has 2 elements or less, there is no middle so return empty array
  if (arr.length <= 2) return [];
  const isEven = arr.length % 2 === 0,
    midStartIdx = isEven ? arr.length / 2 - 1 : Math.floor(arr.length / 2),
    midEndIdx = isEven ? midStartIdx + 2 : midStartIdx + 1;
  return arr.slice(midStartIdx, midEndIdx);
};

module.exports = middle;
