A "Happy Number" is defined as a number that after finite number of "steps" - where we sum the square of each digit each time - the result is a 1. Given a number n, determine whether it is a happy number.
As a challenge, complete this question under constant space.
## Parameters

- n: The number to check.

## Result

- true or false, depending on whether this number is a happy number.

# Examples

## Example 1

Input: n = 19

Output: true

Explanation:

  1. 1^2 + 9^2 = 82

  2. 8^2 + 2^2 = 68

  3. 6^2 + 8^2 = 100

  4. 1^2 + 0^2 + 0^2 = 1

## Example 2

Input: n = 2

Output: false

Explanation:

  1. 2^2 = 4

  2. 4^2 = 16

  3. 1^2 + 6^2 = 37

  4. 3^2 + 7^2 = 58

  5. 5^2 + 8^2 = 89

  6. 8^2 + 9^2 = 145

  7. 1^2 + 4^2 + 5^2 = 42

  8. 4^2 + 2^2 = 20

  9. 2^2 + 0^2 = 4

  10. ...

## Constraints

  1 <= n < 2^31
