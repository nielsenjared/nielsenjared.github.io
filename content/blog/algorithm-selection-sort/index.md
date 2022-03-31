---
title: "Learn How to Code the Selecction Sort Algorithm"
date: "2022-04-08"
description: "If you want to learn how to code, you need to learn algorithms. Learning algorithms improves your problem solving skills by revealing design patterns in programming. In this tutorial, you will learn how to code the selection sort algorithm in JavaScript and Python."
keywords: ['algorithm', 'selection sort', 'javascript', 'python']
---


![ selection sort ](./jarednielsen-algorithm-selection-sort.png)


If you want to learn how to code, you need to learn algorithms. Learning algorithms improves your problem solving skills by revealing design patterns in programming. In this tutorial, you will learn how to code the selection sort algorithm in JavaScript _and_ Python.


---

![A is for Algorithms](./jarednielsen-algorithms.png)
Give yourself an A. Grab your copy of [A is for Algorithms](https://gum.co/algorithms)

---


## Retrieval Practice

Retrieval practice is the surest way to solidify any new learning. Attempt to answer the following questions before proceeding:

* How do we swap values in an array? 

* TODO

* TODO 


### How Do We Swap Values in an Array? 

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

That’s our general outline. We know our input conditions, an unsorted array, and our output requirements, a sorted array, and our goal is to organize the elements in the array in ascending, or non-descending, order, starting with the smallest elements first.


Let’s make a plan!


### Make a Plan

Let’s revisit our computational thinking heuristics as they will aid and guide is in making a plan. They are: 

* Decomposition

* Pattern recognition

* Abstraction

* Algorithm design

We need something to sort, so let's use this "unsorted" array:
```
[10, 1, 9, 2, 8, 3, 7, 4, 6, 5]
```

The first step in our process is decomposition, or breaking our problem down into smaller problems. What's the smallest problem we can solve? 
```
[10, 1]
```

We can see that we simply need to swap the positions of these two values. Let's pseudocode a solution to this very small problem: 
```
INPUT array
SET first EQUAL TO THE VALUE STORED IN array[0]
SET next EQUAL TO THE VALUE STORED IN array[1]
IF THE next VALUE IN array IS LESS THAN THE first VALUE
    SWAP THE first AND next VALUES
```

So far so good! Let's expand our array and add another value:
```
[10, 1, 9]
```

We _could_ hardcode another conditional to check the value stored in the third index, but we're programmers. We immediately recognize a pattern emerging where we will need to _select_ the first value and compare it to the second and third values, and then _select_ the second value, and compare it to the third value, all while swapping the index of values when necessary. 

Let's update our pseudocode: 
```
INPUT array
FOR EACH index IN array:
    SET first EQUAL TO THE VALUE STORED IN array[0]
    SET next EQUAL TO THE VALUE STORED IN array[1]
    IF THE next VALUE IN array IS LESS THAN THE first VALUE
        SWAP first AND next
```

Let's step through this...

On the first iteration, we select the first element, `10`, and compare it to the next element, `1`, which is less than `10`, so we swap their positions. Our array now looks like this:
```
[1, 10, 9]
```

But! On the next iteration, what happens? We again select the first element, `1`, and compare it to the next element, which is now `9`. `9` is greater than `1`, so we leave it where it is. 

What's the solution? 

TODO
We need to make the leap to abstraction. We need a means of tracking and updating the index of the "known minimum value". 

TODO
In this scenario, `1` is our first "known minimum value", but we can see that `9` is less than `10`, so we need to compare the "known minimum value" to the next value in each iteration and update accordingly. Let's refer to the "known minimum value" as `min`. 

```md
FOR EACH i IN array:
    SET min EQUAL TO i 
    IF THE next ELEMENT IS LESS THAN min
        SET min EQUAL TO THE index OF next ELEMENT
    SWAP the current element with min
```

Let's iterate over our three-piece array again:
```md
[10, 1, 9]
```

On the first iteration, we SELECT `10` because it's the first element, and at this point min. If the next element, `1`, is less than min, we UPDATE min with that value. So min is now equal to `1`. Now we need to swap the current element, containing the value `10`, with min. After the first iteration, our array looks like this: 

```md
[1, 10, 9]
```

On the next iteration, we select the current element, which is now `10`. We compare the value stored in the next element, `9`, to min and see that 
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
```
FOR EACH index IN array
    SET min EQUAL TO index
    SET next TO index + 1
    FOR EACH next IN array
        IF THE VALUE STORED IN array[next] IS LESS THAN THE VALUE STORED IN array[min]
        SET min EQUAL TO next
    SWAP THE VALUES STORED IN array[index] WITH THE VALUE STORED IN array[min]
```

Let's step through this, using this array:
```
[10, 1, 9, 2]
```

On the first iteration of our outer loop, we set `min` to `index`, or `0`. We then enter our nested loop to iterate over the remaining, or _next_ elements. The next element is equal to `index + 1`. which in this iteration is `1`. Our conditional checks if the value stored in our array at index `1` is less than the value stored in our array at index `0`. If this evaluates as `true`, we set the value of `min` equal to `next`. In this iteration, `array[next]` is equal to `1` and `array[index]` is equal to `10`, so we set `min` equal to the value stored in `next`, which is `1`. We are still in our nested loop, so we continue comparing the remaining values to `min` and discover that `1` is the lowest value in our array. We exit our nested loop and _swap_ the value in the `0` index, which is `10`, with the vale in the `min` index, which is `1`. Our array now looks like this: 
```md
[1, 10, 9, 2]
```

We are now iterating at the level of our outer loop again, and we select the value in the `1` index, which is now `10`. We assign it to `min` and enter our nested loop. The next value is `9`, which is less than `10`, so we assign the index of `next`, which is `2` to `min`. We continue iterating over the remaining values in our array and find that the next value, `2`, is less than `9`, so we assign the index of `next`, which is `3`, to `min`. We exit our nested loop and swap the value stored at `array[index]` with the value stored in `array[next]`. Our array now looks like this: 
```md
[1, 2, 9, 10]
```

Looks like a solid plan! 


### Execute the Plan

Now it's simply a matter of translating our pseudocode into the syntax of our programming language. Let's start with JavaScript...


#### How to Code the Selection Sort Algorithm in JavaScript

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


#### How to Code the Selection Sort Algorithm in Python

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

Recall that our goal is to _select_ the smallest element, wherever it may be in the array, and move it _down_. 




### TODO

TODO


## A is for Algorithms

![A is for Algorithms](./jarednielsen-algorithms.png)
Give yourself an A. Grab your copy of [A is for Algorithms](https://gum.co/algorithms)



