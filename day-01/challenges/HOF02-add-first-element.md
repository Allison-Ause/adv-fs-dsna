DEMO: Add First Element
---

## Challenge

Write a function `addFirst` that takes a parameter `element` and returns a function that takes an array and returns a _new_ array with `element` as the first element plus all the elements of the passed array.

> **You can assume valid inputs**

## Test Cases

```js
const addOrange = addFirst('orange');
console.log(addOrange(['red', 'blue', 'green']));
// [orange,red,blue,green]
console.log(addOrange(['blue', 'blue', 'blue']));
// [orange,blue,blue,blue]

const addCat = addFirst('cat');
console.log(addOrange(['dog', 'bird', 'lizard']));
// [cat,dog,bird,lizard]
console.log(addOrange(['lizard', 'donkey', 'whale']));
// [cat,lizard,donkey,whale]

```