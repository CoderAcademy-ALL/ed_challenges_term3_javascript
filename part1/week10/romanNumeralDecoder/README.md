# [Roman Numeral Decoder](https://www.codewars.com/kata/51b6249c4612257ac0000005)

> **Note**: I have not written this challenge. All simply copied from the [code wars kata](https://www.codewars.com/kata/51b6249c4612257ac0000005) for educational purposes. This challenge link aims to serve as a reference for students

Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.

[Modern Roman numerals](https://en.wikipedia.org/wiki/Roman_numerals#Standard_form) are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.

## Example:

```javascript
solution("XXI"); // should return 21
```

## Help:

```
Symbol	Value
I	      1
V	      5
X	      10
L	      50
C	      100
D	      500
M	      1,000
```
