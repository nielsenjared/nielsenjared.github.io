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

Let's expand our array 
```md
[10, 1, 9]
```

TODO EXPLAIN ITERATION
TODO

```
FOR EACH element in an unsorted array
    SELECT the first element
    IF the next element is less than the first element
        SWAP their positions
```

Let's run through this:

On the first iteration, we select the first element, 10, and compare it to the next element, 1, which is less than 10, so we swap their positions. Our array now looks like this:

```md
[1, 10, 9]
```

But! On the next iteration, what happens? We again select the first element, `1`, and compare it to the next element, which is now `9`. `9` is greater than `1`, so we leave it where it is. 

What's the solution? 

We need a means of tracking and updating the "known minimum value". 

In this scenario, `1` is our first "known minimum value", but we can see that `9` is less than `10`, so we need to compare the "known minimum value" to the next value in each iteration and update accordingly. Let's refer to the "known minimum value" as `MIN`. 

```md
FOR EACH element in an unsorted array
    SELECT MIN OR the first element
    IF the next element is less than MIN
        UPDATE MIN with the next element
    SWAP the current element with MIN
```

Let's iterate over our three-piece array again:
```md
[10, 1, 9]
```

On the first iteration, we SELECT `10` because it's the first element, and at this point MIN. If the next element, `1`, is less than MIN, we UPDATE MIN with that value. So MIN is now equal to `1`. Now we need to swap the current element, containing the value `10`, with MIN. After the first iteration, our array looks like this: 

```md
[1, 10, 9]
```

On the next iteration, we select the current element, which is now `10`. We compare the value stored in the next element, `9`, to MIN and see that 
TODO


...so we swap their positions. Our array now looks like this: 
```md
[1, 9, 10]
```

So far so good. Let's add another value to our array: 


```md
[10, 1, 9, 2]
```

Let's fast forward to the fourth iteration, where we compare...

TODO

Our array looks like this
```md
[1, 9, 2, 10]
```

What's going on? What's wrong with our logic? 

We are only comparing 
TODO

What's the solution? 

Nested iteration. 

TODO 

```md
FOR EACH element in an unsorted array
    SELECT MIN OR the first element
    FOR EACH of the next elements in the array
        IF the next element is less than MIN
        UPDATE MIN with the next element
    SWAP the current element with MIN
```

TODO 


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



