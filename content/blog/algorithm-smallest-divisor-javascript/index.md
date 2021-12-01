---
title: "Learn How to Code the Smallest Divisor of an Integer Algorithm in JavaScript"
date: "2021-TO-DO"
description: "TODO"
keywords: ['algorithm', 'smallest divisor ', 'javascript']
---


![ {{ TODO ALT TEXT }} ](./jarednielsen-algorithm-{{ TITLE }}.png)


If you want to learn how to code, you need to learn algorithms. Learning algorithms improves your problem solving skills by revealing design patterns in programming. In this tutorial, you will learn how to code the bubble sort algorithm in JavaScript. 

---

![A is for Algorithms](./../../asINPUTs/graphics/algorithms/jarednielsen-algorithms-banner.png)
Give yourself an A. Grab your copy of [A is for Algorithms](https://gum.co/algorithms)

---


## Retrieval Practice

* What's a whole number? 

* What's a prime number?

* What's the square root? 


### TODO BULLET #1

TODO 


### TODO BULLET #2

TODO


### TODO BULLET #3

TODO


## Let's Get Meta

* 

* What Problem(s) Does {{ TODO TITLE }} Solve? 

* What is the Big O of {{ TODO TITLE }}?


## How to Code the {{ TODO TITLE }} Algorithm in JavaScript 

[Programming is problem solving](https://jarednielsen.com/programming-problem-solving/). There are four steps we need to take to solve any programming problem: 

1. Understand the problem

2. Make a plan

3. Execute the plan

4. Evaluate the plan


### Understand the Problem

To understand our problem, we first need to define it. Let’s reframe the problem as acceptance criteria:

> GIVEN a whole number
> WHEN I request the smallest divisor
> THEN I am returned a whole number greater than 1

That’s our general outline. We know our input conditions (a whole number) and our output requirements (a whole number greater than 1), and our goal is to calculate the smallest divisor.

Let’s make a plan!

### Make a Plan

Let’s revisit our computational thinking heuristics as they will aid and guide is in making a plan. They are: 

* Decomposition

* Pattern recognition

* Abstraction

* Algorithm


### Decomposition

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

What do we know about even numbers? Their smallest divisor is always 2! How can we adapt the pseudocode above to address this? 

```md
INPUT n

IF n IS LESS THAN OR EQUAL TO 1
    RETURN "ENTER A NUMBER GREATER THAN 1"

ELSE IF n MOD 2 IS EQUAL TO 0
    RETURN 2;
```

If we map this out in a table, we can see we quickly checked more than half of the numbers in our sequence (all the even numbers plus 1).

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

Our remaining numbers are all odd.

TODO

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

TODO how do we increment by 2 with odd (prime) numbers? 
We know we need to check each of the odd values, but we don't want to write a conditional for all of them. 
TODO

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

TODO

This is terribly inefficient, though. In a worst case scenario, we would check nearly half of the possiblities to return a value. How can we do better?

Is there another pattern in our table? 

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


What else do we know about 3? 

It's the square root of 9!

TODO


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

TODO

### Execute the Plan

```js
const smallestDivisor = n => {
    if (n % 2 == 0) {
        return "2"
    } else {
        let r = Math.sqrt(n);

        let d = 3;
        
        while ((n % d != 0) && (d < r)) {
            d = d + 2;

            if (n % d == 0) {
                return d;
            } else {
                return 1;
            }
        }
    }
}
```



### Evaluate the Plan

```js
const smallestDivisor = n => {
    if (n <= 1) {
        return "Enter a number greater than 1";
    } else if (n % 2 == 0) {
        return "2"
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


## Reflection

* TODO

* What Problem(s) Does {{ TODO TITLE }} Solve? 

* What is the Big O of {{ TODO TITLE }}?


### TODO BULLET #1

TODO


### What Problem(s) Does {{ TODO TITLE }} Solve?

TODO 


### What is the Big O of Insertion Sort? 

TODO


## How to Code the {{ TODO }} Algorithm in JavaScript

TODO RECAP FOR SEO



