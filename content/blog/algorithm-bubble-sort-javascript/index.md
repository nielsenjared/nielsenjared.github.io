---
title: "How to Code the Bubble Sort Algorithm in JavaScript"
date: "2021-05-21"
description: "If you want to think like a programmer, you need to learn algorithms. Learning algorithms improves your problem solving skills by revealing common patterns in software development. In this tutorial, you will learn how to code the bubble sort algorithm in JavaScript. "
keywords: ['algorithm', 'bubble sort', 'javascript']
---


![ bubble sort ](./jarednielsen-algorithm-javascript-bubble-sort.png)

If you want to think like a programmer, you need to learn algorithms. Learning algorithms improves your problem solving skills by revealing common patterns in software development. In this tutorial, you will learn how to code the bubble sort algorithm in JavaScript. 

---
![A is for Algorithms](./../../assets/graphics/algorithms/jarednielsen-algorithms-banner.png)
Give yourself an A. Grab your copy of [A is for Algorithms](https://gum.co/algorithms)

---


## Retrieval Practice

* TODO

* TODO

* TODO 


### TODO BULLET #1

TODO 


### TODO BULLET #2

TODO


### TODO BULLET #3

TODO


## Let's Get Meta

* Why is it called 'Bubble Sort'?

* What Problem(s) Does Bubble Sort Solve? 

* What is the Big O of Bubble Sort?


## TODO  

TODO SOMETHING ABOUT BUBBLE SORT AND HOW IT IS AN COMPARISON / EXCHANGE ALGORITHM



If we are writing a sorting algorithm, we need to start with something to sort. Let’s declare an array of ‘unsorted’ integers:

```md
[10, 1, 9, 2, 8, 3, 7, 4, 6, 5];
```



Now what?

Let's revisit our problem solving heuristic: 

1. Understand the problem

2. Make a plan

3. Execute the plan

4. Evaluate the plan


### Understand the Problem

To understand our problem, we first need to define it.

Let's reframe the problem as acceptance criteria:

> GIVEN an array of unsorted numbers

> WHEN we compare the values of two adjacent numbers and find them out of non-descending order

> THEN we exchange their positions in the array 

That's our general outline. We know our input conditions (an unsorted array) and our output requirements (a sorted array), and our goal is to arrange the elements in the array in ascending order.

Let's make a plan!


### Make a Plan

TODO This is where we want to use our computational thinking heuristics: 

* Decomposition

* Pattern recognition

* Abstraction

* Algorithm



If we read between the lines of our acceptance criteria, we will see that we need to check a condition repeatedly. 

According to R. G. Dromey in [How to Solve It By Computer](TODO), there are three things we need to take into account to construct any loop: 

* the initial conditions that need to apply _before_ the loop begins to execute

* the _invariant relation_ that must apply after each iteration of the loop

* the conditions under which the iterative process must _terminate_ 

How do we find the initial conditions? 

What's the smallest problem we can solve? 

TODO

If our "unsorted" array is empty, we will return _before_ we begin iterating. 

Speaking of iterating, what _is_ the smallest problem we can solve? 

If we're sorting an array, it's two numbers: 

```md
[10, 1];
```

TODO 

We're getting ahead of ourselves here. Before we write any more JavaScript, let's pseudocode a solution. 

```md
FOR each element, _n_, in an unsorted array

    IF the value of _n_ is greater than the next element, or _n + 1_

        SWAP the elements

RETURN the sorted array
```

Will this work? Rather than translate this into code, let's think it through. If we test this with our smallest problem, `[10, 1]`, there's no problem. It works! Let's "run" this program with our `unsorted` array and map it out in a table...

| Iteration | Array                             |
| ---       | ---                               |
| 1         | [10, 1, 9, 2, 8, 3, 7, 4, 6, 5]   |
| 2         | [1, 10, 9, 2, 8, 3, 7, 4, 6, 5]   |
| 3         | [1, 9, 10, 2, 8, 3, 7, 4, 6, 5]   |
| 4         | [1, 9, 2, 10, 8, 3, 7, 4, 6, 5]   |
| 5         | [1, 9, 2, 8, 10, 3, 7, 4, 6, 5]   |
| 6         | [1, 9, 2, 8, 3, 10, 7, 4, 6, 5]   |
| 7         | [1, 9, 2, 8, 3, 7, 10, 4, 6, 5]   |
| 8         | [1, 9, 2, 8, 3, 7, 4, 10, 6, 5]   |
| 9         | [1, 9, 2, 8, 3, 7, 4, 6, 10, 5]   |
| 10        | [1, 9, 2, 8, 3, 7, 4, 6, 5, 10]   |


What's the pattern we see? 

Our largest value, 10, is swapped with each iteration, but everything else remains the same.

What's the problem? 

Our algorithm is only comparing and swapping two adjacent values, not all of the values in the array.

What's the solution? 

More loops! 

Now that we moved the largest value to the end of the array, we need to start at the beginning and find the second largest value and move it to the penultimate position. Rinse and repeat. So for each iteration we need another iteration. 

Here's our updated pseudocode:

```md
FOR each element in an array

    FOR each unsorted element 

        IF the value of the element is greater than the next element

            SWAP the elements

RETURN the sorted array
```

Will this work? Yes. But! Can we do better? Let's think it through...

If _n_ is the length of our array, does the nested loop need to iterate over _n_? 

No. Why? 

With each iteration we are sorting one value so the elements that remain to be sorted are _n - 1_. 

I'm going to belabor this point because it's the crux of Bubble Sort and a common pattern in algorithm design.

If the starting value of _n_ is 10 and we sort the largest value, 10, in the first iteration, how many elements remain to be sorted? 

9

If the starting value of our next iteration, _n - 1_, is 9 and we sort the next largest value, also 9, how many elements remain to be sorted? 

8

What is another way of specifying the value of 8? 

If _n_ is equal to 10, then _n - 2_  is equal to 8. 

What about 7? 

_n - 3_

See the pattern? 

From patterns we can form abstractions.

How do we form abstractions? 

Variables! 

We can use the counter variable in our `for` loop to subtract from _n_. 

TODO
Let's map it to a table:

| i     | n - i |
| ---   | ---   |
| 1     | 9     |
| 2     | 8     |
| 3     | 7     |
| 4     | 6     |
| 5     | 5     |
| 6     | 4     |
| 7     | 3     |
| 8     | 2     |
| 9     | 1     |
| 10    | 0     |


And let's map that to our pseudocode:

```md
FOR each element, _i_, in an array, _n_

    FOR each unsorted element, _j_, in an array, _n - i_ 

        IF the value of _j_ is greater than _j + 1_

            SWAP the elements

RETURN the sorted array
```

Now that we've got a plan, let's execute it!

### How to Code the Bubble Sort Algorithm in JavaScript

Let's initialize our array: 
```js
const unsorted = [10, 1, 9, 2, 8, 3, 7, 4, 6, 5];
```

Next, let’s declare our Bubble Sort function:

```js
const bubbleSort = (arr) => {
    return arr;
};
```

Now we simply translate our pseudode line-by-line: 
```js
const bubbleSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
  
        for (let j = 0; j < arr.length - i; j++) {

            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }

        }

    }

    return arr;
}
```


### Evaluate the Plan

Other than using a different sort algorithm, there a few optimizations we can make to our Bubble Sort function. 

Let's start with this line:
```js
    for (let i = 0; i < arr.length; i++) {
```

Do we need to initialize our counter variable with 0? 

No. Why? 

Because our nested loop is initialized with 0, which is where the magic is happening. We are guaranteed that the first two values will be compared, so we can initialize our outer loop with 1. 

```js
const bubbleSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
  
        for (let j = 0; j < arr.length - i; j++) {

            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }

        }

    }

    return arr;
}
```

We're not done with this line:
```js
    for (let i = 0; i < arr.length; i++) {
```

What else can we do? Do we need to iterate over the entire length of the array? 

No. Why? 

Because, as above, our nested loop is comparing the current value and the value _next_ to it, so we can extend our generalization, _n - 1_, to the outer loop as well. 

```js
const bubbleSort = (arr) => {
    for (let i = 1; i < arr.length - 1; i++) {
  
        for (let j = 0; j < arr.length - i; j++) {

            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }

        }

    }

    return arr;
}
```



What if the array passed to `bubbleSort` was already sorted? Or mostly sorted? We wouldn't need to perform all of our iterations. How would we exit? 

TODO 

```js
const unsorted = [10, 1, 9, 2, 8, 3, 7, 4, 6, 5];

const bubbleSort = arr => {

    let swapped = false
  
    for (let i = 1; i < arr.length - 1; i++) {
        swapped = false;
  
        for (let j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            
                swapped = true;
            }
        }
    
        if (!swapped) {
            return arr;
        }
    }

    return arr;
}
```

What if the array passed to `bubbleSort` was empty? How would we catch that? We could simply check whether or not the length of the array was true or false and return accordingly. 

```js
const bubbleSort = arr => {
    if (!arr.length) {
        return arr;
    }

    let swapped = false
  
    for (let i = 1; i < arr.length - 1; i++) {
        swapped = false;
  
        for (let j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            
                swapped = true;
            }
        }
    
        if (!swapped) {
            return arr;
        }
    }

    return arr;
}
```

One last optimization, if we wanted, we could get fancy with our swap and use array destructuring: 
```js
[a[j], a[j + 1]] = [a[j + 1], a[j]];
```


## Reflection

* Why is it called 'Bubble Sort'?

* What Problem(s) Does Bubble Sort Solve? 

* What is the Big O of Bubble Sort?


### TODO BULLET #1

TODO


### What Problem(s) Does Bubble Sort Solve?

TODO 


### What is the Big O of Bubble Sort? 

TODO


## How to Code the Bubble Sort Algorithm in JavaScript

TODO RECAP FOR SEO



