---
title: "Learn How to Code the Factorial Algorithm"
date: "2022-02-11"
description: "If you want to learn how to code, you need to learn algorithms. Learning algorithms improves your problem solving skills by revealing design patterns in programming. In this tutorial, you will learn how to code the factorial algorithm in JavaScript and Python."
keywords: ['algorithm', 'factorial', 'javascript', 'python']
---


![ Illustration of factorial algorithm ](./jarednielsen-algorithm-factorial.png)


If you want to learn how to code, you need to learn algorithms. Learning algorithms improves your problem solving skills by revealing design patterns in programming. In this tutorial, you will learn how to code the factorial algorithm in JavaScript _and_ Python.


---

![A is for Algorithms](./jarednielsen-algorithms.png)
Give yourself an A. Grab your copy of [A is for Algorithms](https://gum.co/algorithms)

---


## Retrieval Practice

Retrieval practice is the surest way to solidify any new learning. Attempt to answer the following questions before proceeding:

* What is a factorial? 

* How does iteration work? 

* What is variable reassignment? 



### What Is A Factorial? 

TODO


### How Does Iteration Work? 

TODO


### What Is Variable Reassignment? 

TODO


## Let's Get Meta

Ask yourself the following questions and keep them back of mind as you proceed:

* Why do I need to know this?

* What problem(s) does TODO solve? 

* TODO


## How to Code the Factorial Algorithm 

[Programming is problem solving](https://jarednielsen.com/programming-problem-solving/). There are four steps we need to take to solve any programming problem: 

1. Understand the problem

2. Make a plan

3. Execute the plan

4. Evaluate the plan


### Understand the Problem

To understand our problem, we first need to define it. Let’s reframe the problem as acceptance criteria:

```md
GIVEN a whole number, n
WHEN I pass it to an iterative factorial function
THEN I am returned the factorial of n
```

That’s our general outline. We know our input conditions, a whole number, and our output requirements, the factorial of that number, and our goal is to calculate the factorial iteratively.

Let’s make a plan!


### Make a Plan

Let’s revisit our computational thinking heuristics as they will aid and guide is in making a plan. They are: 

* Decomposition

* Pattern recognition

* Abstraction

* Algorithm design

The first step is decomposition, or breaking our problem down into smaller problems. What's the smallest problem we can solve? 

0!

What's the factorial of 0? 

1 

What? 

A factorial is the number of permutations of another number.  There's only one way to arrange 0, so _0!_ is 1. 

If `n` is equal to 0, we know our `factorial` function needs to return 1. 

Let's start pseudocoding this: 
```
INPUT n
SET result to 1

IF n == 0
    RETURN result
```

What's the next smallest problem we can solve? 

1!

What's the factorial of 1?

Also 1. 

Same as 0 above, there's only one way to arrange 1. 

I promise it's going to get more fun with 2, but first, let's add this to our pseudocode: 
```
INPUT n
SET result to 1

IF n == 0 OR n == 1
    RETURN result
```

Sweet. Now, what's the factorial of 2? 

It's 2!

Isn't that fun?

But why is _2!_ equal to 2? 

We can express _2!_ as 2 * 1. 

We don't want to hard code this, so now we need to start looking for a pattern. 

Table time! 

| _n_   | _n!_  | 1 * ... n         |
| ---   | ---   | ---               |
| 2     | 2     | 1 * 2             |






TODO
```
INPUT n
SET result TO 1

IF n IS LESS THAN OR EQUAL TO 1
    RETURN result

FOR EVERY VALUE i BETWEEN 2 AND n
    SET result TO THE PRODUCT OF result MULTIPLIED BY i

RETURN result
```


### Execute the Plan

Now it's simply a matter of translating our pseudocode into the syntax of our programming language. 


#### How to Code the TODO Algorithm in JavaScript

Let's start with JavaScript...
```js
const factorial = n => {
    let result = 1;

    if (n == 0 || n == 1) {
        return result;
    }


    for (let i = 2; i <= n; i++) {
        result = result * i;
    }

    return result;
}
```



#### How to Code the TODO Algorithm in Python

Now let's see it in Python...
```py
def factorial(n): 
    result = 1

    if n == 0 or n == 1:
        return result
    
    for i in range(2, n + 1):
        result = result * i
    
    return result
    
```

### Evaluate the Plan

Can we do better? 

TODO


#### What is the Big O Of Factorial?

If you want to learn how to calculate time and space complexity, pick up your copy of [The Little Book of Big O](https://gum.co/big-o)


## Reflection

Remember those _meta_ questions we asked at the outset? Let’s make it stick and answer them now!

* Why do I need to know this?

* What problem(s) does Factorial solve? 

* TODO


### Why Do I Need to Know This? 

TODO


### What Problem(s) Does Factorial Solve? 

TODO


### TODO

TODO


## A is for Algorithms

![A is for Algorithms](./jarednielsen-algorithms.png)
Give yourself an A. Grab your copy of [A is for Algorithms](https://gum.co/algorithms)



