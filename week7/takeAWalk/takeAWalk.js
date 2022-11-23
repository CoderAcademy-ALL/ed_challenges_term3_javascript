const countValues = (arr, value) => arr.filter((val) => val === value).length;
function isValidWalk(walk) {
  dirCount = {
    n: countValues(walk, "n"),
    s: countValues(walk, "s"),
    e: countValues(walk, "e"),
    w: countValues(walk, "w"),
  };
  return (
    !Boolean(dirCount.n - dirCount.s) &&
    !Boolean(dirCount.e - dirCount.w) &&
    walk.length == 10
  );
}
module.exports = { isValidWalk };
