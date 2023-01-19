// Helper functions
const digitArray = (number) => Array.from(number.toString()).map(Number);
const isPalindrome = (number) => {
  const numStr = number.toString();
  return numStr.split("").reverse().join("") == numStr && numStr.length > 2;
};

const isFollowedByZeros = (number) => {
  const numStr = number.toString();
  return parseInt(numStr.slice(1, numStr.length)) == 0;
};

const isSameNumber = (number) => {
  const digitArr = digitArray(number);
  return digitArr.every((digit) => digit == digitArr[0]) && digitArr.length > 2;
};
// Could also use regex ^(\d)(?!\1+$)\d{11}$ for the above

const digitsAreSequentialInc = (number) =>
  number.toString().length > 2 && "1234567890".indexOf(number) >= 0;

const digitsAreSequentialDec = (number) =>
  number.toString().length > 2 && "9876543210".indexOf(number) >= 0;

function isInteresting(number, awesomePhrases) {
  let interesting = 0;

  for (let idx = 0; idx < 3 && !interesting && number >= 98; ++idx, number++) {
    interesting =
      isPalindrome(number) ||
      digitsAreSequentialInc(number) ||
      digitsAreSequentialDec(number) ||
      awesomePhrases.includes(number) ||
      isFollowedByZeros(number) ||
      isSameNumber(number)
        ? idx == 0
          ? 2
          : 1
        : 0;
  }
  return interesting;
}

module.exports = { isInteresting };
