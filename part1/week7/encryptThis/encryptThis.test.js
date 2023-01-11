const { encryptThis } = require("./encryptThis.js");

describe("Fixed Tests", function () {
  it("should work with fixed tests", function () {
    expect(encryptThis("A")).toBe("65");
    expect(encryptThis("A wise old owl lived in an oak")).toBe(
      "65 119esi 111dl 111lw 108dvei 105n 97n 111ka"
    );
    expect(encryptThis("The more he saw the less he spoke")).toBe(
      "84eh 109ero 104e 115wa 116eh 108sse 104e 115eokp"
    );
    expect(encryptThis("The less he spoke the more he heard")).toBe(
      "84eh 108sse 104e 115eokp 116eh 109ero 104e 104dare"
    );
    expect(encryptThis("Why can we not all be like that wise old bird")).toBe(
      "87yh 99na 119e 110to 97ll 98e 108eki 116tah 119esi 111dl 98dri"
    );
    expect(encryptThis("Thank you Piotr for all your help")).toBe(
      "84kanh 121uo 80roti 102ro 97ll 121ruo 104ple"
    );
  });
});

let randomTexts = function (count) {
  let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let maxIndex = possible.length - 1;
  let texts = [];
  let randomWord = function () {
    let rw = [];
    for (let i = 0; i < Math.max(Math.floor(Math.random() * 20), 1); i++) {
      rw.push(possible[Math.floor(Math.random() * maxIndex)]);
    }
    return rw.join("");
  };

  for (let t = 0; t < count; t++) {
    let result = [];
    for (let w = 0; w <= Math.floor(Math.random() * 20); w++) {
      result.push(randomWord());
    }
    texts.push(result.join(" "));
  }
  return texts;
};

describe("Random Tests", function () {
  it("should work with random tests", function () {
    let solution = function (text) {
      if (text === "") return text;

      return text
        .split(" ")
        .map(function (word) {
          let init = word.charCodeAt(0).toString();
          if (word.length === 1) return init;

          let chars = word.split("");
          let length = chars.length;

          let temp = chars[1];
          chars[1] = chars[length - 1];
          chars[length - 1] = temp;

          return init + chars.slice(1, length).join("");
        })
        .join(" ");
    };
    randomTexts(100).forEach((text) => {
      expect(encryptThis(text)).toBe(solution(text));
    });
  });
});
