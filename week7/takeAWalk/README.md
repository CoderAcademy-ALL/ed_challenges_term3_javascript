# [Take A Walk](https://www.codewars.com/kata/54da539698b8a2ad76000228)

> **Note**: I have not written this challenge. All simply copied from the [code wars kata](https://www.codewars.com/kata/54da539698b8a2ad76000228) for educational purposes. This challenge link aims to serve as a reference for students.

You live in the city of Cartesia where all roads are laid out in a perfect grid.

You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk.
The city provides its citizens with a Walk Generating App on their phones.

-- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']).

You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block.

Create a function that will:

- Return **true** if:
  - the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!)
  - will, of course, return you to your starting point.
- Return **false** otherwise.

> **Note**: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).
