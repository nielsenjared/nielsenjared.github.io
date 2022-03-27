---
title: "Learn How to Code the Sieve of Erarosthones Algorithm"
date: "2022-03-25"
description: "If you want to learn how to code, you need to learn algorithms. Learning algorithms improves your problem solving skills by revealing design patterns in programming. In this tutorial, you will learn how to code the Sieve of Erasthones in JavaScript and Python."
keywords: ['algorithm', 'Sieve of Erasthones', 'javascript', 'python']
---


![ Sieve of Erasthones ](./jarednielsen-algorithm-sieve-erasthones.png)


If you want to learn how to code, you need to learn algorithms. Learning algorithms improves your problem solving skills by revealing design patterns in programming. In this tutorial, you will learn how to code the Sieve of Erasthones in JavaScript _and_ Python.


---

![A is for Algorithms](./jarednielsen-algorithms.png)
Give yourself an A. Get your copy of [A is for Algorithms](https://gum.co/algorithms)

---


## Retrieval Practice

Retrieval practice is the surest way to solidify any new learning. Attempt to answer the following questions before proceeding:

* What's a prime number?

* What's a composite number? 

* What's the difference between space complexity and time complexity?


### What's a Prime Number? 

A prime number is any natural number that is only divisible by itself and 1. Or, in other words, is not the product of two smaller numbers. For example, `7`, is a prime number, where the factors of `7` are only `1` and itself. 


### What's a Composite Number? 

A composite number is any number that is, well, a composite, or multiple, of two smaller numbers. In other words, a composite numbers is divisible by at least one number other than `1` and itself. For example, `4` is the first composite number as its factors are  `1`, `2`, and `4`. Fun fact: `1` is neither prime _nor_ composite. It's _the_ unit. 


### What's the Difference Between Space and Time Complexity? 

Space complexity is the amount of memory an algorithm uses to complete its operations, where time complexity is a measure of the operations themselves. 


## Let's Get Meta

Ask yourself the following questions and keep them back of mind as you proceed:

* Why do I need to know this?

* What is the difference betweed additive and subtractive problem solving? 

* Why is it called the Sieve of Erasthones?


## Learn How to Code the Sieve of Eratosthones Algorithm 

[Programming is problem solving](https://jarednielsen.com/programming-problem-solving/). There are four steps we need to take to solve any programming problem: 

1. Understand the problem

2. Make a plan

3. Execute the plan

4. Evaluate the plan


### Understand the Problem

To understand our problem, we first need to define it. Let’s reframe the problem as acceptance criteria:

```md
GIVEN a whole number, _n_, greater than 1
WHEN I pass _n_ to the Sieve function
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

Like writing, there's nothing more terrifying than the blank page, so let's get _something_ started in our pseudocode:
```
INPUT n
SET primes EQUAL TO AN EMPTY ARRAY

IF n IS EQUAL TO 2
    PUSH n TO primes

RETURN primes
```

What's the _next_ smallest problem we can solve? `3`

We might be tempted to take a brute force approach, and there are at least two:

1. Create a dataset of all the prime numbers and return all of the values below n.

2. Check if the remainder of each value in a series is equal to zero when divided by the previous values.

The first option isn't great because it defeats the purpose of programming! We would need an infinite dataset and that's a lot of data entry!

The second option would require us to perform an operation for every value in our series. If our input value was 100, we would need to perform 99 modulo operations in order to find all of the prime numbers.

🍻

What do we know about prime numbers?

A prime number is only divisible by 1 and itself.

Let's take a step back, or up, and look for a pattern. If our input, `n`, is 100, then the array of primes we want to return needs to contain this sequence:
```sh
2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97
```

Do you see a pattern? 

No! The problem with primes is that there's no pattern. 

Where _do_ we see a pattern? Or patterns?

All of the composite numbers! Each number that we exclude from our final output is composed of two (or more) factors. Rather than find the primes, can we find everything else? Work like Michaelangelo and carve out a solution? 

Let's look at _all_ of the numbers between 1 and 100: 
```
[
    1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 
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

We know that `1` is not prime, so we can cross it out. And we immediately see that half of our numbers are multiples of `2`, so we can cross them all out, but keep `2`, as it's the first prime number:

```
[
    X, 2,  3, X,  5, X,  7, X,  9, X, 
   11, X, 13, X, 15, X, 17, X, 19, X, 
   21, X, 23, X, 25, X, 27, X, 29, X, 
   31, X, 33, X, 35, X, 37, X, 39, X, 
   41, X, 43, X, 45, X, 47, X, 49, X, 
   51, X, 53, X, 55, X, 57, X, 59, X, 
   61, X, 63, X, 65, X, 67, X, 69, X, 
   71, X, 73, X, 75, X, 77, X, 79, X, 
   81, X, 83, X, 85, X, 87, X, 89, X, 
   91, X, 93, X, 95, X, 97, X, 99, X
]
```

Our next prime number is `3`, which we want to keep, but we can proceed and cross out all multiples of `3`. 

```
[
    X, 2,  3, X,  5, X,  7, X,  X, X, 
   11, X, 13, X,  X, X, 17, X, 19, X, 
    X, X, 23, X, 25, X,  X, X, 29, X, 
   31, X,  X, X, 35, X, 37, X,  X, X, 
   41, X, 43, X,  X, X, 47, X, 49, X, 
    X, X, 53, X, 55, X,  X, X, 59, X, 
   61, X,  X, X, 65, X, 67, X,  X, X, 
   71, X, 73, X, 75, X, 77, X, 79, X, 
    X, X, 83, X, 85, X,  X, X, 89, X, 
   91, X,  X, X, 95, X, 97, X,  X, X
]
```

We skip `4` as it's not a prime number and we already crossed it out with multiples of `2`. We then cross out multiples of `5`:
```
[
    X, 2,  3, X,  5, X,  7, X,  X, X, 
   11, X, 13, X,  X, X, 17, X, 19, X, 
    X, X, 23, X,  X, X,  X, X, 29, X, 
   31, X,  X, X,  X, X, 37, X,  X, X, 
   41, X, 43, X,  X, X, 47, X, 49, X, 
    X, X, 53, X,  X, X,  X, X, 59, X, 
   61, X,  X, X,  X, X, 67, X,  X, X, 
   71, X, 73, X,  X, X, 77, X, 79, X, 
    X, X, 83, X,  X, X,  X, X, 89, X, 
   91, X,  X, X,  X, X, 97, X,  X, X
]
```

Next is `7`...
```
[
    X, 2,  3, X,  5, X,  7, X,  X, X, 
   11, X, 13, X,  X, X, 17, X, 19, X, 
    X, X, 23, X,  X, X,  X, X, 29, X, 
   31, X,  X, X,  X, X, 37, X,  X, X, 
   41, X, 43, X,  X, X, 47, X,  X, X, 
    X, X, 53, X,  X, X,  X, X, 59, X, 
   61, X,  X, X,  X, X, 67, X,  X, X, 
   71, X, 73, X,  X, X,  X, X, 79, X, 
    X, X, 83, X,  X, X,  X, X, 89, X, 
    X, X,  X, X,  X, X, 97, X,  X, X
]
```


Do you see the pattern? We first removed all multiples of `2`, then all multiples of `3`, followed by `5` and `7`. The next prime is `11`, and if our array was larger, we would cross out `121`, which is only divisible by `1`, `11`, and itself. We can now abstract a general rule for our algorithm: remove the multiples of the prime numbers, but keep the primes. 

Now let's design the algorithm! 
 
We need to generate an array, but We don't need to store the numerical values in the array because we can simply use the index. But, we need to keep in mind that our first index is 0. Because we're using a process of "subtraction", we want to set all of our values to `true` and then mark everyhing that is _not_ a prime number as `false`. 

Let's update our pseudocode to generate an array of boolean values. 

```
INPUT n

SET bools EQUAL TO AN ARRAY OF LENGTH n
POPULATE EVERY INDEX IN bools WITH A VALUE OF true

...
```

We'll use the word "POPULATE" as we don't yet know, or need to know, how we will generate an array of boolean values. Maybe we'll iterate. Maybe we'll use an array method. We'll figure that out when we execute the plan. Speaking of iteration, now we need to figure out how we are changing values in our array from `true` to `false`. 

```
INPUT n

SET bools EQUAL TO AN ARRAY OF LENGTH n
POPULATE EVERY INDEX IN bools WITH A VALUE OF true

SET primes EQUAL TO AN EMPTY ARRAY

FOR EVERY NUMBER, i, BETWEEN 2 AND num
    IF THE VALUE STORED IN bools[i] IS EQUAL TO true
        PUSH i TO primes

        ...

RETURN primes
```

If we continue to iterate, our conditional will continue to be met and we will push every number to `primes`. How do we avoid this? 

🤔

We need to set all even numbers to false before we exit the conditional. Sounds like we need another loop. Do we want a `for` loop or a `while` loop? Because we don't know how many times we need the loop to run, let's use a `while` loop. Our nested loop needs an iterator. The convention is to name this variable `j`. What value do we use to initialize `j`? 

In our first iteration, `i` is equal to `2`, which is prime.

In our second iteration, `i` will be equal to `3`, which is also prime.

In our thrid iteration, `i` will be equal to `4`, which is composite. 

We need to set the value of `j` to `4` in the first iteration. 

There are two ways we can do this: addition and multiplication. Let's think through both. 

If we use addition, our pseudocode would be:
```
        SET j EQUAL TO i PLUS 2
```

This will give us `4` on the first iteration. But on the next iteration, the value of `i` will be `3` and `3` plus `2` is `5`, which is prime. Addition won't work, so let's use multiplication. 

What do we do within our `while` loop? We simply reassign the value of `j` to `j PLUS i`. Our pseudocode now looks like this:
```
INPUT n

SET bools EQUAL TO AN ARRAY OF LENGTH n
POPULATE EVERY INDEX IN bools WITH A VALUE OF true

SET primes EQUAL TO AN EMPTY ARRAY


FOR EVERY NUMBER, i, BETWEEN 2 AND num
    IF THE VALUE STORED IN bools[i] IS EQUAL TO true
        PUSH i TO primes

        SET j EQUAL TO i MULTIPLIED BY 2

        WHILE j IS LESS THAN OR EQUAL TO n
            SET THE VALUE STORED IN bools[j] TO false
            SET THE VALUE OF j TO j PLUS i

RETURN primes
```

Let's step through our pseudocode to fully understand what's happening before we translate it into syntax. 

When our `for` loop increments, `i` will be equal to `3`, and our conditional will evaluate as `true`. We push `3` to `primes` then set the value of `j` to `3` multiplied by `2`, or `6`. Within the `while` loop, we set the value stored in the sixth index to `false` and then add `i`, which is `3`, to `j`, which is `6`. The new value of `j` is now `9`. We continue to iterate by multiples of `3` until `j` is greater than or equal to `n`. 

When our `for` loop increments again, `i` will be equal to `4`. Our conditional will not evaluate as `true`, though, and we will proceed with the next iteration of the `for` loop. 

When our `for` loop increments again, `i` will be equal to `5`, and our conditional will evaluate as `true`. We push `5` to `primes` then set the value of `j` to `5` multiplied by `2`, or `10`. Within the `while` loop, we set the value stored in the tenth index to `false` (again) and then add `i`, which is `5`, to `j`, which is `10`. The new value of `j` is now `15`. We continue to iterate by multiples of `5` until `j` is greater than or equal to `n`. 

When our `for` loop increments again, `i` will be equal to `6`. Our conditional will not evaluate as `true`, though, and we will proceed with the next iteration of the `for` loop. 

When our `for` loop increments again, `i` will be equal to `7`, our conditional will evaluate as `true`, and we repeat the steps above for `7` and all subsequent values. 


### Execute the Plan

Now it's simply a matter of translating our pseudocode into the syntax of our programming language. 


#### How to Code the Sieve of Eratosthones Algorithm in JavaScript

Let's start with JavaScript...

```js
const sieve = (num) => {
    const bools = new Array(num + 1).fill(true);
    bools[0], bools[1] = false;

    const primes = [];

    for (let i = 2; i <= num; i++) {
        if (bools[i] === true) {
            primes.push(i);

            let j = i * 2;

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

Here's the fun part: within our conditional, we declare a variable, `j`, and assign it the value of `i * 2`. We then initialize a `while` loop, and, while `j` is less than or equal to `n`, we set the value of `bools[j]` to `false` and increment by `i`, using `j += i`. 

Why? With the exception of `2`, none of our prime numbers are even. By multiplying `i` by 2, we create a composite value to then mark `false`. 

While `j` is less than `n`, we continue to iterate. For example, in the first iteration, `i` is 2. Because everything but the first two elements in `bools` is marked `true`, we push `2` to the `primes` array. We then set the value of `j` to `i * i`, or `2 * 2`, of `4`. While `j`, which is currently `4`, is less than `n`, we set the value of `bools[j]` to `false` because it is true, `4` is not a prime number. We then add `i`, which is currently `2`, to `j`, which is currently `4`, resulting in `6`. Looping again, we set the value of `bools[j]` to `false`, because it's true, `6` is not a prime number. The next iteration `j` would be `8`, then `10`, then `12`, and so on until all even values were marked `false`. 

When `j` is no longer less than or equal to `n`, we exit the `while` loop, exit the `if` block, and then enter the next iteration of our `for` loop where `i` is equal to `3`. We skipped over `3`, so it is still marked `true`, and we push it to `primes`. We then multiply `3` by `3`, and assign `j` the value of `9`. We set `bools[j]` to `false` and then add `3` to `j`, resulting in `12`. This is redundant, because we already marked `12` as `false`, but ¯\_(ツ)_/¯. In the next iteration, we mark `15` as `false`. We iterate until all multiples of `3` are marked `false`. 

When `j` is no longer less than or equal to `n`, we exit the `while` loop, exit the `if` block, and then enter the next iteration of our `for` loop where `i` is equal to `4`. We already marked `4` as `false`, so we don't enter the conditional block and continue iterating with a value of `5` assigned to `i`. It's still marked as `true`, because we skipped over it in the first and second iteratons, `2` and `3` respectively. We then multiply `5` by `5`, and assign `j` the value of `25`. We set `bools[j]` to `false` and then add `5` to `j`, resulting in `30`. This is redundant, because we already marked `30` as `false`, but again, ¯\_(ツ)_/¯. In the next iteration, we mark `35` as `false`. We iterate until all multiples of `5` are marked `false`. 

We continue iterating over `n` until all elements associated with composite numbers in `bools` are marked false. The next prime is `7`, and we set the value of `j` to `7 * 7`, or `49`, and then proceed to mark all multiples of `7` as `false`. The next prime is `11`, when squared is `121`, and so on.


Now let's see it in Python...


#### How to Code the Sieve of Eratosthones Algorithm in Python

Let's see it in Python...
```py
def sieve(n):
    bools = [True for i in range(n + 1)]
    # bools = [True] * (n + 1)
    bools[0] = False
    bools[1] = False

    primes = []

    for i in range(2, n):
        if bools[i] == True:
            primes.append(i)

        j = i * 2

        while j <= n:
            bools[j] = False
            j += i 

    return primes 

result = sieve(100)

print(result)
```

### Evaluate the Plan

Can we do better? 

We can make an optimization to our program and multiple `i` by itself rather than by `2`: 
```
INPUT n

SET bools EQUAL TO AN ARRAY OF LENGTH n
POPULATE EVERY INDEX IN bools WITH A VALUE OF true

SET primes EQUAL TO AN EMPTY ARRAY


FOR EVERY NUMBER, i, BETWEEN 2 AND num
    IF THE VALUE STORED IN bools[i] IS EQUAL TO true
        PUSH i TO primes

        SET j EQUAL TO i MULTIPLIED BY i

        WHILE j IS LESS THAN OR EQUAL TO n
            SET THE VALUE STORED IN bools[j] TO false
            SET THE VALUE OF j TO j PLUS i

RETURN primes
```

While this solution is more efficient in terms of time complexity, it's not so great for space because we need to generate an array of boolean values. 


#### What is the Big O Of Sieve of Eratosthones?

If you want to learn how to calculate time and space complexity, pick up your copy of [The Little Book of Big O](https://gum.co/big-o)


## Reflection

Remember those _meta_ questions we asked at the outset? Let’s make it stick and answer them now!

* Why do I need to know this?

* Why is it called the Sieve of Eratosthenes? 

* What is the difference betweed additive and subtractive problem solving? 


### Why Do I Need to Know This? 

Prime numbers are considered the ["basic building blocks"](https://en.wikipedia.org/wiki/Prime_number#Unique_factorization) of natural numbers. Every number greater than `1` is a product of one or more prime numbers. In computing, prime numbers are used in encryption and hashing algorithms.


### Why Is It Called "The Sieve of Eratosthones"? 

It's called a "sieve" because we are washing away the composite numbers and only keeping the primes. 


### What's the Difference Between Additive and Subtractive Problem Solving? 

In additive problem solving, we continual add features to a solution. In subtractive problem solving, we look for opportunities to achieve more with less. 


## A is for Algorithms

![A is for Algorithms](./jarednielsen-algorithms.png)
Give yourself an A. Grab your copy of [A is for Algorithms](https://gum.co/algorithms)



