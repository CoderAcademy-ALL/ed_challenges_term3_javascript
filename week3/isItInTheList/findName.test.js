const { checkList, findName } = require("./findName.js");

describe("checkList - valid names", () => {
  it("should find a name that exists in names.txt", (done) => {
    expect(checkList("alex", findName)).toBe("alex is in the list");
    done();
  });
  it("should find a name that exists in names.txt", (done) => {
    expect(checkList("bianca", findName)).toBe("bianca is in the list");
    done();
  });
  it("should be case insensitive", (done) => {
    expect(checkList("bIaNcA", findName)).toMatch(/(bianca)/i);
    expect(checkList("bIaNcA", findName)).toContain("is in the list");
    done();
  });
});

describe("checkList - names not in file", () => {
  it("should find a name that exists in names.txt", (done) => {
    expect(checkList("jordy", findName)).toBe("jordy is not in the list");
    done();
  });
  it("should be case insensitive", (done) => {
    expect(checkList("JoRdY", findName)).toMatch(/(jordy)/i);
    expect(checkList("JoRdY", findName)).toContain("is not in the list");
    done();
  });
});

describe("checkList - substrings of names", () => {
  it("should not find a suffix substring as a name in names.txt", (done) => {
    expect(checkList("lex", findName)).toBe("lex is not in the list");
    done();
  });
  it("should not find a prefix substring as a name in names.txt", (done) => {
    expect(checkList("al", findName)).toBe("al is not in the list");
    done();
  });
});

// Disable warning output --> will test for later
beforeEach(() => {
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
describe("checkList - no name supplied", () => {
  it("should return warning message", (done) => {
    expect(checkList("", findName)).toBe(
      "No name supplied: Please provide a name"
    );
    done();
  });
});

describe("checkList - no name supplied --> console warnings", () => {
  // Mock to assert console warnings
  let consoleOutput = [];
  const mockedWarn = (output) => consoleOutput.push(output);
  beforeEach(() => (console.warn = mockedWarn));
  it("should log warning messages to console", () => {
    checkList("", findName);
    expect(consoleOutput).toEqual(["No name supplied: Please provide a name"]);
  });
});
