const { validBraces } = require("./validBraces.js");

describe("Tests suite", function () {
  it("invalid braces", function () {
    expect(validBraces("()))")).toBe(false);
    expect(validBraces("(}")).toBe(false);
    expect(validBraces("[(])")).toBe(false);
    expect(validBraces("(})")).toBe(false);
    expect(validBraces(")(}{][")).toBe(false);
    expect(validBraces("())({}}{()][][")).toBe(false);
    expect(validBraces("(((({{")).toBe(false);
    expect(validBraces("}}]]))}])")).toBe(false);
    expect(validBraces("")).toBe(false);
  });
  it("valid braces", function () {
    expect(validBraces("()")).toBe(true);
    expect(validBraces("[]")).toBe(true);
    expect(validBraces("{}")).toBe(true);
    expect(validBraces("(){}[]")).toBe(true);
    expect(validBraces("([{}])")).toBe(true);
    expect(validBraces("({})[({})]")).toBe(true);
    expect(validBraces("(({{[[]]}}))")).toBe(true);
    expect(validBraces("{}({})[]")).toBe(true);
  });
});
