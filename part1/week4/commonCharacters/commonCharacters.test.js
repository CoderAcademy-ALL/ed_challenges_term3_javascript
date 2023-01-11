const commonCharacters = require("./commonCharacters").commonCharacters;

describe("Common Characters", () => {
  it("returns commons characters", () => {
    expect(commonCharacters("abc", "abc")).toBe("abc");
  });

  it("returns commons characters and ignores letter case", () => {
    expect(
      commonCharacters("We are both dragon energy", "I am God's vessel")
    ).toBe("eaodg");
  });

  it("returns commons characters and ignores letter case", () => {
    expect(
      commonCharacters("Don't carry the world", "upon your shoulders")
    ).toBe("donryhel");
  });

  it("returns common characters", () => {
    expect(commonCharacters("What is love?", "Baby don't hurt me")).toBe(
      "hatoe"
    );
  });

  it("returns common characters", () => {
    expect(
      commonCharacters(
        "Riding on a buffalo makes me more approachable",
        "so what"
      )
    ).toBe("oash");
  });

  it("returns empty string", () => {
    expect(commonCharacters("", "No more")).toBe("");
  });

  it("returns empty string", () => {
    expect(commonCharacters("No more", "")).toBe("");
  });

  it("returns empty string", () => {
    expect(commonCharacters("", "")).toBe("");
  });
});
