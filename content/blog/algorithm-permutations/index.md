---
title: "Learn How to Code the Permutations Algorithm"
date: "2022-11-18"
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

* Where have we seen this or something like it before? 


## How to Code the Permutations Algorithm 

[Programming is problem solving](https://jarednielsen.com/programming-problem-solving/). There are four steps we need to take to solve any programming problem: 

1. Understand the problem

2. Make a plan

3. Execute the plan

4. Evaluate the plan


### Understand the Problem

To understand our problem, we first need to define it. Let’s reframe the problem as acceptance criteria:

```md
GIVEN an array, `n`, of values with no duplicates
WHEN I pass `n` to a `permutations` function
THEN I am returned an array containing all possible permutations of `n` without repetition
```

That’s our general outline. We know our input conditions, an array of values with no duplicates, and our output requirements, an array containing all permutations, and our goal is to generate the permutations of `n` without repitition.

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

We will also definitely need to iterate. 

As we saw with the combinations algorithm, we don't know in advance how many iterations will be required. 

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

Here's our input array:
```
[1, 2]
```

And we need to output the following permutations:
```
[1, 2]
[2, 1]
```

We don't see a pattern yet, but can you see the problem we need to solve? 

We can't use the same approach as we did with the combinations algorithm because our second permutation is not in sequential order. 

We _could_ swap the values, but we know that won't scale. 

Or will it? 

:thinking-face:

If you recall, the pseudocode for our swap algorithm looks like this:
```
SET temp TO x
SET x TO y
SET y TO temp
```

The crux of the swap algorithm is creating a `temp` variable to store one of the values while we make the reassignments. We need to do the same thing here: store one of the values while we reassign the others. 

Easy peasy! 

Let's step through this with our two element array. Because we are returning two permutations, we know we need two iterations. On the first iteration, we _select_ 1. Let's store it in a variable, `selected`.  
```
FUNCTION permutations(n)
    SET perms TO AN EMPTY ARRAY

    IF n IS EQUAL TO 1
    RETURN [n]

    FOR EACH ELEMENT i IN n
        SET selected TO THE VALUE STORED IN n[i]
```

Now we need a way to store the _remaining_ values. But how do we know which values are remaining? On the first iteration, 2 will remain. But on the second iteration, 1 will remain. 

We _could_ write a series of conditional statements. But that's no fun. It would be much more fun to slice it up! 

We can think of slicing as a conditional. If there are any values that precede the selected value, we'll slice them off into their own array. If there are no values that preced the selected value, the method will simply return an empty array. The same goes for the values that succeed the selected value. Let's call these values `head` and `tail`. 
```
FUNCTION permutations(n)
    SET perms TO AN EMPTY ARRAY

    IF n IS EQUAL TO 1
    RETURN [n]

    FOR EACH ELEMENT i IN n
        SET selected TO THE VALUE STORED IN n[i]

        SET head TO VALUES THAT PRECEDE i
        SET tail TO VALUES THAT SUCCEED i
```

There are now _two_ shorter arrays for us to manage. We know we need to make the leap to recursion at some point, which means calling our `permutations` function. But the function only accepts one parameter. So... when life gives you two arrays, concatenate! J4F, let's call this shorter array `shorty`. 
```
FUNCTION permutations(n)
    SET perms TO AN EMPTY ARRAY

    IF n IS EQUAL TO 1
    RETURN [n]

    FOR EACH ELEMENT i IN n
        SET selected TO THE VALUE STORED IN n[i]

        SET head TO VALUES THAT PRECEDE i
        SET tail TO VALUES THAT SUCCEED i

        SET shorty TO head CONCATENATED WITH tail
```
We'll catch the results of the `permutations` function in our `remaining` variable and enter the nested loop, where we'll iterate over each value in `remaining` and create a new `perm` by concatenating it with `selected`. We push `perm` to `perms`. 

The next step is to pass `shorty` to our recursive `permutations` function. Let's catch the return value in a `remaining` variable. 
```
FUNCTION permutations(n)
    SET perms TO AN EMPTY ARRAY

    IF n IS EQUAL TO 1
    RETURN [n]

    FOR EACH ELEMENT i IN n
        SET selected TO THE VALUE STORED IN n[i]

        SET head TO VALUES THAT PRECEDE i
        SET tail TO VALUES THAT SUCCEED i

        SET shorty TO head CONCATENATED WITH tail

        SET remaining TO THE RETURN VALUE OF permutations(shorty)
```

The final step is to iterate over `remaining` and build our permutations. Here's our final pseudocode:
```
FUNCTION permutations(n)
    SET perms TO AN EMPTY ARRAY

    IF n IS EQUAL TO 1
    RETURN [n]

    FOR EACH ELEMENT i IN n
        SET selected TO THE VALUE STORED IN n[i]

        SET head TO VALUES THAT PRECEDE i
        SET tail TO VALUES THAT SUCCEED i

        SET shorty TO head CONCATENATED WITH tail

        SET remaining TO THE RETURN VALUE OF permutations(shorty)

        FOR EACH ELEMENT j IN remaining
            SET perm TO selected CONCATENATED WITH remaining[j]
            PUSH perm TO perms

    RETURN perms
```


### Execute the Plan

Now it's simply a matter of translating our pseudocode into the syntax of our programming language. 


#### How to Code the Permutations Algorithm in JavaScript

Let's start with JavaScript...
```js
const permutations = (n) => {
    const perms = [];

    let selected, remaining;
    
    if (n.length === 1) {
        return [n];
    }
    
    for (let i = 0; i < n.length; i++) {
        // selected = n.slice(i, i + 1);
        selected = [n[i]];

        let head = n.slice(0, i);
        let tail = n.slice(i + 1);
        let shorty = head.concat(tail);

        remaining = permutations(shorty);

        for (let j = 0; j < remaining.length; j++) {
            let perm = selected.concat(remaining[j]);
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

Eh. 

We can add conditionals to catch edge cases and refactor it to look fancy. But hey! This is the last tutorial in this series and as they say, 'Done is better than perfect.`


#### What is the Big O Of the Permutations Algorithm?

If you want to learn how to calculate time and space complexity, pick up your copy of [The Little Book of Big O](https://gum.co/big-o)


## Reflection

Remember those _meta_ questions we asked at the outset? Let’s make it stick and answer them now!

* Why do I need to know this?

* What problem(s) does the permutations algorithm solve? 

* Where have we seen this or something like it before? 


### Why Do I Need to Know This? 

TODO


### What Problem(s) Does The Permutations Algorithm Solve? 

TODO


### Where Have We See This Or Something Like It Before? 

TODO
This algorithm brings us full circle, back to the first algorithm we solved: the swap. I structured this series in this way to demonstrate ...


## A is for Algorithms

![A is for Algorithms](./jarednielsen-algorithms.png)
Give yourself an A. Grab your copy of [A is for Algorithms](https://gum.co/algorithms)



