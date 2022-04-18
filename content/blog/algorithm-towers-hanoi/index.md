---
title: "Learn How to Code the Towers of Hanoi Algorithm in JavaScript"
date: "2021-TO-DO"
description: "TODO"
keywords: ['algorithm', 'towers of hanoi', 'javascript']
---


![ {{ TODO ALT TEXT }} ](./jarednielsen-algorithm-{{ TITLE }}.png)


If you want to learn how to code, you need to learn algorithms. Learning algorithms improves your problem solving skills by revealing design patterns in programming. In this tutorial, you will learn how to code the bubble sort algorithm in JavaScript. 

---

![A is for Algorithms](./../../assets/graphics/algorithms/jarednielsen-algorithms-banner.png)
Give yourself an A. Grab your copy of [A is for Algorithms](https://gum.co/algorithms)

---


## Retrieval Practice

* What is recursion?

* TODO

* TODO 


### What is Recursion?

TODO 


### TODO BULLET #2

TODO


### TODO BULLET #3

TODO


## Let's Get Meta

* 

* What Problem(s) Does {{ TODO TITLE }} Solve? 

* What is the Big O of {{ TODO TITLE }}?


## How to Code the {{ TODO TITLE }} Algorithm in JavaScript 

[Programming is problem solving](https://jarednielsen.com/programming-problem-solving/). There are four steps we need to take to solve any programming problem: 

1. Understand the problem

2. Make a plan

3. Execute the plan

4. Evaluate the plan


### Understand the Problem

To understand our problem, we first need to define it. Let’s reframe the problem as acceptance criteria:

> GIVEN
> WHEN
> THEN 

That’s our general outline. We know our input conditions (an unsorted array) and our output requirements (a sorted array), and our goal is to organize the elements in the array in ascending, or non-descending, order.

Let’s make a plan!

### Make a Plan

Let’s revisit our computational thinking heuristics as they will aid and guide is in making a plan. They are: 

* Decomposition

* Pattern recognition

* Abstraction

* Algorithm

TODO

#### Decomposition

Let's break this down. What's the smallest problem we can solve? One disc.

| Origin | Stage | Goal  |
| ---    | ---   | ---   |
| 1      |       |       |



```md
INIT origin, stage, and goal towers

IF disc count IS EQUAL TO 1
    MOVE disc FROM origin tower TO goal tower
    RETURN goal tower
```


| Move #| Tower 1 | Tower 2 | Tower 3  |
| --- | ---    | ---   | ---   |
|     |        |       | 1     |


What if `disc count` is equal to 2?

We now need to use our second tower to _stage_ the first disc so we can move the second disc to the third tower.

| Move #    | Tower 1 | Tower 2 | Tower 3  |
| ---       | ---     | ---     | ---      |
| 0         | 1, 2    |         |          |
| 1         | 2       | 1       |          |
| 2         |         | 1       | 2        |
| 3         |         |         | 1, 2     |

TODO 

We want our recursive calls to find their way to our base case. 

But what happens if we recursively call our `move discs` function? 

We'll move both discs from the first tower to the third tower, stacking them in reverse order. 

How do we make recursive calls to our `move discs` function _and_ move the discs to the third tower in order? 

Is it a matter of moving the disc to the correct tower? Or moving the tower to the correct disc? 

Our _origin_ is whichever tower we are moving from and our _goal_ is whichever tower we are moving to. These aren't necessarily towers one and three, respectively. 

Let's update our pseudocode: 
```md
INIT towers one, two, and three

INIT move discs FUNCTION WITH disc count, origin, stage, and goal PARAMETERS
    IF disc count IS EQUAL TO 1
        MOVE 1 disc FROM origin TO goal
        RETURN goal

    CALL move discs WITH disc count MINUS 1, origin, goal, stage
```

This is starting to get abstract, so let's call it what it is...


#### Abstraction

It might be useful to map this out in a table:

| Move #    | Tower 1 | Tower 2 | Tower 3  | `origin`     | `stage`     | `goal`      |
| ---       | ---     | ---     | ---      | ---          | ---         | ---         |
| 0         | 1, 2    |         |          |              |             |             |            
| 1         | 2       | 1       |          | Tower 1      |             | Tower 2     |
| 2         |         | 1       | 2        | Tower 1      |             | Tower 3     |
| 3         |         |         | 1, 2     | Tower 2      |             | Tower 3     |


Because our `disc count` is greater than 1, we skip the conditional and recursively call `move discs`, but we change the "position" of the towers. 

TODO

Now our `disc count` is equal to 1, so we enter the conditional and move the first disc from our `origin` to our `goal`, which is actually Tower 2, which we passed to our function as `stage` in the previous call. 

Our function returns, but now we need to move the second disc from tower 1 to tower 3. 


Let's update our pseudocode: 
```md
INIT towers one, two, and three

INIT move discs FUNCTION WITH disc count, origin, stage, and goal PARAMETERS
    IF disc count IS EQUAL TO 1
        MOVE 1 disc FROM origin TO goal
        RETURN goal

    CALL move discs WITH disc count MINUS 1, origin, goal, stage
    
    MOVE 1 disc FROM origin TO goal
```

TODO

Lastly, we need to move disc 1 from tower 2 to tower 3. 

```md
INIT towers one, two, and three

INIT move discs FUNCTION WITH disc count, origin, stage, and goal PARAMETERS
    IF disc count IS EQUAL TO 1
        MOVE 1 disc FROM origin TO goal
        RETURN goal

    CALL move discs WITH disc count MINUS 1, origin, goal, stage
    
    MOVE 1 disc FROM origin TO goal

    CALL move discs WITH disc count MINUS 1, stage, origin, goal
```




### Execute the Plan

Now let's translate our pseudocode to JavaScript:

```js
const towers = (discCount) => {

    const towerOne = [...Array(discCount + 1).keys()].slice(1)
    const towerTwo = [], towerThree = [];

    const moveDiscs = (discCount, origin, stage, goal) => {
        if (discCount === 1) {
            let disc = origin.shift();
            goal.unshift(disc);

            return goal;
        }

        moveDiscs(discCount - 1, origin, goal, stage);
        
        let disc = origin.shift();
        goal.unshift(disc);

        moveDiscs(discCount - 1, stage, origin, goal);

        return goal;
    }

    return moveDiscs(discCount, towerOne, towerTwo, towerThree);
}

console.log(towers(3));


```



### Evaluate the Plan

TODO


## Reflection

* TODO

* What Problem(s) Does {{ TODO TITLE }} Solve? 

* What is the Big O of {{ TODO TITLE }}?


### TODO BULLET #1

TODO


### What Problem(s) Does {{ TODO TITLE }} Solve?

TODO 


### What is the Big O of Insertion Sort? 

TODO


## How to Code the {{ TODO }} Algorithm in JavaScript

TODO RECAP FOR SEO



