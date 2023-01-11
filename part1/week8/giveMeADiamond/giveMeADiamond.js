const diamond = (n) => {
  if (n <= 0 || n % 2 == 0) return null;
  let diamondStr = "";
  for (let idx = 1; idx <= n; idx += 2) {
    diamondStr += " ".repeat((n - idx) / 2) + "*".repeat(idx) + "\n";
  }
  return n == 1
    ? diamondStr
    : diamondStr +
        diamondStr.split("\n").slice(0, -2).reverse().join("\n") +
        "\n";
};

module.exports = { diamond };
