---
title: 'JavaScript Tree Data Structure'
date: '2020-09-18'
description: 'Learning data structures will help you understand how software works and improve your problem-solving skills. In this tutorial, you will implement the tree data structure in JavaScript.'
keywords: ['javascript', 'tree', 'data structure']
---

![]()

At some point in your career (today?!) you will want to learn data structures. It’s not just to ace the technical interview and land your dream job. Learning data structures will help you understand how software works and improve your problem-solving skills. In this tutorial, you will implement the tree data structure in JavaScript. 


## What is a Tree?

> I think that I shall never see

> A structure lovely as a tree.

In [The Art of Computer Programming](https://amzn.to/2RD7cmN), Donald Knuth provides a recursive definition of trees:

1. there is one specially designated node called the _root_ of the tree, `root(T)`; and…

2. the remaining nodes (excluding the root) are partitioned into `m >= 0` disjoint sets `T1… ™`, and each of these sets in turn is a tree. 

Knuth recognizes that the recursive definition is not _entirely_ helpful and provides the following explanation: 

> ... every node of a tree is the root of some subtree contained in the whole tree. The number of subtrees of a node is called the _degree_ of that node. A node of degree zero is called a _terminal node_, or sometimes a _leaf_. A nonterminal node is often called a _branch node_.

The top node of a tree is called the _root_. The top? Yes, computer scientists draw their trees upside down. Knuth initially proposed trees be drawn as they are found in nature, but discovered that, as is true of most academics, his colleagues were set in their ways. He theorizes that the convention to draw trees upside down is due to the way we write, starting at the top of the page. I also think it’s due to gravity and ergonomics: it’s easier to draw a downstroke than an upstroke. I digress...

Like a tree, the relationship between nodes is _familial_: if a node is connected to a node above it, that node is its parent and it is the child. Any node can be a parent, but if a node does not connect to any children, then it is considered a _terminal_, or _leaf_, node. Why? Because at the end of a branch is a leaf. What are siblings? Child nodes that share a parent. 

The connection between nodes is an _edge_ and the sequence of edges that connects two nodes is a _path_. 

You use trees everyday: the file system on your computer is a tree. Folders nested in folders. That’s why it’s called the ‘root’ directory. 


### What is a Forest? 

According to Knuth, a forest is: 

> ...a set of zero or more disjoint trees. Another way to phrase part [2] of the definition of a tree would be to say that _the nodes of a tree excluding the root form a forest_. 


### What is a Binary Tree? 

A binary tree is a type of tree where parent nodes are restricted to no more than two child nodes. Knuth defines binary trees as:

> a finite set of nodes that either is empty, or consists of a root and the elements of two disjoint binary trees called the left and right subtrees of the root. 

📝 Binary trees are logarithmic. 


## What Problem(s) Do Trees Solve? 

* Binary trees are chosen over other more primary data structures because you can search a binary tree very quickly (as opposed to a linked list, for example) and you can quickly insert and delete data from a binary tree (as opposed to an array).


## How to Implement a Binary Search Tree Data Structure in JavaScript 

Let’s implement a Binary Search Tree (BST) in JavaScript. What do we know about binary trees? Each node, or parent, is limited to two child nodes. We need nomenclature to distinguish between these two nodes. 

🤔 

How about _left_ and _right_? 

These are the agreed upon terms in the industry. Following the convention of a left-to-right writing system (LTR), we want to store lower values in left nodes and higher values in right nodes. In other words, for each _parent_ node:

* the left child must be of equal or lesser value

* the right child must be of equal or greater value

Let’s rough this out in JavaScript. 

```js
const left = {
 data: "Yes I do!"
};
 
const right = {
 data: "The left doesn’t know what the right node is doing."
};

```

Two nodes does not a tree make. Let’s destructure one!
```js
const bst = {
 data: ‘I am root!',
 left,
 right
};

```

Still not a _tree_, per se. Let’s make it self-contained so that our nodes are declared within the tree. 
```js
const bst = {
 data: “I am root!”,
 left: {
   data: "I'm the left node!"
 },
 right: {
   data: "I'm the right node!"
 }
};
```

Not much of a tree with two leaves. Let’s add some branches: 
```js
const bst = {
   data: “I’m the root!”,
   left: {
     data: "I'm the left node!",
     left: {
       data: "I'm the left left child!",
       left: null,
       right: null,
     },
     right: {
       data: "I'm the left right child!",
       left: null,
       right: null
     }
   },
   right: {
     data: "I'm the right node!"
     left: {
       data: "I'm the right left child!",
       left: null,
       right: null,
     },
     right: {
       data: "I'm the right right child!",
       left: null,
       right: null
     }
   }
};

```

This is our goal. How do we get there? 

🤔

What's the pattern? 

Nested objects. How do we create objects? 

Let’s write a class to create nodes in our tree, following the structure outlined above:
```js
class Node {
 constructor(data, left, right) {
   this.data = data;
   this.left = left || null;
   this.right = right || null;
 }
}
```

If we create a new node and log it, the output will be: 

```sh
Node { data: “I’m a node!”, left: null, right: null }
```

📝 We _short circuit_ the assignment of `this.left` and `this.right`. This allows us the option of building in a specific insertion point.

Now we need to create a tree class. For the time being, all we need is a `root` property. There are many ways to implement a tree data structure. We _could_ require a `data` property on declaration of a new `Tree`, but for the sake of simplicity, we will later create an all-purpose `insert` method that handles that for us. 

```js
class Tree {
 constructor() {
   this.root = null;
 }
}
```

If we create a new tree and log it (no pun intended)...
```js
const tree = new Tree();
console.log(tree);
```

...the output will be: 
```sh
Tree { root: null }

```

It’s more like a stump than a tree. What’s next? We need to insert Nodes. 

```js
insert(data) {
   const node = new Node(data, null, null);
}
```

We declare an `insert` method with a `data` parameter and within it, we initialize a new Node. We need to store that Node somewhere… When we initialized our Tree above, we only created an object with a `root` property. This being our first Node, let’s assign it as the value of `root` in our `tree`. 

```js
 insert(data) {
   const node = new Node(data, null, null);
  
   if (this.root == null) {
     this.root = node;
   }
}
```

Now let's create a tree and insert a Node. 

```js
const tree = new Tree();
tree.insert(64);
```

Logging our `tree` (the puns are too easy!), will return: 
```sh
Tree { root: Node { data: 64, left: null, right: null } }
```

Now the fun part. We need the ability to insert data into the left and right branches of any given node. Recall that in binary trees, we store values from left to right, lowest to highest. 

We first need to pause and ask ourselves, “If I were a tree, what type of tree would I be, and why?” 

Kidding.

The question is, “How do we build a tree?”

According to the rules outlined above, 

* the left child must be of equal or lesser value to the parent

* the right child must be of equal or greater value to the parent

Let’s translate that into JavaScript:

```js
   if (data <= this.root.data) {
     this.root.left = node;
   }
 
   if (data >= this.root.data) {
     this.root.right = node;
   }
```

This works for a very short tree. 
```js
const tree = new Tree();
tree.insert(64);
tree.insert(127);
tree.insert(0);
 
```

The above method invocations return the following:
```sh
Tree {
  root: Node {
    data: 64,
    left: Node { data: 0, left: null, right: null },
    right: Node { data: 127, left: null, right: null }
  }
}
```

But, there’s an issue. What happens when we make multiple non-sequential calls?
```js
const tree = new Tree();
tree.insert(64);
tree.insert(127);
tree.insert(0);
tree.insert(32);
tree.insert(256);
```

What happened to `127` and `0`? 
```sh
Tree {
  root: Node {
    data: 64,
    left: Node { data: 32, left: null, right: null },
    right: Node { data: 256, left: null, right: null }
  }
}
```

We need some checks and balances, or, conditions…

If the `left` and `right` nodes are not `null`, we need to store our data deeper in the tree.

There are two approaches we can take: 1) iterative; 2) recursive. We'll use iterative as it is easier to see what is happening.

Let's use a `while` loop for our iteration. Why? Because we want the loop to run _until_ we find a terminal node that is `null` and then we will assign it a value. Our final `insert()` method looks like the following: 


```js
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
```

## Big O & Tree Data Structures

The access, search, insertion, and deletion methods of a binary search tree are all O(n) due to the use of iteration. Average case, though, is O(log n) because we are continually dividing our operations as we execute a method. 


## Learn JavaScript Data Structure

In this tutorial you learned how to implement a tree data structure with an `insert()` method in JavaScript. We're not done, though. In the next tutorial we'll implement our other methods. 