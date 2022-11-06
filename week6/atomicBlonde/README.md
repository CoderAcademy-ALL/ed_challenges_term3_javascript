# Atomic Blonde

A number is an `atomic blonde` if the `sum` and `product` of its digits are equal. Write a function to check if a number is an `atomic blonde` or not. For the context of this function assume you will only have numeric value inputs. You should however, handle both `Number` types and the case where a numeric `string` (eg `"123"`) is supplied. Do not handle a non-numeric string.

## Examples

- `atomicBlonde(123) // Returns: true (as 1 + 2 + 3 equals 6, as does 1 * 2 * 3)`
- `atomicBlonde(23) // Returns: false (as 2 + 3 equals 5, whereas 2 * 3 equals 6)`
- Both of the above should function the same with `"123"` and `"23"` as their inputs respectively (numeric `string`)
