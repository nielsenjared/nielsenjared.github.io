---
title: 'Data Structures in JavaScript: Tree Node Removal'
date: '2020-10-16'
description: 'Learning data structures will help you understand how software works and improve your problem-solving skills. In this tutorial, you will implement node removal in a tree data structure in JavaScript.'
keywords: ['javascript', 'tree', 'data structure', 'search']
---

![](./jarednielsen-data-structure-tree.png)

At some point in your career (today?!) you will want to learn data structures. It’s not just to ace the technical interview and land your dream job. Learning data structures will help you understand how software works and improve your problem-solving skills. In this tutorial, you will implement node removal in a tree data structure in JavaScript. 


## Retrieval Practice

* What is a tree? 

* What are the three types of traversal?

* What are the three types of search?


### What is a Tree?

The tree is a data structure composed of _nodes_ connected by _edges_. In [The Art of Computer Programming](https://amzn.to/2RD7cmN), Donald Knuth provides a recursive definition of trees:

1. there is one specially designated node called the _root_ of the tree, `root(T)`; and…

2. the remaining nodes (excluding the root) are partitioned into `m >= 0` disjoint sets `T1… ™`, and each of these sets in turn is a tree. 


### What Are The Three Types of Traversal?

According to [Wikipedia](https://en.wikipedia.org/wiki/Tree_traversal#Depth-first_search_of_binary_tree), tree traversal (AKA walking the tree) is: 

> refers to the process of visiting (checking and/or updating) each node in a tree data structure, exactly once. 

There are three standard functions for traversing a tree: 

* in-order

* pre-order

* post-order

Each of these is considered _depth-first search_, or DFS, because we traverse a branch to its furthest depth before moving on to the next branch. This is in contrast to _breadth-first search_, or BFS, which, you guessed it, traverses all of the nodes on a level before going deeper into the tree. 


## What Problem(s) Do Trees Solve? 

* Binary trees are chosen over other more primary data structures because you can search a binary tree very quickly (as opposed to a linked list, for example) and you can quickly insert and delete data from a binary tree (as opposed to an array).


## Implementation of a Binary Search Tree Data Structure in JavaScript 

Below is our implementation of a binary search tree in JavaScript. If you are just joining us, you may want to start with the first article [JavaScript Tree Data Structure](https://jarednielsen.com/data-structure-tree-javascript/).

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

    traverseInOrder(node = this.root, memo = []) {
        if (node !== null) {
            this.traverseInOrder(node.left, memo);
            memo.push(node.data);
            this.traverseInOrder(node.right, memo);
        }
        return memo;
    }

    traversePreOrder(node = this.root, memo = []) {
        if (node !== null) {
            memo.push(node.data);
            this.traverseInOrder(node.left, memo);
            this.traverseInOrder(node.right, memo);
        }
        return memo;
    }

    traversePostOrder(node = this.root, memo = []) {
        if (node !== null) {
            this.traverseInOrder(node.left, memo);
            this.traverseInOrder(node.right, memo);
            memo.push(node.data);
        }
        return memo;
    }

    searchMin() {
        let current = this.root;

        while (current.left !== null) {
            current = current.left;
        }
        return current.data;
    }

    searchMax() {
        let current = this.root;

        while (current.right !== null) {
            current = current.right;
        }
        return current.data;
    }

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

## Implementation of Node Removal in a Binary Search Tree Data Structure in JavaScript 

@TODO

Let's first declare our method:
```js
    removeNode(data, node = this.root) {
 
    }
```

Using the concept of inverse thinking, if the data we are looking for _does not_ exist in the tree, what do we do? 

```js
    removeNode(data, node = this.root) {
        if (node === null) {
            return null;
        }
    }
```

Now the hard (fun?) part: how do we _remove_ a node?

First, we need to traverse until we find the node in question. We need to determine if we are traversing the left or right branches. We also need to determine if we found our node. 

```js
    removeNode(data, node = this.root) {
        if (node === null) {
            return null;
        }

        if (data < node.data) {
            //traverse the left node
            return node;
        } else if (data > node.data) {
            //traverse the right node
            return node;
        } else {
            //we found it?
            return node;
        }
    }
```

What happense in these conditional blocks? If we recall the implementation of our traversal methods, we need to call (or recall?) our `removeNode` method. Unlike our traversal methods, though, we can't simply call `removeNode`. We need to do something with the returned values. 

```js
    removeNode(data, node = this.root) {
        if (node === null) {
            return null;
        }

        if (data < node.data) {
            node.left = this.removeNode(data, node.left);
            return node;
        } else if (data > node.data) {
            node.right = this.removeNode(data, node.right);
            return node;
        } else {
            //we found it?
            return node;
        }
    }
```

We need to traverse the left (or right) node of the current node and reassign the left (or right) node of the current node with whatever our function returns. 

Now what? If we found our node, we need to "remove" it. This will require us to restructure our tree and move child nodes up a level in the branch. What are the scenarios we need to address? 

* leaf nodes

* a node with one child

* a node with two children

Let's start with leaf nodes. How do we know if a node is a leaf node? 

No children. 

How do we know if a node doesn't have any children?

It's left and right nodes will be equal to `null`. 

How do we "remove" the node? 

We're not _really_ removing the node (hence the scare quotes). We assign it a value of `null` so the value is no longer referenced in our tree. 

What does that look like? 


```js
    removeNode(data, node = this.root) {
        if (node === null) {
            return null;
        }

        if (data < node.data) {
            node.left = this.removeNode(data, node.left);
            return node;
        } else if (data > node.data) {
            node.right = this.removeNode(data, node.right);
            return node;
        } else {
            if (node.left === null && node.right === null) {
                node = null;
                return node;
            }
        }
    }
```

If our node has a child, we need to replace that node with its child. But first we need to determine if the child is the left or the right node. 
```js
    removeNode(data, node = this.root) {
        if (node === null) {
            return null;
        }

        if (data < node.data) {
            node.left = this.removeNode(data, node.left);
            return node;
        } else if (data > node.data) {
            node.right = this.removeNode(data, node.right);
            return node;
        } else {
            if (node.left === null && node.right === null) {
                node = null;
                return node;
            }
            if (node.left === null) {
                node = node.right;
                return node;
            } else if (node.right === null) {
                node = node.left;
                return node;
            }
        }
    }
```

If the left node is equal to `null` then we reassign the value of our node to `node.right`. But if the right node is `null`, then we reassign the value of our node to `node.left`. 

@TODO





## Big O & Tree Data Structures

The access, search, insertion, and deletion methods of a binary search tree are all O(n) due to the use of iteration. Average case, though, is O(log n) because we are continually dividing our operations as we execute a method. 


## Learn JavaScript Tree Data Structure

In this tutorial you learned how to implement node removal in a tree data structure in JavaScript. . 