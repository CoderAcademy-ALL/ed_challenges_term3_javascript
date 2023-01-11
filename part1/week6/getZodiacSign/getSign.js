function getSign(input) {
  const date = new Date(input);
  if (date == "Invalid Date" || typeof input !== "string") {
    return "Invalid Date";
  }
  const month = date.getMonth();
  const monthDay = date.getDate();
  let sign;
  switch (month) {
    case 0: // Jan
      sign = monthDay <= 20 ? "Capricorn" : "Aquarius";
      break;
    case 1: // Feb
      sign = monthDay <= 19 ? "Aquarius" : "Pisces";
      break;
    case 2: // Mar
      sign = monthDay <= 19 ? "Pisces" : "Aries";
      break;
    case 3: // Apr
      sign = monthDay <= 20 ? "Aries" : "Taurus";
      break;
    case 4: // May
      sign = monthDay <= 21 ? "Taurus" : "Gemini";
      break;
    case 5: // Jun
      sign = monthDay <= 21 ? "Gemini" : "Cancer";
      break;
    case 6: // Jul
      sign = monthDay <= 22 ? "Cancer" : "Leo";
      break;
    case 7: // Aug
      sign = monthDay <= 22 ? "Leo" : "Virgo";
      break;
    case 8: // Sept
      sign = monthDay <= 22 ? "Virgo" : "Libra";
      break;
    case 9: // Oct
      sign = monthDay <= 22 ? "Libra" : "Scorpio";
      break;
    case 10: // Nov
      sign = monthDay <= 21 ? "Scorpio" : "Sagittarius";
      break;
    case 11: // Dec
      sign = monthDay <= 21 ? "Sagittarius" : "Capricorn";
      break;
  }
  return sign;
}

module.exports = { getSign };
