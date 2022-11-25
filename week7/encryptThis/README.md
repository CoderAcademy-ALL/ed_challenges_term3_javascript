# [Encrypt This!](https://www.codewars.com/kata/5848565e273af816fb000449)

> **Note**: I have not written this challenge. All simply copied from the [code wars kata](https://www.codewars.com/kata/5848565e273af816fb000449) for educational purposes. This challenge link aims to serve as a reference for students.

## Acknowledgments:

I thank [yvonne-liu](https://www.codewars.com/users/yvonne-liu) for the idea and for the example tests :)

## Description:

Encrypt this!

You want to create secret messages which can be deciphered by the [Decipher this!](https://www.codewars.com/kata/decipher-this) kata. Here are the conditions:

1. Your message is a string containing space separated words.
2. You need to encrypt each word in the message using the following rules:
   - The first letter must be converted to its ASCII code.
   - The second letter must be switched with the last letter
3. Keepin' it simple: There are no special characters in the input.

## Examples:

```javascript
encryptThis("Hello") === "72olle";
encryptThis("good") === "103doo";
encryptThis("hello world") === "104olle 119drlo";
```
