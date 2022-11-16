// Sources:
// https://en.iran.ir/about/iranian-calendar
// https://calcuworld.com/calendar-calculators/persian-calendar-converter/
// Each index here corresponds to a Persian month
const dateOrderedSigns = [
  // Signs ordered according to Western Zodiac
  "Aries",
  "Taurus",
  "Gemini",
  "Cancer",
  "Leo",
  "Virgo",
  "Libra",
  "Scorpio",
  "Sagittarius",
  "Capricorn",
  "Aquarius",
  "Pisces",
];

const getSignUsingFormatting = (input) => {
  // Parse input
  const date = new Date(input);
  if (date == "Invalid Date" || typeof input !== "string") {
    return "Invalid Date";
  }
  const signIdx = date.toLocaleDateString("fa-IR-u-nu-latn", {
    month: "numeric",
  });
  return dateOrderedSigns[signIdx - 1];
};

module.exports = { getSignUsingFormatting };
