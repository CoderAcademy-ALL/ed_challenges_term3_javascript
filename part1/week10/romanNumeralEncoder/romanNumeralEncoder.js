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

const solution = (number) => {
  let resultStr = "";
  for (const numeral in romanConversion) {
    const remainder = Math.floor(number / romanConversion[numeral]);
    number -= remainder * romanConversion[numeral];
    resultStr += numeral.repeat(remainder);
  }
  return resultStr;
};

// second solution from CodeWars. Using while loop.
const solution2 = (number) => {
  let resultStr = "";
  for (const numeral in romanConversion) {
    while (number >= romanConversion[numeral]) {
      resultStr += numeral;
      number -= romanConversion[numeral];
    }
  }
  return resultStr;
};

module.exports = { solution, solution2 };
