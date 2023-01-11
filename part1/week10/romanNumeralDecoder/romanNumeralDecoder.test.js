const { solution, regexSolution } = require("./romanNumeralDecoder.js");

describe("Tests", () => {
  it("sample tests", () => {
    expect(solution("XXI")).toBe(21);
    expect(solution("I")).toBe(1);
    expect(solution("IV")).toBe(4);
    expect(solution("MMVIII")).toBe(2008);
    expect(solution("MDCLXVI")).toBe(1666);
    expect(regexSolution("XXI")).toBe(21);
    expect(regexSolution("I")).toBe(1);
    expect(regexSolution("IV")).toBe(4);
    expect(regexSolution("MMVIII")).toBe(2008);
    expect(regexSolution("MDCLXVI")).toBe(1666);
  });

  const randInt = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);
  const MIN_ROMAN = 1,
    MAX_ROMAN = 3999;

  function toRoman(number) {
    const NUMBERS = [
      ["M", 1000],
      ["CM", 900],
      ["D", 500],
      ["CD", 400],
      ["C", 100],
      ["XC", 90],
      ["L", 50],
      ["XL", 40],
      ["X", 10],
      ["IX", 9],
      ["V", 5],
      ["IV", 4],
      ["I", 1],
    ];
    let romanString = "";

    for (let i = 0; number > 0 && i < NUMBERS.length; i++) {
      while (number >= NUMBERS[i][1]) {
        romanString += NUMBERS[i][0];
        number -= NUMBERS[i][1];
      }
    }
    return romanString;
  }

  it("random tests", () => {
    for (let i = 0; i < 100; i++) {
      const number = randInt(MIN_ROMAN, MAX_ROMAN);
      const romanString = toRoman(number);
      expect(solution(romanString)).toBe(number);
      expect(regexSolution(romanString)).toBe(number);
    }
  });
});
