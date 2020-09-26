---
title: 'JavaScript Tree Data Structure Traversal'
date: '2020-09-25'
description: 'Learning data structures will help you understand how software works and improve your problem-solving skills. In this tutorial, you will implement traversal of a tree data structure in JavaScript.'
keywords: ['javascript', 'tree', 'data structure', 'traversal']
---

![]()

At some point in your career (today?!) you will want to learn data structures. It’s not just to ace the technical interview and land your dream job. Learning data structures will help you understand how software works and improve your problem-solving skills. In this tutorial, you will implement the tree data structure in JavaScript. 


## Tree

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


## Traversal

@TODO https://en.wikipedia.org/wiki/Tree_traversal#Depth-first_search_of_binary_tree

There are three standard functions for traversing a tree: 

* inorder

* preorder

* postorder

### Inorder 

@TODO returns the values of nodes in ascending order


### Preorder

@TODO returns the values of nodes beginning with the root and proceeding down the left branch of each subtree, then the followed by the right branch of each subtree


### Postorder

@TODO Is the inverse of preorder. Returns the values of nodes beginning with the child nodes of the left subtree, then the right branch of each subtree, ending with the root. 


Let's start with inorder

## Traversing InOrder

@TODO 

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

The solution is dynamic!

@TODO Soemthing about an array so we can pass it down through each recursive call and catch the value in that node

@TODO URL TO DP POST

Finally, we return `memo`. 

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

## Traversing PreOrder

```js
  traversePreOrder(node, memo = []) {
        if (node !== null) {
            memo.push(node.data);
            this.traverseInOrder(node.left, memo);
            this.traverseInOrder(node.right, memo);
        }
        return memo;
    }




## Traversing PostOrder

    traversePostOrder(node, memo = []) {
        if (node !== null) {
            this.traverseInOrder(node.left, memo);
            this.traverseInOrder(node.right, memo);
            memo.push(node.data);
        }
        return memo;
    }


