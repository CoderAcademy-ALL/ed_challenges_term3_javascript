const cartToPolar = (x, y) => {
  return {
    distance: Math.sqrt(x ** 2 + y ** 2),
    angle: (1 - Math.atan2(y, x) / Math.PI) * 180,
  };
};

const numberList = [
  11, 14, 9, 12, 5, 20, 1, 18, 4, 13, 6, 10, 15, 2, 17, 3, 19, 7, 16, 8, 11,
];

const getDartboardScore = (x, y) => {
  polarCoord = cartToPolar(x, y);
  let score = "";
  if (polarCoord.distance >= 340 / 2) {
    return "X";
  } else if (polarCoord.distance <= 31.8 / 2) {
    return polarCoord.distance <= 12.7 / 2 ? "DB" : "SB";
  }
  if (polarCoord.distance >= 198 / 2 && polarCoord.distance <= 214 / 2) {
    score = "T";
  } else if (polarCoord.distance >= 324 / 2 && polarCoord.distance <= 340 / 2) {
    score = "D";
  }
  return (score += numberList[Math.round(polarCoord.angle / 18)]);
};

module.exports = { getDartboardScore };
