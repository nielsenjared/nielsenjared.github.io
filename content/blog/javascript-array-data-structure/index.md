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

Can store different data types but best practice is to not
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
const
```



### Array Constructor

There's also the Array constructor, but, as we will see here, it can be problematic:
```js
const nums = new Array(1,2,3);

console.log(nums[0]); //returns 1

console.log(nums.length); // returns 3
```

But if we run the following:
```js
const numnums = new Array(4);

console.log(numnums[0]); // returns undefined

console.log(numnums.length); // returns 4
```

Maddening! What's inside `numnums`?

```js
console.log(numnums);
```

It will return:
```
[ <4 empty items> ]
```

@TODO: explain ^

### Array.of()

Array.of()
Introduced in ES6 to address the issue of passing types to the Array constructor
https://stackoverflow.com/questions/31686360/what-is-the-use-case-for-javascripts-es6-array-of


## Array Methods
I’m going to assume you are familiar with push and pop, but maybe not unshift and shift, which add and remove elements at the beginning of an array, respectively.

### unshift

### shift















## Array Interview Questions
