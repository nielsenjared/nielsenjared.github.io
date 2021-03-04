---
title: "Data Structures in JavaScript: Separate Chaining Hash Table Collisions"  
date: '2021-03-05'
description: Learning data structures will help you understand how software works and improve your problem-solving skills. In this tutorial, you will learn how to implement separate chaining to handle collisions in a hash table data structure with JavaScript. 
keywords: ['javascript', 'data structure', 'hash table', 'separate chaining']
---


![](./jarednielsen-data-structure-hash-table.png)


At some point in your career (today?!) you will want to learn data structures. It's not _just_ to ace the technical interview and land your dream job. Learning data structures will help you understand how software works and improve your problem-solving skills. In this tutorial, you will learn how to implement separate chaining, or chained hashing, to handle collisions in a hash table data structure with JavaScript.


If you're new to data structures, you may want to start with [Data Structures in JavaScript: Array](https://jarednielsen.com/data-structure-array-javascript/)


## Retrieval Practice

Retrieval practice is the surest way to solidify any new learning. Attempt to answer the following questions before proceeding: 

* What is a hash table? 

* What is hashing?

* What is a linked list? 


### What is a Hash Table?

A hash table is a data structure that allows us to quickly look up values using a key. 


### What is Hashing?

Hashing is creating a key to use when looking up a value in a hash table.


### What is a Linked List? 

A linked list is a data structure in which the sequence is determined by their relationships, or links, rather than their place in memory. 


## Let's Get Meta

Programming is problem solving. Both are metacognitive activities. To excel, we want to improve our thinking _about_ thinking. Ask yourself the following questions and keep them back of mind as you proceed: 
 
* What is a collision? 

* What is separate chaining? 

* What is open address hashing?


## How to Implement Hash Table Separate Chainnig in JavaScript

Let's pick up where we left off in the previous tutorial, [Data Structures in JavaScript: Hash Table](https://jarednielsen.com/data-structure-hash-table-javascript/).

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

In our previous tutorial, we were storing Twitter handles in our hash table and looking them up by the users given name. For example, if I put my name and Twitter handle in our hash table: 
```js
hashTable.put("Jared Nielsen", "@jarednielsen");
```

...logging our table returns: 
```sh
HashTable { table: [ <29 empty items>, '@jarednielsen' ] }
```

I can get my handle calling the `get` method with my given name: 
```js
let query = hashTable.get("Jared Nielsen");
```

☝️ We discovered a problem if we _put_ the following key / value pairs in our table: 
```js
hashTable.put("NASA", "@nasa");
hashTable.put("ASAN", "@asan");
```

What's the problem? 

If we log our table, we see that "ASAN" overwrites "NASA": 
```sh
HashTable {
  table: [ <7 empty items>, '@asan', <21 empty items>, '@jarednielsen' ]
}
```

Do you see the gravity of the situation? 😉

It's like two cars trying to park in the same spot. What do we call this IRL? 

A collision. 

Our hash function created the same key for two different values, and, in this implementation, the subsequent value is overwriting the previous. 

What's the solution? 

There are two primary approaches to handling collisions in a hash table: chained hashing (the topic of this tutorial!) and open address hashing (stay tuned!). We _could_ use a [perfect hash function](https://en.wikipedia.org/wiki/Perfect_hash_function), but that's a topic for another day (or book!).

Let's return to the car analogy. If there aren't enough parking spots for two vehicles, what do we do? We could build a parking garage or we could hire a valet. 

A parking garage would allow us to "stack" cars on top of each other and a valet would allow us to "abstract" the details by parking the cars in some other location. 

How can we store more than one value at a given index in an array? 

🤔

With another array!

For reference, here's our existing `put` method:
```js
    put(key, value) {
        let hash = this.modularHash(key);
        return this.table[hash] = value;
    }
```

What do we need to do to update this method? Let's pseudocode it:

* Create an array at the index equal to the hash

* Push an array to the new array containing our key / value pair. 

Let's translate this to JavaScript:

```js
    put(key, value) {
        let hash = this.modularHash(key);

        if (this.table[hash] === undefined) {
            this.table[hash] = [];
        }

        return this.table[hash].push([key, value]);
    }
```

Why do we need to push the `key` _and_ `value`? We can no longer look up an individual value by it's corresponding hash, so we will need to first look up the location in the table with the hash and then use the key that generated the hash to find its corresponding value. 

If we log our `hashTable`, it returns:
```sh
HashTable {
  table: [
    <7 empty items>,
    [ [Array], [Array] ],
    <21 empty items>,
    [ [Array] ]
  ]
}
```

Where have we seen this, or something like it before? 

🤔

A linked list! 

The 'classic' implementation of chained hashing uses a linked list to store the colliding values. For our intents and purposes, arrays will suffice. If you want to go deeper, check out [Data Structures in JavaScript: Linked List](https://jarednielsen.com/data-structure-linked-list-javascript/).

Now we need to _get_ our values. For reference, our existing `get` method looks like this:
```js
    get(key) {
        return this.table[this.modularHash(key)];
    }
```

Super simple and straightforward. Now that we are working with nested arrays, what do we need to do? 

For every array stored in our hashed index...
```js
    get(key) {
        let hash = this.modularHash(key);

        for (let i = 0; i < this.table[hash].length; i++) {
            if (this.table[hash][i][0] === key) {
                return this.table[hash][i][1];
            }
        }

        return undefined;
    }
```

We update our `get` method to iterate over all of the elements stored at the hash index. If the first value in an element is equal to the key, we return the second value. If none of the values are equal to the key, we return undefined. 


## Reflection

* What is a collision? 

* What is separate chaining? 

* What is open address hashing? 


### What is a Collision? 

A collision occurs in a hash table when our put method attempts to store multiple values at the same hash index.


### What is Separate Chaining? 

Separate chaining is an approach to handling collisions in a hash table by storing multiple values at the index, _chained_ together. 


### What is Open Address Hashing? 

If chained hashing is creating a _chain_ of key / value pairs at a hashed index, what do you think the opposite approach will be? 


## Data Structures in JavaScript: Separate Chaining in Hash Tables

In this tutorial you learned chained hashing. In our next tutorial, we'll look at another solution to collisions in hash tables: open address hashing. 
