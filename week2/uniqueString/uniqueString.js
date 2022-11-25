const getSortedUniqueChars = (word, caseSensitive = false) => {
  word = caseSensitive ? word : word.toLowerCase();
  uniqueChars = new Set(word.split(""));
  return Array.from(uniqueChars).sort();
};

function uniqueString(stringArray) {
  let uniqueValues = {};
  stringArray.forEach((str) => {
    let uniqueChars = getSortedUniqueChars(str, false);
    if (uniqueValues[uniqueChars]) {
      uniqueValues[uniqueChars].push(str);
    } else {
      uniqueValues[uniqueChars] = [str];
    }
  });
  // assumes only one unique string
  return Object.values(uniqueValues).filter(
    (value) => value.length === 1
  )[0][0];
}

const filterUnique = (strArray) =>
  strArray.filter((str) => new Set(str.toLowerCase()).size === str.length);

module.exports = { uniqueString };
