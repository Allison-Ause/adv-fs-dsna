Tree Nodes Traverse
---

Tree Nodes have an associated value and children. For these tree nodes, there are an arbitrary list of children (think Folders and Files, or DOM nodes).

## Challenge

For this problem, assume we have node objects that have a `value` property and a `children` property that is an array of child nodes. The setup looks like this: 

```js
const D = {
  value: 'D',
  children: []
};

const B = {
  value: 'B',
  children: [D]
};

const C = {
  value: 'C',
  children: []
};

const F = {
  value: 'F',
  children: []
};

const E = {
  value: 'E',
  children: [F]
};

const A = {
  value: 'A',
  children: [B, C, E]
};
```

Which gives us a tree that looks like:

```
      A
    / | \
   B  C  E
   |     |
   D     F
```

For this challenge, write a function that takes a node and `console.log` the data value each node and then the data for each of its children, but indented two spaces. The function should be general and not specific to this instance.

```js
function traverse(node) {

}
```
For the test case, the function is passed the `A` node above and the output should look like:

```
A
  B
    D
  C
  E
    F
```

Hints:
1. Use recursion. The "exit" is logging the node value.
1. Do the problem without the indentation first if that seems daunting. Remember you can add additional parameters to your function they may not be used on the initial call, but could have a default and then be used for subsequent calls
