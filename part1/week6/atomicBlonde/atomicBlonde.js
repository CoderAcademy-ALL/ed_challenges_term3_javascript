// Instead of this approach one could also iterate over a numeric string thus only needing one loop.
// mathOperation to be a function returning one number with two input numbers
const mathOperationOnDigits = (n, mathOperation) =>
  Array.from(String(n), Number).reduce((prev, current) =>
    mathOperation(prev, current)
  );

const atomicBlonde = (num) => {
  return (
    mathOperationOnDigits(num, (val1, val2) => val1 + val2) ==
    mathOperationOnDigits(num, (val1, val2) => val1 * val2)
  );
};
module.exports = { atomicBlonde };
