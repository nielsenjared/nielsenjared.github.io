---
title: "Learn How to Code the Recursive Greatest Common Divisor Algorithm"
date: "2022-09-23"
description: "If you want to learn how to code, you need to learn algorithms. Learning algorithms improves your problem solving skills by revealing design patterns in programming. In this tutorial, you will learn how to code the recursive greatest common divisor."
keywords: ['algorithm', 'greatest common divisor', 'gcd', 'recursive', 'javascript', 'python']
---

![ Illustration of the recursive Greatest Common Divisor ](./jarednielsen-algorithm-recursive-greatest-common-divisor.png)


If you want to learn how to code, you need to learn algorithms. Learning algorithms improves your problem solving skills by revealing design patterns in programming. In this tutorial, you will learn how to code the recursive Greatest Common Divisor in JavaScript _and_ Python.


---

![A is for Algorithms](./jarednielsen-algorithms.png)
Give yourself an A. Grab your copy of [A is for Algorithms](https://gum.co/algorithms)

---


## Retrieval Practice

Retrieval practice is the surest way to solidify any new learning. Attempt to answer the following questions before proceeding:

* What is the iterative Greatest Common Divisor?

* What is proof by induction? 

* What is recursion? 


### How Does the Iterative Greatest Common Divisor Algorithm Work?

The greatest common divisor (GCD) of two integers is the largest positive integer that divides without remainder into each of the two integers. For example, the GCD of 18 and 30 is 6. The iterative GCD algorithm uses the modulo operator to divide one of the integers by the other. The algorithm continues to iterate _while_ the remainder is greater than 0. Here it is in pseudocode for reference: 
```
INPUT n
INPUT m

WHILE m IS GREATER THAN 0
    SET r TO m
    SET m TO THE REMAINDER of n DIVIDED BY m
    SET n EQUAL TO r

RETURN n
```

### What is Proof by Induction? 

Proof by induction is a mathematical method used to prove that a statement is true for all natural numbers. It’s not enough to prove that a statement is true in one or more specific cases. We need to prove it is true for all cases.

There are two metaphors commonly used to describe proof by induction:

* The domino effect

* Climbing a ladder

Given a chain of dominos, if one falls, they will all fall.

Given a sturdy ladder, if one rung holds, they will all hold as we climb higher.


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


## Let's Get Meta

Ask yourself the following questions and keep them back of mind as you proceed:

* Why do I need to know this?

* What problem(s) does recursion solve? 

* What problem(s) does recursion create? 


## How to Code the Recursive Greatest Common Divisor Algorithm 

[Programming is problem solving](https://jarednielsen.com/programming-problem-solving/). There are four steps we need to take to solve any programming problem: 

1. Understand the problem

2. Make a plan

3. Execute the plan

4. Evaluate the plan


### Understand the Problem

To understand our problem, we first need to define it. Let’s reframe the problem as acceptance criteria:

```md
GIVEN two positive integers
WHEN I pass them to my recursive algorithm
THEN I am returned the greatest common 
```

That’s our general outline. We know our input conditions, two positive integers, and our output requirements, the greatest common divisor of the two integers, and our goal is to calculate it recursively.

Let’s make a plan!


### Make a Plan

Let’s revisit our computational thinking heuristics as they will aid and guide is in making a plan. They are: 

* Decomposition

* Pattern recognition

* Abstraction

* Algorithm design

The first step is decomposition, or breaking our problem down into smaller problems. What's the smallest problem we can solve? 

Recursion! 

When writing a recursive algorithm, we need to pull ourselves up by our bootstraps and write a recursive algorithm. 

We know that a recursive function is a function that calls itself, so let's start pseudocoding our recursive GCD: 
```
FUNCTION gcd(n, m)

    RETURN gcd(n, m)
```

Do we see a pattern? 

Without something to stop it, our function will make infinite calls to itself. 

What a crock! 

Let's take another look at our iterative GCD: 
```
INPUT n
INPUT m

WHILE m IS GREATER THAN 0
    SET r TO m
    SET m TO THE REMAINDER of n DIVIDED BY m
    SET n EQUAL TO r

RETURN n
```

The kernel of this algorithm occurs inside the `while` loop where we perform a swap while calculating the modulo of our two input values.

What do we know about `while` loops? 

They iterate _until_ a condition is met. In our iterative GCD, our `while` loop runs until `m` is no longer greater than 0. In other words, until `m` is equal to 0. 

Let's translate this to pseudocode in our recursive GCD: 
```
FUNCTION gcd(n, m)
    IF m IS EQUAL TO 0
        RETURN n

    RETURN gcd(n, m)
```

Now there's a way to break out of our loop. 

AKA the base case. 

Now we need to implement the recursive case. There are two problems remaining to be solved: 

1. The swap

2. The remainder 

We _could_ simply copy/paste our swap/modulo from our iterative GCD: 
```
FUNCTION gcd(n, m)
    IF m IS EQUAL TO 0
        RETURN n
    
    SET r TO m
    SET m TO THE REMAINDER of n DIVIDED BY m
    SET n EQUAL TO r

    RETURN gcd(n, m)
```

But we can definitely get more abstract. Do you see a pattern?

With each recursive call, we pass the previous value of `m` which is reassigned to `n`, and the new value of `m`, which is the remainder of `n` divided by `m`, to our function. 

Rather than hardcode it, we can perform the swap _within_ the recursive call:
```
FUNCTION gcd(n, m)
    IF m IS EQUAL TO 0
        RETURN n
    
    SET r TO THE REMAINDER of n DIVIDED BY m

    RETURN gcd(m, r)
```

But we can definitely get more abstract! Do you see a pattern? 

Rather than declare an `r` variable, we can perform the modulo operation _within_ the recursive call:
```
FUNCTION gcd(n, m)

    IF m IS EQUAL TO 0
        RETURN n
    
    RETURN gcd(m, n % m)
```


### Execute the Plan

Now it's simply a matter of translating our pseudocode into the syntax of our programming language. 


#### How to Code the Recursive Greatest Common Divisor Algorithm in JavaScript

Let's start with JavaScript...
```js
const gcd = (n, m) => {
    if (m === 0) {
        return n;
    }

    return gcd(m, n % m);
};
```


#### How to Code the Recursive Greatest Common Divisor Algorithm in Python

Now let's see it in Python...
```py
def gcd(n, m):
    if (m == 0):
        return n
    
    return gcd(m, n % m)
```

### Evaluate the Plan

Can we do better? 

Yes and no. Recursive functions are compact, and, as some will argue, elegant, but they are harder to immediately understand if you weren't the author (and sometimes if you were!)


#### What is the Big O Of Recursive Greatest Common Divisor?

If you want to learn how to calculate time and space complexity, pick up your copy of [The Little Book of Big O](https://gum.co/big-o)


## Reflection

Remember those _meta_ questions we asked at the outset? Let’s make it stick and answer them now!

* Why do I need to know this?

* What problem(s) does recursion solve? 

* What problem(s) does recursion create?


### Why Do I Need to Know This? 

For the same reaons we discussed in the iterative solution, with the addition that you will _also_ want to know how to execute this with recursion. 


### What Problem(s) Does Recursion Solve? 

Recursion allows us to write functions that are compact and elegant.


### What Problem(s) Does Recursion Create? 

Recursion can easily exceed the maximum size of the call stack.

Recursion can make the program harder to understand not only for your collaborators, but for your future self.


## A is for Algorithms

![A is for Algorithms](./jarednielsen-algorithms.png)
Give yourself an A. Grab your copy of [A is for Algorithms](https://gum.co/algorithms)



