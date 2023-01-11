const { atomicBlonde } = require("./atomicBlonde");

test("returns true for an atomic blonde number", () => {
  expect(atomicBlonde(123)).toEqual(true);
  expect(atomicBlonde(22)).toEqual(true);
});

test("returns false for a non-atomic blonde number", () => {
  expect(atomicBlonde(23)).toEqual(false);
  expect(atomicBlonde(990)).toEqual(false);
});

test("handles numeric string", () => {
  expect(atomicBlonde("23")).toEqual(false);
  expect(atomicBlonde("990")).toEqual(false);
  expect(atomicBlonde("123")).toEqual(true);
  expect(atomicBlonde("22")).toEqual(true);
});

test("handles the number 0", () => {
  expect(atomicBlonde(0)).toEqual(true);
});
