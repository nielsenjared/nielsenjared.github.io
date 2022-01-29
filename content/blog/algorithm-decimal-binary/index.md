---
title: "Learn How to Code a Decimal to Binary Conversion Algorithm in JavaScript"
date: "2021-TO-DO"
description: "TODO"
keywords: ['algorithm', 'decimal', 'binary', 'javascript']
---


![ {{ TODO ALT TEXT }} ](./jarednielsen-algorithm-{{ TITLE }}.png)


If you want to learn how to code, you need to learn algorithms. Learning algorithms improves your problem solving skills by revealing design patterns in programming. In this tutorial, you will learn how to code the bubble sort algorithm in JavaScript. 

---

![A is for Algorithms](./../../assets/graphics/algorithms/jarednielsen-algorithms-banner.png)
Give yourself an A. Grab your copy of [A is for Algorithms](https://gum.co/algorithms)

---


## Retrieval Practice

* What's a decimal?

* What's binary?

* TODO What's a decimal?


### What's a Base?

A base is the number of different digits used to count in a numerical system. We count in base 10 most likely due to us evolving ten fingers. When we count in base 10, we use ten distinct _whole_ numbers.  


### What's Binary?

Binary is base 2. We have two different digits to count with, `0` and `1`. (Or `true` and `false`). 

Counting from 1 to 10 with our hands is easy. Our fingers are like switches and we flip them. 

(Starting with the index or thumb! Sheesh!)

What do we do when we go beyond 10? 

We flip those switches the other way! 

We not only extend or retract our fingers to count to ten, if we are counting to a value greater than ten, we also track the number of times we count by 10. 

```
0 
1
2
3
4
5
6
7
8
9
```

What happens when we reach 9? 

We _overflow_ into another digit on the left and reset the digit on the right, giving us `10`. We then increment the right-most digit as we count up:
```
10
11
12
13
14
15
16
17
18
19
```

What happens when we reach 19? 

We increment the value of the digit on the left by `1`. 

This may seem rudimentary, but bear with me.

What happens when we reach 99? 

We need to _overflow_ again and add another digit, giving us `100`.

If we knew at the outset that we wanted to count beyond `100`, we could start with three digits and proceed like this:
```
000
001
002
...
009
010
011
...
099
100
101
```
etc.

What if we are limited to two fingers, or switches? 

We're going to need a lot more digits!


### TODO BULLET #3

TODO


## Let's Get Meta

* 

* What Problem(s) Does Decimal to Binary Solve? 

* What is the Big O of Decimal to Binary Conversion?


## How to Code a Decimal to Binary Algorithm in JavaScript 

[Programming is problem solving](https://jarednielsen.com/programming-problem-solving/). There are four steps we need to take to solve any programming problem: 

1. Understand the problem

2. Make a plan

3. Execute the plan

4. Evaluate the plan


### Understand the Problem

To understand our problem, we first need to define it. Let’s reframe the problem as acceptance criteria:

> GIVEN a decimal

> WHEN I pass it to a function TODO

> THEN the function returns the base equivalent

That’s our general outline. We know our input conditions (a decimal) and our output requirements (a binary TODO), and our goal is to perform the conversion of the decimal to binary.

Let’s make a plan!


### Make a Plan

Let’s revisit our computational thinking heuristics as they will aid and guide is in making a plan. They are: 

* Decomposition

* Pattern recognition

* Abstraction

* Algorithm

What's the smallest problem we can solve? 

`1`

In base 10, what is `1`? 

It is one of ten possible values, or, `1 / 10`. 


So in base 2, what is `1`? 

It is one of _two_ possible values. 

What mathematical operation do we use to break problems down? 

Division. 

If we're using division to convert to binary, what is our divisor? 

`2`

What does the operation of division return? 

A quotient and a remainder. 

Let's start simple and convert `0` to binary. What is the quotient of the following: 
```
0 / 2
```

🙄

It's `0`.

What's the remainder of `0 / 2`? Also `0`. 

If we start to build a table, it looks like this so far:

| Decimal   | Binary  |
| ---       | ---     |
| 0         | 0       |

Because we are only working with two values, `0` and `1`, we can surmise that the decimal `1` converted to binary is also `1`. 

But don't take my word for it! Let's proove it . What is `1 / 2`?
```
1 / 2 = 0.5
```

Not exactly a _whole_ number!

But the remainder _is_ 1. How? 

We use the [division algorithm](https://en.wikipedia.org/wiki/Division_algorithm), which states that:

> For integers `N` and `D` where `D != 0`, there are unique integers `Q` and `R` where `0 <= R < D`

In other words: 
```
N = D * Q + R
```

Where `N` is our dividend, `D` is our divisor, and `Q` and `R` are the quotient and remainder, respectively.

👆 Keep in mind that `Q` is not the quotient we return from the division operation of `1 / 2`. It's the number of times the divisor goes into the dividend, which is `0`. 

So, using our equation above:
```
1 = 2 * 0 + 1
```

Another way to think about it is to calculate the division of `1 / 2` by hand. 

![](./jarednielsen-convert-decimal-binary.png)

We add this value to our table:

| Decimal   | Binary  |
| ---       | ---     |
| 0         | 0       |
| 1         | 1       |
| 2         | ?       |

What about `2`?
```
2 / 2
```

The quotient is `1` and the remainder is `0`. But we already have `1` and `0` in our table? 

We need to _overflow_, meaning we now need _at least_ two digits to represent anything greater than decimal `2`. 

What happens when we overflow? 

We increment the value to the left and reset the value on the right, so when we add `2` to our table: 

| Decimal   | Binary  |
| ---       | ---     |
| 0         | 0       |
| 1         | 1       |
| 2         | 10      |

Are you starting to see the pattern? 

We're building our binary strings with the remainder, and not the quotient, of our division operation. We continue to perform that operation _while_ our number is greater than 0. 

```
2 / 2 = 1
1 / 2 = 0
```

So the binary conversion of `2` is `10`. 

What's 3? 
```
3 / 2 = 1
1 / 2 = 1
```

| Decimal   | Binary  |
| ---       | ---     |
| 0         | 0       |
| 1         | 1       |
| 2         | 10      |
| 3         | 11      |

What about `4`? 

You guessed it, we need to _overflow_.

| Decimal   | Binary  |
| ---       | ---     |
| 0         | 0       |
| 1         | 1       |
| 2         | 10      |
| 3         | 11      |
| 4         | 100     |

What about `5`? Now its' getting interesting. Our plan is to use a Stack data structure to in our algorithm solution. Using the LIFO principle, imagine _pushing_ values to the binary string as we build it. 

```
5 / 2 = 2
5 % 2 = 1
```

We _push_ the remainder to a string: 
```
1
```

We now divide our quotient, `2`, by `2`.
```
2 / 2 = 1
2 % 2 = 0
```

We _push_ the remainder to our string: 
```
01
```

We're not at zero, yet. Our quotient is `1`, so we divide that by 2.
```
1 / 2 < 0
1 % 2 = 1
```

Our remainder is again `1`, so we _push_ that to our string:
```
101
```

There's our binary conversion of the decimal 5:

| Decimal   | Binary  |
| ---       | ---     |
| 0         | 0       |
| 1         | 1       |
| 2         | 10      |
| 3         | 11      |
| 4         | 100     |
| 5         | 101     |

That was a lot of decomposing and pattern forming. Let's shift our thinking to abstraction and design. 

If we pseudocode what we outlined above:
```md
INPUT num

SET binary string TO EMPTY STRING

WHILE num IS GREATER THAN 0
    PREPEND THE RESULT OF num MODULO 2 TO binary string
    REASSIGN num THE ABSOLUTE VALUE OF num DIVIDED BY 2

OUTPUT binary string
```


### Execute the Plan

Now it's simply a matter of translating our pseudocode to JavaScript: 

```js
const decimalToBinary = (num) => {

    let result = '';
  
    while (num > 0){ 
      result += num % 2; 
      num = Math.floor(num / 2); 
    }
    
    return result.split('').reverse().join('');
}
```

Note that, rather than _prepending_ the each remainder, we instead concatenate the `result` string and use a combination of string and array methods to _split_ the string into array items, reverse the order of the array, and then _re_join the items in a string. 


### Evaluate the Plan

The `split()` method converts the string to an array, so we could just start with an array instead and use `unshift()` rather than `reverse()` (J4F): 
```js
const decimalToBinary = (num) => {

  let result = [];

  while (num > 0){ 
    result.unshift(num % 2); 
    num = Math.floor(num / 2); 
  }
  
  return result.join('');
}
```

Or we could just cheat and use the built-in `toString()` method and pass it `2` as an argument, meaning we want to convert our string to binary: 
```js
const decimalToBinary = num => num.toString(2);
```

But what fun is that? 


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



