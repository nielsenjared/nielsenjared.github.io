---
title: Learn JavaScript Data Structures: Arrays
---

![](./image.png)

##

* What is an array?
* What is the difference between arrays in JavaScript and other languages?
* Arrays in JavaScript
Basics
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
In JavaScript, (almost) everything is an object, including arrays. The JavaScript array object contains property/value pairs where the property name corresponds with the array index. You guessed it. Because it’s an object, the property name is a string and not an integer.
Can store different data types but best practice is to not
Why?
objects with integer-based keys that act as indices
Because they are objects, they are not as efficient as arrays in other languages
Because they are objects
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Description
Creating arrays
[]
new Array
Can be problematic
https://coderwall.com/p/h4xm0w/why-never-use-new-array-in-javascript
Array.of()
Introduced in ES6 to address the issue of passing types to the Array constructor
https://stackoverflow.com/questions/31686360/what-is-the-use-case-for-javascripts-es6-array-of


Array methods
I’m going to assume you are familiar with push and pop, but maybe not unshift and shift, which add and remove elements at the beginning of an array, respectively.
unshift
shift
