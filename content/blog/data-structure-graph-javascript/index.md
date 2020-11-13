---
title: Learn JavaScript Graph Data Structure
date: '2020-05-01'
description: Learning data structures will help you understand how software works and improve your problem-solving skills. In this tutorial, you will learn the graph data structure in JavaScript. 
keyword: ['javascript', 'graph', 'graphs', 'data structure', 'data structures']
---


![](./jarednielsen-javascript-graph-data-structure.png)


At some point in your career (today?!) you will want to learn data structures. It's not _just_ to ace the technical interview and land your dream job. Learning data structures will help you understand how software works and improve your problem-solving skills.  In this tutorial, you will learn the graph data structure in JavaScript. 


## What is a Graph? 

According to [Wikipedia](https://en.wikipedia.org/wiki/Graph_(discrete_mathematics)), a graph is:

> a structure amounting to a set of objects in which some pairs of the objects are in some sense "related". 

A graph consists of a set of nodes, or _vertices_, connected by _edges_.  An edge consists of a pair of vertices. For example, if we establish a pair between two vertices, `A` and `B`, we refer t0 this related pairing as an edge. Because they are connected by an edge, `A` and `B` are _adjacent_. 

The classic analogy for graphs is a map. 
@TODO

Another standard analogy for graphs is a social network. 


### Degrees

The number of adjacent vertices. 




Weight? 





### Two Types of Graph

* directed, or digraph

A graph with ordered pairs is a directed graph, or digraph. In a graphical (no pun intended) representation, the direction of the edge is drawn with an arrow indicated the direction. 


* undirected, or just graph



### Paths, Loops & Cycles

A _path_ in a graph is a sequence of edges. If vertices `A` and `B` are connected, and `B` and `C` are connected, then we establish a path from `A` to `C`. The length of this path is two as there are two edges connecting `A`, `B`, and `C`. 

A _loop_ in a graph occurs when the path of a vertex connects to itself. 

A _cycle_ is a path that reconnects to the starting vertex. Using our example above, if we create and edge between `C` and `A`, then the path from `A` to `B` to `C` to `A` is a cycle. 

A _strongly connected_ graph occurs when every vertex is connected to every other vertex. Two or more vertices are considered strongly connected when they are connected by paths. 


## What Problem(s) Does a Graph Solve?

* Optimization: We can use the graph data structure in conjunction with an optimization algorithm for determining an optimal path, such as GPS

* Network topology: We can use the graph data structure when modeling network topology, such as the internet or your friends on Facebook!


## How to Implement a Graph Data Structure in JavaScript

Like a social network, what is important is the relationship between nodes and not necessarily the nodes themselves. 

Yes, a tree data structure is a series of nodes in relationship to one another. Graphs differ from trees in that trees always follow the same structure. The relationships between nodes are predetermined: a root with two children. We don't know what the structure of our graph will look like in advance, so when we implement a graph class, tracking the relationship between vertices is more important than the vertices themselves. 

Let's start with a small and simple data set of four vertices: `A`, `B`, `C`, `D` & `E`. Let's say that there are edges between the following vertices: 

```
A → B
A → C
A → D
B → C
B → D
C → D
D → E
```

We could sketch that out like so...

@TODO insert drawing

What is another way we can represent the relationships between data? 

In a table! 🏓

| X | A | B | C | D | E |
|--:|--:|--:|--:|--:|---|
| A | 0 | 1 | 1 | 1 | 0 |
| B | 1 | 0 | 1 | 1 | 0 |
| C | 0 | 1 | 0 | 1 | 0 |
| D | 1 | 1 | 1 | 0 | 1 |
| E | 0 | 0 | 0 | 1 | 0 |

This is called an _adjacency matrix_ as it represents which vertices are adjacent to one another. When we inspect row `D`, we see that there are edges between `D` and `A`, `B`, `C` and `E`. 

How would we represent this in JavaScript? 

Nested arrays! 🪆🐣

```js
[
    [`B`, `C`, `D`],
    [`A`, `C`, `D`],
    [`B`, `D`],
    [`A`, `B`, `C`, `E`],
    [`D`]
]
```

But there's a shortcoming to this approach. How do we track the vertices that correspond to the array indexes? 

We need a way to _look up_ our edges...

🤔

```js
{
    A: [`B`, `C`, `D`],
    B: [`A`, `C`, `D`],
    C: [`B`, `D`],
    D: [`A`, `B`, `C`, `E`],
    E: [`D`]
}
```

This is what we want our graph to return. Now let's write a class to do just that.

```js
class Graph {
    constructor() {
        this.adjacent = {};
    }
}
```

If we declare a new graph, `g`...
```js
const g = new Graph();
```

...and log it...


```sh
Graph { adjacent: {} }
```

We now need methods for adding vertices and edges. We can't declare edges without vertices, so let's start with that: 
```js
class Graph {
    constructor() {
        this.adjacent = {};
    }

    addVertex(v) {
        this.adjacent[v] = [];
    }
}
```

@TODO explain this

If we use our `addVertex` method to add the vertices from our adjacency matrix above...
```js
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
```

...logging our graph will return the following: 
```sh
Graph { adjacent: { A: [], B: [], C: [], D: [], E: [] } }
```

Now we need to determine our edges.
```js
class Graph {
    constructor() {
        this.adjacent = {};
    }

    addVertex(v) {
        this.adjacent[v] = [];
    }

    addEdge(v, w) {
        this.adjacent[v].push(w);
        this.adjacent[w].push(v);
    }
}
```

@TODO explain

If we use our `addEdge` method to add the edges from our adjacency matrix above...
```js
g.addEdge("A","B");
g.addEdge("A","C");
g.addEdge("A","D");
g.addEdge("B","C");
g.addEdge("B","D");
g.addEdge("C","D");
g.addEdge("D","E");
```

...logging our graph will return the following: 
```sh
Graph {
  adjacent: {
    A: [ 'B', 'C', 'D' ],
    B: [ 'A', 'C', 'D' ],
    C: [ 'A', 'B', 'D' ],
    D: [ 'A', 'B', 'C', 'E' ],
    E: [ 'D' ]
  }
}
```



@TODO 

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

const g = new Graph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");

g.addEdge("A","B");
```

If we log our graph, `g`, we see that `A` and `B` reference each other, establishing our first edge. 

```sh
Graph {
  vertices: [ 'A', 'B', 'C' ],
  adjacent: { A: [ 'B' ], B: [ 'A' ], C: [] }
  edges: 1,
}
```

## Big O & Graph Data Structures

@TODO 

## Data Structures in JavaScript: Graph

In this tutorial you learned how to implement a graph data structure in JavaScript. 







