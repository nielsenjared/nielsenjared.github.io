---
title: "Learn How to Code the Recursive Factorial Algorithm"
date: "2022-09-23"
description: "If you want to learn how to code, you need to learn algorithms. Learning algorithms improves your problem solving skills by revealing design patterns in programming. In this tutorial, you will learn how to code the recursive factorial algorithm in JavaScript and Python."
keywords: ['algorithm', 'recursion', 'factorial', 'recursive factorial', 'javascript', 'python']
---


![ Illustration of recursive factorial ](./jarednielsen-algorithm-TODO.png)


If you want to learn how to code, you need to learn algorithms. Learning algorithms improves your problem solving skills by revealing design patterns in programming. In this tutorial, you will learn how to code the recursive factorial algorithm in JavaScript _and_ Python.


---

![A is for Algorithms](./jarednielsen-algorithms.png)
Give yourself an A. Grab your copy of [A is for Algorithms](https://gum.co/algorithms)

---


## Retrieval Practice

Retrieval practice is the surest way to solidify any new learning. Attempt to answer the following questions before proceeding:

* What is iteration? 

* What is recursion? 

* What is a factorial? 


### What is Iteration? 

According to [Wikipedia](https://en.wikipedia.org/wiki/Iteration): 

> Iteration is the repetition of a process in order to generate a (possibly unbounded) sequence of outcomes. Each repetition of the process is a single iteration, and the outcome of each iteration is then the starting point of the next iteration. 

We use `for` and `while` loops to iterate. 


### What is Recursion? 

This is our introduction to recursion in this series, but, as the tired joke goes:

> In order to understand recursion, one must first understand recursion. 

In computer science, recursion occurs when a function calls itself within its declaration.

For example:

```js
const loop = () => loop();
```

If you run this in your browser console or using Node, you’ll get an error.

Why?

Too much recursion!

`const loop()` is just that, a constant loop.

🔁

We use recursion to solve a large problem by breaking it down into smaller instances of the same problem.

To do that, we need to tell our function what the smallest instance looks like.

If you recall, with proof by induction we need to establish two things:

* base

* induction

Recursion is similar. We also need to establish a base case but rather than induction, we establish the recursive case.

We use the recursive case to break the problem down into smaller instances.

We use the base case to return when there are no more problems to be solved.

For example. a family on vacation:
```js
const fighting = patience => {
 if (patience <= 0) {
   return "If you don’t stop fighting, I will turn this car around!"
 }
 return fighting(patience - 1);
};
```
The kids are fighting in the backseat.

Dad is driving and quickly losing his patience.

Our recursive case is the constant fighting.

Our base case is dad’s patience when it runs out.

🚗


### What is a Factorial? 

A factorial is the product of all positive integers less than or equal to _n_.

We write that as _n!_.

For example, _5!_:
```
5 * 4 * 3 * 2 * 1 = 120
```


## Let's Get Meta

Ask yourself the following questions and keep them back of mind as you proceed:

* Why do I need to know this?

* What problem(s) does recursion solve? 

* What problem(s) does recursion create? 


## How to Code the Recursive Factorial Algorithm 

[Programming is problem solving](https://jarednielsen.com/programming-problem-solving/). There are four steps we need to take to solve any programming problem: 

1. Understand the problem

2. Make a plan

3. Execute the plan

4. Evaluate the plan


### Understand the Problem

To understand our problem, we first need to define it. Let’s reframe the problem as acceptance criteria:

```md
GIVEN a number, `n`
WHEN I run my `factorial` function
THEN my product is calculated recursively
```

That’s our general outline. We know our input conditions, a whole number greater than zero, and our output requirements, the factorial product of that whole number, and our goal is to calculate the product recursively.

Let’s make a plan!


### Make a Plan

Let’s revisit our computational thinking heuristics as they will aid and guide is in making a plan. They are: 

* Decomposition

* Pattern recognition

* Abstraction

* Algorithm design

The first step is decomposition, or breaking our problem down into smaller problems. What's the smallest problem we can solve? 

```
n = 1
```

The result of _n!_ where _n_ is equal to 1 is 1. 
```
INPUT n

RETURN n
```

Not much of an algorithm, eh? 

The next smallest problem to solve is 2. The result of _n!_ where _n_ is equal to 2 is 2:
```
2 X 1 = 2
```

Let's hard code this in pseudocode:
```
INPUT n

IF n is equal to 1
    RETURN n
ELSE
    RETURN n X 1
```

This will only return the correct factorial if _n_ is equal to 1 or 2. We'll fix this soon enough. 

The next smallest problem is 3. The result of _n!_ where _n_ is equal to 3 is 6:
```
3 X 2 X 1 = 6
```

How do we pseudocode this? 

We _could_ continue to hard code each increment of _n_ in a conditional statement, but that's not the goal or very pragmatic. It's time to look for a pattern! Let's map out the next few increments of _n!_: 

| n!    | aka               | product   |
| ---   | ---               | ---       |
| 1!    | 1                 | 1         |
| 2!    | 2 X 1             | 2         |
| 3!    | 3 X 2 X 1         | 6         |
| 4!    | 4 X 3 X 2 X 1     | 24        |
| 5!    | 5 X 4 X 3 X 2 X 1 | 120       |

Do you see a pattern? 

Each factorial is composed of the number, _n_, multiplied by the previous factorial. For example, _5!_ can also be expressed as:
```
5 * 4!
```

And _4!_ can also be expressed as:
```
4 * 3!
```

And so on...

Let's look at it another way. Using _5!_ as an example, what is 4 in relation to _n_ when _n_ is equal to 5? 
```
n - 1
```

And what is 3 in relation to _n_ when _n_ is equal to 5? 
```
n - 2
```

So... another way to write _5!_, where _n_ is equal to 5, could be:
```
n * (n - 1) * (n - 2) * (n - 3) * (n - 4)
```

Now we can get abstract! In each iteration, _n!_ is equal to _n_ multiplied by _n - 1_. We can express this in an equation: 
```
n! = n * (n - 1)!
```

Where have we seen this or something like it before? 

Recursion!

What's our base case? 
```
1
```

What's our recursive case?
```
n * (n - 1)!
```

Let's translate this to pseudocode: 
```
FUNCTION factorial
    INPUT n
    IF n IS EQUAL TO 0 OR 1
        RETURN 1
    ELSE
        RETURN n * factorial(n - 1)
```


### Execute the Plan

Now it's simply a matter of translating our pseudocode into the syntax of our programming language. 


#### How to Code the TODO Algorithm in JavaScript

Let's start with JavaScript...

```js
const factorial = n => {
    if (n == 0 || n === 1) {
        return 1;
    } else {
        return (n * factorial(n - 1));
    }
 };
```

#### How to Code the TODO Algorithm in Python

Now let's see it in Python...

```py
def factorial(n):
    if (n == 0) or (n == 1):
        return 1
    else: 
        return n * factorial(n - 1)
```

### Evaluate the Plan

Can we do better? 

It depends. 

TODO



#### What is the Big O Of TODO?

If you want to learn how to calculate time and space complexity, pick up your copy of [The Little Book of Big O](https://gum.co/big-o)


## Reflection

Remember those _meta_ questions we asked at the outset? Let’s make it stick and answer them now!

* Why do I need to know this?

* What problem(s) does recursion solve? 

* What problem(s) does recursion create? 


### Why Do I Need to Know This? 

TODO


### What Problem(s) Does TODO Solve? 

TODO


### What Problem(s) Does Recursion Create? 

TODO


## A is for Algorithms

![A is for Algorithms](./jarednielsen-algorithms.png)
Give yourself an A. Grab your copy of [A is for Algorithms](https://gum.co/algorithms)



