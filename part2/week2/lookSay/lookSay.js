const lookSay = (number) => {
  const numStr = number.toString();
  let itemCounter = 1;
  return +[...numStr]
    .map((item, idx, arr) => {
      if (item != arr[idx + 1]) {
        const count = itemCounter + item;
        itemCounter = 1; // reset itemCounter
        return count;
      } else {
        itemCounter++;
      }
    })
    .join("");
};

module.exports = { lookSay };
