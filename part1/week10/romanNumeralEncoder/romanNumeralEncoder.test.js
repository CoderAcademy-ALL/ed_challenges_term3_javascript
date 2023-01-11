const { solution, solution2 } = require("./romanNumeralEncoder.js");

describe("solution", function () {
  it("should handle small numbers", function () {
    expect(solution(1)).toBe("I");
    expect(solution2(1)).toBe("I");
    expect(solution(2)).toBe("II");
    expect(solution2(2)).toBe("II");
    expect(solution(3)).toBe("III");
    expect(solution2(3)).toBe("III");
    expect(solution(4)).toBe("IV");
    expect(solution2(4)).toBe("IV");
    expect(solution(5)).toBe("V");
    expect(solution2(5)).toBe("V");
    expect(solution(9)).toBe("IX");
    expect(solution2(9)).toBe("IX");
    expect(solution(10)).toBe("X");
    expect(solution2(10)).toBe("X");
    expect(solution(11)).toBe("XI");
    expect(solution2(11)).toBe("XI");
    expect(solution(19)).toBe("XIX");
    expect(solution2(19)).toBe("XIX");
    expect(solution(22)).toBe("XXII");
    expect(solution2(22)).toBe("XXII");
    expect(solution(15)).toBe("XV");
    expect(solution2(15)).toBe("XV");
  });

  it("should handle large numbers", function () {
    expect(solution(1000)).toBe("M");
    expect(solution2(1000)).toBe("M");
    expect(solution(1001)).toBe("MI");
    expect(solution2(1001)).toBe("MI");
    expect(solution(1990)).toBe("MCMXC");
    expect(solution2(1990)).toBe("MCMXC");
    expect(solution(2007)).toBe("MMVII");
    expect(solution2(2007)).toBe("MMVII");
    expect(solution(2008)).toBe("MMVIII");
    expect(solution2(2008)).toBe("MMVIII");
  });

  it("random tests", function () {
    let Roman = {
      map: [
        1000,
        "M",
        900,
        "CM",
        500,
        "D",
        400,
        "CD",
        100,
        "C",
        90,
        "XC",
        50,
        "L",
        40,
        "XL",
        10,
        "X",
        9,
        "IX",
        5,
        "V",
        4,
        "IV",
        1,
        "I",
      ],
      toRoman: function (n) {
        let value = "";
        for (let idx = 0; n > 0 && idx < this.map.length; idx += 2) {
          while (n >= this.map[idx]) {
            value += this.map[idx + 1];
            n -= this.map[idx];
          }
        }
        return value;
      },
    };

    for (let i = 0; i < 100; i++) {
      let n = (1 + Math.random() * 3888) | 0;
      const exp = Roman.toRoman(n);
      expect(solution(n)).toBe(exp);
      expect(solution2(n)).toBe(exp);
    }
  });
});
