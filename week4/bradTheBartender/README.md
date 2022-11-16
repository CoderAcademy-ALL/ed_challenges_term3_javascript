# [Brad the Bartender](https://edstem.org/au/courses/8571/challenges/70232)

Brad is a bartender at a fancy cocktail bar; he's a fantastic mixologist but not the best mathematician. Let's help him out and create a function that lets him know how many cocktails he can make with the ingredients on hand.

Write a function `maximumCocktails()`, which takes the recipe (`object`) and the available ingredients (also an o`bject) and returns the maximum number of cocktails Brad can bake (`integer`). For simplicity there are no units for the amounts (e.g. 100ml of vodka or 20 olives are simply 100 or 20).

---

e.g

```javascript
let martiniRecipe = { gin: 50, vermouth: 10, olives: 3 };
let barStock = { gin: 160, vermouth: 300, olives: 36 };
maximumCocktails(martiniRecipe, barStock); //=> 3

// maximumCocktails should return three as that's the most cocktails we can make before running out of gin

let negroniRecipe = { gin: 25, vermouth: 25, campari: 25 };
let barStock = { gin: 2250, vermouth: 2250, olives: 60 };
maximumCocktails(negroniRecipe, barStock); //=> 0

// maximumCocktails should return zero as there's no campari to make a negroni with

let oldFashionedReicpe = { whisky: 60, sugarCube: 1, bitters: 5 };
let barStock = { sugarCube: 2, bitters: 20, whisky: 1000 };
maximumCocktails(oldFashionedReicpe, barStock); // = 2

//maximumCocktails should return 2 as that's the most old fashioneds we can make before running out of sugar cubes
```
