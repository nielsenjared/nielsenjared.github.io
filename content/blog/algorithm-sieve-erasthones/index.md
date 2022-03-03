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

TODO

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



