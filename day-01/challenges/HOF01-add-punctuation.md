DEMO: Add Punctuation
---

## Challenge

Write a function `addPunctuation` that takes a string of `punctuation` and returns a function that also takes a strings but returns the string plus the initially provided `punctuation`.

> **You can assume valid inputs**

## Test Cases

```js
const addExcitement = addPunctuation('!!!');
console.log(addExcitement('Hello World'));
// Hello World!!!
console.log(addExcitement('Pokemon, catch em all'));
// Pokemon, catch em all!!!

const addUnsure = addPunctuation('?!?');
console.log(addUnsure('Hello World'));
// Hello World?!?
console.log(addUnsure('Pokemon, catch em all'));
// Pokemon, catch em all?!?
```