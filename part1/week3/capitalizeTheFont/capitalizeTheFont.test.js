const capitaliseTheFront = require("./capitalizeTheFont.js");

test("Capitalise a one word string", () => {
  expect(capitaliseTheFront("lower")).toEqual("Lower");
  expect(capitaliseTheFront("UPPER")).toEqual("Upper");
});

test("Capitalise a multi word string", () => {
  expect(capitaliseTheFront("lower house of parliament")).toEqual(
    "Lower House Of Parliament"
  );
  expect(capitaliseTheFront("UPPER HOUSE OF parliament")).toEqual(
    "Upper House Of Parliament"
  );
});

test("Capitalise a multi word string with symbols", () => {
  expect(capitaliseTheFront("HI. IDONT underst and GRammER")).toEqual(
    "Hi. Idont Underst And Grammer"
  );
});
