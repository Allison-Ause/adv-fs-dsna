# Big O, Stacks & Queues

## Rubric

| Looking for...                                      | Points |
| --------------------------------------------------- | ------ |
| CH-01-stack completed with tests                    | 4      |
| CH-02-queue completed with tests                    | 4      |
| At least one of CH-03 or CH-04 completed with tests | 2      |
| Total                                               | 10     |

## Big O

Algorithmic Analysis is determining the resources required for a piece of code to run:

- **Time Complexity** - execution time as a function of the input size
- **Space Complexity** - memory/disk space used, as a function of the input size
- **Big O Notation** - the vocabulary we use to discuss complexity
- O(1): Input size is irrelevant
- O(n): Linear (list iterations) - Complexity grows proportionately to the input size
- O(n^2): Quadratic (nested loops on the same collection) - Complexity grows proportionately to the input size multiplied by itself
- O(log n): divide and conquer (inverse of exponent/quadratic)
- O(n \* log n): iterations that use divide and conquer
- O(2^n): Doubles with each input (fibonacci)

[Big O Writeup](./big-o-demo/big-o.md)

## Abstract Data Structures

Abstract Data type (ADT) is a type (or class) for objects whose behavior is defined by a set of operations.

The definition of ADT only mentions what operations are to be performed but not how these operations will be implemented. It does not specify how data will be organized in memory and what algorithms will be used for implementing the operations. It is called “abstract” because it gives an implementation-independent view. The process of providing only the essentials and hiding the details is known as abstraction.

## JavaScript Classes

```js
class MyDataStructure {
  #list = [];

  constructor(initialList) {
    // invoked via: new MyDataStructure()
    // not needed with private field initializers,
    // unless you need to do other work
    if (initialList) this.#list = initialList;
  }

  // methods

  addBack(item) {
    // access state, ie this.#list
    this.#list.push(item);
  }

  addFront(item) {
    // access state, ie this.#list
    this.#list.unshift(item);
  }

  // property

  get readableList() {
    // access state, ie this.#list
    return this.#list.toString();
  }

  get count() {
    // access state, ie this.#list
    return this.#list.length;
  }

  set count(count) {
    // access state, ie this.#list
    return (this.#list.length = count);
  }
}

// used like:

const myStructure = new MyDataStructure([4, 6, 8]);
// use the defined methods and properties to
// interact with this Abstract Data Structure:
myStructure.addFront(3);
myStructure.addFront(4);
myStructure.addBack(7);
myStructure.addBack(9);
console.log(myStructure.count);
// 7
console.log(myStructure.readableList);
// 4,3,4,6,8,7,9
```
