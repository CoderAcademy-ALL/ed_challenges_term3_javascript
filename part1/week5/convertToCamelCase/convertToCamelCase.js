const toCamelCase = (str) => {
  const strOnlyUnderscores = str.replace(/-/g, "_");
  return strOnlyUnderscores.replace(/(?!^)_[a-z^A-Z]/g, (matchedWords) => {
    return matchedWords[1].toUpperCase();
  });
};
// Explanation of RegExp. I got this solution idea from:
// https://stackoverflow.com/questions/33795223/regular-expression-or-other-way-to-convert-to-camel-like-case-in-javascript
// (?!^) - do not match at start of string (your "_xfefx" example)
// _ - match the underscore
// ([a-z]) - match one lowercase letter and capture in group 1, matches[1]
// /.../g - "global" matching, i.e. replace not only the first but all occurrences

// Below in toCamelCaseArrayBased was my first attempt at the solution.
// Both of these pass all tests, they are just to showcase differing ways to successfully approach a problem
const toCamelCaseArrayBased = (str) => {
  const strOnlyUnderscores = str.replace(/-/g, "_");
  const wordArray = strOnlyUnderscores.split("_");
  return wordArray
    .map((wrd, idx) => (idx === 0 ? wrd : wrd[0].toUpperCase() + wrd.slice(1)))
    .join("");
};

module.exports = { toCamelCase, toCamelCaseArrayBased };
