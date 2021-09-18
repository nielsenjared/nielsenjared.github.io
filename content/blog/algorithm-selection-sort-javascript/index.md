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


## How to Code the Selction Sort Algorithm in JavaScript 

[Programming is problem solving](https://jarednielsen.com/programming-problem-solving/). There are four steps we need to take to solve any programming problem: 

1. Understand the problem

2. Make a plan

3. Execute the plan

4. Evaluate the plan


### Understand the Problem

To understand our problem, we first need to define it. 

TODO 
We use selection sort to build an array from left to right, by repeatedly "selecting" the minimum values in an unsorted array and placing them in their proper ordinal position. 

Let’s reframe the problem as acceptance criteria:

> GIVEN an unsorted array of integers
> WHEN we find the lowest unsorted value
> THEN we move that value to its proper ordinal position and repeat until all values are in sequence

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

* Design

TODO

```md
[10, 1, 9, 2, 8, 3, 7, 4, 6, 5]
```

#### Decomposition

Let's begin with the smallest problem we can solve: 
```md
[10, 1]
```

TODO Let's pseudocode a solution to this very small problem: 
```
SELECT the first element
IF the next element is less than the first element
    SWAP their positions
```

Recall that our goal is to _select_ the smallest element, wherever it may be in the array, and TODO 

TODO EXPLAIN ITERATION


Let's expand our array 
```md
[10, 1, 9]
```

TODO

```
FOR EACH element in an unsorted array
    SELECT the current element
    IF the next element is less than the current element
        SWAP their positions
```

Let's run through this:

On the first iteration, we select the first element, 10, and compare it to the next element, 1, which is less than 10, so we swap their positions. Our array now looks like this:

```md
[1, 10, 9]
```

On the next iteration, we select the current element, 10, and compare it to the next element, 9, which is less than 10, so we swap their positions. Our array now looks like this: 
```md
[1, 9, 10]
```

So far so good. Let's look at our full array: 


```md
[10, 1, 9, 2, 8, 3, 7, 4, 6, 5]
```


greater than 1, so we don't swap their positions. Our array now looks like this:
```md
[1, 10, 9]
```

🤔

Wait! If we are looping over each element in our array, we don't want to select the "first" element with each iteration. 




TODO 

```
FOR EACH element in an unsorted array
    SELECT the current element
    IF the next element is less than the current element
        SWAP their positions
```

TODO 
On our first iteration, _current_ is 10. We compare it to the next element, which is 1, so we swap them.
```md
[1, 10]
```

On the next iteraiton, _current_ is again 10! There's nothing next to compare, so we leave it where it is. (Let's make note of this so we can optimize our algorithm later, but for now let's focus on the basic structure.)


```





```md
[10, 1, 9, 2]
```

```
[1, 10, 9 , 2]
```

```
[1, 9, 10, 2]
```

```
[1, 9, 2, 10]
```

Uh oh! 

That's not sorted! 

TODO HOW DO WE GET TO NESTED ITERATION?


"known minimum value"


```md
FOR EACH element in an unsorted array
    SELECT the element with the "known minimum value"
    FOR EACH 
        IF the next element is less than the element with the "known minimum value"
            UPDATE the "known minimum value" 
        SWAP the positions of the current element with the "known minimum value" 
```


The crux of selection sort is the `min` value. What is the best way to teach this? Start with `min`? Or reveal the blocks that lead us to `min`?




### Execute the Plan

Let's translate our pseudocode to JavaScript: 

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



