# [Is It In The List?](https://edstem.org/au/courses/8571/challenges/70270)

The function `checkList` is already defined and ready to be passed a callback.

Finish coding the `findName` function so that when we call `checkList` with a name and `findName` it will return a confirmation message if the name is in the list. e.g `checkList('alex', findName)` should return `"alex is in the list"`. Check your work with the run button before marking!

## Assumptions and specifications:

- case-insensitivity: `"alex", "aLeX"` can be considered one and the same
- names contained in the list return: `"<name> is in the list"`
- names not contained in the list return: `"name> is not in the list"`
- when no name is supplied return: `"No name supplied: Please provide a name"`.
  - In this case a warning should also be output to the console
