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

Unlike a binary tree, we don't have a root or a predetermined structure of branches. What _do_ we have? 

* vertices

* edges 

What do we know about these things? 

* vertices are connected to each other with edges

* vertices can be connected to more than one (or two) other vertices

If we can't start at a root, where do we begin? 

Anywhere! 

We just pick a vertex and start searching. 

Let's draw a graph so we can visualize this: 

TODO GRAPH DRAWING 

Let's choose vertex TODO1 as our starting point. 

As we can see it is connected to vertices TODO & TODO. Now we need to make a decision. 

Do we first search the two vertices connected to TODO1? Or do we choose one of the two vertices connected to TODO1 and search the vertices connected to it? 

:thinking-face:

This is the difference between BFS and DFS. 

With BFS, we search all of the edges connected to a vertex before moving on to search the edges of another vertex. 

With DFS, we follow the paths of the edges connected to our starting vertex, one at a time, until we reach the end, then we backtrack and search the alternate paths, until we find the vertex we are looking for or we arrive back where we started. 




 

### Breadth-First Search in JavaScript

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
TODO
```

To our Graph class, let's add a `bfs` method:
```js
    bfs(v) {
    }
```






##