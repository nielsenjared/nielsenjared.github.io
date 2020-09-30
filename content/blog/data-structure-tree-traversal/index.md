---
title: 'JavaScript Tree Data Structure Traversal'
date: '2020-09-25'
description: 'Learning data structures will help you understand how software works and improve your problem-solving skills. In this tutorial, you will implement traversal of a tree data structure in JavaScript.'
keywords: ['javascript', 'tree', 'data structure', 'traversal']
---

![]()

At some point in your career (today?!) you will want to learn data structures. It’s not just to ace the technical interview and land your dream job. Learning data structures will help you understand how software works and improve your problem-solving skills. In this tutorial, you will implement a tree traversal in JavaScript. 

## What Problem(s) Do Trees Solve? 



## What is a Tree?

@TODO recap

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


## What is Tree Traversal?

@TODO https://en.wikipedia.org/wiki/Tree_traversal#Depth-first_search_of_binary_tree

There are three standard functions for traversing a tree: 

* inorder

* preorder

* postorder

Each of these is considered _depth-first search_, or DFS, because we traverse a branch to its furthest depth before moving on to the next branch. This is in contrast to _bread-first search_, or BFS, which, you guessed it, traverses all of the nodes on a level before going deeper into the tree. 

Let's start in order with inorder.


## Traversing a Tree In-Order

Recall that one of the defining features of a BTS is the storage of nodes with lower values to the left and higher values to the right. An in-order traversal returns the values of nodes in ascending order.

You will see a lot of examples of inorder traversal that simply log the values from within, like this: 
```js
traverseInOrder(node) {
    if (node !== null) {
        this.traverseInOrder(node.left);
        console.log(node.data);
        this.traverseInOrder(node.right);
    }
}
```

This is a great proof of concept. The method works! But you can't do anything with a logged value except observe it. We need our method to return the values stored in our tree. But, what happens if we plug a return value in between our recursive calls to `this.traverseInOrder()`? 

Yep. Our method will exit before we traverse the right nodes. 

How do we solve this problem? 

The solution is dynamic! We need to store, or _cache_, the return value of each call to `this.traverseInOrder()`. 

How do we do that? 

We can pass an array up and down the call stack and `push` the `node.data` at each call into it.

```js
traverseInOrder(node, memo = []) {
    if (node !== null) {
        this.traverseInOrder(node.left, memo);
        memo.push(node.data);
        this.traverseInOrder(node.right, memo);
    }
    return memo;
}
```

This is an example of memoization. If you want to learn more, check out my article [What is Dynamic Programming? Memoization and Tabulation](https://jarednielsen.com/dynamic-programming-memoization-tabulation/).


## Traversing Pre-Order

@TODO returns the values of nodes beginning with the root and proceeding down the left branch of each subtree, then followed by the right branch of each subtree. 

```js
  traversePreOrder(node, memo = []) {
        if (node !== null) {
            memo.push(node.data);
            this.traverseInOrder(node.left, memo);
            this.traverseInOrder(node.right, memo);
        }
        return memo;
    }
```


## Traversing Post-Order

@TODO Is the inverse of preorder. Returns the values of nodes beginning with the child nodes of the left subtree, then the right branch of each subtree, ending with the root. 


```js
## Traversing PostOrder

    traversePostOrder(node, memo = []) {
        if (node !== null) {
            this.traverseInOrder(node.left, memo);
            this.traverseInOrder(node.right, memo);
            memo.push(node.data);
        }
        return memo;
    }
```

