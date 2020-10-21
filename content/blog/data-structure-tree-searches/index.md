---
title: 'Data Structures in JavaScript: Tree Traversal'
date: '2020-10-02'
description: 'Learning data structures will help you understand how software works and improve your problem-solving skills. In this tutorial, you will implement traversal of a tree data structure in JavaScript.'
keywords: ['javascript', 'tree', 'data structure', 'traversal']
---

![](./jarednielsen-data-structure-tree.png)

At some point in your career (today?!) you will want to learn data structures. It’s not just to ace the technical interview and land your dream job. Learning data structures will help you understand how software works and improve your problem-solving skills. In this tutorial, you will implement traversal of a tree data structure in JavaScript. 


## Retrieval Practice

* What is a tree? 

* @TODO 

* What are the three types of traversal?


### What is a Tree?

The tree is a data structure composed of _nodes_ connected by _edges_. In [The Art of Computer Programming](https://amzn.to/2RD7cmN), Donald Knuth provides a recursive definition of trees:

1. there is one specially designated node called the _root_ of the tree, `root(T)`; and…

2. the remaining nodes (excluding the root) are partitioned into `m >= 0` disjoint sets `T1… ™`, and each of these sets in turn is a tree. 


## What is Tree Traversal?

According to [Wikipedia](https://en.wikipedia.org/wiki/Tree_traversal#Depth-first_search_of_binary_tree), tree traversal (AKA walking the tree) is: 

> refers to the process of visiting (checking and/or updating) each node in a tree data structure, exactly once. 


### What Are The Three Types of Traversal?

There are three standard functions for traversing a tree: 

* in-order

* pre-order

* post-order

Each of these is considered _depth-first search_, or DFS, because we traverse a branch to its furthest depth before moving on to the next branch. This is in contrast to _breadth-first search_, or BFS, which, you guessed it, traverses all of the nodes on a level before going deeper into the tree. 


## What Problem(s) Do Trees Solve? 

* Binary trees are chosen over other more primary data structures because you can search a binary tree very quickly (as opposed to a linked list, for example) and you can quickly insert and delete data from a binary tree (as opposed to an array).


## Implementation of a Binary Search Tree Data Structure in JavaScript 

Below is our implementation of a binary search tree in JavaScript. If you are just joining us, you may want to start with the previous article [JavaScript Tree Data Structure](https://jarednielsen.com/data-structure-tree-javascript/).

```js
class Node {
    constructor(data, left, right) {
      this.data = data;
      this.left = left || null;
      this.right = right || null;
    }
}

class Tree {
    constructor() {
      this.root = null;
    }

    insert(data) {
        const node = new Node(data, null, null);

        if (this.root === null) {
        this.root = node;
        return;
        } 

        let current = this.root;
        let parent;

        while(current) {
        parent = current;
        if (data <= current.data) {
            current = current.left;
            if (current === null) {
            parent.left = node;
            }
        } else {
            current = current.right;
            if (current === null) {
            parent.right = node;
            }
        }
        }
    }
}


const tree = new Tree();
tree.insert(64);
tree.insert(127);
tree.insert(0);
tree.insert(32);
tree.insert(256);
```

If we log our `tree`, we get: 
```sh
Tree {
  root: Node {
    data: 64,
    left: Node { data: 0, left: null, right: [Node] },
    right: Node { data: 127, left: null, right: [Node] }
  }
}
```

@TODO 
## Binary Search Tree


@TODO three types of searches

* minimum value

* maximum value

* specific value


### Binary Search Tree Minimum Value

If we know that lower values are stored in branches to the left, how do we implement a search for a minimum value? 

Easy! 

We traverse the branches on the left until we reach the terminal node. 

```js

    searchMin() {
        let current = this.root;

        while (current.left !== null) {
            current = current.left;
        }
        return current.data;
    }
```

### Binary Search Tree Maximum Value

Implementing a search for the maximum value in a BST is simply a matter of modifying our `searchMin()` function to traverse the nodes on the right.

```js
    searchMax() {
        let current = this.root;

        while (current.right !== null) {
            current = current.right;
        }
        return current.data;
    }
```


### Binary Search Tree Specific Value

Pattern recognition is an important skill to develop as a programmer. 

_If_ we're searching for a speciic value, what do we need to do? We need to check all of the values (until we find our node, of course). What control statement allows us to repeat a process _until_ a condition is met? 

`while`

@TODO

```js
    searchSpecific(data) {
        let current = this.root;

        while(current.data !== data) {
            if (data < current.data) {
                current = current.left;
            }
            else {
                current = current.right;
            }
            if (current === null) { 
                return null;
            }
        }
        return current;
    }
```

What's happening in `searchSpecific`? 

We declare a temporary variable, `current` and assign it our starting point, `this.root`. 

```js
        let current = this.root;
```

We then enter our `while` loop. _While_ `current.data` is not equal to `data`, the argument we passed to `searchSpecific`, we will continue to traverse our tree until we find the specific value. Once we find the node containing our data, we'll return it. So our function looks something like this: 


```js
    searchSpecific(data) {
        let current = this.root;

        while(current.data !== data) {
            //find that data!
        }
        return current;
    }
```

Here's where that pattern recognition comes in to play. How do we implement the functionality of both `searchMax()` and `searchMin()`? 

_If_ `data` is less than `current.data`, then we need to continue traversing the nodes on the left. Otherwise, we traverse the nodes on the right.  What does that look like? 

```js
            if (data < current.data) {
                current = current.left;
            }
            else {
                current = current.right;
            }
```

The last bit is, well, the last bit. We need to exit our `while` loop in the event that we don't find a node containing the data we are looking for. 

```js
            if (current === null) { 
                return null;
            }
```

Here's the full function again: 

```js
    searchSpecific(data) {
        let current = this.root;

        while(current.data !== data) {
            if (data < current.data) {
                current = current.left;
            }
            else {
                current = current.right;
            }
            if (current === null) { 
                return null;
            }
        }
        return current;
    }
```

## Big O & Tree Data Structures

The access, search, insertion, and deletion methods of a binary search tree are all O(n) due to the use of iteration. Average case, though, is O(log n) because we are continually dividing our operations as we execute a method. 


## Learn JavaScript Tree Data Structure

In this tutorial you learned how to implement minimum, maximum and specific values searches of a tree data structure in JavaScript. We're not done, though. In the next tutorial we'll implement node removal. 