---
title: Learn JavaScript Data Structures: Arrays
---

![](./image.png)

@TODO introduction

An array is the simplest data structure. It is a sequential collection of elements each identified by index. In JavaScript, (almost) everything is an object, including arrays. The JavaScript Array object contains property/value pairs where the property name corresponds with the array index. You guessed it. Because it’s an object, the property name is a string and not an integer. Because they are objects, they are not as efficient as arrays in other languages.

Arrays in [statically typed programming languages](https://en.wikipedia.org/wiki/Type_system) cannot store different data types. Because JavaScript is a dynamically typed language and arrays are objects, we _can_ store different data types in them, but that doesn't mean we _should_.

🥇 Best practice is to limit our arrays to one data type. Why? Arrays are classically defined as [a systematic arrangement of similar objects](https://en.wikipedia.org/wiki/Array) and if we declare an array containing multiple data types, there is no obvious structure, which may be fine if we are very careful about not mutating the array as it is used throughout an application, but what happens if we aren't? It should be immediately apparent in this example:

```js
var bad = [1, "two", {}, true];

var best = {
  number: 1,
  string: "two",
  object: {},
  bool: true
}
```


## Creating Arrays

There are several approaches available for creating arrays. The first is array declaration with literals:

### Array Declaration
```js
const empty = [];
```
Or,
```js
const full = ["this", "that", "the other"];
```

To prove the point above:
```js
typeof empty // returns 'object'

empty.constructor // returns [Function: Array]  
```


### Array Constructor

There's also the Array constructor, but, as we will see below, it can be problematic:
```js
const nums = new Array(1,2,3);

console.log(nums[0]); //returns 1

console.log(nums.length); // returns 3
```

We clearly and obviously created an array with three elements. But if we run the following:

```js
const numnums = new Array(4);

console.log(numnums[0]); // returns undefined

console.log(numnums.length); // returns 4
```

Maddening! What's inside `numnums`?

```js
console.log(numnums);
```

... returns:
```
[ <4 empty items> ]
```

Passing only one numerical argument to the Array constructor will return an array with a corresponding number of empty elements, whereas passing multiple integers will create an array containing each argument. It gets worse:

```js
const numnums = new Array("4");

console.log(numnums); //returns [ '4' ]
```

If we were to use the Array constructor without type-checking, there's a possibility that we would create an array containing a string, rather than an array of empty elements.

### Array.of()

Fortunately for us, `Array.of()` was introduced in ES6 to bring some sanity to array instantiation and address the issue of passing types to the Array constructor.

```js
const nums = Array.of(4);

console.log(numbers); // returns [4]

const strings = Array.of("string", "")

console.log(strings);
// returns [ 'string', '' ]
```


## Shallow & Deep Copies

@TODO

```js
const nums = [1, 2, 3];

const numnums = nums;

nums[0] = "The shallow end...";

console.log(numnums[0]); //returns "The shallow end..."
```

Arr! Not what we want. Assigning the value of an existing array to a new array creates a _shallow_ copy. The new array is only a reference to the original. It gets worse...

```js
const nums = [1, 2, 3];

const numnums = nums;

numnums[0] = "... of the gene pool.";

console.log(nums[0]); //returns "... of the gene pool."
```

@TODO: Why?

To avoid this situation, we need to make a _deep_ copy. We have a few options available to us.

### for
@TODO
The tried-and-true, classic `for` loop.

```js
const nums = [1,2,3];
const numnums = [];

for (var i = 0; i < nums.length; ++i) {
  numnums[i] = nums[i];
}
```

But declaring an empty array is inelegant. We can use array methods to accomplish the same ends.

### slice()

The old school approach is using the `slice()` method to create a deep copy of an array.

```js
const nums = [1, 2, 3];

const numnums = nums.slice();

nums[0] = "The shallow end...";

console.log(numnums[0]); //returns 1
```

### Spread

The ES6-y approach is to use the spread operator:

```js
const nums = [1, 2, 3];

const numnums = [...nums];

nums[0] = "The shallow end...";

console.log(numnums[0]); //returns 1
```


### Array.from()

There is also the `Array.from()` method:

```js
const nums = [1, 2, 3];

const numnums = Array.from(nums);

nums[0] = "The shallow end...";

console.log(numnums[0]); //returns 1
```


## Array Mutator Methods
I’m going to assume you are familiar with push and pop, but maybe not unshift and shift, which add and remove elements at the beginning of an array, respectively.

### unshift

We can think of `unshift()` as the opposite of `push()`. The `push()` method adds items to _the end_ of an array. The `unshift()` method adds items to _the beginning_.

```js
const nums = [1, 2, 3];

nums.unshift(4, 5, 6);

console.log(nums); // returns [4, 5, 6, 1, 2, 3]
```

### shift

As `unshift()` is to `push()`, `shift()` is to `pop()`. This method will _shift_ the array one index by removing the first item.

```js
nums.shift();

console.log(nums); // returns [5, 6, 1, 2, 3]
```





## Array Interview Questions

Find the missing number in a given integer array of 1 to 100
Find the duplicate number on a given integer array
Find the largest and smallest number in an unsorted integer array
Find all pairs of an integer array whose sum is equal to a given number
Find duplicate numbers in an array if it contains multiple duplicates
How are duplicates removed from a given array in Java
How is an integer array sorted in place using the quicksort algorithm
Remove duplicates from an array in place
How do you reverse an array in place in Java
How are duplicates removed from an array without using any library

<!-- Find the second minimum element of an array -->
First non-repeating integers in an array
Merge two sorted arrays
Rearrange positive and negative values in an array



## (Re)Sources
* [MDN: slice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
* [MDN: Spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
* [MDN: Array.from()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from)
* [Wikipedia: Object copying](https://en.wikipedia.org/wiki/Object_copying)
* [MDN: unshift()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift)
*
