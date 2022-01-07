---
title: "Learn How to Write Pseudocode by Solving the Classic Fizz Buzz Algorithm"
date: "2022-01-14"
description: TODO 
keywords: ['algorithm', 'fizz buzz', 'fizzbuzz', 'learn', 'javascript', 'pseudocode']
---

![ {{ ALT TEXT }} ](./jarednielsen-algorithm-fizzbuzz.png)

If you want to learn how to code, you'll want to learn how to pseudocode, which means thinking through the problem _before_ writing any code. 
TODO

In this tutorial, you will learn how to write pseudocode while solving the classic Fizz Buzz algorithm. 


## Retrieval Practice

* What is programming? 

* TODO

* What is the modulo operator? 



### What is Programming? 

[Programming is problem solving](https://jarednielsen.com/programming-problem-solving/). There are four steps we need to take to solve any programming problem: 

1. Understand the problem

2. Make a plan

3. Execute the plan

4. Evaluate the plan


### TODO

TODO


### What is the Modulo Operator?

In programming, the [modulo operation](https://en.wikipedia.org/wiki/Modulo_operation) returns the remainder of a division operation.


## Let's Get Meta

* What is pseudocode? 

* TODO

* What's the Big O of Fizz Buzz?


## Learn Pseudocode TODO

TODO


### Understand the Problem

To understand our problem, we first need to define it. Let’s reframe the problem as acceptance criteria:

> GIVEN a whole number

> WHEN counting up from 1 to that number

> THEN I log Fizz if the number is a multiple of 3, Buzz if the number is a multiple of 5, and FizzBuzz if the number is a multiple of 3 and 5

That’s our general outline. We know our input conditions (a whole number) and our output requirements (multiples of 3, 5, and 3 and 5, logged as "Fizz", "Buzz", and "FizzBuzz", respectively).

Let’s make a plan!


### Make a Plan



#### Decomposition

TODO

What's the smallest problem we can solve? 

1.

Let's pseudocode it: 
```md
INPUT 1

IF 1 IS A MULTIPLE OF 3
    OUTPUT "Fizz"


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

Do you see a pattern emerging? 

#### Pattern Recognition



TODO

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


### Abstraction



### TODO Algorithm

There's one more refactor we can make before we translate this to code. What's another way of saying "IS A MULTIPLE OF"? 

[Modulo.](https://en.wikipedia.org/wiki/Modulo_operation)

The modulo operation returns the remainder of a division operation. 

What's 3 divided by 2? 

It's 1.5, but where did we get that .5? It's the remainder, just _divided_. 

The quotient of `3 / 2` is 1. The remainder is 1. 

The quotient of `3 / 3` is also 1. But there's no remainder. 

The quotient of `3 / 4` is 0, and the remainder is 3. 

TODO 

Let's update our pseudocode...
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

TODO



```js
TODO
```


## Big O & {{ TITLE }} Algorithm

TODO 


## Reflection

* What is Computational Thinking? 

* 

* 


### What is Computational Thinking?

Computational thinking is a set of methods used for defining and solving a problem in terms that a computer could also perform. 


### TODO BULLET #2

TODO


### TODO BULLET #3

TODO


## Learn {{ TITLE } Algorithm in JavaScript




