---
title: "Learn How to Code the Swap Algorithm in JavaScript"
date: "2021-TO-DO"
description: "TODO"
keywords: ['algorithm', 'swap', 'javascript']
---


![ {{ TODO ALT TEXT }} ](./jarednielsen-algorithm-{{ TITLE }}.png)


If you want to learn how to code, you need to learn algorithms. Learning algorithms improves your problem solving skills by revealing design patterns in programming. In this tutorial, you will learn how to code the bubble sort algorithm in JavaScript. 

---

![A is for Algorithms](./../../assets/graphics/algorithms/jarednielsen-algorithms-banner.png)
Give yourself an A. Grab your copy of [A is for Algorithms](https://gum.co/algorithms)

---


## Retrieval Practice

* TODO

* TODO

* TODO 


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

> GIVEN two variables
> WHEN TODO
> THEN the values stored in the two variables are exchanged

That’s our general outline. We know our input conditions (two variables) and our output requirements (exchanged values between the variables), and our goal is to swap them.

Let’s make a plan!

### Make a Plan

Let’s revisit our computational thinking heuristics as they will aid and guide is in making a plan. They are: 

* Decomposition

* Pattern recognition

* Abstraction

* Algorithm

TODO
You might already be familiar with this algorithm and/or you might find the next few steps rudimentary. Bear with me as we establish our computational thinking framework and our approach to pseudocode. 


#### Decomposition

Let's break this problem down and start by declaring two variables, `x`, and `y`. Each of these variables stores a value. We need values to swap, so let's just say...
```md
x = 123
y = 456
```

Our goal is to swap the value stored in `x`, 123, with the value stored in `y`, 456. When we are decomposing a problem, we want to break the problem down into the the smallest problem we can solve. So let's just focus on `x`. How do we move the value stored in `y` to the variable `x`?

Easy. 
```md
x = y
```

How would we pseudocde this? 
```md
SET x TO y
```

How do we move the value stored in `x` to `y`? Your initial thought might be to do something like this
```md
x = y
y = x
```

Our pseudocode would look like this...
```md
SET x TO y
SET y TO x
```

If we 'run' this algorithm, what's the result? 
```md
x = 456
y = 456
```

What's happening? 

Following our control flow, we are  _overwriting_ the value of `x` with the value stored in `y`, which is 456. When we then assign the value of `x` to the `y`, we are simply reassigning the value of 456. 


#### Pattern Recognition

Let's take a look at our pseudocode again...
```md
SET x TO y
SET y TO x
```

What's the pattern? 

Variable assignment.

If only we could set the value of `x` aside, _temporarily_, while we performed our swap...


#### Abstraction

We're already working with abstractions using variables such as `x` and `y`, but we were thinking in terms of the specific value stored in those variables. In the _abstraction_ step of computational thinking, the value isn't important. Why doesn't the value matter? In this algorithm, we're more interested in _where_ the value is stored then _what_ the value is. 

Knowing that, we need to declare another variable that allows us to temporarily store one of the values we want to swap. Let's call it `temp`:

```md
SET temp TO x
SET x TO y
SET y TO temp
```


### Execute the Plan

The last step in our computational thinking heuristic is to translate our pseudode. 

```js
let x = 123;
let y = 456;
let temp = x;
x = y;
y = temp;
```

If we run this algorithm and log the values stored in `x` and `y`, the results are: 
```sh
456
123
```


### Evaluate the Plan

If `temp` was a value you were planning to update again, you may want to declare it without value assignment or assign a value of 0 to initialize it as a number.

```js
let x = 123;
let y = 456;
let temp; //or let temp = 0
temp = x;
x = y;
y = temp;
```

TODO alternate approaches to swap


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


