const humanReadable = (seconds) => {
  const dateStr = new Date(seconds * 1000).toISOString();
  const timeStr = dateStr.substring(11, 19);
  const dayStr = dateStr.substring(8, 10);
  return dayStr !== "01"
    ? (dayStr - 1) * 24 + +timeStr.slice(0, 2) + timeStr.slice(2)
    : timeStr;
};

const padNum = (intNum) => (intNum < 10 ? "0" + intNum : intNum);

const humanReadableMath = (seconds) =>
  padNum(parseInt(seconds / (60 * 60))) +
  ":" +
  padNum(parseInt((seconds / 60) % 60)) +
  ":" +
  padNum(seconds % 60);

module.exports = { humanReadable, humanReadableMath };
