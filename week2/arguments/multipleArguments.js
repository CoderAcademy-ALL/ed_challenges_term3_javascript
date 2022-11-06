const multipleArguments = (...args) => {
  // return args.reduce(((prev, current) => {prev * current}), args.length === 0 ? 0 : 1)
  return args.length !== 0 ? args.reduce((prev, current) => prev * current) : 0;
};

// Don't alter the lines below
module.exports = {
  multipleArguments,
};
