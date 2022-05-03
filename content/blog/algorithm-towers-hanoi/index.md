---
title: "Learn How to Code the Towers of Hanoi Algorithm"
date: "2022-04-22"
description: "If you want to learn how to code, you need to learn algorithms. Learning algorithms improves your problem solving skills by revealing design patterns in programming. In this tutorial, you will learn how to code the Towers of Hanoi algorithm in JavaScript and Python."
keywords: ['algorithm', 'towers of hanoi', 'javascript', 'python']
---


![ {{ Towers of Hanoi }} ](./jarednielsen-algorithm-towers-hanoi.png)


If you want to learn how to code, you need to learn algorithms. Learning algorithms improves your problem solving skills by revealing design patterns in programming. In this tutorial, you will learn how to code the Towers of Hanoi algorithm in JavaScript and Python. 

---

![A is for Algorithms](./jarednielsen-algorithms-banner.png)
Give yourself an A. Grab your copy of [A is for Algorithms](https://gum.co/algorithms)

---


## Retrieval Practice

* What is recursion?

* TODO

* TODO 


### What is Recursion?

To understand recursion, you must first understand recursion. 


### TODO BULLET #2

TODO


### TODO BULLET #3

TODO


## Let's Get Meta

* Why do I need to know this? 

* Why is it called the Towers of Hanoi? 

* 


## How to Code the Towers of Hanoi Algorithm in JavaScript 

[Programming is problem solving](https://jarednielsen.com/programming-problem-solving/). There are four steps we need to take to solve any programming problem: 

1. Understand the problem

2. Make a plan

3. Execute the plan

4. Evaluate the plan


### Understand the Problem

To understand our problem, we first need to define it. Let’s reframe the problem as acceptance criteria:
```
GIVEN a stack of discs in increasing "size" and three towers
WHEN 
THEN 
```

That’s our general outline. We know our input conditions (TODO) and our output requirements (TODO), and our goal is to TODO.

Let’s make a plan!


### Make a Plan

Let’s revisit our computational thinking heuristics as they will aid and guide is in making a plan. They are: 

* Decomposition

* Pattern recognition

* Abstraction

* Algorithm design


#### Decomposition

Let's break the problem down. What's the smallest problem we can solve? One disc. We need to move it from Tower 1 to Tower 3. In a table, this would look like:


| Move #| Tower 1   | Tower 2 | Tower 3  |
| ---   | ---       | ---     | ---      |
| 0     | 1         |         |          |
| 1     |           |         | 1        |


And in pseudocode, this would look like:
```
INPUT disc count

INIT tower 1
INTI tower 2
INIT tower 3

IF disc count IS EQUAL TO 1
    MOVE 1 disc FROM tower 1 TO tower 3
    RETURN tower 3
```

TODO?

What if `disc count` is equal to 2?

We now need to use our second tower to _stage_ the first disc so we can move the second disc to the third tower. If we map this out in a table...

| Move #    | Tower 1 | Tower 2 | Tower 3  |
| ---       | ---     | ---     | ---      |
| 0         | 1, 2    |         |          |
| 1         | 2       | 1       |          |
| 2         |         | 1       | 2        |
| 3         |         |         | 1, 2     |


What if `disc count` is equal to 3?

| Move #    | Tower 1 | Tower 2 | Tower 3   |
| ---       | ---     | ---     | ---       |
| 0         | 1, 2, 3 |         |           |
| 1         | 2, 3    |         | 1         |
| 2         | 3       | 2       | 1         |
| 3         | 3       | 1, 2    |           |
| 4         |         | 1, 2    | 3         |
| 5         | 1       | 2       | 3         |
| 6         | 1       |         | 2, 3      |
| 7         |         |         | 1, 2, 3   |


Do we see a pattern emerging? 

Let's do one more...

What if `disc count` is equal to 4?

| Move #    | Tower 1       | Tower 2 | Tower 3      |
| ---       | ---           | ---     | ---          |
| 0         | 1, 2, 3, 4    |         |              |
| 1         | 2, 3, 4       | 1       |              |
| 2         | 3, 4          | 1       | 2            |
| 3         | 3, 4          |         | 1, 2         |
| 4         | 4             | 3       | 1, 2         |
| 5         | 1, 4          | 3       | 2            |
| 6         | 1, 4          | 2, 3    |              |
| 7         | 4             | 1, 2, 3 |              |
| 8         |               | 1, 2, 3 | 4            |
| 9         |               | 2, 3    | 1, 4         |
| 10        | 2             | 3       | 1, 4         |
| 11        | 1, 2          | 3       | 4            |
| 12        | 1, 2          |         | 3, 4         |
| 13        | 2             | 1       | 3, 4         |
| 14        |               | 1       | 2, 3, 4      |
| 15        |               |         | 1, 2, 3, 4   |


What's the pattern, or _patterns_ we see? 

Let's look at The Big Picture first: regardless of the size of `disc count`, the positions of discs required to move from Tower 1 to Tower 3 are mirrored and reversed, with Tower 2 being the pivot at the halfway point. Also note that the number of moves required doubles as `disc count` increases. 

Second, if `disc count` is odd, 1 or 3 in the examples above, our first move is from Tower 1 to Tower 3. But, if `disc count` is even, 2 or 4 above, then our first move is from Tower 1 to Tower 2.  

Third, note that the _origin_ of the disc changes move-to-move, but not with _every_ move. For example, as we saw above, where `disc count` is equal to 4, the _origin_ is naturally Tower 1 and we move `1` and `2` to Towers 1 and 2, respectively. On the _next_ move, the _origin_ is Tower 2 as we move `1` to Tower 3. 


TODO make the leap to recursion

How do we translate this to pseudocode? 

TODO? 

```
INPUT disc count

INIT tower 1
INTI tower 2
INIT tower 3

IF disc count IS EQUAL TO 1
    MOVE 1 disc FROM tower 1 TO tower 3
    RETURN tower 3
``

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

* 


### 



