---
title: "Learn Insertions Sort Algorithm in JavaScript"
date: "2021-TO-DO"
description: "TODO"
keywords: ['algorithm', 'insertion sort', 'javascript']
---


![ {{ TODO ALT TEXT }} ](./jarednielsen-algorithm-javascript-insertion-sort.png)


TODO INTRODUCTION

---

Ready to level up? Grab your copies of [The Little Book of Big O](https://gum.co/big-o) and [The Seven Data Structures of Highly Effective Developers](https://gum.co/data-structures).

---


## Retrieval Practice

* TODO

* TODO

* TODO 


### TODO BULLET #1

TODO 


### TODO BULLET #2

TODO


### TODO BULLET #3

TODO


## Let's Get Meta

* What Problem(s) Does Insertion Sort Solve? 

* Why is it called 'Insertion Sort'? 

* 


## How to Implement Insertion Sort Algorithm in JavaScript 

TODO

```js
const unsorted = [10, 1, 9, 2, 8, 3, 7, 4, 6, 5];

const insertionSort = (arr) => {

    for (let i = 1; i < arr.length; i++) {
        let temp = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > temp) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = temp;
    }
    return arr;
};

let sorted = insertionSort(unsorted);
```

TODO


## Big O & Insertion Sort Algorithm

TODO 


## Reflection

* What Problem(s) Does Insertion Solve? 

* 

* 


### What Problem(s) Does Insertion Sort Solve?

TODO 


### TODO BULLET #2

TODO


### TODO BULLET #3

TODO


## Learn Insertion Sort Algorithm in JavaScript

TODO RECAP FOR SEO