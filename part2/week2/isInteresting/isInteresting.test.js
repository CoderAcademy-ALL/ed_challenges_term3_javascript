const { isInteresting } = require("./isInteresting.js");

describe("Basic inputs", function () {
  it("should work, dangit!", function () {
    expect(isInteresting(3, [1337, 256])).toBe(0);
    expect(isInteresting(1336, [1337, 256])).toBe(1);
    expect(isInteresting(1337, [1337, 256])).toBe(2);
    expect(isInteresting(11208, [1337, 256])).toBe(0);
    expect(isInteresting(11209, [1337, 256])).toBe(1);
    expect(isInteresting(11211, [1337, 256])).toBe(2);
  });
});
