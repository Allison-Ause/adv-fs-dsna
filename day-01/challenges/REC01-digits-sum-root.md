Digits Root Sum
---

## Challenge

Create a function that takes a number and returns one digit that is the result of summing all the digits of the input number. When the sum of the digits consists of more than one digit, repeat summing until you get one digit.

**Make your function recursive**.

```js
function rootDigit(n) {
```

> **You can assume valid inputs**

HINT: summing digits:

```js
const digits = number.toString().split('');
const numbers = digits.map(d => +d);
const sum = numbers.reduce((a, b) => a + b);
```

## Test Cases

Input | Output | Notes
---|---|---
`123` | `6`  | // 1 + 2 + 3 = 6
`4322` | `2`  | // 4 + 3 + 2 + 2 = 11  // 1 + 1 = 2
`999888777` | `9` | 
