---
title: Data Structure JavaScript Graph Breadth  
date: '2020-11-13'
description: Learning data structures will help you understand how software works and improve your problem-solving skills. In this tutorial, you will learn the graph data structure in JavaScript. 
keyword: ['javascript', 'graph', 'graphs', 'data structure', 'data structures']
---

```
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