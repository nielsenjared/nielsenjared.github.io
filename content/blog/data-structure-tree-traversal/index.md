---
title: 'JavaScript Tree Data Structure Traversal'
date: '2020-09-25'
description: 'Learning data structures will help you understand how software works and improve your problem-solving skills. In this tutorial, you will implement traversal of a tree data structure in JavaScript.'
keywords: ['javascript', 'tree', 'data structure', 'traversal']
---

![]()

At some point in your career (today?!) you will want to learn data structures. It’s not just to ace the technical interview and land your dream job. Learning data structures will help you understand how software works and improve your problem-solving skills. In this tutorial, you will implement traversal of a tree data structure in JavaScript. 


## Retrieval Practice

* What is a tree? 

* What is a forest?

* What is a binary tree?


### What is a Tree?

@TODO


### What is a forest? 

@TODO


### What is a Binary Tree?

@TODO


## What Problem(s) Do Trees Solve? 

* Binary trees are chosen over other more primary data structures because you can search a binary tree very quickly (as opposed to a linked list, for example) and you can quickly insert and delete data from a binary tree (as opposed to an array).


## Implementation of a Binary Search Tree Data Structure in JavaScript 

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


## What is Tree Traversal?

According to [Wikipedia](https://en.wikipedia.org/wiki/Tree_traversal#Depth-first_search_of_binary_tree), tree traversal (AKA walking the tree) is: 

> refers to the process of visiting (checking and/or updating) each node in a tree data structure, exactly once. 

There are three standard functions for traversing a tree: 

* in-order

* pre-order

* post-order

Each of these is considered _depth-first search_, or DFS, because we traverse a branch to its furthest depth before moving on to the next branch. This is in contrast to _breadth-first search_, or BFS, which, you guessed it, traverses all of the nodes on a level before going deeper into the tree. 

Let's start in order with in-order.


## Tree Traversal In-Order

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

We declare a method `traverseInOrder` and pass it a `node` argument. If the `node` is not equal to `null`, we recursively call `traverseInOrder` and pass it the left child. We then log the value stored in `node.data` and recursively call `traverseInOrder`, passing it the right child. 

Why do we _sandwich_ the log between recursive calls? 

Because we want to return values _in order_, or ascending from smallest to largest. To get _all_ of the smaller values, we need to traverse the left nodes first, then the right nodes. If this doesn't make sense, don't worry, it will click when we look at the pre- and post-order below.

Using our example above, `tree.traverseInOrder(tree.root);` will return:

```sh
[ 0, 32, 64, 127, 256 ]
```

This is a great proof of concept. The method works! But you can't do anything with a logged value except observe it. We need our method to return the values stored in our tree. But, what happens if we plug a return value in between our recursive calls to `this.traverseInOrder()`? 

Yep. Our method will exit before we traverse the right nodes. 

How do we solve this problem? 

The solution is dynamic! We need to store, or _cache_, the return value of each call to `this.traverseInOrder()`. 

How do we do that? 

We can pass an array up and down the call stack and `push` the `node.data` at each call into it. 

```js
traverseInOrder(node = this.root, memo = []) {
    if (node !== null) {
        this.traverseInOrder(node.left, memo);
        memo.push(node.data);
        this.traverseInOrder(node.right, memo);
    }
    return memo;
}
```

This is an example of memoization. If you want to learn more, check out my article [What is Dynamic Programming? Memoization and Tabulation](https://jarednielsen.com/dynamic-programming-memoization-tabulation/).


📝 Note that we set the `node` parameter to default to `this.root`. 

Our tree now looks like this: 
```js
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
}
```

## Tree Traversal Pre-Order

A pre-order traversal returns the values of nodes beginning with the root and proceeding down the left branch of each subtree, then followed by the right branch of each subtree. 


```js
traversePreOrder(node = this.root, memo = []) {
    if (node !== null) {
        memo.push(node.data);
        this.traverseInOrder(node.left, memo);
        this.traverseInOrder(node.right, memo);
    }
    return memo;
}
```

📝 Note that `traversePreOrder` differs from in-order by pushing the value in the current `node` _before_ making any recursive calls. 

Our tree now looks like this: 
```js
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
}
```

## Tree Traversal Post-Order

A post-order traversal is the inverse of preorder. It returns the values of nodes beginning with the child nodes of the left subtree, then the right branch of each subtree, ending with the root.


```js
traversePostOrder(node = this.root, memo = []) {
    if (node !== null) {
        this.traverseInOrder(node.left, memo);
        this.traverseInOrder(node.right, memo);
        memo.push(node.data);
    }
    return memo;
}
```

📝 Note that `traversePreOrder` differs from in-order and pre-order by pushing the value in the current `node` _after_ making the recursive calls.

Our tree now looks like this, including our `Node` class:

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
}
```

## Big O & Tree Data Structures

@TODO
The access, search, insertion, and deletion methods of a binary search tree are all O(n) due to the use of iteration. Average case, though, is O(log n) because we are continually dividing our operations as we execute a method. 


## Learn JavaScript Tree Data Structure

In this tutorial you learned how to implement in-order, pre-order, and post-order traversal of a tree data structure in JavaScript. We're not done, though. In the next tutorial we'll implement our other methods. 