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
An array containing _one_ number, for example: `[1]`.

Let's pseudocode this:
```
INPUT arr, num

IF arr[0] == num
    RETURN 'Bingo!'
ELSE 
    RETURN FALSE
```

This is less of a _search_ and more of a guessing game. What's the next smallest problem? An array containing _two_ numbers: `[1, 2]`.



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

But! What did we do when we wrote those two conditionals? We cut the problem in half: `[1]` and `[2]`. 

TODO

Let's add one more: `[1, 2, 4]`. Now what? We _could_ write conditionals for every index, but will it scale? 

Can we cut this array in half? Not cleanly. 

But we _can_ select the index in the middle and check if it's greater or less than `num`. If `num` is less than the middle index, we will _pivot_ and compare the preceding value. And if `num` is greater than the middle index, we will _pivot_ and check the succeeding value. Hey! Let's call this index _pivot_. 

If our array is `[1, 2, 4]`, the our `pivot` is 2. 

If we are searching for 1, we can start with 

TODO 


```
INPUT arr, num

SET pivot TO arr[1]

IF arr[pivot] == num
    RETURN 'Found num at pivot'
ELSE IF arr[pivot] < num
    RETURN 'Found num in the 0 index'
ELSE 
    RETURN 'It's gotta be in the 2 index...'
```

Let's work with a slightly larger array: `[1, 2, 4, 8]`.

There are a few small problems we need to solve here:

1. In order to scale, we can no longer "hard code" the value stored in `pivot`. 

2. There's no "middle index". So what value do we choose for `pivot`? 

Let's address the first problem first: we can simply divide the array in two.
```
INPUT arr, num

SET pivot TO LENGTH OF arr DIVIDED BY 2

IF arr[pivot] == num
    RETURN 'Found num at pivot'
ELSE IF arr[pivot] < num
    RETURN 'Found num in the 0 index'
ELSE 
    RETURN 'It's gotta be in the 2 index...'
```

Using the example above, our array contains four elements. If we divide the length of our array by two, `pivot` will be equal to 2. 

If `pivot` is equal to 2, the value at that index in our array is `4`. 

But what if there's an odd number of elements in the array? 
```
[1, 2, 3, 4, 5]
```

If we divide the length of the array by 2, we get 2.5. 

We simply need to round up or down. Let's round down. Our pseudocode now reads: 
```
INPUT arr, num

SET pivot TO THE FLOOR OF THE LENGTH OF arr DIVIDED BY 2

IF arr[pivot] == num
    RETURN 'Found num at pivot'
ELSE IF arr[pivot] < num
    RETURN 'Found num in the 0 index'
ELSE 
    RETURN 'It's gotta be in the 2 index...'
```

When we divide the length of this array by 2 and floor the returned value, our `pivot` is equal to 2. 

The value stored in the 2 index is `3`. 

Previously, we hard coded the conditional checks on either side of the pivot. Will that work here? 

No, because there are now _two_ values we need to check on either side of our pivot. 

It's time to iterate! 

TODO WHY DO WE CHOOSE WHILE?

Our `while` loops need a conditional. What do we want to use here? 

TODO

If `pivot` is less than `num`, then on the next iteration we need to start with a value greater than `pivot`. But we need to ensure we are still checking _all_ of the values greater than `pivot`. 

And if `pivot` is greater than `num`, then on the next iteration we need to start with a value less than `pivot`. And, as above, we need to ensure we are still checking _all_ of the values less than `pivot`. 

Do you see a pattern? 

Before we address iteration, et's translate these conditionals to pseudocode: 
```
INPUT arr, num

SET pivot TO THE FLOOR OF THE LENGTH OF arr DIVIDED BY 2

IF arr[pivot] == num
    RETURN 'Found num at pivot'
ELSE IF arr[pivot] < num
    START SEARCHING IN THE NEXT ITERATION AT pivot + 1
ELSE 
    SEARCH UP TO pivot - 1 IN THE NEXT ITERATION
```

Let's step through a hypothetical scenario using our five element array and searching for `5`. 

On our first iteration, we set `pivot` to `3`. 

TODO GRAPHIC/TABLE

We start our conditional checks and see that `pivot` is not equal to `num`, but that it _is_ less than `num`. We can now ignore the values up to and including `pivot`. 

TODO GRAPHIC

In the next iteration, we'll start searching at `pivot + 1`, which is `4`. 

What happens in the next iteration? 

We set `pivot` to the floor of the length of our array divided by 2, which is 2. 

Hey! Wait! We already checked this value. 

We need a new `pivot`. 

We need to set a `pivot` from the remaining values to be checked. In our case, that's: 
```
[4, 5]
```

If we floor the length of _this_ array divided by 2, we get 1. But we know that's not _actually_ the 1 index. 

What do we do here? 

We get abstract! 

Let's declare variables to store these values in each iteration:

```
SET start index TO 0
SET end index TO THE LENGTH OF THE ARRAY - 1
```

Finally, we need to refactor our conditional statements to reassign these values in each iteration: 

```
INPUT arr, num

SET start index TO 0
SET end index TO THE LENGTH OF THE ARRAY - 1

WHILE
    SET pivot TO THE FLOOR OF THE LENGTH OF arr DIVIDED BY 2

    IF arr[pivot] == num
        RETURN 'Found num at pivot'
    ELSE IF arr[pivot] < num
        SET start index TO pivot + 1
    ELSE 
        SET end index TO pivot - 1 
RETURN FALSE
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
import math

powers = [1, 2, 4, 8 ,16, 32, 64, 128, 256, 512]
 
def binarySearch(arr, num):
 
   startIndex = 0
   endIndex = len(arr)-1
  
   while (startIndex <= endIndex):
      
       pivot = math.floor((startIndex + endIndex)/2)
 
       if (arr[pivot] == num):
            return f"Found {num} at index {pivot}"
       elif (arr[pivot] < num):
           startIndex = pivot + 1
       else:
           endIndex = pivot - 1

   return false
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



