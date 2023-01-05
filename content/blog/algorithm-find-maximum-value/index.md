---
title: "Learn How to Code the Find Maximum Value Algorithm"
date: "2022-03-25"
description: "If you want to learn how to code, you need to learn algorithms. Learning algorithms improves your problem solving skills by revealing design patterns in programming. In this tutorial, you will learn how to code the maximum value algorithm."
keywords: ['algorithm', 'min', 'minimum', 'max', 'maximum', 'value', 'array', 'javascript', 'python']
---


![ Illustration of maximum value algorithm ](./jarednielsen-algorithm-find-maximum-value.png)


If you want to learn how to code, you need to learn algorithms. Learning algorithms improves your problem solving skills by revealing design patterns in programming. In this tutorial, you will learn how to code the Finding the Maximum Value in an Array algorithm in JavaScript _and_ Python.


---

![A is for Algorithms](./jarednielsen-algorithms.png)
Give yourself an A. Grab your copy of [A is for Algorithms](https://gum.co/algorithms)

---


## Retrieval Practice

Retrieval practice is the surest way to solidify any new learning. Attempt to answer the following questions before proceeding:

* What are relational operators? 

* How does linear search work?  

* What is variable reassignment? 


### What Are Relational Operators? 

Relational operators are constructs that evaluate a relation between two values. The standard relational operators are: 

* `==`: Equal to

* `!=`: Not equal to

* `>`: Greater than

* `>=` Greater than or equal to

* `<`: Less than

* `<=`: Less than or equal to 


### How Does Linear Search Work? 

Linear Search loops over an array of values checking if each value in the array is equal to the requested value. If the requested value is found in the array, then the function returns the location of that value in the array.


### What Is Variable Reassignment? 

Variable reassignment occurs when we first declare and assign a value to a variable and then later in our program assign a new value to that same variable. For example: 
```
SET x TO y

WORK SOME MAGIC! 

SET x TO z
```


## Let's Get Meta

Ask yourself the following questions and keep them back of mind as you proceed:

* Why do I need to know this?

* What is _state_? 

* How would we find _both_ the minimum or maximum value? 


## How to Code the Find Maximum Value Algorithm 

[Programming is problem solving](https://jarednielsen.com/programming-problem-solving/). There are four steps we need to take to solve any programming problem: 

1. Understand the problem

2. Make a plan

3. Execute the plan

4. Evaluate the plan


### Understand the Problem

To understand our problem, we first need to define it. Let’s reframe the problem as acceptance criteria:

```md
GIVEN an array of positive integers 
WHEN I search for the maximum value
THEN I am returned the maximum value in the array
```

That’s our general outline. We know our input conditions, an array of positive integers, and our output requirements, the maximum value stored in the array.

Let’s make a plan!


### Make a Plan

Let’s revisit our computational thinking heuristics as they will aid and guide is in making a plan. They are: 

* Decomposition

* Pattern recognition

* Abstraction

* Algorithm design

The first step is decomposition, or breaking our problem down into smaller problems. What's the smallest problem we can solve? 
```
[1]
```

Because there is only one element, we simply return it. Let's pseudocode this: 
```
INPUT arr

RETURN arr[0]
```

What's the next smallest problem we can solve? 
```
[1, 2]
```

We just need to compare the values of the two elements and return the greater of the two: 
```
INPUT arr

IF arr[1] IS GREATER THAN arr[0]
    RETURN arr[1]

RETURN arr[0]
```

What's the next smallest problem we can solve? 
```
[1, 2, 3]
```

We _could_ hardcode another conditional, like this: 
```
INPUT arr

IF arr[1] IS GREATER THAN arr[0]
    RETURN arr[1]

IF arr[2] IS GREATER THAN arr[1]
    RETURN arr[1]

RETURN arr[0]
```

Will this scale? 

Do we see a pattern? 

Iteration! 

We can wrap our conditional in a `for` loop. But what is the comparison we are making? 
```
INPUT arr

FOR EACH VALUE, i, BETWEEN 0 AND THE LENGTH OF arr
    IF arr[i] IS GREATER THAN WHAT? 
        ...
```

It's time to get abstract! 

We need a way to track the maximum value when we find it. Let's declare a `result` variable, and, with each iteration, compare the value stored in `result` with the value indexed by the `for` loop. If the valued indexed by `i` is greater than the current maximum value stored in `result`, we'll reassign `result` with that value. Let's translate this to pseudocode: 
```
INPUT arr

SET result TO 0

FOR EACH VALUE, i, BETWEEN 0 and THE LENGTH OF arr
    IF arr[i] IS GREATER THAN result
        SET result TO arr[i]

RETURN result
```


### Execute the Plan

Now it's simply a matter of translating our pseudocode into the syntax of our programming language. 


#### How to Code the Maximum Value Algorithm in JavaScript

Let's start with JavaScript...

```js
const max = (arr) => {
    let result = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > result) {
            result = arr[i];
        }
    }
    return result;
}
```


#### How to Code the Maximum Value Algorithm in Python

Now let's see it in Python...

```py
def max(list): 
    result = 0

    for i in range(len(list)):
        if list[i] > result:
            result = list[i]
    
    return result
```

### Evaluate the Plan

Can we do better? 

We can make a small optimization by setting the value of `result` to the first value of the array and then initialize our `for` loop to begin counting at 1 instead of 0. 
```
INPUT arr

SET result TO arr[0]

FOR EACH VALUE, i, BETWEEN 1 and THE LENGTH OF arr
    IF arr[i] IS GREATER THAN result
        SET result TO arr[i]

RETURN result
```

Here it is in JavaScript:
```js
const max = (arr) => {
    let result = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > result) {
            result = arr[i];
        }
    }
    return result;
}
```

And here it is in Python:
```py
def max(list): 
    result = list[0]

    for i in range(1, len(list)):
        if list[i] > result:
            result = list[i]
    
    return result
```

We can also refactor our algorithms to find the maximum _and_ minimum values in the array: 
```js
const minMax = (arr, m="max") => {
    let result = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (m == "min" && arr[i] < result) {
            result = arr[i];
        }

        if (m == "max" && arr[i] > result) {
            result = arr[i];
        }
    }
    return result;
}
```

Here it is in Python: 
```py
def min_max(list, m="max"): 
    result = list[0]

    for i in range(1, len(list)):
        if m == "min" and list[i] < result:
            result = list[i]
    
        if m == "max" and list[i] > result:
            result = list[i]

    return result
```

Both JavaScript and Python feature `min` and `max` methods.  in their `Math` modules. 

In JavaScript, the `max` method is included in the `Math` module. Here's how to use the `max` method in JavaScript:
```js
Math.max(1, 2, 3);
```
This will return 3. 

To pass it an array, we need to use the spread operator. 
```js
const arr = [1, 2, 3];

Math.max(...arr);
```

The `max` method is built-in to Python. Here's how to use the `max` method in Python: 
```py
max(1, 2, 3)

list = [1, 2, 3]

max(list)
```

Both approaches will return 3. 



#### What is the Big O Of the Maximum Value Algorithm?

If you want to learn how to calculate time and space complexity, pick up your copy of [The Little Book of Big O](https://gum.co/big-o)


## Reflection

Remember those _meta_ questions we asked at the outset? Let’s make it stick and answer them now!

* Why do I need to know this?

* What is _state_? 

* How would we find _both_ the minimum or maximum value? 


### Why Do I Need to Know This? 

You will likely never write a minimum or maximum value algorithm because both JavaScript and Python feature `min` and `max` methods in their Math modules. The approach we took is a common pattern in algorithm design and you will both see it and use it time and again. 


### What is State? 

According to Ye Olde Wikipedia: 
>  a computer program stores data in variables, which represent storage locations in the computer's memory. The contents of these memory locations, at any given point in the program's execution, is called the program's state.


### How Would We Find Both the Minimum And Maximum Value? 

As we saw above, we simply add another parameter to our function to specify whether our query was `min` or `max` and then nest another conditional in the `for` loop. 


## A is for Algorithms

![A is for Algorithms](./jarednielsen-algorithms.png)
Give yourself an A. Grab your copy of [A is for Algorithms](https://gum.co/algorithms)



