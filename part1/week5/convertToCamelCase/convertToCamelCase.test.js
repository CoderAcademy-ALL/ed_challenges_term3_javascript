const {
  toCamelCase,
  toCamelCaseArrayBased,
} = require("./convertToCamelCase.js");

describe("toCamelCase", () => {
  it("returns an empty string when passed an empty string", () => {
    expect(toCamelCase("")).toBe("");
    expect(toCamelCaseArrayBased("")).toBe("");
  });

  it("converts kebab case", () => {
    expect(toCamelCase("foo-bar")).toBe("fooBar");
    expect(toCamelCaseArrayBased("foo-bar")).toBe("fooBar");
  });

  it("converts snake case", () => {
    expect(toCamelCase("hello_there")).toBe("helloThere");
    expect(toCamelCaseArrayBased("hello_there")).toBe("helloThere");
  });

  it("converts multiple words in snake case", () => {
    expect(toCamelCase("this_is_quite_long")).toBe("thisIsQuiteLong");
    expect(toCamelCaseArrayBased("this_is_quite_long")).toBe("thisIsQuiteLong");
  });

  it("converts upcased first word", () => {
    expect(toCamelCase("First_Word_capital")).toBe("FirstWordCapital");
    expect(toCamelCaseArrayBased("First_Word_capital")).toBe(
      "FirstWordCapital"
    );
  });
});
