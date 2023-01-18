const { lookSay } = require("./lookSay.js");

describe("Look-and-say", function () {
  it("should handle simple numbers", function () {
    expect(lookSay(0)).toBe(10);
    expect(lookSay(1)).toBe(11);
    expect(lookSay(2014)).toBe(12101114);
    expect(lookSay(1122)).toBe(2122);
    expect(lookSay(22322)).toBe(221322);
    expect(lookSay(lookSay(lookSay(1)))).toBe(1211);
  });

  it("should handle multi-digit numbers", function () {
    expect(lookSay(33333333333331)).toBe(13311);
  });

  it("should handle random numbers", function () {
    _kata = function (number) {
      number = number.toString();
      var say = "";
      var digit = "";
      var count = "";
      for (i in number) {
        if (number[i] == digit) count++;
        else {
          say += count.toString() + digit;
          count = 1;
          digit = number[i];
        }
      }
      return parseInt(say + count.toString() + digit);
    };

    for (i = 0; i < 5; i++) {
      var r = Math.floor(Math.random() * 1000001);
      expect(lookSay(r)).toBe(_kata(r));
    }
  });
});
