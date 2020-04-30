---
title: Learn JavaScript Array Data Structure
date: '2020-05-01'
description: Learning data structures will help you understand how software works and improve your problem-solving skills. In this tutorial, you will learn the array data structure in JavaScript. 
keyword: ['javascript', 'array', 'arrays', 'data structure', 'data structures']
---

![](./image.png)


At some point in your career (today?!) you will want to learn data structures. Why? It's not _just_ to ace the technical interview and land your dream job. Learning data structures will help you understand how software works and improve your problem-solving skills. For example, if you're a JavaScript developer, you probably take your JS engine for granted. But under-the-hood, V8 or Spidermonkey in Chrome and Firefox, respectively, are written in C++, and are using data structures, such as stacks and queues, to implement the JavaScript execution context. When you query a database, your DBMS is using data structures, such as hash tables and trees, to parse and optimize execution. In this tutorial, you will learn the array data structure in JavaScript. 


## What is an Array? 

An array is the simplest data structure. It is a sequential collection of elements each identified by index. 

@TODO image? 

We can think of our computer as an array of switches. A byte is an array of eight bits. From bytes we build complex layers of abstraction to create memory, characters, and cat videos. 


## What Problem(s) Do Arrays Solve?

* Arrays allow us to store similar values in a single variable, rather than individual variables for each value.

* Arrays allow us to quickly and easily perform operations on similar values.

* Arrays are fast. If we know the index of the element, an array search is in the order of O(1).

* Arrays are multidimensional, meaning we can store arrays in arrays in arrays...

  
## Learn JavaScript Array Data Structure

In JavaScript, (almost) everything is an object, including arrays. The JavaScript Array object contains property/value pairs where the property name corresponds with the array index. You guessed it. Because it’s an object, the property name is a string and not an integer. Because they are objects, they are not as efficient as arrays in other languages.

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

### Creating Arrays in JavaScript

There are several approaches available for creating arrays. The first is array declaration with literals:


#### Array Declaration
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


#### Array Constructor

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


#### Array.of()

Fortunately for us, `Array.of()` was introduced in ES6 to bring some sanity to array instantiation and address the issue of passing types to the Array constructor.

```js
const nums = Array.of(4);

console.log(numbers); // returns [4]

const strings = Array.of("string", "")

console.log(strings);
// returns [ 'string', '' ]
```


### Array Mutator Methods

I’m going to assume you are familiar with `push` and `pop`, but maybe not `unshift` and `shift`, which add and remove elements at the beginning of an array, respectively.


#### unshift

We can think of `unshift()` as the opposite of `push()`. The `push()` method adds items to _the end_ of an array. The `unshift()` method adds items to _the beginning_.

```js
const nums = [1, 2, 3];

nums.unshift(4, 5, 6);

console.log(nums); // returns [4, 5, 6, 1, 2, 3]
```


#### shift

As `unshift()` is to `push()`, `shift()` is to `pop()`. This method will _shift_ the array one index by removing the first item.

```js
nums.shift();

console.log(nums); // returns [5, 6, 1, 2, 3]
```

## Learn JavaScript Array Data Structure

Arrays are commonplace in development. That means they are also commonplace in technical interviews. It's important to understand the basics but also be aware of the quirks. 

Some common interview questions are: 

* Determine if all elements in an array are unique values

* Find the missing number in an array of 1 to 100

* Find the duplicate number on a given integer array

* Merge two sorted arrays

* Sort and arry in place using quicksort

In this tutorial, you learned the array data structure in JavaScript. Learning data structures will help you understand how software works and improve your problem-solving skills. 