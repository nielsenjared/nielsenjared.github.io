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

* What is a Greatest Common Divisor?

* What is the iterative Greatest Common Divisor?

* What is recursion? 


### What is a Greatest Common Divisor?

TODO


### What is the Iterative Greatest Common Divisor?

TODO


### What is Recursion? 

TODO


## Let's Get Meta

Ask yourself the following questions and keep them back of mind as you proceed:

* Why do I need to know this?

* What problem(s) does TODO solve? 

* TODO


## How to Code the Recursive Greatest Common Divisor Algorithm 

[Programming is problem solving](https://jarednielsen.com/programming-problem-solving/). There are four steps we need to take to solve any programming problem: 

1. Understand the problem

2. Make a plan

3. Execute the plan

4. Evaluate the plan


### Understand the Problem

To understand our problem, we first need to define it. Let’s reframe the problem as acceptance criteria:

```md
GIVEN TODO
WHEN TODO
THEN TODO
```

That’s our general outline. We know our input conditions, TODO, and our output requirements, TODO, and our goal is to TODO.

Let’s make a plan!


### Make a Plan

Let’s revisit our computational thinking heuristics as they will aid and guide is in making a plan. They are: 

* Decomposition

* Pattern recognition

* Abstraction

* Algorithm design

The first step is decomposition, or breaking our problem down into smaller problems. What's the smallest problem we can solve? 

TODO

```
DON'T USE ```md FOR PSUEDOCODE SNIPPETS
    IT WILL RENDER TABBED TEXT 
        IN ANOTHER COLOR
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

TODO


#### What is the Big O Of Recursive Greatest Common Divisor?

If you want to learn how to calculate time and space complexity, pick up your copy of [The Little Book of Big O](https://gum.co/big-o)


## Reflection

Remember those _meta_ questions we asked at the outset? Let’s make it stick and answer them now!

* Why do I need to know this?

* What problem(s) does TODO solve? 

* TODO


### Why Do I Need to Know This? 

For the same reaons we discussed in the iterative solution, with the addition that you will _also_ want to know how to execute this with recursion. 


### What Problem(s) Does TODO Solve? 

TODO


### TODO

TODO


## A is for Algorithms

![A is for Algorithms](./jarednielsen-algorithms.png)
Give yourself an A. Grab your copy of [A is for Algorithms](https://gum.co/algorithms)



