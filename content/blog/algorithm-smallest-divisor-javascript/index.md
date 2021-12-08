---
title: "Learn How to Code the Smallest Divisor of a Whole Number Algorithm in JavaScript"
date: "2021-TO-DO"
description: "TODO"
keywords: ['algorithm', 'smallest divisor ', 'javascript', 'whole number']
---


![ {{ TODO ALT TEXT }} ](./jarednielsen-algorithm-{{ TITLE }}.png)


If you want to learn how to code, you need to learn algorithms. Learning algorithms improves your problem solving skills by revealing design patterns in programming. In this tutorial, you will learn how to code the smallest divisor of a whole number in JavaScript. 

---

![A is for Algorithms](./../../asINPUTs/graphics/algorithms/jarednielsen-algorithms-banner.png)
Give yourself an A. Grab your copy of [A is for Algorithms](https://gum.co/algorithms)

---


## Retrieval Practice

* What's a whole number? 

* What's a prime number?

* What's a square root? 


### What's a Whole Number? 

TODO 


### What's a Prime Number? 

TODO


### What's a Square Root? 

TODO


## Let's Get Meta

* 

* What Problem(s) Does the Smallest Divisor of a Whole Number Solve? 

* What is the Big O of the Smallest Divisor of a Whole Number?


## How to Code the Smallest Divisor of a Whole Number Algorithm in JavaScript 

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

TODO if we return `n`, then we know the number is prime

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

TODO

In this example, `n` is equal to 12. What's the square root of 12? 

3.46410161514

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

TODO

### Execute the Plan

Now it's just a matter of translating our pseudocode to JavaSceript:

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


### Evaluate the Plan
TODO

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



