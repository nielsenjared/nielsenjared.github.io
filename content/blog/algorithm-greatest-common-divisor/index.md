---
title: "Learn How to Code the Greatest Common Divisor Algorithm"
date: "2022-TODO-TODO"
description: "If you want to learn how to code, you need to learn algorithms. Learning algorithms improves your problem solving skills by revealing design patterns in programming. In this tutorial, you will learn how to code the Greatest Common Divisor algorithm."
keywords: ['algorithm', 'Greatest Common Divisor', 'gcd' 'javascript', 'python']
---


![ Illustration of Greatest Common Divisor ](./jarednielsen-algorithm-greatest-common-divisor.png)


If you want to learn how to code, you need to learn algorithms. Learning algorithms improves your problem solving skills by revealing design patterns in programming. In this tutorial, you will learn how to code the Greatest Common Divisor algorithm in JavaScript _and_ Python.


---

![A is for Algorithms](./jarednielsen-algorithms.png)
Give yourself an A. Grab your copy of [A is for Algorithms](https://gum.co/algorithms)

---


## Retrieval Practice

Retrieval practice is the surest way to solidify any new learning. Attempt to answer the following questions before proceeding:

* What is the modulo operator?  

* How does the swap algorithm work? 

* What is a greatest common divisor? 


### What Is The Modulo Operator?

TODO


### How Does The Swap Algorithm Work? 

TODO


### What Is A Greatest Common Divisor? 

TODO


## Let's Get Meta

Ask yourself the following questions and keep them back of mind as you proceed:

* Why do I need to know this?

* What problem(s) does the Greatest Common Divisor algorithm solve? 

* TODO


## How to Code the Greatest Common Divisor Algorithm 

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

2, 1

What's the GCD? 

1

If one of our integers is 1, then the GCD can only be 1. 

And if our smallest integer is either 2 and 3, then the GCD can only be 2 or 3, respectively.  

So let's use larger composite numbers to make things interesting. 

What's the GCD of 6 and 4? 

2

Because `2 * 2 = 4` and `2 * 3 = 6`. 

What's the GCD of 8 and 4? 

Because `1 * 4 = 4` and `2 * 4 = 8`. 

I feel a pattern emerging. Let's start mapping this out in a table: 
| n     | m     | GCD   |
| ---   | ---   | ---   |
| 6     | 4     | 2     |
| 8     | 4     | 4     |
| 10    | 4     | 2     |
| 12    | 4     | 4     |
| 14    | 4     | 2     |
| 16    | 4     | 4     |

Do you see a pattern? 

The GCD is greater when `n` is a multiple of `m`. 

For example, 8 is a multiple of 4 and the GCD is 4.

But 6 is not a multiple of 4, so the GCD is only 2. 

How do we programmatically get this number? 

What is the opposite of multiplication? 

If we divide 6 by 4, the quotient is 1. 

And the remainder is... 2! 

How do we calculate remainders? 

With the modulo operator. 

Let's try it! We can calculate the GCD of 6 & 4 like so: 
```
6 % 4 = 2
```


TODO 


```
INPUT n
INPUT m

SET r

IF THE REMAINDER of n DIVIDED BY m IS GREATER THAN 0
    SET r EQUAL TO THE REMAINDER OF n DIVIDED BY m
    
    ...

RETURN r
```


But if we try the same calculation with 8 and 4, the remainder is 0. 
```
8 % 4 = 0
```





We need to repeatedly calculate the modulo of the two integers 




TODO 
```
INPUT n
INPUT m

WHILE m IS GREATER THAN 0
    SET r TO m
    SET m TO THE REMAINDER of n DIVIDED BY m
    SET n EQUAL TO r

RETURN n
```



### Execute the Plan

Now it's simply a matter of translating our pseudocode into the syntax of our programming language. 


#### How to Code the Greatest Common Divisor Algorithm in JavaScript

Let's start with JavaScript...
```js
const gcd = (n, m) => {
    while (m)  {
      let r = m;
      m = n % m;
      n = r;
    }
    return n;
}
```



#### How to Code the Greatest Common Divisor Algorithm in Python

Now let's see it in Python...

```py
TODO
```

### Evaluate the Plan

Can we do better? 

TODO


#### What is the Big O Of Greatest Common Divisor?

If you want to learn how to calculate time and space complexity, pick up your copy of [The Little Book of Big O](https://gum.co/big-o)


## Reflection

Remember those _meta_ questions we asked at the outset? Let’s make it stick and answer them now!

* Why do I need to know this?

* What problem(s) does Greatest Common Divisor solve? 

* TODO


### Why Do I Need to Know This? 

TODO
This is the [Euclidean algorithm](https://en.wikipedia.org/wiki/Euclidean_algorithm), which, according to Donald Knuth, is the grandaddy of the algorithms because: 

> it is the oldest nontrivial algorithm that has survived to the present day.




### What Problem(s) Does the Greatest Common Divisor Algorithm Solve? 

TODO


### TODO

TODO


## A is for Algorithms

![A is for Algorithms](./jarednielsen-algorithms.png)
Give yourself an A. Grab your copy of [A is for Algorithms](https://gum.co/algorithms)



