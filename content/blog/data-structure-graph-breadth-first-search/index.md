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

* vertices can be connected to more than one (or two) other vertices

Let's draw a simple graph so we can visualize this: 

TODO GRAPH DRAWING 

If we can't start at a root, where do we begin? 

Anywhere! 

We just pick a vertex and start searching. 

For the sake of simplicity, let's choose vertex `A` as our starting point. 

As we can see it is connected to vertices `B`, `C`, and `D`. Now we need to make a decision. 

Do we first search the vertices connected to `A`? Or do we choose one of the vertices connected to `A` and then search the vertices connected to it? 

:thinking-face:

This is the difference between BFS and DFS. 

With BFS, we search all of the edges connected to a vertex before moving on to search the edges of the connected vertices. 

With DFS, we follow the paths of the edges connected to our starting vertex, or _search key_, one at a time, until we reach the end, then we backtrack and search the alternate paths, until we find the vertex we are looking for or we arrive back where we started. 

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

g.addEdge("A","B");
g.addEdge("A","C");
g.addEdge("A","D");
g.addEdge("B","C");
g.addEdge("B","D");
g.addEdge("C","D");
g.addEdge("D","E");
```

To our Graph class, let's add a `bfs` method:
```js
    bfs(v) {
        return v;
    }
```

Let's verify that our `bfs()` method works by logging the return value with an argument of `E`:
```js
console.log(g.bfs("E"));
```

Now what? 

Let's outline an approach in pseudocode: 

* Look at the vertices adjacent to our key. 

* If an adjacent value is equal to our query, return "Found it!"

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

* If none of the adjacent vertices are equal to our query, jump back to the first adjacent vertex and check its adjacent vertices.

Here's the point where we need to make a jump. 

We need to 

If we jump

















##