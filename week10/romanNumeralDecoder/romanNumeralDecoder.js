const romanConversion = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

const solution = (roman) => {
  let resultNum = 0;
  for (let idx = 0; idx < roman.length; idx++) {
    const current = romanConversion[roman[idx]];
    const next = romanConversion[roman[idx + 1]];
    resultNum += current < next ? next - current : current;
    if (current < next) {
      idx++;
    }
  }
  return resultNum;
};

const regexSolution = (roman) =>
  roman
    .match(/CM|CD|XC|XL|IX|IV|\w/g)
    .reduce((prev, roman) => prev + romanConversion[roman], 0);

module.exports = { solution, regexSolution };
