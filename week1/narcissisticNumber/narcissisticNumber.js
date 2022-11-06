const splitNumberToDigitArray = (inputNumber) => {
  return String(inputNumber).split("").map(Number);
};
const narcissisticNumber = (number) => {
  const digitArray = splitNumberToDigitArray(number);
  const sumArrayRaised = digitArray
    .map((num) => num ** digitArray.length)
    .reduce((a, b) => a + b);
  return sumArrayRaised === number;
};

module.exports = { narcissisticNumber, splitNumberToDigitArray };
