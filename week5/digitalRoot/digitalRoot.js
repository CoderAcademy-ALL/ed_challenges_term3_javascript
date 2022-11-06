// Creates array of digits w/in Number
const sumDigits = (n) =>
  Array.from(String(n), Number).reduce((prev, current) => prev + current);

const digitalRoot = (n) => {
  const sum = sumDigits(n);
  return sum <= 9 ? sum : digitalRoot(sum);
};
// Leave this line
module.exports = { digitalRoot };
