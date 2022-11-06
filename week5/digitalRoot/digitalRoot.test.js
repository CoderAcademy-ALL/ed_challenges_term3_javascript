const digitalRoot = require("./digitalRoot.js").digitalRoot;

describe("Integer Tests", () => {
  it("Given 16 should return 7", () => {
    expect(digitalRoot(16)).toBe(7);
  });
  it("Given 195 should return 6", () => {
    expect(digitalRoot(195)).toBe(6);
  });
  it("Given 999999999999 should return 9", () => {
    expect(digitalRoot(999999999999)).toBe(9);
  });
  it("Given 167346 should return 9", () => {
    expect(digitalRoot(167346)).toBe(9);
  });
  it("Given 0 should return 0", () => {
    expect(digitalRoot(0)).toBe(0);
  });
});
