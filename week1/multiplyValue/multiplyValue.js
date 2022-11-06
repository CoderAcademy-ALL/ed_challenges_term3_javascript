const checkType = (value, expectedType) => typeof value === expectedType;
const multiplyValueArrow = (value, times) => {
  if (!checkType(times, "number")) {
    return null;
  } else if (checkType(value, "number")) {
    return value * times;
  } else if (checkType(value, "string")) {
    return value.repeat(times);
  } else {
    return null;
  }
};

function multiplyValue(value, times) {
  if (typeof times !== "number") {
    return null;
  }
  switch (typeof value) {
    case "number":
      return value * times;
    case "string":
      return value.repeat(times);
    default:
      return null;
  }
}

// Leave this line
module.exports = { multiplyValue, multiplyValueArrow };
