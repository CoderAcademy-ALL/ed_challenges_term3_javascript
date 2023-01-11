# [Moving Zeros To The End](https://www.codewars.com/kata/52597aa56021e91c93000cb0)

> **Note**: I have not written either of the linked code wars challenges. I have simply copied from the linked code wars Kata for educational purposes. This challenge repo aims to serve as a reference for students

Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

```javascript
moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]); // returns[false,1,1,2,1,3,"a",0,0]
```

# Bonus Kata! - [Move Zeros](https://www.codewars.com/kata/55c098aa8468f3b9030000f1/)

> **Note**: I have changed the name of the function specified in the kata from `move_zeros` to `moveZerosBonus` to better line up with the main challenge...

Implement a function `moveZerosBonus` which takes two arguments first an array of numbers `arrNum` and second a Boolean value `isRight` (default is true) and returns the array with all zero to right if `isRight` is true else to left if `isRight` is false.

Example:

```javascript
arrNum = [12, 0, 10, 0, 8, 12, 7, 6, 0, 4, 10, 12, 0];
moveZerosBonus(arrNum, true); // ==> [12, 10, 8, 12, 7, 6, 4, 10, 12, 0, 0, 0, 0]

arrNum = [12, 0, 10, 0, 8, 12, 7, 6, 0, 4, 10, 12, 0];
moveZerosBonus(arrNum, false); // ==> [0, 0, 0, 0, 12, 10, 8, 12, 7, 6, 4, 10, 12]

arrNum = [12, 0, 10, 0, 8, 12, 7, 6, 0, 4, 10, 12, 0];
moveZerosBonus(arrNum); // ==> [12, 10, 8, 12, 7, 6, 4, 10, 12, 0, 0, 0, 0]
```

Tips: Order of other numbers should not change.
