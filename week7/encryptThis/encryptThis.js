const encryptWord = (wrd) => {
  wordLen = wrd.length;
  firstChar = String(wrd.charCodeAt(0));
  lastChar = wrd.length == 2 ? "" : wrd[1]; // don't repeat it
  return wordLen == 1
    ? firstChar
    : firstChar + wrd[wordLen - 1] + wrd.slice(2, -1) + lastChar;
};

const encryptThis = (text) => {
  return text.split(" ").map(encryptWord).join(" ");
};

module.exports = { encryptThis };
