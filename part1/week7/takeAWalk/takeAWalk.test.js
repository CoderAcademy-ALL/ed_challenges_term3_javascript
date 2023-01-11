const { isValidWalk } = require("./takeAWalk.js");

let fail = [
  ["n"],
  ["n", "s"],
  ["n", "s", "n", "s", "n", "s", "n", "s", "n", "s", "n", "s"],
  [
    "n",
    "s",
    "e",
    "w",
    "n",
    "s",
    "e",
    "w",
    "n",
    "s",
    "e",
    "w",
    "n",
    "s",
    "e",
    "w",
  ],
  ["n", "s", "n", "s", "n", "s", "n", "s", "n", "n"],
  ["e", "e", "e", "w", "n", "s", "n", "s", "e", "w"],
  ["n", "e", "n", "e", "n", "e", "n", "e", "n", "e"],
  ["n", "w", "n", "w", "n", "w", "n", "w", "n", "w"],
  ["e", "s", "e", "s", "e", "s", "e", "s", "e", "s"],
  ["w", "s", "w", "s", "w", "s", "w", "s", "w", "s"],
  [
    "n",
    "s",
    "n",
    "s",
    "n",
    "s",
    "n",
    "s",
    "n",
    "s",
    "n",
    "s",
    "e",
    "w",
    "e",
    "w",
    "e",
    "w",
    "e",
    "w",
  ],
];

let pass = [
  ["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"],
  ["e", "w", "e", "w", "n", "s", "n", "s", "e", "w"],
  ["n", "s", "e", "w", "n", "s", "e", "w", "n", "s"],
  ["n", "n", "n", "s", "s", "s", "e", "w", "n", "s"],
];

describe("Walk Validator", function () {
  it("should return false if walk is too short", function () {
    expect(isValidWalk(fail[0])).toBe(false);
    expect(isValidWalk(fail[1])).toBe(false);
  });
  it("should return false if walk is too long", function () {
    expect(isValidWalk(fail[2])).toBe(false);
    expect(isValidWalk(fail[3])).toBe(false);
    expect(isValidWalk(fail[10])).toBe(false);
  });
  it("should return false if walk does not bring you back to start", function () {
    expect(isValidWalk(fail[4])).toBe(false);
    expect(isValidWalk(fail[5])).toBe(false);
    expect(isValidWalk(fail[6])).toBe(false);
    expect(isValidWalk(fail[7])).toBe(false);
    expect(isValidWalk(fail[8])).toBe(false);
    expect(isValidWalk(fail[9])).toBe(false);
  });
  it("should return true for a valid walk", function () {
    expect(isValidWalk(pass[0])).toBe(true);
    expect(isValidWalk(pass[1])).toBe(true);
    expect(isValidWalk(pass[2])).toBe(true);
    expect(isValidWalk(pass[3])).toBe(true);
  });
});

describe("Random Walk Validator", function () {
  function isValidWalkReference(walk) {
    var time = walk.length,
      totals = { n: 0, s: 0, w: 0, e: 0 };

    if (time !== 10) return false;

    walk.forEach(function (el) {
      totals[el] += 1;
    });

    return totals.n === totals.s && totals.w === totals.e;
  }

  function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }

  function randInt(n) {
    return Math.floor(Math.random() * n);
  }

  function generateValidWalk() {
    const pairs = [
      ["n", "s"],
      ["e", "w"],
    ];
    let path = [];
    for (let i = 0; i < 5; i++) {
      path = path.concat(pairs[randInt(2)]);
    }
    return path;
  }

  function generateInvalidWalk() {
    const invalidPaths = [
        ["n", "n", "s", "e", "e", "w"],
        ["n", "s", "s", "e", "e", "w"],
        ["n", "n", "s", "e", "w", "w"],
        ["n", "s", "s", "e", "w", "w"],
      ],
      pairs = [
        ["n", "s"],
        ["e", "w"],
      ],
      pairsToAdd = randInt(4);
    let path = invalidPaths[randInt(4)];
    for (let i = 0; i < pairsToAdd; i++) {
      path = path.concat(pairs[randInt(2)]);
    }
    return path;
  }

  for (let i = 0; i < 100; i++) {
    let expected = [randInt(2) < 1 ? true : false];
    expected.push(expected[0] ? generateValidWalk() : generateInvalidWalk());
    shuffle(expected[1]);
    it(`should return ${expected[0]} for a${
      expected[0] ? " " : "n in"
    }valid walk`, function () {
      if (expected[0]) {
        expect(isValidWalk(expected[1])).toBe(true);
      } else {
        expect(isValidWalk(expected[1])).toBe(false);
      }
    });
  }
});
