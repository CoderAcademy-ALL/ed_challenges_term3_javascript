function toCamelCase(str) {
  const strOnlyUnderscores = str.replace(/-/g, "_");
  return strOnlyUnderscores.replace(/(?!^)_[a-z^A-Z]/g, (matchedWords) => {
    return matchedWords[1].toUpperCase();
  });
}
// https://stackoverflow.com/questions/33795223/regular-expression-or-other-way-to-convert-to-camel-like-case-in-javascript
// (?!^) - do not match at start of string (your "_xfefx" example)
// _ - match the underscore (duh...)
// ([a-z]) - match one lowercase letter and capture in group 1, matches[1]
// /.../g - "global" matching, i.e. replace not only the first but all occurences

console.log(toCamelCase("First-Word-capital"));
console.log(toCamelCase("foo_bar"));
module.exports = { toCamelCase };
