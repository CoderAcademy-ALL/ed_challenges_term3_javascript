# [Digital Root](https://edstem.org/au/courses/8571/challenges/70250)

A `digital root` is the `recursive sum` of all the `digits` in a number. Given `n`, take the `sum` of the digits of `n`. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. This is only applicable to the natural numbers.

An example of how your function should work internally is shown below. `console.log`'s not required. Only the numeric answer should be returned.

```js
digitalRoot(16)
=> 1 + 6
=> 7

digitalRoot(942)
=> 9 + 4 + 2
=> 15 ...
=> 1 + 5
=> 6

digitalRoot(132189)
=> 1 + 3 + 2 + 1 + 8 + 9
=> 24 ...
=> 2 + 4
=> 6

digitalRoot(493193)
=> 4 + 9 + 3 + 1 + 9 + 3
=> 29 ...
=> 2 + 9
=> 11 ...
=> 1 + 1
=> 2
```
