const { getSign } = require("./getSign.js");
const { getSignUsingFormatting } = require("./getSignPersianFormat.js");

describe("getSign", () => {
  it("should correctly assign a zodiac to a date string formatted 'YYYY-MM-DD'", () => {
    const input = "1988-03-17";
    expect(getSign(input)).toBe("Pisces");
    expect(getSignUsingFormatting(input)).toBe("Pisces");
  });

  it("should correctly assign a zodiac to a date string formatted 'MM-DD-YYYY'", () => {
    const input = "11-05-1995";
    expect(getSign(input)).toBe("Scorpio");
    expect(getSignUsingFormatting(input)).toBe("Scorpio");
  });

  it("should correctly assign a zodiac to a date string formatted 'MM/DD/YYYY'", () => {
    const input = "02/26/1990";
    expect(getSign(input)).toBe("Pisces");
    expect(getSignUsingFormatting(input)).toBe("Pisces");
  });

  it("should correctly assign a zodiac to a date string formatted 'MM/DD/YYYY'", () => {
    const input = "02/26/1990";
    expect(getSign(input)).toBe("Pisces");
    expect(getSignUsingFormatting(input)).toBe("Pisces");
  });

  it("should correctly assign a zodiac to a date string formatted '[Month] [Date], [Year]'", () => {
    const input = "January 5, 2000";
    expect(getSign(input)).toBe("Capricorn");
    expect(getSignUsingFormatting(input)).toBe("Capricorn");
  });

  it("should correctly deal with cusps", () => {
    const firstDayAries = "1988-03-21";
    expect(getSign(firstDayAries)).toBe("Aries");
    expect(getSignUsingFormatting(firstDayAries)).toBe("Aries");
    const lastDayScorpio = "11-21-1990";
    expect(getSign(lastDayScorpio)).toBe("Scorpio");
    expect(getSignUsingFormatting(lastDayScorpio)).toBe("Scorpio");
    const lastDayGemini = "1988-06-20";
    expect(getSign(lastDayGemini)).toBe("Gemini");
    expect(getSignUsingFormatting(lastDayGemini)).toBe("Gemini");
  });

  it("should return 'Invalid Date' on plain text string", () => {
    const input = "dsfs";
    expect(getSign(input)).toBe("Invalid Date");
    expect(getSignUsingFormatting(input)).toBe("Invalid Date");
  });

  it("should return 'Invalid Date' number input", () => {
    const input = 5;
    expect(getSign(input)).toBe("Invalid Date");
    expect(getSignUsingFormatting(input)).toBe("Invalid Date");
  });
});
