const { multipleArguments } = require("./multipleArguments");

test("Multiplies together all positive numbers", () => {
  expect(multipleArguments(1, 2, 3, 4, 5, 6, 7)).toEqual(5040);
  expect(multipleArguments(23, 5)).toEqual(115);
});

test("Handles no arguments", () => {
  expect(multipleArguments()).toEqual(0);
});

test("Handles single zero being passed in", () => {
  expect(multipleArguments(0)).toEqual(0);
});

test("Handles large numbers", () => {
  expect(multipleArguments(455, 745, 112)).toEqual(37965200);
});

test("Handles zero being passed in among other numbers", () => {
  expect(multipleArguments(1, 2, 0, 3)).toEqual(0);
});
