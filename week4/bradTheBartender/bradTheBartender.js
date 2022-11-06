const maximumCocktails = (recipe, available) => {
  // Start at inf. and then update when value lower.
  let maxNumber = Infinity;
  Object.keys(recipe).forEach((itm) => {
    const numForItm = Math.floor(available[itm] / recipe[itm]);
    maxNumber = numForItm < maxNumber ? numForItm : maxNumber;
    // missing ingred. would yeild undef. update to 0 here.
    // Thus will not be overwritten
    maxNumber = !numForItm ? 0 : maxNumber;
  });
  // Don't return Inf cocktails --> this condition should never happen
  maxNumber = maxNumber === Infinity ? 0 : maxNumber;
  return maxNumber;
};
//Leave this line
module.exports = { maximumCocktails };
