# [Conversion to Camel Case](https://edstem.org/au/courses/8571/challenges/70268)

We used `snake_case` a lot in `Python`. But now we're living in a `JavaScript` world where the convention is to use `camelCase`. Write a function that converts any `snake` or `kebab` case string (aka dash/underscore delimited words) and converts it to `camelCase`. The first word within the output should be capitalized only if the original word was capitalized (known as "Upper Camel Case", also often referred to as `PascalCase`).

## Examples

- `toCamelCase("foo_bar") // returns "fooBar"`
- `toCamelCase("Hello-there") // returns "HelloThere"`
- `toCamelCase("") // returns ""`
