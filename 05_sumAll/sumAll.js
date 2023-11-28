const sumAll = function (firstNumber, secondNumber) {
  if (
    (firstNumber < 0) |
    (secondNumber < 0) |
    (typeof firstNumber !== "number") |
    (typeof secondNumber !== "number")
  )
    return "ERROR";
  let start = Math.min(firstNumber, secondNumber);
  let end = Math.max(firstNumber, secondNumber);
  let sum = 0;
  for (start; start <= end; start++) {
    sum += start;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
