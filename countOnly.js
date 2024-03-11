// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = (allItems, itemsToCount) => {
  const countObj = {};
  for (let item of allItems) {
    if (itemsToCount[item]) countObj[item] = (countObj[item] || 0) + 1;
  }
  return countObj;
};

module.exports = countOnly;
