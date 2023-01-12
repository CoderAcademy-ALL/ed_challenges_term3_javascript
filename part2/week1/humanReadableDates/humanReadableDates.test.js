const { humanReadable, humanReadableMath } = require("./humanReadableDates.js");

describe("tests", function () {
  it("should format correctly", function () {
    expect(humanReadable(0)).toStrictEqual("00:00:00");
    expect(humanReadable(59)).toStrictEqual("00:00:59");
    expect(humanReadable(60)).toStrictEqual("00:01:00");
    expect(humanReadable(90)).toStrictEqual("00:01:30");
    expect(humanReadable(3599)).toStrictEqual("00:59:59");
    expect(humanReadable(3600)).toStrictEqual("01:00:00");
    expect(humanReadable(45296)).toStrictEqual("12:34:56");
    expect(humanReadable(86399)).toStrictEqual("23:59:59");
    expect(humanReadable(86400)).toStrictEqual("24:00:00");
    expect(humanReadable(359999)).toStrictEqual("99:59:59");
    expect(humanReadableMath(0)).toStrictEqual("00:00:00");
    expect(humanReadableMath(59)).toStrictEqual("00:00:59");
    expect(humanReadableMath(60)).toStrictEqual("00:01:00");
    expect(humanReadableMath(90)).toStrictEqual("00:01:30");
    expect(humanReadableMath(3599)).toStrictEqual("00:59:59");
    expect(humanReadableMath(3600)).toStrictEqual("01:00:00");
    expect(humanReadableMath(45296)).toStrictEqual("12:34:56");
    expect(humanReadableMath(86399)).toStrictEqual("23:59:59");
    expect(humanReadableMath(86400)).toStrictEqual("24:00:00");
    expect(humanReadableMath(359999)).toStrictEqual("99:59:59");
  });

  function solution(seconds) {
    var hours = (seconds / 3600) | 0;
    var minutes = ((seconds % 3600) / 60) | 0;
    seconds %= 60;
    return (
      (hours < 10 ? "0" + hours : hours) +
      ":" +
      (minutes < 10 ? "0" + minutes : minutes) +
      ":" +
      (seconds < 10 ? "0" + seconds : seconds)
    );
  }

  function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  it("random tests", function () {
    for (let i = 0; i < 100; i++) {
      const seconds = getRandomIntInclusive(0, 359999);
      const expected = solution(seconds);
      const actual = humanReadable(seconds);
      const actualMath = humanReadableMath(seconds);
      expect(actual).toStrictEqual(expected);
      expect(actualMath).toStrictEqual(expected);
    }
  });
});
