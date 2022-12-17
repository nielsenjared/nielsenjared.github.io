---
title: "Learn How to Code the Greatest Common Divisor Algorithm"
date: "2022-04-08"
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

In programming, the modulo operation returns the remainder of a division operation.


### How Does The Swap Algorithm Work? 

The swap algorithm uses a temporary variable to store the value of one of the variables to swapped and the reassigns the values accordingly. 


### What Is A Greatest Common Divisor? 

The greatest common divisor (gcd) of two integers is the largest integer that can be used to divide the two integers without a remainder. 


## Let's Get Meta

Ask yourself the following questions and keep them back of mind as you proceed:

* Why do I need to know this?

* What problem(s) does the Greatest Common Divisor algorithm solve? 

* Do I need to know mathematics?


## How to Code the Greatest Common Divisor Algorithm 

[Programming is problem solving](https://jarednielsen.com/programming-problem-solving/). There are four steps we need to take to solve any programming problem: 

1. Understand the problem

2. Make a plan

3. Execute the plan

4. Evaluate the plan


### Understand the Problem

To understand our problem, we first need to define it. Let’s reframe the problem as acceptance criteria:

```md
GIVEN two positive integers, n and m
WHEN I pass them to the GCD function
THEN I am returned the greatest common divisor of n and m
```

That’s our general outline. We know our input conditions, two positive integers, `n` and `m`, and our output requirements, the greatest common divisor of `n` and `m`. 

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

The GCD is a larger value when `n` is a multiple of `m`. For example, 8 is a multiple of 4 and the GCD is 4. But 6 is not a multiple of 4, so the GCD is only 2. 

How do we programmatically get this number? 

What is the opposite of multiplication? 

If we divide 6 by 4, the quotient is 1. 

And the remainder is... 2! 

How do we calculate remainders? 

With the modulo operator! 

We can calculate the GCD of 6 and 4 with the modulo operator: 
```
6 % 4 = 2
```

But if we try the same calculation with 8 and 4, the remainder is 0. 
```
8 % 4 = 0
```

What if the values were reversed? 
```
4 % 8 = 4
```

That works! 

But this doesn't! 
```
4 % 6 = 4
```

What do we know about our two integers? 

The _gcd_ of the two integers is less than or equal to the smaller value. In other words, the _gcd_ of two integers is not greater than the smaller of the two values. 

Let's try pseudocoding a brute force approach: 
```
INPUT n
INPUT m

IF THE REMAINDER OF n DIVIDED by m IS 0
  RETURN m
ELSE IF THE REMAINDEER OF m DIVIDED BY n IS 0
  RETURN n
ELSE IF n > m
  RETURN THE REMAINDER OF n DIVIDED BY m
ELSE
  RETURN THE REMAINDER OF m DIVIDED BY n
```

This will work with smaller values, such as 4, 6, and 8. But will it work with larger values? Let's try 12 and 8.
```
12 % 8 = 4
```

So far so good. But...
```
8 % 12 = 8
```

Where have we seen this or something like it before? 

If only there was some way we could swap the values...

We simply need to declare a variable to temporarily store the current value of one of our variables while we calculate the remainder of both of them. Then, if we don't get the results we want, we need to perform the modulo operation again. In other words, we need to iterate. 

It's time to get abstract! 

Which approach to iteration do we want to use? 

Because we are working towards a smaller number, lets use a `while` loop. 

What's the condition for our `while` loop? 

We need to continue to calculate the remainder of `n` divided by `m` until the modulo operation returns 0. We don't know which value will be greater, so we can just choose one. Let's use `m`. 

```
INPUT n
INPUT m

WHILE m IS GREATER THAN 0
  ...
```

Now we just need to do the old switcheroo. To do that, we need to declare a temporary variable. Let's call it `r`. 
```
INPUT n
INPUT m

WHILE m IS GREATER THAN 0
    SET r TO m
    ...
```

Because `m` is the condition of our `while` loop, we want reassign it the value of our modulo operation. 

```
INPUT n
INPUT m

WHILE m IS GREATER THAN 0
    SET r TO m
    SET m TO THE REMAINDER of n DIVIDED BY m
    ...
```

The last thing we need to do is perform the swap. We need to reassign `n` the previous value of `m`, which is not stored in `r`. When `m` is no longer greater than 0, we return `n`. 

```
INPUT n
INPUT m

WHILE m IS GREATER THAN 0
    SET r TO m
    SET m TO THE REMAINDER of n DIVIDED BY m
    SET n EQUAL TO r

RETURN n
```

Let's review this. We input two positive integers, `n` and `m`. We choose one of the values for our condition. It doesn't matter which one, but it can't be the same value we are returning. We'll choose `m`. While `m` evaluates to `true`, meaning it is not 0, we declare a new variable, `r`, and assign `r` the value of `m`. We then reassign `m` the value of `m % n` and reassign `n` the value of `n = r`. When `m` is no longer greater than 0, we exit the `while` loop and return `n`. 


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
def gcd(n, m):
    while (m > 0):
        r = m
        m = n % m
        n = r
    
    return n
```


### Evaluate the Plan

Can we do better? 

Maybe. We'll look at a recursive implementation of the greatest common denominator algorithm later in this series. 


#### What is the Big O Of Greatest Common Divisor?

If you want to learn how to calculate time and space complexity, pick up your copy of [The Little Book of Big O](https://gum.co/big-o)


## Reflection

Remember those _meta_ questions we asked at the outset? Let’s make it stick and answer them now!

* Why do I need to know this?

* What problem(s) does Greatest Common Divisor solve? 

* Do I need to know mathematics? 


### Why Do I Need to Know This? 

This is the [Euclidean algorithm](https://en.wikipedia.org/wiki/Euclidean_algorithm), which, according to Donald Knuth, is the grandaddy of the algorithms because: 

> it is the oldest nontrivial algorithm that has survived to the present day.




### What Problem(s) Does the Greatest Common Divisor Algorithm Solve? 

Calculating the greatest common denominator, obviously! 

But why would we do that? Resource distribution, meaning, how can we most effectively divide something up to minimize waste or redundancy. 

The GCD is also used in the [RSA](https://en.wikipedia.org/wiki/RSA_(cryptosystem)) public-key cryptosystem. 


### Do I Need To Know Mathematics To Be A Programmer? 

No! You obviously need to know the basic operations, but you don't need to be a maths whiz to be a good programmer. It's more important to be able to think through a problem by breaking it down, recognizing patterns, forming abstractions, and designing a solution. 


## A is for Algorithms

![A is for Algorithms](./jarednielsen-algorithms.png)
Give yourself an A. Grab your copy of [A is for Algorithms](https://gum.co/algorithms)



