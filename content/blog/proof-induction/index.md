---
title: Proof By Induction
date: "2020-03-06"
description: In this tutorial, you will learn proof by induction, a mathematical method used to prove the truth of a statement. Proof by induction is useful for understanding and calculating the Big O of recursive algorithms.
keywords: ["proof by induction"]
---

![](./jarednielsen-proof-induction.png)

You don’t need to be a math whiz to be a good programmer, but there are a handful of tricks you will want to add to your problem solving bag to improve the performance of your algorithms and make an impression in technical interviews. In this tutorial, you will learn proof by induction, a mathematical method used to prove the truth of a statement.

---
Want to level up your problem solving skills? I write a weekly newsletter about programming, problem solving and lifelong learning.

[Sign up for The Solution](http://eepurl.com/cP8CMn)

---


## What is Proof by Induction?

Proof by induction is a mathematical method used to prove that a statement is true for all natural numbers. It’s not enough to prove that a statement is true in one or more specific cases. We need to prove it is true for _all_ cases. 

There are two metaphors commonly used to describe proof by induction: 

1. The domino effect
2. Climbing a ladder

Given a chain of dominos, if one falls, they will all fall. 

Given a sturdy ladder, if one rung holds, they will all hold as we climb higher.


## What Problem(s) Does Proof by Induction Solve?

* All of them! 

Well, almost…

* If a statement is true for one case, proof by induction helps us prove it is true for all cases. 

* For our purposes, proof by induction will help us calculate the Big O of recursive algorithms. 


## Math O’Clock

Let’s get philosophical. 

Inductive reasoning and deductive reasoning are two methods of reason in logic. 

We can think of them as opposites. 

Deductive reasoning is _top-down_. 

We start with general properties that are true and from them determine the truth of a specific property. 

The classic example is a syllogism:

1. All men are mortal. 
2. Socrates is a man.
3. Therefore, Socrates is mortal.

Inductive reasoning is _bottom-up_. 

We start with specific properties, look for patterns, and make generalizations. 

For example:

1. The sun has risen in the east every morning up until now.
2. The sun will also rise in the east tomorrow.

That’s not good enough! 

We skeptics need proof.

A mathematical proof shows that [“the stated assumptions logically guarantee the conclusion”](https://en.wikipedia.org/wiki/Mathematical_proof).

All the time.

🌅

Despite its name, proof by induction is a method of deduction.

Why?

We need to prove that the specific case is true for all cases, without exception. Inductive reasoning doesn't guarantee this.

Unlike deductive reasoning, we don’t start with a general rule. 

We start with the rule we want to prove and _assume_ it is true and then use mathematics to prove it _generally_.

There are two steps to proof by induction: 

* Base

* Induction


### Proof by Induction: Base

We first need to prove that our property holds for a natural number.

That’s generally 0 or 1. 

What’s a ‘natural number’?

Natural numbers are the numbers we use for counting or ordering. 


### Proof by Induction: Induction

Once we establish a base case, we need to prove that property holds for the next natural number.

What’s the next natural number? 
```
n + 1
```

Have we seen this, or something like it, before? 


## How to Sum Consecutive Integers 1 to n

We can use proof by induction to prove the following: 

```
1 + 2 + 3 + … + n = n * (n + 1) / 2
```

If this is new to you, you may want to start with [How to Sum Consecutive Integers from 1 to n](https://jarednielsen.com/sum-consecutive-integers/).

Let’s plug in values.

Our equation is
```
n * (n + 1) / 2
```

If n = 1, the result is 1.

If n = 2, the result is 3.

If n = 3, the result is 6.

This is the ‘brute force’ approach.

Following this approach, the only way to prove our equation works for all natural numbers is to calculate it for all natural numbers. 

**There must be a better way!**

Let’s refer to our equation with a variable so I can type less.
```
P = n * (n + 1) / 2
```

Now we can simply refer to it as
```
P(n)
```

We proved that our equation works when `n = 1`. 

What if we don’t know `n`? 

Let’s add another variable to the equation, `k`. 

Let’s say that `k` is less than or equal to `n`. 
```
k <= n
```

We need to make a proposition. What is it? 

_If `P(k)` is true, then `P(k + 1)` is also true._

If that’s true, then P(n) is true for all natural numbers. 

Let’s rewrite our equation with `k`
```
1 + 2 + 3 + … + k = k * (k + 1) / 2
```

That looks familiar. But we need to prove that `k + 1` works. If the number following `k` is `k + 1`, we can add `k + 1` to the left of our equation:
```
1 + 2 + 3 + … + k + (k + 1) = k * (k + 1) / 2
```

If we add `k + 1` to the left of our equation, we also need to add it to the right:
```
1 + 2 + 3 + … + k + (k + 1) = k * (k + 1) / 2 + (k + 1)
```

Now we need to simplify.

What’s our common denominator? 

`2`

We multiply our newly added `(k + 1)` by 2.
```
1 + 2 + 3 + … + k + (k + 1) = k * (k + 1) / 2 + 2 * (k + 1) / 2
```

Now we can add the terms:
```
1 + 2 + 3 + … + k + (k + 1) = k * (k + 1) + 2 * (k + 1) / 2 
```

Do we see a pattern? There are two `(k + 1)` terms, so let’s factor them out:
```
1 + 2 + 3 + … + k + (k + 1) = (k + 1) * (k + 2) / 2 
```

This is starting to look familiar. What is another way we can describe `(k + 2)`? 

🤔

`((k + 1) + 1)`

🤯

```
1 + 2 + 3 + … + k + (k + 1) = (k + 1) * ((k + 1) + 1) / 2 
```

Did you catch that? 

We just proved our equation!
```
1 + 2 + 3 + … + n = n * (n + 1) / 2
```

## Proof by Induction

In this tutorial, you learned proof by induction, a mathematical method used to prove the truth of a statement. Proof by induction is useful for understanding and calculating the Big O of recursive algorithms. We’ll look at that in a future article. Stay tuned! 