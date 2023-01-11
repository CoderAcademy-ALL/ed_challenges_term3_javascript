function commonCharacters(string1, string2) {
  const commonChars = [];
  for (const char of string1.toLowerCase()) {
    if (
      // could also map spaces to empty w/regex
      char !== " " && // handle spaces
      !commonChars.includes(char) && // don't add if present
      string2.toLowerCase().includes(char)
    ) {
      commonChars.push(char);
    }
  }
  return commonChars.join("");
}

module.exports = { commonCharacters };
