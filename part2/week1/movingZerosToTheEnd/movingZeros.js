const moveZeros = (arr) => {
  const noZerosArr = arr.filter((element) => element !== 0);
  return noZerosArr.concat(Array(arr.length - noZerosArr.length).fill(0));
};

const moveZerosBonus = (arrNum, isRight = true) => {
  const noZerosArr = arrNum.filter((element) => element !== 0);
  const zeroPadArr = new Array(arrNum.length - noZerosArr.length).fill(0);
  return isRight
    ? noZerosArr.concat(zeroPadArr)
    : zeroPadArr.concat(noZerosArr);
};

module.exports = { moveZeros, moveZerosBonus };
