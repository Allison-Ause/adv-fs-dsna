# Day 1 - Primitives, Higher Order Functions & Recursion

## Rubric

| Looking for...                                 | Points |
| ---------------------------------------------- | ------ |
| 6 primitive (PRIM) challenges solved           | 6      |
| 1 Higher Order Function (HOF) challenge solved | 2      |
| 1 Recursive (REC) challenge solved             | 2      |
| Total                                          | 10     |

## Strings

String code challenges usually are array challenges and involve changing the string into an array of letters or words (or both).

Go ahead and look these methods up on MDN if you need them today!

### Splitting strings

- array of letters
  ```js
  const letters = word.split('');
  ```
- sentence into an array of words
  ```js
  const words = sentence.split(' ');
  ```

### Accessing characters by index

Strings are "array like" in that you can access by index:

```js
const firstLetter = word[0];
```

**However**, you _cannot_ assign a letter:

```js
word[0] = word[0].toUpperCase();
```

There are code challenges problems specifically design to trip you up on this.

Instead, use `.slice(startIndex, endIndex)` to make new string from pieces.

### Array to String

Join the elements of an array to make a string, use join:

```js
const word = letters.join('');
const sentence = words.join(' ');
```

### Using Array Methods

While you can use loops to manage things, often using `.map` after `.split` is just the thing you need

### Other String Tools

- `toUpperCase`
- `toLowerCase`
- `padStart`
- `padEnd`

### And...regex

The other thing that crops up with string challenges is using regex. This is its own topic and we won't see regex today

## Chaining

Leverage chaining to write clean easy to "see" code:

```js
function doString(str) {
  return str
    .split('')
    .map((letter) => {})
    .join('');
}
```

## Numbers

Number problems typically involve word-problem type math, **or** splitting numbers into digits.

- The use of modulo (remainder) is prevalent ("evenly divisible"):
  ```js
  const isEven = x % 2 === 0;
  ```
- Call `toString` before attempting to `split` a number into digits:
  ```js
  const digits = number.toString().split('');
  ```
- Conversion problems are common (how many seconds in year)

### Ternary Expressions

Handy way to return one of two options based on a condition:

```js
return x < -1 ? 'negative' : 'positive';
```

## Other Common Themes

### Control Flow & Scope

Most `string` and `number` problems are usually control flow problems, applying conditional logic _in the right order_ and managing looping and lists of things.

They also require declaring variables in the correct scope in relation to any loops and conditional statements. Scope is entirely dependent on code blocks.

### Input of single number, return list

Some problem say "go up to `n`". Typically best to use a classic `for` loop and set the limit at `n`. Then you can count to `n` from `0` (or `1` or whatever)

### Ordering and Uniqueness

There are classes of problems that benefit from `sort`ing and/or having a unique set of things (de-duplication).

#### Sort Order

The default `sort()` in JavaScript provides lexical (dictionary) sorting by default.

## Compare to adjacent array members

Sorting can make hard problems easier. By having ordered content, you can loop through an array and look for matching values between adjacent elements.

## Deduplication

By passing an array into a `Set` constructor, and then spreading back into an array, you can get a unique list of things (and then maybe back to a string if needed):

```js
const set = new Set(numbers);
const unique = [...set];

// or
const unique = [...new Set(numbers)];
```

## Putting it All Together

These problems combine control flow, number and string manipulation. Take your time on problem definition and design to break down the steps

## Using `while(true)`

Sometimes a problem will require successive iterations, but you don't really know when it is going to end until a certain condition is met. You can use the following construct, leveraging `break` or `return`:

```js
// notice this is declared and initialize
// before the loop
let x = 0;
let y = 100;

while (true) {
  if (y === x) return true;
  if (y < 0) return false;
  x = x + 2;
  y = y - 1;
}
```

## Function are Objects

In JavaScript, functions are a special kind of Object.

1. Because they are objects, we can pass them around like objects.
1. Functions are defined (created) with:
   1. Defined parameters - values that could be passed in when the function is called
   1. A "body" - some code that will execute when the function is called
1. Call-site - the place the function is called. pass values as arguments
1. A function can call another function _or itself_ in it's body.
1. Higher order functions:
   1. Functions can define parameters that are functions
   1. Functions can return functions

## Recursive Problems

Process:

1. Start with the "exit", either the point at which you stop or "find" the answer you are looking for
1. Look for the minimal number of steps to call the function recursively
1. Be amazed that you are done

_Don't forget to **`return`** the value of your recursive call_

Three ways to handle "state":

1. Design it away (count backwards to 0)
1. Add additional parameters to your function, make sure to give default values:
   ```js
   function doThing(max, n = 1) {
   ```
1. Use an internal recursive function:

   ```js
   function doThing(max) {
     const list = [];

     function recurse(n) {
       if (n === max) return list;
       list.push(x);
       return recurse(x + 1);
     }

     return recurse(max);
   }
   ```
