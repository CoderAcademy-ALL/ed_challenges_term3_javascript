const moveZeros = (arr) => {
  const noZerosArr = arr.filter((element, index) => element !== 0);
  return noZerosArr.concat(new Array(arr.length - noZerosArr.length).fill(0));
};

module.exports = { moveZeros };
