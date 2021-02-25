---
title: "Data Structures in JavaScript: Hash Table"  
date: '2021-02-26'
description: Learning data structures will help you understand how software works and improve your problem-solving skills. In this tutorial, you will learn the hash table data structure in JavaScript. 
keywords: ['javascript', 'data structure', 'hash table']
---


![](./jarednielsen-data-structure-hash-javascript.png)


At some point in your career (today?!) you will want to learn data structures. It's not _just_ to ace the technical interview and land your dream job. Learning data structures will help you understand how software works and improve your problem-solving skills. In this tutorial, you will learn the hash table data structure in JavaScript. 


If you're new to data structures, you may want to start with [Data Structures in JavaScript: Array](https://jarednielsen.com/data-structure-array-javascript/)


## Retrieval Practice

Retrieval practice is the surest way to solidify any new learning. Attempt to answer the following questions before proceeding: 

* What is an array? 

* TODO 

* What problem(s) do data structures solve?


### What is an Array? 

An array is the simplest data structure. It is a sequential collection of elements each identified by index. 


### TODO

TODO


### What Problem(s) Do Data Structures Solve?

According to [Wikipedia](https://en.wikipedia.org/wiki/Data_structure):

> Different types of data structures are suited to different kinds of applications, and some are highly specialized to specific tasks. Data structures provide a means to manage large amounts of data efficiently for uses such as large databases and internet indexing services. Usually, efficient data structures are key to designing efficient algorithms. 


## Let's Get Meta

Programming is problem solving. Both are metacognitive activities. To excel, we want to improve our thinking _about_ thinking. Ask yourself the following questions and keep them back of mind as you proceed: 
 
* What is hashing?

* What is a hash table?

* What problems does a hash tables solve?


## How to Implement a Hash Table in JavaScript

This is the final data structure in our series. All of the previous data structures solve different problems, but what is the downside to most of them? 

🕥

Iteration.

While iteration is important, it's not optimal. (See what I did there?)

Take a graph, for example, when we are searching for a node, we need to iterate over (almost) the entire data structure. Can we do better? 



    TODO 

    ```js 
    const hashTable = {};
    ```

    Done. 

    🙄

    Seriously.

    For our intents and purposes, an object _is_ a hash table. When we insert a new value into an object, a key is made.

    But that's not why you're here. Let's do this the hard way.

Let's start with a list of programming languages:
```md
Ada
BASIC
C
Dart
ECMAScript
Fortran
Go
```

How would we translate this list to JavaScript? 

🤔

```js
const languages = ["Ada", "BASIC", "C", "Dart", "ECMAScript", "Fortran", "Go"]
```

If we wanted to find "Fortran", we could write a simple search function: 
```js
const simpleSearch = (array, query) => {
    
    for (let i = 0; i < array.length; i++) {
        if (array[i] === query) {
            return i;
        }
    }
}
```

We're still in the order of O(n), though. How can we improve? If we knew the index of "Fortran" in advance! If we knew that "Fortran" was "the fifth element", we could _look it up_, like so: 
```js
let fifthElement = languages[5];
```

Let's visualize this: 

| Index     |   Element         |
| ---       | ---               |
| 0         |   Ada             |
| 1         |   BASIC           |
| 2         |   C               |
| 3         |   Dart            |
| 4         |   ECMAScript      |
| 5         |   Fortran         |
| 6         |   Go              |

An array _is_ a table! And if we know the index of our element, we can quickly lookup the data stored in our table. 

Let's declare a class and a new hash table:
```js
class HashTable {
    constructor() {
        this.table = [];
    }
}

const hashTable = new HashTable();
```

Logging our `hashTable` will return: 
```sh
HashTable { table: [] }
```

We'll use an array for the _table_, all that's missing is the _hash_. 

Let's get cooking!


### Hashing 

TODO 
How do we find an element in an array without iterating over the array? We need some way of "remembering" the index. We _could_ hard code it, but that defeats the purpose. We're programmers, after all. We're only working with six programming languages in this tutorial, but what if we were working with all 700 or so? How can we store elements in an array and later find them without iteration? 


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

TODO
If we are creating an integer for our key, what do we need to account for? 

Duplicates, or what is referred to as _collisions_, and 

TODO 

There are a number of hashing algorithms for us to choose from. Several of them rely on modulo division to create unique integers. 


```js
    modularHash(key) {
        let sum = 0;

        for (let i = 0; i < key.length; ++i) {
            sum += key.charCodeAt(i);
        }

        let hash = sum % 71; 

        return hash;
    }
```


I picked a random prime number from the [list of prime numbers](https://en.wikipedia.org/wiki/List_of_prime_numbers). As we can see, 71 is the 20th prime number, so this means our hash table can hold 20 key / value pairs. 

Calling our `modularHash` method...
```js
hashTable.modularHash("Jared Nielsen");
```

...returns `29`. 

If we change our modulus from 71 to 29, our method returns `18`. And if we change it to 173, our method returns `25`. 








An alternative approach would be to declare the length of the array in advance, which we would be required to do in some other programming languages. In this scenario, our constructor would look like: 
```js
    constructor() {
        this.table = new Array(71);
    }
```

...and our `loseloseHash` would return:
```js
        let hash = total % this.table.length;
```

☝️ You don't want to take this approach, but if you did, you would want an array length that was a prime number. Why? If you array length was a composite number, you wouldn't be able to generate unique keys. 

### TODO 

Now that we can create a hash, we need to _put_ it in our table. 
```js
    put(key, value) {
        let hash = this.modularHash(key);
        return this.table[hash] = value;
    }
```

We declare a `put` method and pass it `key` and `value` parameters. Within our `put` method, we call the `modularHash` method and pass it our `key`. We then assign the `value` to the index in `table` that corresponds with our hashed `key`. 

Let's use our hash table to look up Twitter handles by a person's given name. 

```js
hashTable.put("Jared Nielsen", "@jarednielsen");
```

Logging our table returns: 
```sh
HashTable { table: [ <29 empty items>, '@jarednielsen' ] }
```
TODO
📝 Note the `<29 empty items>`. 

If we log `hashTable.table[0];`, it returns: 
```sh
undefined
```

But if we log `hashTable.table[29];`, it returns:
```sh
@jarednielsen
```

Let's _put_ another value in our table. 
```js
hashTable.put("NASA", "@nasa");
```

Logging our `hashTable` now returns: 
```sh
HashTable {
  table: [ <7 empty items>, '@nasa', <21 empty items>, '@jarednielsen' ]
}
```

What happens if we put "ASAN"? 
```js
hashTable.put("ASAN", "@nasa");
```

Logging our `hashTable` still returns: 
```sh
HashTable {
  table: [ <7 empty items>, '@nasa', <21 empty items>, '@jarednielsen' ]
}
```

What's going on? 

The value returned by our `modularHash` method is the same when it is passed "NASA" or "ASAN" because, forward or back, it's the sum of the character codes is the same. 

We'll look at better hash functions in the next article. 

TODO
```js
    get(key) {
        return this.table[this.modularHash(key)];
    }
```

If we call our `get` method...
```js
hashTable.get("Jared Nielsen");
```

...it will return `@jarednielsen`. 

Lastly, let's implement a `remove` method. 
```js
    remove(key) {
        return delete this.table[this.modularHash(key)];
    }
```



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


## Data Structures in JavaScript: Hash Tables


### What Problem(s) Do Hash Tables Create?


