---
title: Data Structure JavaScript Graph Breadth  
date: '2020-11-13'
description: Learning data structures will help you understand how software works and improve your problem-solving skills. In this tutorial, you will learn the graph data structure in JavaScript. 
keyword: ['javascript', 'graph', 'graphs', 'data structure', 'data structures']
---



## 

Two algorithms for graph traversal: 

* breadth-first search (BFS) and

* depth-first search (DFS)


## TODO STRATEGY

How do we search a graph? 

Unlike a binary tree, we don't necessarily have a root and we definitely don't have a predetermined structure of branches. What _do_ we have? 

* vertices

* edges 

What do we know about these things? 

* vertices are connected to each other with edges

* vertices can be connected to any number of adjacent vertices (including zero!)

Let's draw a simple graph so we can visualize this: 

TODO GRAPH DRAWING 

If we can't start at a root, where do we begin? 

Anywhere! 

We just pick a vertex and start searching. 

For the sake of simplicity, let's choose vertex `A` as our starting point, or `root`, and `E` as our `goal`.
TODO

As we can see, `A` is connected to vertices `B`, `C`, and `D`. 

Now we need to make a decision. 

Do we first search the vertices connected to `A`? Or do we choose _one_ of the vertices connected to `A` and then search the vertices connected to it? 

:thinking-face:

This is the difference between BFS and DFS. 

With Breadth-First Search, we search all of the edges connected to a vertex before moving on to search the edges of the connected vertices. 

With Depth-First Search, we follow the paths of the edges connected to our starting vertex, or _search key_, one at a time, until we reach the end, then we backtrack and search the alternate paths, until we find the vertex we are looking for or we arrive back where we started. 

TODO THIS IS SIMILAR TO BINARY SEARCH TREE




 

### Breadth-First Search (BFS) in JavaScript

Let's declare our Graph data structure. If you're just joining us, you may want to start with TODO.

```js
class Graph {
  constructor() {
      this.vertices = [];
      this.adjacent = {};
      this.edges = 0;
  }

  addVertex(v) {
      this.vertices.push(v);
      this.adjacent[v] = [];
  }

  addEdge(v, w) {
      this.adjacent[v].push(w);
      this.adjacent[w].push(v);
      this.edges++;
  }
}
```

Next, let's initialize a new Graph and add vertices and edges. 

```js
const g = new Graph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");
g.addVertex("G");



g.addEdge("A","B");
g.addEdge("A","C");
g.addEdge("A","D");
g.addEdge("B","C");
g.addEdge("B","D");
g.addEdge("C","D");
g.addEdge("C","E");
g.addEdge("D","F");
g.addEdge("F","G");
```

To our Graph class, let's add a `bfs` method. We need to declare two parameters, `goal` and `root`, and if `goal` and `root` are equal, we return `true`, else we return `false`:
```js
    bfs(goal, root) {
        if (root === goal) {
            return true;
        }

        return false;
    }
```

We can take our declaration one step further using JavaScript's [default parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters).
```js
    bfs(goal, root = this.vertices[0]) {
        if (root === goal) {
            return true;
        }

        return false;
    }
```

:memo: You will see many different implementations of BFS. Some do not specify a root while others do not specify a goal. The goal here (no pun intended) is to demonstrate an approach that covers the breadth (pun intended) of BFS variations. 

TODO UPDATE TO SEARCH FOR G
Let's verify that our `bfs()` method works by logging the return value with an argument of `G`:

```js
console.log(g.bfs("G", "G"));
```

The above will return `true`. 

And the following will return `false`: 
```js
console.log(g.bfs("G"));
```

This is great if our graph only consists of two vertices. 

Now what? 

Let's roughly outline an approach in pseudocode: 

* Look at the vertices adjacent to our root. 

* If an adjacent value is equal to our query, return `true`.

* Repeat until we find the query. 

```js
    bfs(v) {
        for (let i = 0; i < this.vertices.length; i++) {
            if (this.vertices[i] === v) {
                return "Found it!";
            }
        }
        return "Nope.";
    }
```

This will work if our query is `B`, `C`, or `D`. How do we get to `E`? How do we move down a level? 

Here's the point where we need to make a jump, literally.

* If none of the adjacent vertices are equal to our query, jump back to the first adjacent vertex and check its adjacent vertices.

But things are about to get messy! Why? 

If we jump back to where we started to "move down a level", how do we avoid checking vertices twice? 




Even thought we _discovered_ a vertex, we didn't yet fully explore it. 


We need a way to track which vertices we already visited. 

But!

We also need a way to track which vertices we need to visit. 


TODO ^^^


Here's our finished BFS method: 
```js
 bfs(query, root = this.vertices[0]) {
        const discovered = [];
        discovered[root] = true;

        const queue = [];
        queue.push(root);

        let adj = this.adjacent;

        while(queue.length) {
            let v = queue.shift();

            if (v == query) {
                return `Found it!`;
            }

            for (let i = 0; i < adj[v].length; i++) {
                if (!discovered[adj[v][i]]) {
                    discovered[adj[v][i]] = true;
                    queue.push(adj[v][i]);
                }
            }
        }
        return "Not found...";
    }
```

You're like, "BFD. 

"Why would we need this if we can simply _look up_ our query in the `adjacent` 'dictionary'?" 

I'm glad you asked. 


## Breadth-First Search & Shortest Path (in JavaScript)

For the sake of brevity and example, the method above is contrived. A "real-world" application of a breadth-first search algorithm would check for a value stored in a graph and return the unique identifier, or key, of the vertex where that value was found. Another "real-world" scenario is finding the shortest path between two vertices. Let's modify our method above to do just that! 

If we want to know the shortest path between two vertices, we need another way to store that data. We will want to capture the distance and the path taken.























##