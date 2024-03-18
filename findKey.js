// takes in an object and callback function, which is called with each value in the object
// if the callback result is true, the key of the object is returned, otherwise undefined is returned
const findKey = (obj, cb) => {
  for (const [key, val] of Object.entries(obj)) {
    if (cb(val)) return key;
  }
};

module.exports = findKey;
