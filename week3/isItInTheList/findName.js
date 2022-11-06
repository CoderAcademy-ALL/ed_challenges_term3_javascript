const fs = require("fs");

function checkList(name, callback) {
  let data = fs.readFileSync("names.txt", "utf8");
  return callback(data, name);
}

function findName(data, name) {
  if (!name) {
    const noNameMsg = "No name supplied: Please provide a name";
    return console.warn(noNameMsg) || noNameMsg;
  }
  // newline delim. case ins.
  const dataEntries = data.toLowerCase().split("\n");
  const matchingNames = dataEntries.includes(name.toLowerCase()); // or use filter.
  const ansStr =
    `${name} ` + (matchingNames ? `is` : `is not`) + ` in the list`;
  return ansStr;
}
console.log(checkList("alex", findName));
module.exports = { checkList, findName };
