---
title: "Learn How to Write Pseudocode by Solving the Classic Fizz Buzz Algorithm"
date: "2022-01-14"
description: If you want to learn how to code, you'll want to learn how to write pseudocode. Writing pseudocode helps you think through the problem _before_ writing any _code_ code. In this tutorial, you will learn how to write pseudocode while solving the classic Fizz Buzz algorithm. 
keywords: ['algorithm', 'fizz buzz', 'fizzbuzz', 'learn', 'javascript', 'pseudocode']
---

![ Fizz Buzz ](./jarednielsen-algorithm-fizzbuzz.png)

If you want to learn how to code, you'll want to learn how to write pseudocode. Writing pseudocode helps you think through the problem _before_ writing any _code_ code. In this tutorial, you will learn how to write pseudocode while solving the classic Fizz Buzz algorithm. 


## Retrieval Practice

* What is programming? 

* What is plain language? 

* What is the modulo operator? 


### What is Programming? 

[Programming is problem solving](https://jarednielsen.com/programming-problem-solving/). There are four steps we need to take to solve any programming problem: 

1. Understand the problem

2. Make a plan

3. Execute the plan

4. Evaluate the plan


### What is Plain Language? 

[Plain language](https://en.wikipedia.org/wiki/Plain_language) is a simple and straightforward approach to writing that ensures the reader can quickly and easily understand what is being communicated. 

Was this effective? 


### What is the Modulo Operator?

In programming, the [modulo operation](https://en.wikipedia.org/wiki/Modulo_operation) returns the remainder of a division operation.


## Let's Get Meta

Programming is problem solving. Both are metacognitive activities. To excel, we want to improve our thinking about thinking. Ask yourself the following questions and keep them back of mind as you proceed:

* What is pseudocode? 

* Why do I need to learn Fizz Buzz?

* What's the Big O of Fizz Buzz?


## Learn How to Write Pseudocode 

Pseudocode is an approach to designing and solving algorithms using plain language rather than the syntax of a specific programming language. Writing pseudocode allows us to focus on the solution to the problem rather than the details of its implementation.

There are no hard and fast rules on how to write pseudocode. You will certainly encounter variations, but there are a few conventions that we will follow here: 

* **Order of operations**: When we write pseudocode, we still follow the flow of execution that we're accustomed to in most programming languages. Like a programming language, we indent statements to signify code blocks and functions. 

* **Vocabulary**: There are many opinions on what constitutes the vocabulary of pseudocode and all of them are correct, but most importantly yours. Use the words that make sense to you when writing pseudocode, but keep in mind that you may not be the only one reading your "algorithm". That said, there are some statements that seem to be universal, such as `INPUT` and `OUTPUT`, `FOR`, `WHILE`, `IF-ELSE`, you get the idea...

* **ALL CAPS**: Pseudocode is often written in all caps, with the exception of variable names, which are lower case. I like this approach as it visually distinguishes the pseudocode from most contemporary programming languages, which are primarily lowercase. 

Now that we are equipped with the basics of pseudocode, let's Fizz that Buzz! 


### Understand the Problem

To understand our problem, we first need to define it. Let’s reframe the problem as acceptance criteria:

> GIVEN a whole number

> WHEN counting up from 1 to that number

> THEN "Fizz" is logged if the number is a multiple of 3, "Buzz" is logged if the number is a multiple of 5, and "FizzBuzz" if the number is a multiple of 3 and 5

That’s our general outline. We know our input conditions (a whole number) and our output requirements (multiples of 3, 5, and 3 and 5, logged as "Fizz", "Buzz", and "FizzBuzz", respectively).

Let’s make a plan!


### Make a Plan

What's the smallest problem we can solve? 

1.

Let's pseudocode it: 
```md
INPUT 1

IF 1 IS A MULTIPLE OF 3
    OUTPUT "Fizz"
```

But we already know it won't log anything. So, our smallest problem is actually 3. Our count starts at 1, so we will need to iterate from 1 to 3, then check if each value is a multiple 3. 

Let's pseudocode this...
```md
INPUT whole number

FOR EACH number FROM 1 TO whole number

    IF number IS A MULTIPLE OF 3
        OUTPUT "Fizz"
    ELSE
        OUTPUT number
```

This will output:
```md
1
2
Fizz
```

What's our next smallest problem? 5. We'll still iterate from 1 to 5, but now we need to add a conditional to check whether or not the current value, `i`, is a multiple of 5. 

```md
INPUT whole number

FOR EACH number FROM 1 TO whole number

    IF number IS A MULTIPLE OF 3
        OUTPUT "Fizz"
    ELSE IF number IS A MULTIPLE OF 5
        OUTPUT "Buzz"
    ELSE
        OUTPUT number
```

Our output will now be the following: 
```md
1
2
Fizz
4
Buzz
```

We implemented conditionals to check for multiples of 3 and multiples of 5. Now we need a conditional check for multiples of 3 _and_ 5. 

```md
INPUT whole number

FOR EACH number FROM 1 TO whole number

    IF number IS A MULTIPLE OF 3
        OUTPUT "Fizz"
    ELSE IF number IS A MULTIPLE OF 5
        OUTPUT "Buzz"
    ELSE IF number IS A MULTIPLE OF 3 AND 5
        OUTPUT "FizzBuzz"
    ELSE
        OUTPUT number
```

Looks good? 

What happens if we run this program? 
```md
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
Fizz
```

Where's the "Buzz"? 

Following the order of operations, our program first checks for multiples of 3. If it doesn't find a multiple of 3, it then checks for multiple of 5, and if it doesn't find that, it then checks for multiples of 3 and 5. So when we counted to 15, we checked if 15 is a mutliple of 3, and returned "Fizz". What's the solution? Refactor our algorithm!

```md
INPUT whole number

FOR EACH number FROM 1 TO whole number

    IF number IS A MULTIPLE OF 3 AND 5
        OUTPUT "FizzBuzz"
    ELSE IF number IS A MULTIPLE OF 5
        OUTPUT "Buzz"
    ELSE IF number IS A MULTIPLE OF 3 
        OUTPUT "Fizz"
    ELSE
        OUTPUT number
```

We simply move our conditional checking for multiples of 3 _and_ 5 to the top.

NOTE: This is something to keep in mind when designing and solving _any_ algorithm. If you're working with conditionals (see what I did there), start with the specific case and move to the more general. 

There's one more refactor we can make before we translate this to code. What's another way of saying "IS A MULTIPLE OF"? 

[Modulo.](https://en.wikipedia.org/wiki/Modulo_operation)

The modulo operation returns the remainder of a division operation. 

What's 3 divided by 2? 

It's 1.5, but where did we get that .5? It's the remainder, just _divided_. 

The quotient of `3 / 2` is 1. The remainder is 1. 

The quotient of `3 / 3` is also 1. But there's no remainder. 

The quotient of `3 / 4` is 0, and the remainder is 3. 

Let's update our pseudocode to use the modulo operator:
```md
INPUT whole number

FOR EACH number FROM 1 TO whole number

    IF number MOD 3 AND 5 IS EQUAL TO 0
        OUTPUT "FizzBuzz"
    ELSE IF number MOD 5 IS EQUAL TO 0
        OUTPUT "Buzz"
    ELSE IF number MOD 3 IS EQUAL TO 0
        OUTPUT "Fizz"
    ELSE
        OUTPUT number
```


### Execute the Plan

Now we simply need to translate our algorithm to JavaScript. 

```js
const fizzBuzz = (n) => {
    for (let i = 1; i <= n; i++){
        if ((i % 3 === 0) && (i % 5 === 0)) {
            console.log(i, "Fizz Buzz");
        }
        else if (i % 3 === 0) {
            console.log(i, "Fizz");
        }
        else if (i % 5 === 0) {
            console.log(i, "Buzz");
        }
        else {
            console.log(i);
        }
    }
}
```

### Evaluate the Plan

Can we do better? 

Or worse?

We can't improve the time complexity (see Big O below), but we can do some fancy refactoring. 

Rather than checking multiple conditions in this block:
```js
        if ((i % 3 === 0) && (i % 5 === 0)) {
            console.log(i, "Fizz Buzz");
        }
```

We could simply check if the number was a multiple of 15:
```js
        if ((i % 15 === 0) {
            console.log(i, "Fizz Buzz");
        }
```

This may be difficult to read, though, especially considering the acceptance criteria specified multiples of 3 _and_ 5. 

If we wanted to show off, we _could_ refactor our `for` loop down to one line:

```js
for(let i = 0; i < n;) console.log((++i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || i);
```

But this is even more difficult to read, let alone explain! 


## Reflection

* What is pseudocode? 

* Why do I need to learn Fizz Buzz?

* What's the Big O of Fizz Buzz? 


### What is Pseudocode? 

Pseudocode is an approach to designing and solving algorithms using plain language rather than the syntax of a specific programming language. Writing pseudocode allows us to focus on the solution to the problem rather than the details of its implementation.


### Why Do I Need to Learn Fizz Buzz?

There are two primary reasons to learn Fizz Buzz: 

* Fizz Buzz is a common interview question, used for entry-level whiteboarding to quickly assess whether or not you know a language before moving on to more complicated problems. It is, in many regards, the "Hello World Program" of algorithms, and can be considered a rite of passage. 

* The key concept used in Fizz Buzz is the modulo operator. It's a very simple yet powerful tool available to programmers and learning to use it in this context will help you apply it in much more complicated scenarios.


## What's the Big O of Fizz Buzz?

O(n)

It's linear. We perform one operation for every input. 

If you want to learn more about linear time complexity, check out my article [Big O Linear Time Complexity](https://jarednielsen.com/big-o-linear-time-complexity/).


## Learn How to Code the Swap Algorithm in JavaScript

In our next tutorial, we'll learn computational thinking by solving the swap algorithm in JavaScript. 




