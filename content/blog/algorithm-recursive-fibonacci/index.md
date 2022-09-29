---
title: "Learn How to Code the Recursive Fibonacci Algorithm"
date: "2022-TODO-TODO"
description: "If you want to learn how to code, you need to learn algorithms. Learning algorithms improves your problem solving skills by revealing design patterns in programming. In this tutorial, you will learn how to code the recursive Fibonacci sequence."
keywords: ['algorithm', 'recursive fibonacci', 'recursive', 'fibonacci', 'javascript', 'python']
---


![ TODO ](./jarednielsen-algorithm-TODO.png)


If you want to learn how to code, you need to learn algorithms. Learning algorithms improves your problem solving skills by revealing design patterns in programming. In this tutorial, you will learn how to code the recursive Fibonacci sequence in JavaScript _and_ Python.


---

![A is for Algorithms](./jarednielsen-algorithms.png)
Give yourself an A. Grab your copy of [A is for Algorithms](https://gum.co/algorithms)

---


## Retrieval Practice

Retrieval practice is the surest way to solidify any new learning. Attempt to answer the following questions before proceeding:

* What is a Fibonacci Sequence? 

* What is Recursion?

* What's the Recursive Fibonaccidifference between iteration and recursion? 


### What is a Fibonacci Sequence? 

[Fibonacci](https://en.wikipedia.org/wiki/Fibonacci_number) is a sequence of numbers where each number is the sum of the preceding two.

It starts like this…
```
0 1 1 2 3 5 8 13 21 34 55 89 144…
```

We can map it out in a table, like so: 

| Preceding numbers | Sum   |
| ---               | ---   |
| 0 + 1             | 1     |
| 1 + 1             | 2     |
| 1 + 2             | 3     |
| 2 + 3             | 5     |
| 3 + 5             | 8     |
| 5 + 8             | 13     |
| 8 + 13             | 21    |
| 13 + 21             | 34    |
| 21 + 34             | 55    |
| 34 + 55             | 89    |
| 55 + 89             | 144    |


And so on...

Before we get to recursion, let’s look at an iterative solution to the problem in JavaScript.

```js
const fiberative = n => {
   let arr = [0, 1];
   for (let i = 2; i < n + 1; i++){
     arr.push(arr[i - 2] + arr[i -1])
   }
  return arr[n];
};
```

### What is Recursion? 

TODO


### What's the Difference Between Iteration and Recursion? 

TODO


## Let's Get Meta

Ask yourself the following questions and keep them back of mind as you proceed:

* Why do I need to know this?

* What problem(s) does TODO solve? 

* TODO


## How to Code the Recursive Fibonacci Algorithm 

[Programming is problem solving](https://jarednielsen.com/programming-problem-solving/). There are four steps we need to take to solve any programming problem: 

1. Understand the problem

2. Make a plan

3. Execute the plan

4. Evaluate the plan


### Understand the Problem

To understand our problem, we first need to define it. Let’s reframe the problem as acceptance criteria:

```md
GIVEN a number, _n_
WHEN I call a recursive Fibonacci function
THEN I am returned the _nth_ member of the Fibonaccis sequence
```

That’s our general outline. We know our input conditions, an integer _n_, and our output requirements, the _nth_ member of the Fibonacci sequence, and our goal is to calculate this recursively.

Let’s make a plan!


### Make a Plan

Let’s revisit our computational thinking heuristics as they will aid and guide is in making a plan. They are: 

* Decomposition

* Pattern recognition

* Abstraction

* Algorithm design

The first step is decomposition, or breaking our problem down into smaller problems. What's the smallest problem we can solve? 

_0_

If _n_ is equal to 0, what is the equivalent Fibonacci number? 

_0_

Let's map out the first 10 numbers so we're clear on the goal. 

| n     | nth   |
| ---   | ---   |
| 0     | 0     |
| 1     | 1     |
| 2     | 1     |
| 3     | 2     |
| 4     | 3     |
| 5     | 5     |
| 6     | 8     |
| 7     | 13    |
| 8     | 21    |
| 9     | 34    |
| 10    | 55    |


Let's pseudo/hardcode 0: 

```
FUNCTION fibonacci
    INPUT n

    IF n IS EQUAL TO 0 
        RETURN n
```

What's the next smallest problem? 

_1_

If we refer to our table above, we see that the result of _n = 1_ will return _1_. We can simply add this to our conditional: 
```
FUNCTION fibonacci
    INPUT n

    IF n IS EQUAL TO 0 OR n IS EQUAL TO 1
        RETURN n
```

Hey! Look at that. We just establisehd our base case. Now we need to define our recursive case. 

Let's look at the next smallest problem, _2_.

If our input is _2_, what do we expect the return value to be? 

_1_


TODO 
What is _1_ in relation to _2_? 




TODO 
Let's look for a pattern. 

In order to return a value of 5 when _n_ is equal to 5, we know we need to add 3 and 2, the numbers that precede 5 in the Fibonacci sequence. 



Now we can make the leap to abstraction: the recursive Fibonacci, or _f()_ of _n_ can be expressed as _f(n - 1) + f(n - 2)_. We can translate this to pseudocode: 
```
FUNCTION fibonacci
    INPUT n

    IF n IS EQUAL TO 0 OR n IS EQUAL TO 1
        RETURN n
    
    RETURN fibonacci(n - 1) + fibonacci(n - 2)
```


### Execute the Plan

Now it's simply a matter of translating our pseudocode into the syntax of our programming language. Let's start with JavaScript...


#### How to Code the Recursive Fibonacci Algorithm in JavaScript

TODO
```js
const fibonaive = n => {
 if (n == 0 || n == 1) {
   return n;
 }
 
 return fibonaive(n - 1) + fibonaive(n - 2);
};
```

Now let's see it in Python...


#### How to Code the Recursive Fibonacci Algorithm in Python

TODO
```py
TODO
```

### Evaluate the Plan

Can we do better? 

We sure can! 

Our solution above is referred to as a "naive" implementation of Fibonacci. 

Why is it naive? Because the runtime is really bad.


#### What is the Big O Of Recursive Fibonacci Sequence?

It’s O(2^n).

(Actually, it’s O(1.6^n), but who’s counting?)

If you want to learn how to calculate time and space complexity, pick up your copy of [The Little Book of Big O](https://gum.co/big-o)

Take a look at this diagram of our recursive call branches.

TODO Recursive Fibonacci Tree

Why is this algorithm inefficient?

Overlapping subproblems! We solve the same problems repeatedly in our branches.

TODO graphic

How many times do we solve f(0)?

How many times do we solve f(1)?

How many times do we solve f(2)?

How many times do we solve f(3)?

The answer to all of the above is: too many!

What's the solution? 

Dynamic programming! 

TODO



## Reflection

Remember those _meta_ questions we asked at the outset? Let’s make it stick and answer them now!

* Why do I need to know this?

* What problem(s) does TODO solve? 

* TODO


### Why Do I Need to Know This? 

Fibonacci algorithms are standard challenges for beginners and technical interviews. There are many ways to solve a Fibonacci algorithm and each reveals the depth of your knowledge.

TODO 


### What Problem(s) Does TODO Solve? 

TODO


### TODO

TODO


## A is for Algorithms

![A is for Algorithms](./jarednielsen-algorithms.png)
Give yourself an A. Grab your copy of [A is for Algorithms](https://gum.co/algorithms)



