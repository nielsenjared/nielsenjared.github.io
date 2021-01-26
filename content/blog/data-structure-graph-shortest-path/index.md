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

It starts with 'a' and rhymes with 'ray'...

To our `bfs` method, let's add an `edges` array and initialize our `edges` array with key `root` assigned a value of `0`. Why? Because the distance from our `root` to itself _is_ 0, and we want to be sure we account for all edge cases (no pun intended).
```js
    bfs(goal, root = this.vertices[0]) {
        let adj = this.adjacent;

        const queue = [];
        queue.push(root);

        const discovered = [];
        discovered[root] = true;

        //add edges array and initialize it with root
        const edges = [];
        edges[root] = 0;

        while(queue.length) {
            let v = queue.shift();

            //return edges array if we find our goal
            if (v === goal) {
                return edges;
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
```

We also want to return our `edges` array if and when we find our `goal`. 

Verify that your method works by logging `g.bfs("A"));`.

Now what? 

Let's restate our goal:
> Given a graph, a root, and a goal, find the shortest path from the root to the goal. 

Let's look at our drawing.

![./jarednielsen-data-structure-graph-bfs-a-g.png]

If we want to find the shortest path between `A` and `E`, what do we need to do? 

We need to count the edges! 

If our `bfs` is returning our `edges` array, what does `edges` need to look like? 
```sh
[ A: 0, B: 1, C: 1, D: 1, E: 2, F: 2, G: 3]
```

Let's write pseudocode!

* If (while) there are vertices in the queue, check the first vertex. 

* If the first vertex is equal to our goal, return our edge counts.

* Otherwise, check the vertices adjacent to our vertex. 

* If the adjacent vertices are new to us (not discovered), label them "discovered". 

* Then add the newly discovered vertex to the queue to check later. 

* Then "count" the edges between our starting vertex and our newly discovered vertex. 

What do I mean by "count"? 

Where have we seen this or something like it before? 

What is a _very_ common pattern in iteration? 

Incrementation (if that's a word).

```js
count++
```

Or:
```js
count += 1
```

Let's think this through...

The first vertex we will iterate over is `A`. We know the value of `A` in `edges` is `0`. We know the distance between `A` and it's adjacent vertices, `B`, `C`, and `D`, is 1. We want to add `B`, `C`, and `D` to our `edges` array and assign them a value of 1. 

On the next iteration of our `while` loop, the value of `B` in `edges` will be `1`, but the adjacent vertices will be labeled "discovered", so we will skip them and move on to `C`, where the value stored in `edges` is also `1`. This time, however, `E` is not "discovered", so we now label it "discovered", push it to the `queue` and add it to our `edges` array. 

But! It's two edges away from our `root`? How do we get that value? 

From `C`! 

AKA `edges[v]`.

We simply add 1 to the value associated with our current vertex. 
```js
            for (let i = 0; i < adj[v].length; i++) {
                if (!discovered[adj[v][i]]) {
                    discovered[adj[v][i]] = true;
                    queue.push(adj[v][i]);
                    edges[adj[v][i]] = edges[v] + 1;
                    console.log(edges);
                }
            }
```














## Reflection

* TODO

* 

* 


### 


### 


### 