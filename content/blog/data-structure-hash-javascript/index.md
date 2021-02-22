---
title: "Data Structures in JavaScript: Shortest Path Graph Traversal"  
date: '2021-01-29'
description: Learning data structures will help you understand how software works and improve your problem-solving skills. In this tutorial, you will learn the hash {{  }} in JavaScript. 
keyword: ['javascript', 'data structure']
---


![](./jarednielsen-data-structure-hash-javascript.png)


At some point in your career (today?!) you will want to learn data structures. It's not _just_ to ace the technical interview and land your dream job. Learning data structures will help you understand how software works and improve your problem-solving skills. In this tutorial, you will learn the {{ ToDO }} in JavaScript. 


If you're new to data structures, you may want to start with [Data Structures in JavaScript: Array](https://jarednielsen.com/data-structure-array-javascript/)


## Retrieval Practice

Retrieval practice is the surest way to solidify any new learning. Attempt to answer the following questions before proceeding: 




### 




### 




### 




## Let's Get Meta

Programming is problem solving. Both are metacognitive activities. To excel, we want to improve our thinking _about_ thinking. Ask yourself the following questions and keep them back of mind as you proceed: 
 
* What is hashing?

* What is a hash table?

* What problems does a hash tables solve?







TODO

## How to {{ }} HashTable in JavaScript

This is the final data structure in our series. All of the previous data structures solve different problems, but what is the downside to most of them? 

🕥

Iteration.

When we are searching for a node, we need to iterate over the entire data structure. This is not very efficient. 

TODO 

```js 
const hashTable = {};
```

Done. 

🙄

Seriously.

For our intents and purposes, an object _is_ a hash table. When we insert a new value into an object, a key is made

But that's not why you're here. Let's do this the hard way.

Let's start with an array of programming languages:
```js

```


```JavaScript


```
Why an array?

Why would we not use an object?

What is the problem we need to solve?

An array _is_ a table! 




### Hashing 



We need to create a key for each entry in our table. 

Why don't we just use the key itself? 

What's the problem with these two keys? 

```
"apple"
```

...and...

```
1234567890
```

One is a string and the other an integer, _and_ the integer is composed of twice as many characters as the string. 

What would our array look like if we start pushing these keys into it? 

```
[ "apple": "apple", "1234567890": 1234567890]
```

Can we do better? 

Yes... but why? 

We don't need to push key/value pairs to our array because our array, by default, is composed of indexes. We want to convert the key into a numerical value and use that as the array index. And when we want to look up a value, we "reverse engineer" the value to find its index. 

Just like cooking up a [hash](https://en.wikipedia.org/wiki/Hash_(food)), we need to chop our keys into bite- (or byte-) sized pieces. 

Mmm... data hash. Just like Mom used to make. 





## Reflection

* What is hashing?

* What is a hash table?

* What problems does a hash tables solve?


### What is Hashing?

There are two common wasys to think about hashing: 

* finding a value in a data structure as quickly as possible

* creating a key to use when looking up a value in a hash table

https://en.wikipedia.org/wiki/Hash_function
Use of a hash function to index a hash table is called hashing or scatter storage addressing. 

### What is a Hash Table?




### What Problem(s) Do Hash Tables Solve?

ToDO


### BONUS: What Problem(s) Do Hash Tables Create?

