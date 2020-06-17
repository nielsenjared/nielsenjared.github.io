---
title: 'JavaScript Linked List Data Structure'
date: '2020-06-19'
description: 'Learning data structures will help you understand how software works and improve your problem-solving skills. In this tutorial, you will implement the linked list data structure in JavaScript.'
keywords: ['javascript', 'linked list', 'data structure']
---


At some point in your career (today?!) you will want to learn data structures. It’s not just to ace the technical interview and land your dream job. Learning data structures will help you understand how software works and improve your problem-solving skills. In this tutorial, you will implement the Linked List data structure in JavaScript.


## What is a Linked List?

A linked list is just that: a list that is linked. 

🙄

Okay. A linked list is an ordered series of elements that are not necessarily stored in contiguous memory. 

☝️

Contiguous memory? 

In a compiled language, such as C++, the length of an array needs to be declared at runtime. When the program is executed, memory is allocated for the length of that array _continguously_, or side-by-side, whether or not anything is yet stored in the array. This makes for very fast and efficient access of elements. 

Elements in a linked list are generally referred to as _nodes_, although they are sometimes called elements or items, too. Each node contains a field that stores a value generally referred to as the _link_ or _pointer_, which, you guessed it, _links_ or _points_ to the next node in the list. The _head_ of a linked list is its first node and, depending on the implementation, the _tail_ is either the last element or the series of elements that follow the head.

A common analogy for Linked Lists is a train. The engine is the head and each car is a node. The train cars are _linked_ together, but can be reordered by changing how the cars are linked.


### Linked List Operations 

There are numerous approaches to implementing a Linked List in JavaScript. The fundamental operations are: 

* adding, or appending, nodes

* removing nodes

* inserting nodes

Depending on the implementation, the _adding_ and _inserting_ operations may be one and the same. For the sake of simplicity, we'll keep them separate in this tutorial. In other implementatons, you may find the following operations: 

* remove head

* repleace head 

* remove tail

* insert before

* insert after 

* find


## What Problem(s) Do Linked Lists Solve? 

* In many programming languages (but not JavaScript), arrays are fixed in length, so it's computationally expensive to add elements that exceed the memory allocation of the array as well as insert or remove elements, which may require reallocation of memory. 

* Arrays in JavaScript are implemented as objects and thus less efficient than arrays in other languages. Unless you need random access to elements, a linked list may be more efficient than a one-dimensional array.


### What Problem(s) Do Linked Lists Create? 

* Linked Lists use more memory than arrays due to their pointers. 

* Linked Lists must be traversed sequentially.


## Linked List Data Structure in JavaScript 

Let's implement a Linked List in JavaScript. The first question to answer is: what do we know about Linked Lists? 

A linked list is a sequential series of nodes. Each node in the list stores at least two fields: the value we want to store in the node and a pointer to the next node. We implement a linked list to solve the problem(s) that arrays create. So we can’t use an array. What _can_ we use? 
```
{}
```
☝️

What does that look like?
```js
const node = {
    value: “I’m a node!”,
}
```

But one node does not a list make! 
```js
const nodeA = {
    value: “A is for algorithm”
}

const nodeB = {
    value: “B is for boolean”
}

const nodeC = {
    value: “C is for cookie!”
}
```

Still not a _list_. How do we _link_ these? With a property:


```js
const nodeA = {
 value: 'A is for algorithm',
 next: nodeB
}
 
const nodeB = {
 value: 'B is for boolean',
 next: nodeC
}
 
const nodeC = {
 value: 'C is for cookie!',
 next: null
}

```

Why `null` and not `undefined`? Because `null` is an empty or non-existant value, whereas `undefined` has been declared but not yet assigned a value. 

The snippet above presents two problems. Can you spot them? 

First, if we attempt to access the `next` value in either `nodeA` or `nodeB`, we will get an error like the following: 
```
Cannot access 'nodeC' before initialization
```

To resolve this, we can simply invert the declarations: 
```js
const nodeC = {
 value: 'C is for cookie!',
 next: null
}
 
const nodeB = {
 value: 'B is for boolean',
 next: nodeC
}
 
const nodeA = {
 value: 'A is for algorithm',
 next: nodeB
}

```

But that’s not the real issue. We created three objects that link to each other, but we still didn’t create a list.

What’s the solution? 
```
{}
```
☝️

Let’s create an object, `linkedList`, to contain our nodes. What is the first node in a Linked List? 

```js
const linkedList = {
 head: nodeA
};

```

What’s next? 

Exactly. 

```js
const linkedList = {
 head: nodeA,
 next: nodeB
};
```

Now there's a list! But what’s the problem with this implementation?

It’s not self-contained. We want our objects nested in our Linked List. 

Let’s replace the variables with their values so we can see the structure. 
```js
const linkedList = {
 head: 'A is for algorithm',
 next: {
   value: 'B is for boolean',
   next: {
     value: 'C is for cookie!',
     next: null
   }
 }
};

```

What's the pattern? 

Nested objects. 

Our goal now is to write a function, or functions, that return an object like this. How do we get there? 

Let's create a helper class to create new nodes. 

```js
class Node {
 constructor(value) {
   this.value = value;
   this.next = null;
 }
}
```

Let’s verify that it works. If we declare and log a new Node:
```js
const node = new Node(); //Node { element: undefined, next: null }
```

Next, let’s declare our `LinkedList` class:
```js
class LinkedList {
 constructor() {
   this.length = 0;
   this.head = null;
 }
}
```

Again, let’s verify that it works. If we declare and log it:
```js
const linkedList = new LinkedList(); // LinkedList { length: 0, head: null }
```

Now we need a method for adding elements to our Linked List. 
```js
append(value) {
     const node = new Node(value);
 
     if (!this.head) {
       this.head = node;
     } else {
       let current = this.head;
    
       while(current.next) {
         current = current.next;
       }
      
       current.next = node;
     }
    
     return this.length++;
   }
```

If we append two elements:
```js
linkedList.append("First");
linkedList.append("Second");
```

The log will return:
```
LinkedList {
  length: 2,
  head: Node {
    element: 'First',
    next: Node { element: 'Second', next: null }
  }
}
```

Now let’s implement a `remove` method:
```js

   remove(value) {
 
   if (!this.head) {
     return null;
   }
 
   if (this.head.value === value) {
       this.head = this.head.next;
       return this.length--;
   }
    
   let current = this.head;
 
   while((current.next !== null) &&
   (current.next.value !== value)) {
     current = current.next;
   }
  
   if (current.next !== null) {
     current.next = current.next.next;
     return this.length--;
   }
 }

```

What’s happening here? 

First we check our head. If it’s not there, we return null.

Then we check if the value stored in the head is the value we want to remove. If so, we reassign the value of the next node to the value of `head`. 

Next, we create a temporary variable, `current`, and assign it the value in our `head`. 

If the value of `current` is not equal to `null`, we iterate over our list using a `while` loop. 

If the next node is not equal to `null` _and_ the value in the next node is not equal to the value we want to remove, then we reassign the value of `current` to the value of the next node. 

We repeat until our two conditions are not met. So, if the value of `current.next` is null _or_ the value of `current.next.value` is the one we want to remove, we exit the `while` loop.

Lastly, we check if the value of `current.next` is not equal to `null`. Why? Just in case. If the value we are looking to remove is not in the list, attempting to assign `current.next.next` to `current.next` will throw an error. 

```sh
TypeError: Cannot read property 'next' of null

```


The last method we will write, and perhaps most important for Linked Lists, is `insert`. To implement `insert` in our Linked List, we need to know two things: 

* the value to be inserted

* the position to insert the value

There are countless approaches to implementing a Linked List, some using `insertBefore` and `insertAfter` and even `replaceHead` methods. For the sake of brevity, we’ll implement an all purpose `insert` that inserts a value _before_ an existing node making an assumption that we don’t want to change the head of our Linked List and inserting _after_ would be redundant with our `append` method at the end of the list. 

What’s our approach? 

* find the insertion position

* create a new node _before_ the insert position and assign the `next` property to the _next_ node

* assign the `next` property of the node _before_ the insertion point to the new node

* update the length of the list

```js
 insert(pos, value) {
   let current = this.head;
 
   while ((current.next !== null) &&
   (current.next.value != pos)) {
     current = current.next;
   }
 
   if ((!current.next) || (current.next.value !== pos)) {
     return null;
   } else {
     let node = new Node(value);
     node.next = current.next;
     current.next = node;
 
     return this.length++;
   }
 }

```

Our `insert` method accepts two arguments, `pos` and `value`. We first initialize a temp variable, `current`, and assign it the value of our `head`. 

The structure is similar to our `remove` method. 

We first need to find `pos`. We do so with a `while` loop. If the value of `current.next` is not `null` _and_ the value of `current.next.value` is not equal to `pos`, then we iterate over our list. With each iteration, we reassign the value of `current` to the value of `current.next`. We exit the `while` loop when one of our conditions return false, meaning we did or did not find `pos`. 

Next we check if there’s a value in `current.next` _or_ if `current.next.value` does not equal `pos`. This is to catch edge cases so we don’t insert our new node in the wrong position. If neither of those return `true`, then we create a new `node` and do the ol’ switcheroo by assigning the value of its `next` to the value of `current.next`. and then assigning the value of `current.next` the new `node`. 

Lastly, we increase the length of the list by 1. 


## Big O & Linked List Data Structures

What is the order of a Linked List? 

For access and search, the order of a Linked List is O(n). In our implementation, the order of our insert and remove methods is also O(n) as they both require iteration. But there are (more involved) approaches to Linked Lists where the insert and remove methods are O(1). 


## Learn JavaScript Linked List Data Structure

In this tutorial, you learned the Linked List data structure in JavaScript. There are several classic and common interview questions using Linked Lists, including:

* Reverse a Linked List

* Detect a loop in a Linked List (i.e: nodes that link to each other)

* Remove duplicates from a Linked List

In the next tutorial, we’ll learn how to implement a Hash Table. Stay tuned!


