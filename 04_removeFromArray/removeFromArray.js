const removeFromArray = function (array, ...args) {
  const result = array.filter((e) => !args.includes(e));
  return result;
};

// Do not edit below this line
module.exports = removeFromArray;
