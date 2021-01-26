---
title: "Data Structures in JavaScript: Shortest-Path Graph Traversal"  
date: '2021-01-22'
description: Learning data structures will help you understand how software works and improve your problem-solving skills. In this tutorial, you will learn the shortest-path graph traversal algorithm in JavaScript. 
keyword: ['javascript', 'graph', 'shortest-path', 'data structure']
---


![](./jarednielsen-data-structure-graph-bfs.png)


At some point in your career (today?!) you will want to learn data structures. It's not _just_ to ace the technical interview and land your dream job. Learning data structures will help you understand how software works and improve your problem-solving skills.  In this tutorial, you will learn the breadth-first search (BFS) algorithm with graph data structures in JavaScript. If you're just joining us, you may want to start with [Learn JavaScript Graph Data Structure](https://jarednielsen.com/data-structure-graph-javascript/).
 


## Retrieval Practice

* What is Breadth-First Search? 

* What is the difference between Breadth-First Search and Depth-First Search? 

* What problem(s) does Breadth-First Search solve?


### What is Breadth-First Search? 

Breadth-First Search is an algorithm that searches a graph for a specific goal by checking all of the edges connected to a vertex before moving on to check the edges of the connected vertices. 


### What is the Difference Between Breadth-First Search and Depth-First Search? 

Breadth-First Search checks all of the vertices adjacent to a given vertex before checking the vertices adjacent to those vertices. Depth-First Search, on the other hand, checks all of the vertices on a path and then backtracks.


### What Problem(s) Does Breadth-First Search Solve? 

There are a number of specific use cases, such as the Ford-Fulkerson or Cheney's algorithm, for breadth-first search algorithms, but a general application is to find the shortest, or most efficient, path between two vertices.


## Let's Get Meta
 
* TODO


## TODO 

...
 

### Shortest-Path Graph Traversal in JavaScript

Let's declare our Graph data structure. 
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

    bfs(goal, root = this.vertices[0]) {
        let adj = this.adjacent;

        const queue = [];
        queue.push(root);

        const discovered = [];
        discovered[root] = true;

        while(queue.length) {
            let v = queue.shift();
            console.log(v);

            if (v === goal) {
                return true;
            }

            for (let i = 0; i < adj[v].length; i++) {
                if (!discovered[adj[v][i]]) {
                    discovered[adj[v][i]] = true;
                    queue.push(adj[v][i]);
                }
            }
        }

        return false;
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

Now what? 

What do we need our `bfs` method to return if we want to know the shortest path between the `root` and the `goal`? 

:thinking-face:

The vertices and the number of edges that constitute the path. 

What data type (or structure) do we want to use to store these values? 

Arrays!






## Reflection

* TODO

* 

* 


### 


### 


### 