---
title: "Learn How to Code the Merge Two Arrays Algorithm"
date: "2022-TODO-TODO"
description: "If you want to learn how to code, you need to learn algorithms. Learning algorithms improves your problem solving skills by revealing design patterns in programming. In this tutorial, you will learn how to code the merge two arrays algorithm."
keywords: ['algorithm', 'merge two arrays', 'javascript', 'python']
---


![ merge two arrays ](./jarednielsen-algorithm-merge two arrays.png)


If you want to learn how to code, you need to learn algorithms. Learning algorithms improves your problem solving skills by revealing design patterns in programming. In this tutorial, you will learn how to code the merge two arrays in JavaScript _and_ Python.


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

* What problem(s) does merge two arrays solve? 

* TODO


## How to Code the Merge Two Arrays Algorithm 

[Programming is problem solving](https://jarednielsen.com/programming-problem-solving/). There are four steps we need to take to solve any programming problem: 

1. Understand the problem

2. Make a plan

3. Execute the plan

4. Evaluate the plan


### Understand the Problem

To understand our problem, we first need to define it. Let’s reframe the problem as acceptance criteria:

```md
GIVEN two sorted arrays
WHEN I pass the two arrays to a `merge` function
THEN I am returned one array containing the values of the original two in sequential order
```

That’s our general outline. We know our input conditions, two sorted arrays, and our output requirements, one array, and our goal is to merge the two original arrays in sequential order.

Let’s make a plan!


### Make a Plan

Let’s revisit our computational thinking heuristics as they will aid and guide is in making a plan. They are: 

* Decomposition

* Pattern recognition

* Abstraction

* Algorithm design

The first step is decomposition, or breaking our problem down into smaller problems. What's the smallest problem we can solve? 
```
[1], [2]
```

Let's call these two arrays `left` and `right`. 

We're going to need to build a new array, so let's call it `result`. 

Here's our pseudocode so far:
```
INPUT left, right

SET result TO AN EMPTY ARRAY 
```

If the value stored in `left` is less than the value stored in `right`, we simply shift the value in `left` into our `result` array. Let's pseudocode that...
```
INPUT left, right

SET result TO AN EMPTY ARRAY 

IF THE FIRST ELEMENT IN left IS LESS THAN THE FIRST ELEMENT IN right
    SHIFT THE FIRST ELEMENT OFF left AND PUSH IT INTO right
```

We can use our `ELSE` to check the opposite, where the first element in `right` is less than `left`:
```
INPUT left, right

SET result TO AN EMPTY ARRAY 

IF THE FIRST ELEMENT IN left IS LESS THAN THE FIRST ELEMENT IN right
    SHIFT THE FIRST ELEMENT OFF left AND PUSH IT INTO right
ELSE 
    SHIFT THE FIRST ELEMENT OFF right AND PUSH IT INTO left
```

What's the next smallest problem we can solve? 
```
[1, 3], [2]
```




```
INPUT left, right

SET result TO AN EMPTY ARRAY

WHILE THERE ARE ELEMENTS IN left OR right
    IF THERE ARE ELEMENTS IN left AND right
        IF THE FIRST ELEMENT IN left IS LESS THAN THE FIRST ELEMENT IN right
            SHIFT THE FIRST ELEMENT OFF left AND PUSH IT INTO right
        ELSE 
            SHIFT THE FIRST ELEMENT OFF right AND PUSH IT INTO left
    ELSE IF
        SHIFT THE FIRST ELEMENT OFF left AND PUSH IT INTO right
    ELSE
        SHIFT THE FIRST ELEMENT OFF right AND PUSH IT INTO left

RETURN result
```


### Execute the Plan

Now it's simply a matter of translating our pseudocode into the syntax of our programming language. 


#### How to Code the Merge Two Arrays Algorithm in JavaScript

Let's start with JavaScript...
```js
const merge = (left, right) => {
    
    let result = [];
    
    while(left.length || right.length) {
        
        if(left.length && right.length) {
            if(left[0] < right[0]) {
                result.push(left.shift())
            } else {
                result.push(right.shift())
            }
        } else if(left.length) {
            result.push(left.shift())
        } else {
            result.push(right.shift())
        }
    }
    return result;
};
```



#### How to Code the Merge Two Arrays Algorithm in Python

Now let's see it in Python...
```py
def merge(left, right):
    result = []

    while (len(left) or len(right)):
        if (len(left) and len(right)):
            if (left[0] < right[0]):
                result.append(left.pop(0))
            else:
                result.append(right.pop(0))
        elif (len(left)):
            result.append(left.pop(0))
        else:
            result.append(right.pop(0))
    return result
```

### Evaluate the Plan

Can we do better? 

TODO


#### What is the Big O Of Merge Two Arrays?

If you want to learn how to calculate time and space complexity, pick up your copy of [The Little Book of Big O](https://gum.co/big-o)


## Reflection

Remember those _meta_ questions we asked at the outset? Let’s make it stick and answer them now!

* Why do I need to know this?

* What problem(s) does merge two arrays solve? 

* TODO


### Why Do I Need to Know This? 

TODO


### What Problem(s) Does Merge Two Arrays Solve? 

TODO


### TODO

TODO


## A is for Algorithms

![A is for Algorithms](./jarednielsen-algorithms.png)
Give yourself an A. Grab your copy of [A is for Algorithms](https://gum.co/algorithms)



