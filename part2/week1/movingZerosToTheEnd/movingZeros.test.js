const { moveZeros, moveZerosBonus } = require("./movingZeros.js");

const random = require("lodash/random");

describe("Tests", () => {
  it("Fixed tests", () => {
    expect(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1])).toStrictEqual([
      1, 2, 1, 1, 3, 1, 0, 0, 0, 0,
    ]);

    expect(
      moveZeros([
        9, 0.0, 0, 9, 1, 2, 0, 1, 0, 1, 0.0, 3, 0, 1, 9, 0, 0, 0, 0, 9,
      ])
    ).toStrictEqual([
      9, 9, 1, 2, 1, 1, 3, 1, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ]);

    expect(
      moveZeros([
        "a",
        0,
        0,
        "b",
        "c",
        "d",
        0,
        1,
        0,
        1,
        0,
        3,
        0,
        1,
        9,
        0,
        0,
        0,
        0,
        9,
      ])
    ).toStrictEqual([
      "a",
      "b",
      "c",
      "d",
      1,
      1,
      3,
      1,
      9,
      9,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
    ]);

    expect(
      moveZeros([
        "a",
        0,
        0,
        "b",
        null,
        "c",
        "d",
        0,
        1,
        false,
        0,
        1,
        0,
        3,
        [],
        0,
        1,
        9,
        0,
        0,
        {},
        0,
        0,
        9,
      ])
    ).toStrictEqual([
      "a",
      "b",
      null,
      "c",
      "d",
      1,
      false,
      1,
      3,
      [],
      1,
      9,
      {},
      9,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
    ]);

    expect(moveZeros([0, 1, null, 2, false, 1, 0])).toStrictEqual([
      1,
      null,
      2,
      false,
      1,
      0,
      0,
    ]);
  });

  it("Random tests", () => {
    for (let i = 0; i < 100; i++) {
      let a = [];
      for (let j = random(0, 30); j; j--) {
        let choice = random(1, 10);
        if (choice <= 1) a.push(null);
        else if (choice <= 2) a.push([]);
        else if (choice <= 3) a.push({});
        else if (choice <= 4) a.push(!!random(0, 1));
        else if (choice <= 7) a.push(random(0, 9));
        else if (choice <= 10) a.push(random(0, 9) + "");
      }
      let expected = a.filter((x) => x !== 0).concat(a.filter((x) => x === 0));
      expect(moveZeros(a)).toStrictEqual(expected);
    }
  });
});

// Bonus tests
describe("Bonus function tests", () => {
  it("bonus tests", () => {
    expect(
      moveZerosBonus([12, 0, 10, 0, 8, 12, 7, 6, 0, 4, 10, 12, 0], true)
    ).toStrictEqual([12, 10, 8, 12, 7, 6, 4, 10, 12, 0, 0, 0, 0]);
    expect(
      moveZerosBonus([12, 0, 10, 0, 8, 12, 7, 6, 0, 4, 10, 12, 0], false)
    ).toStrictEqual([0, 0, 0, 0, 12, 10, 8, 12, 7, 6, 4, 10, 12]);
    expect(
      moveZerosBonus([12, 0, 10, 0, 8, 12, 7, 6, 0, 4, 10, 12, 0])
    ).toStrictEqual([12, 10, 8, 12, 7, 6, 4, 10, 12, 0, 0, 0, 0]);

    expect(moveZerosBonus([], true)).toStrictEqual([]);
    expect(moveZerosBonus([], false)).toStrictEqual([]);
    expect(moveZerosBonus([0, 0, 0], false)).toStrictEqual([0, 0, 0]);
    expect(moveZerosBonus([0, 0, 0, 1], false)).toStrictEqual([0, 0, 0, 1]);
    expect(moveZerosBonus([0, 0, 0, 1])).toStrictEqual([1, 0, 0, 0]);

    expect(moveZerosBonus([0, 0, 0, 0, 0, 0, 1])).toStrictEqual([
      1, 0, 0, 0, 0, 0, 0,
    ]);
  });
});
