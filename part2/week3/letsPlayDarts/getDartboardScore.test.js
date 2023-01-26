const { getDartboardScore } = require("./getDartboardScore.js");

describe("With given coordinates", function () {
  it("The score can be 'No Score'", function () {
    expect(getDartboardScore(-133.69, -147.38)).toBe("X");
  });
  it("The score can be 'Bull's Eye'", function () {
    expect(getDartboardScore(4.06, 0.71)).toBe("DB");
  });
  it("The score can be 'Bull'", function () {
    expect(getDartboardScore(2.38, -6.06)).toBe("SB");
  });
  it("The score can be 20", function () {
    expect(getDartboardScore(-5.43, 117.95)).toBe("20");
  });
  it("The score can be 7", function () {
    expect(getDartboardScore(-73.905, -95.94)).toBe("7");
  });
  it("The score can be a tripple", function () {
    expect(getDartboardScore(55.53, -87.95)).toBe("T2");
  });
  it("The score can be a double", function () {
    expect(getDartboardScore(-145.19, 86.53)).toBe("D9");
  });
});
