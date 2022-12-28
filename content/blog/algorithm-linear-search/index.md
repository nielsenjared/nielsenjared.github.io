---
title: "Learn How to Code the Linear Search Algorithm"
date: "2022-01-28"
description: "If you want to learn how to code, you need to learn algorithms. Learning algorithms improves your problem solving skills by revealing design patterns in programming. In this tutorial, you will learn how to code the Linear Search"
keywords: ['algorithm', 'Linear Search', 'javascript', 'python']
---


![ Illustration of linear search using duck duck goose game ](./jarednielsen-algorithm-linear-search.png)


If you want to learn how to code, you need to learn algorithms. Learning algorithms improves your problem solving skills by revealing design patterns in programming. In this tutorial, you will learn how to code the Linear Search algorithm in JavaScript _and_ Python.


---

![A is for Algorithms](./jarednielsen-algorithms.png)
Give yourself an A. Grab your copy of [A is for Algorithms](https://gum.co/algorithms)

---


## Retrieval Practice

Retrieval practice is the surest way to solidify any new learning. Attempt to answer the following questions before proceeding:

* What is linear? 

* What is search? 

* What is iteration? 


### What Do We Mean By 'Linear"? 

According to Dictionary.com, if something is "linear", it is:

> arranged in or extending along a straight or nearly straight line.


### What Is Search? 

This is our first "search" algorithm, so let's define "search". 

According to Dictionary.com, "search" is: 

> an act of searching for someone or something.

According to Ye Olde Wikipedia, a search algorithm:

> is an algorithm designed to solve a search problem. 

Whoa! 

We use search algorithms to find and retrieve data in a range of applications, from arrays to databases. 


### What Is Iteration? 

According to Ye Olde Wikipedia, _iteration_ is: 

> the repetition of a process in order to generate a (possibly unbounded) sequence of outcomes


## Let's Get Meta

Ask yourself the following questions and keep them back of mind as you proceed:

* Why do I need to know this?

* What problem(s) does TODO solve? 

* Why are search algorithms a big deal? 


## How to Code the Linear Search Algorithm 

[Programming is problem solving](https://jarednielsen.com/programming-problem-solving/). There are four steps we need to take to solve any programming problem: 

1. Understand the problem

2. Make a plan

3. Execute the plan

4. Evaluate the plan


### Understand the Problem

To understand our problem, we first need to define it. Let’s reframe the problem as acceptance criteria:

```md
GIVEN an array of numbers 
WHEN I search for a specific number in the array
THEN I am returned the array index of that number
```

That’s our general outline. We know our input conditions, an array of number, and our output requirements, an index, and our goal is to find a specific number in the array.

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

We can solve this with a comparison statement, evaluating if the value stored in our array is equal to the value of _n_. Let's pseudocode it:
```
INPUT array, n

IF array[0] IS EQUAL TO n
    RETURN "Found it!"

RETURN "Not found..."
```

What's the next smallest problem? 
```
[2, 1]
```

I swapped the values here to keep it interesting. Let's suppose we're still searching for the same value, 1. We _could_ hardcode a coditional, like so:
```
INPUT array, n

IF array[0] IS EQUAL TO n
    RETURN "Found it!"

IF array[1] IS EQUAL TO n
    RETURN "Found it!"

RETURN "Not found..."
```

Will this scale? 

Do you see a pattern emerging? 

The only difference between the two conditional statements is the value used to index the array. 


It's time to make the leap to abstraction! 

Rather than hardcode the index value, we can use a variable. What control flow statement allows us repeat a process while changing the value of a variable? 

Loops! 

Which loop do we choose? A `for` or a `while`? 

Because we know the length of the array, or how many iterations we need to perform, we want to choose a `for` loop. 

We want to choose a `while` loop when we don't know how many times we need to iterate and will instead continue to iterate until a condition is met. 

Let's design our algorithm: 
```
INPUT array, n

FOR EACH VALUE BETWEEN i AND THE LENGTH OF array
    IF THE VALUE OF array[i] IS EQUAL TO n
        RETURN "Found it!"

RETURN "Not found..."
```


### Execute the Plan

Now it's simply a matter of translating our pseudocode into the syntax of our programming language. 


#### How to Code the Linear Search Algorithm in JavaScript

Let's start with JavaScript...
```js
const linearSearch = (arr, n) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == n) {
            return `Found ${n} at arr[${i}]`;
        }
    }
    return "Not found...";
}
```



#### How to Code the Linear Search Algorithm in Python

Now let's see it in Python...
```py
def linear_search(list, n):
    for i in range(len(list)):
        if list[i] == n:
            return f'Found {n} at list[{i}]'
    return 'Not found...'
```

### Evaluate the Plan

Can we do better? 

Absolutely! Later in this series, we'll learn search algorithms with improved performance. 


#### What is the Big O Of Linear Search?

Linear Search is just that, linear, so it's time complexity is O(n). 

If you want to learn how to calculate time and space complexity, pick up your copy of [The Little Book of Big O](https://gum.co/big-o)


## Reflection

Remember those _meta_ questions we asked at the outset? Let’s make it stick and answer them now!

* Why do I need to know this?

* TODO ? 

* Why are search algorithms a big deal? 


### Why Do I Need to Know This? 

Linear search is a building block of algorithms. 


### TODO? 

TODO


### Why Are Search Algorithms A Big Deal? 

Search is fundamental to any application. Whether you're using a database or hitting an API, your application is performing search operations. When we begin to work with larger datasets, the performance of the search algorithm becomes increasingly important. 


## A is for Algorithms

![A is for Algorithms](./jarednielsen-algorithms.png)
Give yourself an A. Grab your copy of [A is for Algorithms](https://gum.co/algorithms)



