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

* TODO

* TODO 


### What is Linear Search? 

TODO


### TODO #2

TODO


### TODO #3

TODO


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

```
DON'T USE ```md FOR PSUEDOCODE SNIPPETS
    IT WILL RENDER TABBED TEXT 
        IN ANOTHER COLOR
```


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



