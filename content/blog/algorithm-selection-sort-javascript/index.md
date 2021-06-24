---
title: "Learn How to Code the Selection Sort Algorithm in JavaScript"
date: "2021-TO-DO"
description: "TODO"
keywords: ['algorithm', 'selection sort', 'javascript']
---


![ selection sort ](./jarednielsen-algorithm-selection-sort.png)


If you want to learn how to code, you need to learn algorithms. Learning algorithms improves your problem solving skills by revealing design patterns in programming. In this tutorial, you will learn how to code the bubble sort algorithm in JavaScript. 

---

![A is for Algorithms](./../../assets/graphics/algorithms/jarednielsen-algorithms-banner.png)
Give yourself an A. Grab your copy of [A is for Algorithms](https://gum.co/algorithms)

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

* 

* What Problem(s) Does Selection Sort Solve? 

* What is the Big O of Selection Sort?


## How to Code the {{ TODO TITLE }} Algorithm in JavaScript 

[Programming is problem solving](https://jarednielsen.com/programming-problem-solving/). There are four steps we need to take to solve any programming problem: 

1. Understand the problem

2. Make a plan

3. Execute the plan

4. Evaluate the plan


### Understand the Problem

To understand our problem, we first need to define it. Let’s reframe the problem as acceptance criteria:

> GIVEN an array of integers
> WHEN we find the lowest unsorted value
> THEN we move that value to its proper ordinal position

That’s our general outline. We know the following: 

* our input conditions (an unsorted array)

* our output requirements (a sorted array)

* our goal is to organize the elements in the array in ascending, or non-descending, order, starting with the smallest elements first

Let’s make a plan!

### Make a Plan

Let’s revisit our computational thinking heuristics as they will aid and guide is in making a plan. They are: 

* Decomposition

* Pattern recognition

* Abstraction

* Algorithm

TODO

```md
[10, 1, 9, 2, 8, 3, 7, 4, 6, 5]
```

#### Decomposition 🧟

What's the first problem we need to solve? 

Finding the smallest value in our array. 

iteration

```md
FOR TODO in 
```


If the first element in our array is 

Let's begin with the smallest problem we can solve: 
```md
[10, 1]
```

TODO 
```
SELECT the first element
SELECT the next element
IF the next element is less than the first element
SWAP their positions
```




### Execute the Plan

```js
const selectionSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let min = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        
        let tmp = arr[i];
        arr[i] = arr[min];
        arr[min] = tmp;
    }
    return arr;
};
```



### Evaluate the Plan

TODO do we need to go the end of the array? 


## Reflection

* Why is it called Selection Sort? 

* What Problem(s) Does Selection Sort Solve? 

* What is the Big O of Selection Sort?


### Why Is It Called Selection Sort? 

For each iteration of our algorithm, we _select_ an element from our array and compare it 
TODO

### What Problem(s) Does Selection Sort Solve?

TODO 


### What is the Big O of Selection Sort? 

TODO


## How to Code the Selection Sort Algorithm in JavaScript

TODO RECAP FOR SEO



