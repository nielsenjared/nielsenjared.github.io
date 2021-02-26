---
title: "Data Structures in JavaScript: Hash Table"  
date: '2021-02-26'
description: Learning data structures will help you understand how software works and improve your problem-solving skills. In this tutorial, you will learn the hash table data structure in JavaScript. 
keywords: ['javascript', 'data structure', 'hash table']
---


![](./jarednielsen-data-structure-hash-table-javascript.png)


At some point in your career (today?!) you will want to learn data structures. It's not _just_ to ace the technical interview and land your dream job. Learning data structures will help you understand how software works and improve your problem-solving skills. In this tutorial, you will learn the hash table data structure in JavaScript. 


If you're new to data structures, you may want to start with [Data Structures in JavaScript: Array](https://jarednielsen.com/data-structure-array-javascript/)


## Retrieval Practice

Retrieval practice is the surest way to solidify any new learning. Attempt to answer the following questions before proceeding: 

* What is an array? 

* What is a table?

* What problem(s) do data structures solve?


### What is an Array? 

An array is the simplest data structure. It is a sequential collection of elements each identified by index. 


### What is a Table?

When it's not a piece of furniture, a table is a structure that organizes information, or data, in rows and columns. 


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

While iteration is important, it's not optimal. (See what I did there?) Take a graph, for example: when we are searching for a node, we may need to iterate over the entire data structure. Can we do better? 

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

An array! It's simply a variable that allows us to store one or more values, like a list. 

```js
const languages = ["Ada", "BASIC", "C", "Dart", "ECMAScript", "Fortran", "Go"]
```

If we wanted to find the location where "Fortran" is stored in our array, we could write a simple search function: 
```js
const simpleSearch = (array, query) => {
    
    for (let i = 0; i < array.length; i++) {
        if (array[i] === query) {
            return i;
        }
    }
}
```

We're still in the order of O(n), though. How can we improve this? If we knew the index of "Fortran" in advance! If we knew that "Fortran" was "the fifth element", we could _look it up_, like so: 
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

What do we see? An array _is_ a table! And if we know the index of our element, we can quickly lookup the data stored in our table. 

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

There's our table. Now, all that's missing is the _hash_. Let's get cooking!


### Implementing a Modular Hash Function in JavaScript

How do we find an element in an array without iterating over the array? We need some way of "remembering" the index. We _could_ hard code it, but that defeats the purpose. We're programmers, after all. We're only working with six programming languages in our array, but what if we were working with all 700 or so programming languages? How can we store elements in an array and later find them without iteration? 

One more thought experiment: what if we didn't know what, or how many, languages we wanted to store in our hash table in advance? All we know is that we want to store "Fortran". We could declare an array:
```js
const languages = [];

languages.push("Fortran");
```

This will store "Fortran" at the 0 index. But! What happens if another dev, or, worse yet, _you_, mutate the array with `shift` or `unshift`? The value "Fortran" will no longer be stored at the 0 index, if in the array at all. The same problem exists if we assign a specific index, like so: 
```js
const languages = [];

languages[5] = "Fortran";
```

It's like we need to _encode_ "Fortran" in the index itself...

🤔

Just like cooking up a [hash](https://en.wikipedia.org/wiki/Hash_(food)), we need to chop our keys into bite- (or byte-) sized pieces. 

(Mmm... data hash. Just like Mom used to make.) 

This process of chopping up keys is called _hashing_. There are a number of hashing algorithms for us to choose from. Several of them rely on modulo division to create unique integers. Here's an example: 


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

I picked a random prime number from the [list of prime numbers](https://en.wikipedia.org/wiki/List_of_prime_numbers). As we can see, 71 is the 20th prime number, so this means our hash table can hold 20 key / value pairs. Why do we want a prime number? Because it is only divisible by itself, thus guaranteeing that number of unique indexes in our table. 

With the addition of the `modularHash` method, our hash table class now looks like this: 
```js
class HashTable {
    constructor() {
        this.table = [];
    }

    modularHash(key) {
        let sum = 0;

        for (let i = 0; i < key.length; ++i) {
            sum += key.charCodeAt(i);
        }

        let hash = sum % 71; 

        return hash;
    }
}

const hashTable = new HashTable();
```

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

...and our `modularHash` would return:
```js
        let hash = total % this.table.length;
```

☝️ If you take this approach, you would want an array length that was a prime number. Why? If your array length was a composite number, you wouldn't be able to generate unique keys. 


### Implementing Put, Get, and Remove Methods in a Hash Table with JavaScript

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
hashTable.put("ASAN", "@asan");
```

Logging our `hashTable` returns: 
```sh
HashTable {
  table: [ <7 empty items>, '@asan', <21 empty items>, '@jarednielsen' ]
}
```

Uh oh.

What's going on? 

The value returned by our `modularHash` method is the same when it is passed "NASA" or "ASAN" because, forward or back, the sum of the character codes is the same. 

This is referred to as a _collision_. We'll look at solutions for this problem in the next article. 

To _get_ our date from our table, we need to "reverse engineer" the key.
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

For reference, our complete hash table class looks like this: 
```js
class HashTable {
    constructor() {
        this.table = [];
    }

    modularHash(key) {
        let sum = 0;

        for (let i = 0; i < key.length; ++i) {
            sum += key.charCodeAt(i);
        }

        let hash = sum % 71; 

        return hash;
    }

    put(key, value) {
        let hash = this.modularHash(key);
        return this.table[hash] = value;
    }

    get(key) {
        return this.table[this.modularHash(key)];
    }

    remove(key) {
        return delete this.table[this.modularHash(key)];
    }


}

const hashTable = new HashTable();
```


## Reflection

* What is hashing?

* What is a hash table?

* What problems does a hash tables solve?


### What is Hashing?

Hashing is creating a key to use when looking up a value in a hash table.


### What is a Hash Table?

A hash table is a data structure that allows us to quickly look up values using a key. 


### What Problem(s) Do Hash Tables Solve?

Hash tables are fast! They allow us to quickly look up values with a constant time complexity.


## Data Structures in JavaScript: Hash Tables

In this tutorial you learned the basics of hash tables with JavaScript. In the next tutorial, we'll look at how we can improve our hash function. 




