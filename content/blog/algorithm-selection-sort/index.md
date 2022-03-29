---
title: "Learn How to Code the Selecction Sort Algorithm"
date: "2022-TODO-TODO"
description: "If you want to learn how to code, you need to learn algorithms. Learning algorithms improves your problem solving skills by revealing design patterns in programming. In this tutorial, you will learn how to code the selection sort algorithm in JavaScript and Python."
keywords: ['algorithm', 'selection sort', 'javascript', 'python']
---


![ TODO ](./jarednielsen-algorithm-TODO.png)


If you want to learn how to code, you need to learn algorithms. Learning algorithms improves your problem solving skills by revealing design patterns in programming. In this tutorial, you will learn how to code the selection sort algorithm in JavaScript _and_ Python.


---

![A is for Algorithms](./jarednielsen-algorithms.png)
Give yourself an A. Grab your copy of [A is for Algorithms](https://gum.co/algorithms)

---


## Retrieval Practice

Retrieval practice is the surest way to solidify any new learning. Attempt to answer the following questions before proceeding:

* TODO 

* TODO

* TODO 


### TODO #1

TODO


### TODO #2

TODO


### TODO #3

TODO


## Let's Get Meta

Ask yourself the following questions and keep them back of mind as you proceed:

* Why do I need to know this?

* Why is it called "Selection Sort"?

* TODO


## How to Code the Selection Sort Algorithm 

[Programming is problem solving](https://jarednielsen.com/programming-problem-solving/). There are four steps we need to take to solve any programming problem: 

1. Understand the problem

2. Make a plan

3. Execute the plan

4. Evaluate the plan


### Understand the Problem

To understand our problem, we first need to define it. Let’s reframe the problem as acceptance criteria:

```md
GIVEN an unsorted array of integers
WHEN we find the lowest unsorted value
THEN we move that value to its proper ordinal position and repeat until all values are in sequence

```

That’s our general outline. We know our input conditions, TODO, and our output requirements, TODO, and our goal is to TODO.

* our input conditions (an unsorted array)

* our output requirements (a sorted array)

* our goal is to organize the elements in the array in ascending, or non-descending, order, starting with the smallest elements first


Let’s make a plan!


### Make a Plan

Let’s revisit our computational thinking heuristics as they will aid and guide is in making a plan. They are: 

* Decomposition

* Pattern recognition

* Abstraction

* Algorithm design

TODO

```md
[10, 1, 9, 2, 8, 3, 7, 4, 6, 5]
```

The first step is decomposition, or breaking our problem down into smaller problems. What's the smallest problem we can solve? 

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
    SELECT the current value
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
    SELECT MIN, the current value 
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

Let's update our pseudocode: 

```md
FOR EACH element in an unsorted array
    SELECT MIN, the current value
    FOR EACH of the remaining elements in the array
        IF the next element is less than MIN
        UPDATE MIN with the next element
    SWAP the current element with MIN
```

Let's step through our array:
TODO 
```md
[10, 1, 9, 2]
```

On the first iteration, we _select_ `10`, and assign it to `MIN`. We then enter our nested loop and iterate over the remaining elements. The next element is `1`, which is less than `10`, so we assign `1` to `MIN`. We are still in our nested loop, so we continue comparing the remaining values to `MIN` and discover that `1` is the lowest value in our array. We exit our nested loop and _swap_ the value in the `0` index, which is `10`, with `1`. Our array now looks like this: 
```md
[1, 10, 9, 2]
```

We are now at our outer loop again and we select the value in the `1` index, which is now `10`. We assign it to `MIN` and enter our nested loop. The next value is `9`, which is less than `10`, so we assign `9` to `MIN`. We continue iterating over the remaining values in our array and find that the next value, `2`, is less than `9`, so we assign `2` to `MIN`. We exit our nested loop and swap `2` with `10`. Our array now looks like this: 
```md
[1, 2, 9, 10]
```

Looks like a solid plan! 


### Execute the Plan

Now it's simply a matter of translating our pseudocode into the syntax of our programming language. Let's start with JavaScript...


#### How to Code the TODO Algorithm in JavaScript

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

Now let's see it in Python...


#### How to Code the TODO Algorithm in Python

TODO
```py
TODO
```

### Evaluate the Plan

Can we do better? 

TODO  TODO do we need to go the end of the array? 


#### What is the Big O Of TODO?

If you want to learn how to calculate time and space complexity, pick up your copy of [The Little Book of Big O](https://gum.co/big-o)


## Reflection

Remember those _meta_ questions we asked at the outset? Let’s make it stick and answer them now!

* Why do I need to know this?

* Why is it called "Selection Sort"? 

* TODO


### Why Do I Need to Know This? 

TODO


### Why Is It Called Selecction Sort? 

TODO TODO We use selection sort to build an array from left to right, by repeatedly "selecting" the minimum values in an unsorted array and placing them in their proper ordinal position. 



### TODO

TODO


## A is for Algorithms

![A is for Algorithms](./jarednielsen-algorithms.png)
Give yourself an A. Grab your copy of [A is for Algorithms](https://gum.co/algorithms)



