---
title: "Learn How to Code the Factorial Algorithm"
date: "2022-02-11"
description: "If you want to learn how to code, you need to learn algorithms. Learning algorithms improves your problem solving skills by revealing design patterns in programming. In this tutorial, you will learn how to code the factorial algorithm in JavaScript and Python."
keywords: ['algorithm', 'factorial', 'javascript', 'python']
---


![ Illustration of factorial algorithm ](./jarednielsen-algorithm-factorial.png)


If you want to learn how to code, you need to learn algorithms. Learning algorithms improves your problem solving skills by revealing design patterns in programming. In this tutorial, you will learn how to code the factorial algorithm in JavaScript _and_ Python.


---

![A is for Algorithms](./jarednielsen-algorithms.png)
Give yourself an A. Grab your copy of [A is for Algorithms](https://gum.co/algorithms)

---


## Retrieval Practice

Retrieval practice is the surest way to solidify any new learning. Attempt to answer the following questions before proceeding:

* What is a factorial? 

* How does iteration work? 

* What is multiplication assignment? 



### What Is A Factorial? 

A factorial is the product of all positive integers less than or equal to n.

We write that as n!.

For example, 5!:
```
5 * 4 * 3 * 2 * 1 = 120
```

### How Does Iteration Work? 

According to Ye Olde Wikipedia:

> Iteration is the repetition of a process in order to generate a (possibly unbounded) sequence of outcomes. Each repetition of the process is a single iteration, and the outcome of each iteration is then the starting point of the next iteration.

We use `for` and `while` loops to iterate.


### What is Multiplication Assignment? 

We can reassign the value of a variable to the product of that variable multiplied by another value using the multiplication assignment. 

Both Python and JavaScript feature the `*=` operator. 

The following expression:
```
x = 2
x *= 2
```

Is equivalent to:
```
x = 2
x = x * 2
```


## Let's Get Meta

Ask yourself the following questions and keep them back of mind as you proceed:

* Why do I need to know this?

* How can I increment a variable with multiplication? 

* How does a for loop work? 


## How to Code the Factorial Algorithm 

[Programming is problem solving](https://jarednielsen.com/programming-problem-solving/). There are four steps we need to take to solve any programming problem: 

1. Understand the problem

2. Make a plan

3. Execute the plan

4. Evaluate the plan


### Understand the Problem

To understand our problem, we first need to define it. Let’s reframe the problem as acceptance criteria:

```md
GIVEN a whole number, n
WHEN I pass it to an iterative factorial function
THEN I am returned the factorial of n
```

That’s our general outline. We know our input conditions, a whole number, and our output requirements, the factorial of that number, and our goal is to calculate the factorial iteratively.

Let’s make a plan!


### Make a Plan

Let’s revisit our computational thinking heuristics as they will aid and guide is in making a plan. They are: 

* Decomposition

* Pattern recognition

* Abstraction

* Algorithm design

The first step is decomposition, or breaking our problem down into smaller problems. What's the smallest problem we can solve? 

0!

What's the factorial of 0? 

1 

What? 

A factorial is the number of permutations of another number.  There's only one way to arrange 0, so _0!_ is 1. 

If `n` is equal to 0, we know our `factorial` function needs to return 1. 

Let's start pseudocoding this: 
```
INPUT n
SET result to 1

IF n == 0
    RETURN result
```

What's the next smallest problem we can solve? 

1!

What's the factorial of 1?

Also 1. 

Same as 0 above, there's only one way to arrange 1. 

I promise it's going to get more fun with 2, but first, let's add this to our pseudocode: 
```
INPUT n
SET result to 1

IF n == 0 OR n == 1
    RETURN result
```

Sweet. Now, what's the factorial of 2? 

It's 2!

Isn't that fun?

But why is _2!_ equal to 2? 

We can express _2!_ as 2 * 1. 

We don't want to hard code this, so now we need to start looking for a pattern. 

Table time! 

| _n_   | _n!_  | 1 * ... n         |
| ---   | ---   | ---               |
| 2     | 2     | 1 * 2             |
| 3     | 6     | 1 * 2 * 3         |
| 4     | 24    | 1 * 2 * 3 * 4     |
| 5     | 120   | 1 * 2 * 3 * 4 * 5 |

In the table above, we can see our input, `n`, the product of `n!`, and the "long hand" expression of the multiplication of the sequence. 

Where have we seen this or something like it before? 

Iteration!

As `n` increases, so does the number of multiplications required to calcuate the product of `n!`. 

Because we already addressed 0 and 1, we can start our loop at 2. 

But what do we do in the loop? 

We need to reassign the value of `result` to the product of `result` multiplied by `i`. 

Our final pseudocode looks like this: 
```
INPUT n
SET result TO 1

IF n == 0 OR n == 1
    RETURN result

FOR EVERY VALUE i BETWEEN 2 AND n
    SET result TO THE PRODUCT OF result MULTIPLIED BY i

RETURN result
```


### Execute the Plan

Now it's simply a matter of translating our pseudocode into the syntax of our programming language. 


#### How to Code the Factorial Algorithm in JavaScript

Let's start with JavaScript...
```js
const factorial = n => {
    let result = 1;

    if (n == 0 || n == 1) {
        return result;
    }


    for (let i = 2; i <= n; i++) {
        result = result * i;
    }

    return result;
}
```



#### How to Code the Factorial Algorithm in Python

Now let's see it in Python...
```py
def factorial(n): 
    result = 1

    if n == 0 or n == 1:
        return result
    
    for i in range(2, n + 1):
        result = result * i
    
    return result
    
```

### Evaluate the Plan

Can we do better? 

This approach does not address negative numbers. In both Python and JavaScript, if we call `factorial` with a value of -5, it will return 1. This is happening because none of our conditions are being met, in both the `if` block and the `for` loop. 

Both Python and JavaScript feature factorial methods in their math modules. 


#### What is the Big O Of Factorial?

If you want to learn how to calculate time and space complexity, pick up your copy of [The Little Book of Big O](https://gum.co/big-o)


## Reflection

Remember those _meta_ questions we asked at the outset? Let’s make it stick and answer them now!

* Why do I need to know this?

* How can I increment a variable with multiplication? 

* How does iteration work? 


### Why Do I Need to Know This? 

While you will probably _never_ code the _factorial_ algorithm professionally, you might code a factorial _algorithm_ accidentally, which is something to be avoided. Understanding the concept of factorial is important when calculating the space and time complexity of algorithms. It's also important when calculating permutations and combinations. Stay tuned! 


### How Can I Increment a Variable With Multiplication? 

We can increment a variable with multiplication by using the multiplication operator and/or variable reassignment and reassigning the value of our variable to the product of that variable multiplied by an iterator. 


### How Does A For Loop Work? 

A `for` loop is a control flow statement used for iteration. We declare a `for` loop with 

When using a `for` loop, we specify an iterator, often `i`, and a condition, such as `i < arr.length`, followed by an operator to advance the iteration, often `i++`. We generally initialize a `for` loop with `i = 0`, but, as we saw above, we can start counting with any value. Furthermore, we can increment (or decrement, for that matter) by any value, not just 1. We would simply use the `+= x` operator, where `x` is the value by which we want to increment our loop. In our loop is a statement that is executed with each iteration.


Initialization

Condition 

Statement


## A is for Algorithms

![A is for Algorithms](./jarednielsen-algorithms.png)
Give yourself an A. Grab your copy of [A is for Algorithms](https://gum.co/algorithms)



