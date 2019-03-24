---
title: Learn JavaScript Data Structures: Arrays
---

![](./image.png)

##

* What is an array?

The simplest data structure.

A sequential collection of elements each identified by index.

* What is the difference between arrays in JavaScript and other languages?

Arrays in (most) programming languages cannot store different data types.

In JavaScript, (almost) everything is an object, including arrays. The JavaScript array object contains property/value pairs where the property name corresponds with the array index. You guessed it. Because it’s an object, the property name is a string and not an integer. Because they are objects, they are not as efficient as arrays in other languages.

Can store different data types but best practice is to not.
@TODO: Why?

* Arrays in JavaScript
Basics
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Description

## Creating Arrays

There are several approaches available for creating arrays. The first is array declaration:

### Array Declaration
```js
const empty = [];
```
Or,
```js
const full = ["this", "that", "the other"];
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

Passing only one numerical argument to the Array constructor will return an array with a corresponding number of empty elements, whereas passing multiple integers will create an array containing each argument.


### Array.of()

Fortunately for us, `Array.of()` was introduced in ES6 to bring some sanity to array instantiation and address the issue of passing types to the Array constructor.

```js
const numbers = Array.of(4);

console.log(numbers); // returns [4]
```


## Shallow & Deep Copies



```js
const nums = [1, 2, 3];

const numnums = nums;

nums[0] = "The shallow end...";

console.log(numnums[0]); //returns "The shallow end..."
```

Arr! Not what we want. Assigning the value of a new array an existing array creates a _shallow_ copy. The new array is only a reference to the original. It gets worse...

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
```js
for (var i = 0; i < nums.length; ++i) {
  numnums[i] = nums[i];
}
```

### slice()

The old school approach is using the `slice()` method to create a deep copy of an array.

```js
const nums = [1, 2, 3];

const numnums = nums.slice();

nums[0] = "The shallow end...";

console.log(numnums[0]); //returns 1
```

### Spread

The ES6y approach is to use the spread operator:

```js
const nums = [1, 2, 3];

const numnums = [...nums];

nums[0] = "The shallow end...";

console.log(numnums[0]); //returns 1
```


### from()

```js
const nums = [1, 2, 3];

const numnums = Array.from(nums);

nums[0] = "The shallow end...";

console.log(numnums[0]); //returns 1
```





## Array Methods
I’m going to assume you are familiar with push and pop, but maybe not unshift and shift, which add and remove elements at the beginning of an array, respectively.

### unshift

### shift















## Array Interview Questions




## (Re)Sources
* [slice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
* [Spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
* [Array.from()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from)
*
