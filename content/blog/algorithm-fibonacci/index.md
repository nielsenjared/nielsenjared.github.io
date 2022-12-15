---
title: "Learn How to Code the Sum of Fibonacci Sequence Algorithm"
date: "2022-TODO-TODO"
description: "If you want to learn how to code, you need to learn algorithms. Learning algorithms improves your problem solving skills by revealing design patterns in programming. In this tutorial, you will learn how to code the TODO"
keywords: ['algorithm', 'Fibonacci', 'javascript', 'python']
---


![ Illustration of Fibonacci ](./jarednielsen-algorithm-fibonacci.png)


If you want to learn how to code, you need to learn algorithms. Learning algorithms improves your problem solving skills by revealing design patterns in programming. In this tutorial, you will learn how to code the TODO in JavaScript _and_ Python.


---

![A is for Algorithms](./jarednielsen-algorithms.png)
Give yourself an A. Grab your copy of [A is for Algorithms](https://gum.co/algorithms)

---


## Retrieval Practice

Retrieval practice is the surest way to solidify any new learning. Attempt to answer the following questions before proceeding:

* What is a Fibonacci sequence? 

* TODO

* TODO 


### What is a Fibonacci Sequence?

Fibonacci is a sequence of numbers where each number is the sum of the preceding two.

It starts like this…
```
0 1 1 2 3 5 8 13 21 34 55 89 144…
```

TODO ADD THE TABLE


### TODO #2

TODO


### TODO #3

TODO


## Let's Get Meta

Ask yourself the following questions and keep them back of mind as you proceed:

* Why do I need to know this?

* What problem(s) does TODO solve? 

* TODO


## How to Code the Fibonacci Algorithm 

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

1

If we pass 1 to our `fibonacci` function, we want it to return the first number in the sequence, which is 0.

Let's pseudocode this:
```
INPUT n

IF n IS EQUAL TO 1
    RETURN 0
```

What's the next smallest problem? 

2

If we pass 2 to our `fibonacci` function, we want it to return the first number in the sequence, which is 1.

Let's update our pseudocode:
```
INPUT n

IF n IS EQUAL TO 1
    RETURN 0

IF n IS EQUAL TO 2
    RETURN 1
```

What's the next smallest problem? 

3

If we look at our Fibonacci sequence again, we can see that the third value is also 1. 
```
0 1 1 2 3 5 8 13 21 34 55 89 144…
```

TODO 

We're in luck! We don't need to look for a pattern because we already know it! 

To calculate the third value in the Fibonacci sequence, we take the first value, 0, and add the second value, 1, to return the third value, which, in this case, is also 1. 

Cool beans.

Now what? 

It's time to get abstract! 

TODO 



Let's pseudocode this:
```
INPUT n

IF n IS EQUAL TO 1
    RETURN 0

IF n IS EQUAL TO 2
    RETURN 1

SET x TO 0
SET y TO 1

RETURN x + y
```

TODO 


```
INPUT n

IF n IS EQUAL TO 1
    RETURN 0

IF n IS EQUAL TO 2

SET x TO 0
SET y TO 1
SET sum TO 0

FOR EACH VALUE, i, BETWEEN 2 AND n
    SET sum TO x + y
    SET x TO y
    SET y TO sum

RETURN sum
```

We pass our function a postiive integer, `n`. We initialize our variables. assigning `x` a value of 0, `y` a value of 1, and `temp` a value of 0. We then enter our `while` loop. While `n` is greater than or equal to 0, we assign the value of `x` to `temp` and reassign `x` the value of `x + y`. This generates the next number in our Fibonacci squence. We then reassign `y` the value stored in `temp` and subtract 1 from `n`. When the condition of our `while` loop is no longer met, we return `y`. 


### Execute the Plan

Now it's simply a matter of translating our pseudocode into the syntax of our programming language. Let's start with JavaScript...


#### How to Code the TODO Algorithm in JavaScript

TODO
```js
const fibonacci = (n) => {
  
  if (n == 1) {
    return 0;
  }
  
  if (n == 2) {
    return 1;
  }
  
  let x = 0;
  let y = 1; 
  let sum;
  
  for (let i = 2; i < n; i++) {
    sum = x + y;
    x = y;
    y = sum;
  }
  
  return sum;
}
```

Now let's see it in Python...


#### How to Code the TODO Algorithm in Python

TODO
```py
TODO
```

### Evaluate the Plan

Can we do better? 

TODO


#### What is the Big O Of TODO?

If you want to learn how to calculate time and space complexity, pick up your copy of [The Little Book of Big O](https://gum.co/big-o)


## Reflection

Remember those _meta_ questions we asked at the outset? Let’s make it stick and answer them now!

* Why do I need to know this?

* What problem(s) does TODO solve? 

* TODO


### Why Do I Need to Know This? 

TODO


### What Problem(s) Does TODO Solve? 

TODO


### TODO

TODO


## A is for Algorithms

![A is for Algorithms](./jarednielsen-algorithms.png)
Give yourself an A. Grab your copy of [A is for Algorithms](https://gum.co/algorithms)



