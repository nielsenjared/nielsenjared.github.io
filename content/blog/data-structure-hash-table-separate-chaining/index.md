---
title: "Data Structures in JavaScript: Hash Table Separate Chaining"  
date: '2021-03-05'
description: Learning data structures will help you understand how software works and improve your problem-solving skills. In this tutorial, you will learn how to handle collisions with separate chaining in a hash table data structure with JavaScript. 
keywords: ['javascript', 'data structure', 'hash table', 'separate chaining']
---


![](./jarednielsen-data-structure-hash-table.png)


At some point in your career (today?!) you will want to learn data structures. It's not _just_ to ace the technical interview and land your dream job. Learning data structures will help you understand how software works and improve your problem-solving skills. In this tutorial, you will learn how to handle collisions with separate chaining in a hash table data structure with JavaScript. 


If you're new to data structures, you may want to start with [Data Structures in JavaScript: Array](https://jarednielsen.com/data-structure-array-javascript/)


## Retrieval Practice

Retrieval practice is the surest way to solidify any new learning. Attempt to answer the following questions before proceeding: 

* What is a hash table? 

* What is hashing?

* What is a linked list? 


### TODO


TODO


## Let's Get Meta

Programming is problem solving. Both are metacognitive activities. To excel, we want to improve our thinking _about_ thinking. Ask yourself the following questions and keep them back of mind as you proceed: 
 
* What is a collision? 

* What is separate chaining? 

* TODO 


## How to Implement Hash Table Separate Chaninig in JavaScript

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

In our previous tutorial, we were storing Twitter handles in our hash table and looking them up by the users given name. 




## Reflection

* What is a collision? 

* What is separate chaining? 

* TODO 


### What is a Collision? 


### What is Separate Chaining? 


### 



## Data Structures in JavaScript: Separate Chaining in Hash Tables

In this tutorial you learned the basics of hash tables with JavaScript. In the next tutorial, we'll look at how we can improve our hash function. 




