---
title: "Learn How to Code the Binary Search Algorithm"
date: "2022-05-06"
description: "If you want to learn how to code, you need to learn algorithms. Learning algorithms improves your problem solving skills by revealing design patterns in programming. In this tutorial, you will learn how to code the binary search algorithm in JavaScript and Python."
keywords: ['algorithm', 'binary search', 'javascript', 'python']
---


![ Binary Search ](./jarednielsen-algorithm-binary-search.png)


If you want to learn how to code, you need to learn algorithms. Learning algorithms improves your problem solving skills by revealing design patterns in programming. In this tutorial, you will learn how to code the binary search algorithm in JavaScript _and_ Python.


---

![A is for Algorithms](./jarednielsen-algorithms.png)
Give yourself an A. Grab your copy of [A is for Algorithms](https://gum.co/algorithms)

---


## Retrieval Practice

Retrieval practice is the surest way to solidify any new learning. Attempt to answer the following questions before proceeding:

* What is linear search? 

* What is binary? 

* How do you find something in a book? 


### What is Linear Search? 

TODO


### What is Binary?

TODO


### How Do You Find Something in a Book? 

In prehistoric times, early humans used a directory to store and retrieve names and their associated phone numbers. It was called, wait for it... the phone book. Yes, it was a _physical_ book! Without a search field! How did our ancestors find they name and number they wanted? 

TODO

Abby Abbot


## Let's Get Meta

Ask yourself the following questions and keep them back of mind as you proceed:

* Why do I need to know this?

* Why is it called _binary search_? 

* TODO


## How to Code the Binary Search Algorithm 

[Programming is problem solving](https://jarednielsen.com/programming-problem-solving/). There are four steps we need to take to solve any programming problem: 

1. Understand the problem

2. Make a plan

3. Execute the plan

4. Evaluate the plan


### Understand the Problem

To understand our problem, we first need to define it. Let’s reframe the problem as acceptance criteria:

```md
GIVEN TODO
WHEN TODO
THEN TODO
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

TODO
An array containing _one_ number, for example: `[16]`.

Let's pseudocode this:
```
INPUT arr, num

IF arr[0] == num
    RETURN 'Bingo!'
ELSE 
    RETURN FALSE
```

This is less of a _search_ and more of a guessing game. What's the next smallest problem? An array containing _two_ numbers: `[16, 32]`.



```
INPUT arr, num

IF arr[0] == num
    RETURN 'Found num in the 0 index`
ELSE IF arr[1] == num
    RETURN 'Found num in the 1 index`
ELSE 
    RETURN FALSE
```

This is still a guessing game, but TODO

But! What did we do when we wrote those two conditionals? We cut the problem in half: `[16]` and `[32]`. 


Let's double it: `[8, 16, 32, 64]`. Now what? We _could_ write conditionals for every index, but will it scale? 

If we cut this array in half, we get `[8, 16]` and `[32, 64]`.


Let's say we're looking for `32`. 

Let's "cut" our array in half.

There are four elements in the array. If we divide the length by 2, we TODO INTRODUCE PIVOT

The second element in the array is `16`. Do we need to search anymore elements on this side of the array? No. Because `num` is greater than `16`. Now we look at the other side of the array and check if the _next_ index contains our value. What do you know! 

TODO




### Execute the Plan

Now it's simply a matter of translating our pseudocode into the syntax of our programming language. 


#### How to Code the Binary Search Algorithm in JavaScript

Let's start with JavaScript...
```js
const powers = [1, 2, 4, 8 ,16, 32, 64, 128, 256, 512];
 
const binarySearch = (arr, num) => {
 
   let startIndex = 0;
   let endIndex = (arr.length)-1;
  
   while (startIndex <= endIndex){
      
       let pivot = Math.floor((startIndex + endIndex)/2);
 
       if (arr[pivot] === num){
            return `Found ${num} at ${pivot}`;
       } else if (arr[pivot] < num){
           startIndex = pivot + 1;
       } else {
           endIndex = pivot - 1;
       }
   }
   return false;
}
```



#### How to Code the Binary Search Algorithm in Python

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

TODO


### What Problem(s) Does TODO Solve? 

TODO


### TODO

TODO


## A is for Algorithms

![A is for Algorithms](./jarednielsen-algorithms.png)
Give yourself an A. Grab your copy of [A is for Algorithms](https://gum.co/algorithms)



