// mathOperation to be a function returning one number with two input numbers
const mathOperationOnDigits = (n, mathOperation) =>
  Array.from(String(n), Number).reduce((prev, current) =>
    mathOperation(prev, current)
  );

const atomicBlonde = (num) => {
  const sumDigits = mathOperationOnDigits(num, (val1, val2) => val1 + val2);
  const productDigits = mathOperationOnDigits(num, (val1, val2) => val1 * val2);
  return sumDigits == productDigits;
};

module.exports = { atomicBlonde };
