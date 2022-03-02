---
title: "Learn How to Code the Smallest Divisor of a Whole Number Algorithm"
date: "2022-03-11"
description: "If you want to learn how to code, you need to learn algorithms. Learning algorithms improves your problem solving skills by revealing design patterns in programming. In this tutorial, you will learn how to code the smallest divisor of a whole number"
keywords: ['algorithm', 'smallest divisor ', 'javascript', 'whole number', 'python']
---


![ Illustration of a Large Duck Being Divided by a Smaller Duck ](./jarednielsen-algorithm-smallest-divisor.png)


If you want to learn how to code, you need to learn algorithms. Learning algorithms improves your problem solving skills by revealing design patterns in programming. In this tutorial, you will learn how to code the smallest divisor of a whole number in JavaScript _and_ Python.


---

![A is for Algorithms](./jarednielsen-algorithms.png)
Give yourself an A. Grab your copy of [A is for Algorithms](https://gum.co/algorithms)

---


## Retrieval Practice

Retrieval practice is the surest way to solidify any new learning. Attempt to answer the following questions before proceeding:

* What's a whole number? 

* What's a prime number?

* What's a square root? 


### What's a Whole Number? 

A whole number is a positive number without fraction or decimal. For example, `0`, `64`, and `2048` are all whole numbers, whereas ``-1`, `2/3`, and `3.14` are not. 


### What's a Prime Number? 

A prime is a number greater than 1 that is not the product of two smaller numbers. To say it another way, a prime is a number greater than 1 that is only divisible by 1 and itself. For example, `7` is a prime number because it is the product of `1` and `7` and only `1` and `7`. There are no other whole numbers greater than 1 that result in a product of `7`. The only even prime is `2`. 


### What's a Square Root? 

The square root of a number is the factor of a number that results in the number when multiplied by itself. For example, the square root of `16` is `4` because `4 x 4 = 16`


## Let's Get Meta

Ask yourself the following questions and keep them back of mind as you proceed:

* Why do I need to know this?

* What is the relationship between mathematics and programming?


## How to Code the Smallest Divisor of a Whole Number Algorithm in JavaScript 

[Programming is problem solving](https://jarednielsen.com/programming-problem-solving/). There are four steps we need to take to solve any programming problem: 

1. Understand the problem

2. Make a plan

3. Execute the plan

4. Evaluate the plan


### Understand the Problem

To understand our problem, we first need to define it. Let’s reframe the problem as acceptance criteria:

```md
GIVEN a whole number
WHEN I request the smallest divisor
THEN I am returned a whole number greater than 1
```

That’s our general outline. We know our input conditions (a whole number) and our output requirements (a whole number greater than 1), and our goal is to calculate the smallest divisor.

Let’s make a plan!


### Make a Plan

Let’s revisit our computational thinking heuristics as they will aid and guide is in making a plan. They are: 

* Decomposition

* Pattern recognition

* Abstraction

* Algorithm


### Decomposition

Let's use 12 as our input. You probably already know the answer, but it's a manageable number while we think through our approach and write pseudocode. 

What's the smallest problem we can solve? 

If our function must return a whole number greater than 1, the smallest problem can't be 1. Maybe the first thing we need to do is ensure that we don't waste time parsing a number less than or equal to 1? 

```md
INPUT n

IF n IS LESS THAN OR EQUAL TO 1
    RETURN "ENTER A NUMBER GREATER THAN 1"
```

What's our next smallest problem? 

2!

```md
INPUT n

IF n IS LESS THAN OR EQUAL TO 1
    RETURN "ENTER A NUMBER GREATER THAN 1"

IF n IS EQUAL TO 2
    RETURN 2;
```

We _could_ proceed with this brute force approach and write a conditional for _every_ number, but that's not how programmer's think. How can we do better? 

What do we know about even numbers? Their smallest divisor is always 2! How can we adapt the pseudocode above to address this? We can use the modulo operator to check if the remainder of `n` divided by 2 is equal to 0:

```md
INPUT n

IF n IS LESS THAN OR EQUAL TO 1
    RETURN "ENTER A NUMBER GREATER THAN 1"

ELSE IF n MOD 2 IS EQUAL TO 0
    RETURN 2;
```

If we were to "run" this algorithm, what numbers would be checked?

Let's map it out in a table: 

| Integer   | Check?|
| ---       | ---   |
| 1         | x     |
| 2         | x     |
| 3         |       |
| 4         | x     |
| 5         |       |
| 6         | x     |
| 7         |       |
| 8         | x     |
| 9         |       |
| 10        | x     |
| 11        |       |
| 12        | x     |
| n         | ...   |     


### Pattern Recognition 

What's the pattern we see?

If we map this out in a table, we can see we quickly checked more than half of the numbers in our sequence (all the even numbers plus 1), thus our remaining numbers are all odd.

Our next smallest problem is 3. We _know_ that the smallest divisor of 3 is itself (and 1). We _could_ set up another conditional statement checking if the remainder of `n` divided by 3 is equal to 0, like so...

```md
INPUT n

IF n IS LESS THAN OR EQUAL TO 1
    RETURN "ENTER A NUMBER GREATER THAN 1"

ELSE IF n MOD 2 IS EQUAL TO 0
    RETURN 2;

ELSE IF n MOD 3 IS EQUAL to 0
    RETURN 3;
```

Looking ahead, what do we see? We would need to do the same for 5, 7, and 11. But why not 9? 

Because 9 is divisible by 3. 

What's the pattern established by 5, 7, and 11? 

They're prime!

How do we increment by 2 with odd (prime) numbers? 

We know we need to check each of the odd values, but we don't want to write a conditional for all of them. 

Let's increment by `2` starting with `3`. 

```md
INPUT n

IF n IS LESS THAN OR EQUAL TO 1
    RETURN "ENTER A NUMBER GREATER THAN 1"

ELSE IF n MOD 2 IS EQUAL TO 0
    RETURN 2;

ELSE
    SET d TO 3

    WHILE n MOD d IS NOT EQUAL to 0

        d = d + 2

        IF n MOD d IS EQUAL to 0
            RETURN d;
        ELSE
            RETURN n;
```

If we return `n`, then we know the number is prime

This is terribly inefficient, though. In a worst case scenario, we would iterate nearly half of the possiblities to return a value. How can we do better?

Let's look at our table again. Is there another pattern? 

| Integer   | Check?|
| ---       | ---   |
| 1         | x     |
| 2         | x     |
| 3         |       |
| 4         | x     |
| 5         |       |
| 6         | x     |
| 7         |       |
| 8         | x     |
| 9         |       |
| 10        | x     |
| 11        |       |
| 12        | x     |
| n         | ...   |


3 is a divisor of 6, 9, and 12. We already checked off 6 and 12, though. What's the relationship between 3 and 9? 

3 is the square root of 9!

What's the square root of 12? 

`3.46410161514`

If we calculate the square root of `n`, we can see that we quickly eliminate the need to check _every_ odd number between 3 and `n`. We only need to continue iterating _while_ `d` is less than the square root of `n`. 

Let's test this assumption before we proceed. 3's and 5's are easy to work with. How about a multiple of 7? How about 77? It's the product of two prime numbers, so we won't catch it in our initial conditional statements. 

The square root of 77 is 8.77496438739.

So on our first iteration, `d` is equal to 3. 

77 is not divisible by 3 and 3 is less than 8.77496438739. 

So we add 2 to 3. 

77 is not divisible by 5 and 5 is less 8.77496438739. 

So we add 2 to 5. 

77 _is_ divisible by 7!

Let's update our pseudocode...


```md
INPUT n

IF n IS LESS THAN OR EQUAL TO 1
    RETURN "ENTER A NUMBER GREATER THAN 1"

ELSE IF n MOD 2 IS EQUAL TO 0
    RETURN 2;

ELSE
    SET d TO 3

    SET r TO THE SQUARE ROOT OF n

    WHILE n MOD d IS NOT EQUAL to 0 AND d IS LESS THAN r

        d = d + 2

        IF n MOD d IS EQUAL to 0
            RETURN d;
        ELSE
            RETURN n;
```


### Execute the Plan

Now it's just a matter of translating our pseudocode into syntax. Let's start with JavaScript...


#### How to Code the Smallest Divisor Algorith in JavaScript

This is more or less a 1:1 translation of our pseudocode. Note that we are using the `Math` object and calling the `sqrt()` method. 

```js
const smallestDivisor = n => {
    if (n <= 1) {
        return "Enter a number greater than 1";
    } else if (n % 2 == 0) {
        return n
    } else {
        let r = Math.sqrt(n);

        let d = 3;
        
        while ((n % d != 0) && (d < r)) {
            d = d + 2;
        }

        if (n % d == 0) {
            return d;
        } else {
            return n;
        }
    }
}
```

#### How to Code the Smallest Divisor Algorith in Python

Unlike our JavaScript above, we need to import the `math` module. Otherwise, the two functions are nearly identical. 

```py
import math 

def smallest_divisor(num):
    if num <= 1:
        return "Enter a number greater than 1"
    elif num % 2 == 0: 
        return num
    else:
        r = math.sqrt(num)
        
        d = 3

        while num % d != 0 and d < r:
            d = d + 2
        
        if num % d == 0:
            return d 
        else: 
            return num
```

### Evaluate the Plan

Can we do better? 

This is pretty good. We could refactor some of the conditionals to be more concise, but at the cost of legibility without performance gain. 


#### What is the Big O Of Smallest Divisor?

If you want to learn how to calculate time and space complexity, pick up your copy of [The Little Book of Big O](https://gum.co/big-o)


## Reflection

Remember those _meta_ questions we asked at the top? Let’s make it stick and answer them now!

* Why do I need to know this?

* What problem(s) does smallest divisor solve? 

* What is the relationship between mathematics and programming?


### Why Do I Need to Know This? 

It's not every day you'll be calculating the smallest divisor, but knowing it will help when you encounter resource allocation problems. Perhaps more importantly, _this_ smallest divisor algorithm combines several strategies for designing efficient algorithms. 


### What is the Relationship Between Mathematics and Programming?

You don't need to be a math whiz to be a good programmer, but there are a number of concepts, such as prime and square root, that will help you write more efficient algorithms. 


## A is for Algorithms

![A is for Algorithms](./jarednielsen-algorithms.png)
Give yourself an A. Grab your copy of [A is for Algorithms](https://gum.co/algorithms)


