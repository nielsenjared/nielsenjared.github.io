---
title: 'How to Convert a Decimal to Binary in JavaScript'
date: '2020-05-15'
description: "There are 10 kinds of programmers in the world: those who can convert decimal to binary and those who can't. In this tutorial, you will learn how to convert a decmial to binary using a Stack data structure with examples in JavaScript."
keywords: ['javascript', 'decimal', 'binary', 'convert']
---

![](./jarednielsen-convert-decimal-binary.png)


There are 10 kinds of programmers in the world: those who can convert decimal to binary and those who can't. In this tutorial, you will learn how to convert a decmial to binary using a Stack data structure with examples in JavaScript. 


## Reflection Practice

* What's a stack? 

* What's a base? 

* What is binary?


### What's a Stack? 

A stack is a data structure that follows the Last In First Out principle (LIFO). We can only add or remove elements from the top of the stack .

If you want to go deeper, read my article about the [JavaScript Stack Data Structure](https://jarednielsen.com/data-structure-stack-javascript/).


### What's a Base? 

A base is the number of different digits used to count in a numerical system. We count in base 10 most likely due to us evolving ten fingers. When we count in base 10, we use ten distinct _whole_ numbers.  


### What is Binary?

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


## Let's Get Meta 

* How do you build something out of nothing? 

* What mathematical operation do we use to break problems down?

* What does the modulo operator do?


## How to Convert Decimal to Binary 

To understand how to convert decimal to base, it's useful to first understand how to convert decimal to binary. Our challenge is to convert a decimal, such as `10`, to its binary counterpart, `1010`. 

If you already know how to do this, skip ahead to [How To Convert a Decimal Binary Using a Stack in JavaScript]().

How do we break this problem down? 

In base 10, what is `1`? 

It is one of ten possible values, or, `1 / 10`. 

What does that look like? 

What mathematical operation do we use to break problems down? 

Division. 

So in base 2, what is `1`? 

It is one of _two_ possible values. 

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

We're building our binary strings with the remainder, and not the quotient, of our division operation. 

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
| 5         | 100     |


## How To Convert a Decimal Binary Using a Stack in JavaScript

Let's translate this to JavaScript using a Stack. If you're unfamiliar with stacks, you may want to first read [JavaScript Stack Data Structure](https://jarednielsen.com/data-structure-stack-javascript/).

Here's our algorithm:

```js
const decimalToBinary = (num) => {
  const stack = new Stack();

  let result = '';
  
  while (num > 0){ 
    stack.push(num % 2); 
    num = Math.floor(num / 2); 
  }
  
  while (stack.top > 0){ 
    result += stack.pop();
  }

  return result;
}
```

What's happening here? 

We first declare a new instance of our `Stack` class, `stack`. 

We next declare a `result` variables, setting the value to an empty string. 

We next declare two `while` loops. 

The first `while` loop iterates over the value of our algorithm parameter, `num`. In each iteration, we use the modulo operator, `%`, to get the remainder of `num` divided by `2` and `push()` it to the `stack`. We then reassign the value of `num` to the current value of `num` divided by `2`. But! We use `floor()` to round it down. Why? We want to work with whole numbers and we are most interested in our remainder. 

Let's walk through each iteration. 

If `num` is equal to `6`, then in our first iteration, we push `0` to the stack: 
```
0
```

In the next iteration, `num` is now equal to `3`, so we push `1` to the stack: 
```
1
0
```

The value of `num` is now `1`, which is greater than zero, so in the next iteration we push `1` to the stack: 
```
1
1
0
```

The value of `num` is now less than zero, so we move on to the second `while` loop, which iterates over the stack. We use the `pop()` method to remove each value from the top of the stack and build our `result` string. 
```
'1' + '1' + '0' = '110'
```

If we don't want to use a Stack, we could simply concatenate a string, then reverse it: 
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

But the `split()` converts the string to an array, so we could just start with an array instead and use `unshift()` rather than `reverse()` (J4F): 
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

Or we could just cheat and use the built-in `toString()` method and pass it `2` as an argument, meaning we want to convert our string to binar: 
```js
const decimalToBinary = num => num.toString(2);
```

But what fun is that? 


## Reflection 

* How do you build something out of nothing? 

* What mathematical operation do we use to break problems down?

* What does the modulo operator do?


### How Do You Build Something Out of Nothing? 

Form patterns! 


### What Mathematical Operation Do We Use to Break Problems Down? 

Division! One of the keys to effective problem solving is breaking problems down into smaller problems. Here, we literally divided the problem. 

See also: divide & conquer 

### What Does the Module Operator Do? 

The modulo operator, `%`, returns the _remainder_ of division, rather than the quotient. 

In this tutorial, you learn edhow to convert a decmial to binary using a Stack data structure with examples in JavaScript. 


