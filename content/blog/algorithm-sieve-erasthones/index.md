---
title: "Learn How to Code the Sieve of Erasthones Algorithm AKA Prime Number Generation"
date: "2022-TODO-TODO"
description: "If you want to learn how to code, you need to learn algorithms. Learning algorithms improves your problem solving skills by revealing design patterns in programming. In this tutorial, you will learn how to code the Sieve of Erasthones, or prime number generation."
keywords: ['algorithm', 'Sieve of Erasthones', 'javascript', 'python']
---


![ Sieve of Erasthones ](./jarednielsen-algorithm-sieve-erasthones.png)


If you want to learn how to code, you need to learn algorithms. Learning algorithms improves your problem solving skills by revealing design patterns in programming. In this tutorial, you will learn how to code the Sieve of Erasthones in JavaScript _and_ Python.


---

![A is for Algorithms](./jarednielsen-algorithms.png)
Give yourself an A. Grab your copy of [A is for Algorithms](https://gum.co/algorithms)

---


## Retrieval Practice

Retrieval practice is the surest way to solidify any new learning. Attempt to answer the following questions before proceeding:

* What's a prime number?

* What's a composite number? 

* TODO


### What's a Prime Number? 

TODO


### What's a Composite Number? 

TODO


### TODO #3

TODO


## Let's Get Meta

Ask yourself the following questions and keep them back of mind as you proceed:

* Why do I need to know this?

* What problem(s) does Sieve of Erasthones solve? 

* TODO


## Learn How to Code the Sieve of Erasthones Algorithm 

[Programming is problem solving](https://jarednielsen.com/programming-problem-solving/). There are four steps we need to take to solve any programming problem: 

1. Understand the problem

2. Make a plan

3. Execute the plan

4. Evaluate the plan


### Understand the Problem

To understand our problem, we first need to define it. Let’s reframe the problem as acceptance criteria:

```md
GIVEN a whole number, _n_, greater than 1
WHEN TODO
THEN I am returned a an array of the prime numbers between 1 and _n_
```

That’s our general outline. We know our input conditions, a whole number greater than 1, and our output requirements, an array of prime number between 1 and _n_, and our goal is to generate those prime numbers.

Let’s make a plan!


### Make a Plan

Let’s revisit our computational thinking heuristics as they will aid and guide is in making a plan. They are: 

* Decomposition

* Pattern recognition

* Abstraction

* Algorithm design

The first step is decomposition, or breaking our problem down into smaller problems. What's the smallest problem we can solve? 

`2`

Why not `1`? Because `1` is not a prime number, so we skip it. 


TODO 
```
INPUT n
SET primes EQUAL TO AN EMPTY ARRAY

IF n IS EQUAL TO 2
    PUSH n TO primes

RETURN primes
```

What's the _next_ smallest problem we can solve? `3`

TODO 

We might be tempted to take a brute force approach, and there are at least two:

1. Create a dataset of all the prime numbers and return all of the values below n.

2. Check if the remainder of each value in a series is equal to zero when divided by the previous values.

The first option isn't great because it defeats the purpose of programming! We would need an infinite dataset. That's a lot of data entry!

The second option would require us to perform an operation for every value in our series. If our input value was 100, we would need to perform 99 modulo operations in order to find all of the prime numbers.

🍻

Let's take a step back, or up, and look for a pattern. If our input, `n`, is 100, then the array of primes we want to return needs to contain this sequence:
```sh
2, 3, 5, 7, 11, 13, 17, 19, 21, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97
```

Do you see a pattern? 

No! The problem with primes is that there's no pattern. 

What do we know about prime numbers?

A prime number is only divisible by 1 and itself.

Where _do_ we see a pattern or patterns?

All of the composite numbers! Each number that we exclude from our final output is composed of two (or more) factors. Rather than find the primes, can we find everything else? Work like Michaelangelo and carve out our solution? 

TODO
```sh
[
0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 
   11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 
   21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 
   31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 
   41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 
   51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 
   61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 
   71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 
   81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 
   91, 92, 93, 94, 95, 96, 97, 98, 99, 100
]
```

TODO HOW DO WE MAKE THE JUMP TO AN ARRAY OF BOOLEANS? 
We don't need to store the value in the array because we can simply use the index. 

Let's generate an array of boolean values. 

```
INPUT n

SET bools EQUAL TO AN ARRAY OF LENGTH n
FILL bools WITH A VALUE OF true

SET primes EQUAL TO AN EMPTY ARRAY

IF n IS EQUAL TO 2
    PUSH n TO primes

RETURN primes
```




```
DON'T USE ```md FOR PSUEDOCODE SNIPPETS
    IT WILL RENDER TABBED TEXT 
        IN ANOTHER COLOR
```


### Execute the Plan

Now it's simply a matter of translating our pseudocode into the syntax of our programming language. Let's start with JavaScript...


#### How to Code the Sieve of Erasthones Algorithm in JavaScript

TODO
```js
const sieve = (num) => {
    const bools = new Array(num + 1).fill(true);
    bools[0], bools[1] = false;

    const primes = [];

    for (let i = 2; i <= num; i++) {
        if (bools[i] === true) {
            primes.push(i);

            //let j = i * 2;
            let j = i * i;

            while (j <= num) {
                bools[j] = false;
                j += i;
            }
        }
    }

    return primes;
}
```

Let's step through this solution: 

Within our `sieve` function, we first declare a `bools` array, using the `Array` constructor. We create the new array with a single parameter, `num + 1`. Why do we add `1`? Because we start counting at `0`. We then use the `.fill()` method to _fill_ the `bools` array with elements equal to `true`. Because we know `0` and `1` are _not_ prime, we assign `bools[0]` and `bools[1]` a value of false. We then declare an empty array, `primes`. 

Next, we declare a `for` loop and initialize the iterator with a value of `2`. Why `2`? It's the first prime number and we already assigned `bools[0]` and `bools[1]` a value of `false`. Within our `for` loop, we declare a conditional. If the value of `bools[i]` is equal to `true`, we push it to the `primes` array. 

Here's the fun part: within our conditional, we declare a variable, `j`, and assign it the value of `i` squared, or `i * i`. We then initialize a `while` loop, and, while `j` is less than or equal to `n`, we set the value of `bools[j]` to `false` and increment by `i`, using `j += i`. 

Why? 

With the exception of `2`, none of our prime numbers are even. By squaring `i`, we create an composite value to then mark `false`. 

TODO While `j` is less than `n`, we 

For example, in the first iteration, `i` is 2. Because everything but the first two elements in `bools` is marked `true`, we push `2` to the `primes` array. We then set the value of `j` to `i * i`, or `2 * 2`, of `4`. While `j`, which is currently `4`, is less than `n`, we set the value of `bools[j]` to `false` because it is true, `4` is not a prime number. We then add `i`, which is currently `2`, to `j`, which is currently `4`, resulting in `6`. Looping again, we set the value of `bools[j]` to `false`, because it's true, `6` is not a prime number. The next iteration `j` would be `8`, then `10`, then `12`, and so on until all even values were marked `false`. 

When `j` is no longer less than or equal to `n`, we exit the `while` loop, exit the `if` block, and then enter the next iteration of our `for` loop where `i` is equal to `3`. We skipped over `3`, so it is still marked `true`, and we push it to `primes`. We then multiply `3` by `3`, and assign `j` the value of `9`. We set `bools[j]` to `false` and then add `3` to `j`, resulting in `12`. This is redundant, because we already marked `12` as `false`, but ¯\_(ツ)_/¯. In the next iteration, we mark `15` as `false`. We iterate until all multiples of `3` are marked `false`. 


When `j` is no longer less than or equal to `n`, we exit the `while` loop, exit the `if` block, and then enter the next iteration of our `for` loop where `i` is equal to `4`. We already marked `4` as `false`, so we don't enter the conditional block and continue iterating with a value of `5` assigned to `i`. It's still marked as `true`, because we skipped over it in the first and second iteratons, `2` and `3` respectively. We then multiply `5` by `5`, and assign `j` the value of `25`. We set `bools[j]` to `false` and then add `5` to `j`, resulting in `30`. This is redundant, because we already marked `30` as `false`, but again, ¯\_(ツ)_/¯. In the next iteration, we mark `35` as `false`. We iterate until all multiples of `5` are marked `false`. 

We continue iterating over `n` until all elements associated with composite numbers in `bools` are marked false. The next prime is `7`, and we set the value of `j` to `7 * 7`, or `49`, and then proceed to mark all multiples of `7` as `false`. The next prime is `11`, when squared is `121`, and so on.


Now let's see it in Python...


#### How to Code the Sieve of Erasthones Algorithm in Python

TODO
```py
TODO
```

### Evaluate the Plan

Can we do better? 

TODO


#### What is the Big O Of Sieve of Erasthones?

If you want to learn how to calculate time and space complexity, pick up your copy of [The Little Book of Big O](https://gum.co/big-o)


## Reflection

Remember those _meta_ questions we asked at the outset? Let’s make it stick and answer them now!

* Why do I need to know this?

* What problem(s) does TODO solve? 

* TODO


### Why Do I Need to Know This? 

TODO


### What Problem(s) Does Sieve of Erasthones Solve? 

TODO


### TODO

TODO


## A is for Algorithms

![A is for Algorithms](./jarednielsen-algorithms.png)
Give yourself an A. Grab your copy of [A is for Algorithms](https://gum.co/algorithms)



