---
title: "Data Structures in JavaScript: Topological Sort Depth-First Search Graph Traversal "  
date: '2021-02-05'
description: Learning data structures will help you understand how software works and improve your problem-solving skills. In this tutorial, you will learn depth-first search graph traversal in JavaScript. 
keyword: ['javascript', 'graph', 'depth-first search', 'data structure', 'dfs']
---


![](./jarednielsen-data-structure-graph-bfs.png)


At some point in your career (today?!) you will want to learn data structures. It's not _just_ to ace the technical interview and land your dream job. Learning data structures will help you understand how software works and improve your problem-solving skills.  In this tutorial, you will learn topological sort using a depth-first search graph traversal in JavaScript. 

If you're just joining us, you may want to start with [Learn JavaScript Graph Data Structure](https://jarednielsen.com/data-structure-graph-javascript/).
 


## Retrieval Practice

Retrieval practice is the surest way to solidify any new learning. Attempt to answer the following questions before proceeding:

TODO
* What is a Graph?

* What problem(s) does a Graph solve? 

* What is Depth-First Search? 

### What is a Graph? 

A graph consists of a set of nodes, or _vertices_, connected by _edges_.  An edge consists of a pair of vertices. For example, if we establish a pair between two vertices, `A` and `B`, we refer t0 this related pairing as an edge. Because they are connected by an edge, `A` and `B` are _adjacent_.


### What Problem(s) Does a Graph Solve?

* Optimization: We can use the graph data structure in conjunction with an optimization algorithm for determining an optimal path, such as GPS

* Network topology: We can use the graph data structure when modeling network topology, such as the internet or your friends on Facebook!

### What is Depth-First Search?

TODO 


## Let's Get Meta
 
* What is topology? 

* What is a directed acylclic graph? 

* TODO SOMETHING ABOUT PATTERNS


### What is Topology? 

TODO


### What is a Directed Acylcic Graph? 

According to [Wikipedia](https://en.wikipedia.org/wiki/Directed_acyclic_graph), a directed acyclic graph is a graph that...  

> consists of vertices and edges, with each edge directed from one vertex to another, such that following those directions will never form a closed loop

Let's reverse engineer this term.

We're familiar with the term 'graph'. In computer science a graph is: 

> TODO

So what does _acyclic_ mean? 

What is a cycle? 

> a series of events that are regularly repeated in the same order.

So if something is _cyclic_, it is "occurring in cycles; regularly repeated."

And if something is _acyclic_, it's the opposite of that, meaning 

Let's put this together: what is a directed acylcic graph, or DAG? It's a graph that...


### TODO SOMETHING ABOUT PATTERNS

TODO



## Topological Sort using Depth-First Search (DFS) in JavaScript

Let's review our Graph class: 
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

        const edges = [];
        edges[root] = 0;

        const predecessors = [];
        predecessors[root] = null;

        const buildPath = (goal, root, predecessors) => {
            const stack = [];
            stack.push(goal);

            let u = predecessors[goal];

            while(u != root) {
                stack.push(u);
                u = predecessors[u];
            }

            stack.push(root);

            let path = stack.reverse().join('-');

            return path;
        }
    

        while(queue.length) {
            let v = queue.shift();

            if (v === goal) {
                return { 
                    distance: edges[goal],
                    path: buildPath(goal, root, predecessors)
                };
            }

            for (let i = 0; i < adj[v].length; i++) {
                if (!discovered[adj[v][i]]) {
                    discovered[adj[v][i]] = true;
                    queue.push(adj[v][i]);
                    edges[adj[v][i]] = edges[v] + 1;
                    predecessors[adj[v][i]] = v;
                }
            }
        }

        return false;
    }

    dfs(goal, v = this.vertices[0], discovered = []) {
        let adj = this.adjacent;

        discovered[v] = true;

        for (let i = 0; i < adj[v].length; i++){
            let w = adj[v][i];

            if (!discovered[w]) {
                this.dfs(goal, w, discovered);
            }
        }

        return discovered[goal] || false;
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


What is the goal of topological sort? 


```
L ← Empty list that will contain the sorted nodes
while exists nodes without a permanent mark do
    select an unmarked node n
    visit(n)

function visit(node n)
    if n has a permanent mark then
        return
    if n has a temporary mark then
        stop   (not a DAG)

    mark n with a temporary mark

    for each node m with an edge from n to m do
        visit(m)

    remove temporary mark from n
    mark n with a permanent mark
    add n to head of L
```






TODO
```js
    topoSort(v = this.vertices[0], discovered = [], s) {
        const stack = s || [];

        let adj = this.adjacent;

        discovered[v] = true;

        for (let i = 0; i < adj[v].length; i++){
            let w = adj[v][i];

            if (!discovered[w]) {
                this.topoSort(w, discovered, stack);
            }
        }

        stack.unshift(v);
        return stack || false;
    }
```

That's it! 

Topological sort with DFS. 

## Reflection




### 



### 



### 

