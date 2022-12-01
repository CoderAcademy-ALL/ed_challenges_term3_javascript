const validBraces = (braces) => {
  // need \ before [] and () matching in RegEx
  const leftoverBraces = braces.replace(/{}|\(\)|\[\]/g, "");
  return braces == leftoverBraces
    ? false
    : leftoverBraces.length > 0
    ? validBraces(leftoverBraces)
    : true;
};

module.exports = { validBraces };
