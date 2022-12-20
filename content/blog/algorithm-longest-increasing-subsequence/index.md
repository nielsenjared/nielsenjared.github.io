---
title: "Learn How to Code the Longest Increasing Subsequence Algorithm"
date: "2022-TODO-TODO"
description: "If you want to learn how to code, you need to learn algorithms. Learning algorithms improves your problem solving skills by revealing design patterns in programming. In this tutorial, you will learn how to code the longest increasing subsequence algorithm."
keywords: ['algorithm', 'TODO', 'javascript', 'python']
---


![ Illustration of longest increasing subsequence ](./jarednielsen-algorithm-longest-increasing-subsequence.png)


If you want to learn how to code, you need to learn algorithms. Learning algorithms improves your problem solving skills by revealing design patterns in programming. In this tutorial, you will learn how to code the TODO in JavaScript _and_ Python.


---

![A is for Algorithms](./jarednielsen-algorithms.png)
Give yourself an A. Grab your copy of [A is for Algorithms](https://gum.co/algorithms)

---


## Retrieval Practice

Retrieval practice is the surest way to solidify any new learning. Attempt to answer the following questions before proceeding:

* What is a longest increasing subsequence?

* TODO

* TODO 


### What Is A Longest Increasing Subsequence? 

TODO 
This might not be so much retrieval as it is new information, but we need a common (pun intended) starting point. According to Ye Olde Wikipedia, the goal of the [longest increasing subsequence](https://en.wikipedia.org/wiki/Longest_increasing_subsequence) algorithm is to: 

> find a subsequence of a given sequence in which the subsequence's elements are in sorted order, lowest to highest, and in which the subsequence is as long as possible.








### TODO #2

TODO


### TODO #3

TODO


## Let's Get Meta

Ask yourself the following questions and keep them back of mind as you proceed:

* Why do I need to know this?

* What problem(s) does TODO solve? 

* TODO


## How to Code the TODO Algorithm 

[Programming is problem solving](https://jarednielsen.com/programming-problem-solving/). There are four steps we need to take to solve any programming problem: 

1. Understand the problem

2. Make a plan

3. Execute the plan

4. Evaluate the plan


### Understand the Problem

To understand our problem, we first need to define it. Let’s reframe the problem as acceptance criteria:

```md
GIVEN a sequence of numbers 
WHEN TODO
THEN I am returned the length of the longest increasing subsequence of numbers 
```

Let's use the first 16 digits following the decimal in Pi for an example. 
```
3.1415926535897932
```

TODO 
```
1 4 1 5 9 2 6 5 3 5 8 9 7 9 3 2 
```

Let's manually create the longest increasing subsequence. The first value is obviously 1.
```
1 4 1 5 9 2 6 5 3 5 8 9 7 9 3 2 
X
```

The second value is 2. 
```
1 4 1 5 9 2 6 5 3 5 8 9 7 9 3 2 
X         X
```

The third value is 3. 
```
1 4 1 5 9 2 6 5 3 5 8 9 7 9 3 2 
X         X     X
```

The fourth value is 5. 
```
1 4 1 5 9 2 6 5 3 5 8 9 7 9 3 2 
X         X     X X
```

The fifth value is 7. 
```
1 4 1 5 9 2 6 5 3 5 8 9 7 9 3 2 
X         X     X X     X
```

The sixth value is 9. 
```
1 4 1 5 9 2 6 5 3 5 8 9 7 9 3 2 
X         X     X X     X X
```

The length of the longest increasing subsequence of the first 16 digits of Pi is 6. 

That’s our general outline. We know our input conditions, an unsorted array of postiive integers, and our output requirements, an value greater than or equal to 1, and our goal is to find the longest increasing subsequence of values in the array.


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
1 4 1 5 9 2 6 5 3 5 8 9 7 9 3 2 
```
TODO 
```
INPUT n

SET lengths TO AN ARRAY OF 1s
SET result TO 0

FOR EACH VALUE, i, BETWEEN 1 AND THE LENGTH OF n
    FOR EACH VALUE, j, BETWEEN 0 AND i
        SET current TO THE VALUE STORED IN lengths[j] PLUS 1

        IF THE VALUE STORED IN n[j] IS LESS THAN THE VALUE STORED IN n[i] AND current IS GREATER THAN THE VALUE STORED IN lengths[i]
            IF current IS GREATER THAN result
                SET result TO THE VALUE STORED IN current

RETURN result 
```

Let's walk through this. We pass our LIS function an unsorted array, `n`. We first initialize an array of equal length to `n` with the value of 1 in every element. We do this for two reasons: 

1. We know that the longest increasing subsequence is _at least_ 1. It can't be 0. We

2. We need to keep a record of which iteration contained the longest increasing subsquence. 

We next initialzie a `result` variable and give it a value of 0. We could give it a value of 1 if we wanted, but setting it to 0 makes it clear there is work to do.

We initialize our outer `for` loop, beginning the iteration at 1 and iterating up to the length of `n`. We start iterating at 1 because we use `i` as the condition in the nested `for` loop. If we started at 0, the nested loop would not execute its first iteration. 

We then initialize our nested `for` loop, beginning the iteration at 0. As above, note that we are iterating up to `i`. We are only iterating up to `i` to count the subsequence. 

Within the nested loop, we initialize a `current` variable. TODO why? 

Remember that `j` is one step behind `i`, but counting up to `i`. 

If the value of `n[j]`is less than `n[i]` _and_ the value of `current` is greater than the value stored in `lengths[i]`, we set `lengths[i]` to current. This is how we store our count and increase it with each iteration. 

Before we exit this condition our loops, we check if `current` is greater than `result`. If so, we need to update `result` with the value stored in `current`. Finally, when our iterations are complete, we return `result`. 


Let's just use the first 8 values. The length of the longest increasing subsequence is 4. 

Table time! 
| i     | j     | lengths                       | current   | result    | 
| ---   | ---   | ---                           | ---       | ---       |
| 1     | 0     | [ 1, 2, 1, 1, 1, 1, 1, 1 ]    | 2         | 2         |
| 3 0 [ 1, 2, 1, 2, 1, 1, 1, 1 ] 2 2





### Execute the Plan

Now it's simply a matter of translating our pseudocode into the syntax of our programming language. 


#### How to Code the TODO Algorithm in JavaScript

Let's start with JavaScript...
```js
const lis = (n) => {
    const lengths = new Array(n.length).fill(1);
    let result = 0;

    for (let i = 1; i < n.length; i++) {
        for (let j = 0; j < i; j++) {
            let current = lengths[j] + 1;

            if (n[j] < n[i] && current > lengths[i]) {
                lengths[i] = current
                if (current > result) {
                    result = current;
                }
            }
        }
    }
    // return Math.max(...lengths);
    return result; 
}
```




#### How to Code the TODO Algorithm in Python

Now let's see it in Python...
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

This is the kernel of the Longest Common Subsequence algorithm, which is a classic computer science problem. This is also the kernel of diffing utilities and version control, such as Git. 


### What Problem(s) Does TODO Solve? 

TODO


### TODO

TODO


## A is for Algorithms

![A is for Algorithms](./jarednielsen-algorithms.png)
Give yourself an A. Grab your copy of [A is for Algorithms](https://gum.co/algorithms)



