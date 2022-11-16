---
title: "Learn How to Code the Permutations Algorithm"
date: "2022-TODO-TODO"
description: "If you want to learn how to code, you need to learn algorithms. Learning algorithms improves your problem solving skills by revealing design patterns in programming. In this tutorial, you will learn how to code the permutations algorithm"
keywords: ['algorithm', 'permutations', 'javascript', 'python']
---


![ Illustration of ducks on podium ](./jarednielsen-algorithm-permutations.png)


If you want to learn how to code, you need to learn algorithms. Learning algorithms improves your problem solving skills by revealing design patterns in programming. In this tutorial, you will learn how to code the permutations in JavaScript _and_ Python.


---

![A is for Algorithms](./jarednielsen-algorithms.png)
Give yourself an A. Grab your copy of [A is for Algorithms](https://gum.co/algorithms)

---


## Retrieval Practice

Retrieval practice is the surest way to solidify any new learning. Attempt to answer the following questions before proceeding:

* What is recursion? 

* What is a factorial? 

* What is a permutation?  


### What is Recursion? 

In computer science, recursion occurs when a function calls itself within its declaration.

We use recursion to solve a large problem by breaking it down into smaller instances of the same problem. Recursion consists of two things:

    a base case

    a recursive case

We use the recursive case to break the problem down into smaller instances.

We use the base case to stop when there are no more problems to be solved.


### What is a Factorial? 

A factorial is the product of all positive integers less than or equal to n.

We write that as n!.

For example, 5!:
```
5 * 4 * 3 * 2 * 1 = 120
```

### What is a Permutation? 

According to ye olde Wikipedia: 

> In mathematics, a permutation of a set is, loosely speaking, an arrangement of its members into a sequence or linear order, or if the set is already ordered, a rearrangement of its elements. 

There are two types of permutations: with and without repitition. 

In this tutorial, we'll work with permutations without repitition. The equation for this is:
```
n! / (n - k)!
```


## Let's Get Meta

Ask yourself the following questions and keep them back of mind as you proceed:

* Why do I need to know this?

* What problem(s) does the permutations algorithm solve? 

* TODO real world permutations? implications for repition an no repitition? 


## How to Code the Permutations Algorithm 

[Programming is problem solving](https://jarednielsen.com/programming-problem-solving/). There are four steps we need to take to solve any programming problem: 

1. Understand the problem

2. Make a plan

3. Execute the plan

4. Evaluate the plan


### Understand the Problem

To understand our problem, we first need to define it. Let’s reframe the problem as acceptance criteria:

```md
GIVEN a sequence of integers from 1 to `n`
WHEN TODO
THEN I am returned all possible permutations of the values from 1 to `n` without repetition
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

If the length of n is equal to 1, then the only permutation is:
```
[1]
```

If n is equal to 2, then our permutations are:
```
[1, 2]
[2, 1]
```
If n is equal to 3, then our permutations are:
```
[
  [ 1, 2, 3 ],
  [ 1, 3, 2 ],
  [ 2, 1, 3 ],
  [ 2, 3, 1 ],
  [ 3, 1, 2 ],
  [ 3, 2, 1 ]
]
```

Do you see a pattern emerging? 

It's definitely factorial! 

We also need to iterate. 

TODO 

What's the solution?

Recursion!

As we recalled above, recursion consists of two things:

* base case

* recursive case

What's our base case?
```
n == 1
```

If `n` is equal to 1, we simply return `n` wrapped in brackets. 

Let's pseudocode that...
```
FUNCTION permutations(n)
  SET perms TO AN EMPTY ARRAY

  IF n IS EQUAL TO 1
    RETURN [n]
```

What's the next problem we can solve?

2!

That's 2 _exclamation point_, not 2 _factorial_ :)

TODO our array:
```
[1, 2]
```

We _could_ swap the values, but we know that won't scale. 

Or will it? 

:thinking-face:

TODO

But on the second iteration, we need to grab the second value, 2, and then append the first value, 1.



We set our `current` value. 

We then slice off everything _before_ `current` and store it in `head`. 

We next slice off everything _after_ `current` and store it in `tail`. 

We then concatenate `head` and `tail` to create a new array _without_ `current`, and pass that to our `permutations` function. We'll catch the results of the `permutations` function in our `remainder` variable and enter the nested loop, where we'll iterate over each value in `remainder` and create a new `perm` by concatenating it with `current`. We push `perm` to `perms`. 


### Execute the Plan

Now it's simply a matter of translating our pseudocode into the syntax of our programming language. 


#### How to Code the Permutations Algorithm in JavaScript

Let's start with JavaScript...
```js
const permutations = (n) => {
    const perms = [];

    let current, remainder;
    
    if (n.length <= 0) {
        return [];
    }
    
    if (n.length === 1) {
        return [n];
    }
    
    for (let i = 0; i < n.length; i++) {
        // current = n.slice(i, i + 1);
        current = [n[i]];

        let head = n.slice(0, i);
        let tail = n.slice(i + 1);
        let shorty = head.concat(tail);

        remainder = permutations(shorty);

        for (let j = 0; j < remainder.length; j++) {
            let perm = current.concat(remainder[j]);
        perms.push(perm);
        }
    }
    return perms;
}
```




#### How to Code the Permutations Algorithm in Python

Now let's see it in Python...
```py
TODO
```


### Evaluate the Plan

Can we do better? 

TODO


#### What is the Big O Of the Permutations Algorithm?

If you want to learn how to calculate time and space complexity, pick up your copy of [The Little Book of Big O](https://gum.co/big-o)


## Reflection

Remember those _meta_ questions we asked at the outset? Let’s make it stick and answer them now!

* Why do I need to know this?

* What problem(s) does the permutations algorithm solve? 

* TODO


### Why Do I Need to Know This? 

TODO


### What Problem(s) Does The Permutations Algorithm Solve? 

TODO


### TODO

TODO


## A is for Algorithms

![A is for Algorithms](./jarednielsen-algorithms.png)
Give yourself an A. Grab your copy of [A is for Algorithms](https://gum.co/algorithms)



