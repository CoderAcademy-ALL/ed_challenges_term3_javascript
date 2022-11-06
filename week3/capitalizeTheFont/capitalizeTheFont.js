// Capatilizes first char, all others lower
const capitalize = (string) =>
  string[0].toUpperCase() + string.slice(1).toLowerCase();

const capitaliseTheFront = (string) =>
  string
    .split(" ")
    .map((word) => capitalize(word))
    .join(" ");

// Leave this line
module.exports = capitaliseTheFront;
