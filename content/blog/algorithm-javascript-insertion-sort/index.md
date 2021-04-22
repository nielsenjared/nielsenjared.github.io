---
title: "Learn Insertions Sort Algorithm in JavaScript"
date: "2021-TO-DO"
description: "TODO"
keywords: ['algorithm', 'insertion sort', 'javascript']
---


![ {{ TODO ALT TEXT }} ](./jarednielsen-algorithm-javascript-insertion-sort.png)


TODO INTRODUCTION

---

Ready to level up? Grab your copies of [The Little Book of Big O](https://gum.co/big-o) and [The Seven Data Structures of Highly Effective Developers](https://gum.co/data-structures).

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

* What Problem(s) Does Insertion Sort Solve? 

* Why is it called 'Insertion Sort'? 

* What is computational thinking?


## How to Implement Insertion Sort Algorithm in JavaScript 

If we are writing a sorting algorithm, we need to start with something to sort. Let's declare an array of 'unsorted' integers:

```js
const unsorted = [10, 1, 9, 2, 8, 3, 7, 4, 6, 5];
```

TODO 

Next, let's declare our `insertionSort` function:

```js 
const insertionSort = (arr) => {
    return arr;
};
```

TODO

Now what?

In [How to Solve It](TODO), George Polya outlines four steps of problem solving: 

1. Understand the problem.

2. Make a plan.

3. Execute the plan. 

4. Evaluate the result.


TODO four steps to computational thinking 

1. Decomposition

2. Pattern recognition 

3. Abstraction 

4. Algorithms 



In order to break our problem down, we need to understand it. 

Let's first define it and reframe the problem as acceptance criteria:

> GIVEN an array of unsorted numbers
> WHEN we check the value of each number and find one out of sequence
> THEN we insert that number in its ordinal location in the array 

Where have we seen this or something like it before? 

Let's use an analogy!

TODO card graphics

Imagine you were holding a deck of cards and you wanted to put the cards in order. Let's use the first half of our `unsorted` array as an example:

```
10, 1, 9, 2, 8
```

TODO

Moving left to right, you would look at the value of the first card and compare it to the value of the second card. In this instance, our first card is `10` and our second card is `1`. `10` is greater than `1`, so we _swap_ their positions. Now our hand looks like this: 

```
1, 10, 9, 2, 8
```



Again, moving left to right, we compare the values of our next two cards and see that `10` is greater than `9`, so we take `9` out of our hand _temporarily_ and _insert_ it between `1` and `10`. Now our hand looks like this: 

```
1, 9, 10, 2, 8
```

And again, moving left to right, our next two cards are `10` and `2`. `10` is greater than `2`, but, now, `9` is _also_ greater than `2`, so we _insert_ `2` between `1` and `9`. Now our hands looks like this: 

```
1, 2, 9, 10, 8
```

Lastly, we _temporarily_ remove `8` from our hand and compare it to the other cards. `10` is greater than `8`, and `9` is greater than `8`, but `2` is not. So we _insert_ `8` between `2` and `9`. Our sorted hand looks like this: 

```
1, 2, 8, 9, 10
```

TODO decompose


So... how do we translate this to JavaScript? 

Let's break it down, or decompose the problem, into smaller pieces. What if our array only contained two values?

```js
const test = [10, 1];
```

We can see that we need to compare our two values, and if the first value is greater than the second value, we need to swap them. 

Our immediate inclination might be something like this:

```js 
const insertionSort = (arr) => {

    if (arr[0] > arr[1]) {
        arr[1] = arr[0];
        arr[0] = arr[1];
    }

    return arr;
};
```

But this won't work. Why? 

The result will be the following:

```
[10, 10]
```

We could create a new array and return that, _or_, if we think back to our playing cards analogy, we can _temporarily_ remove a value from the array and then _insert_ it into the array. 

```js 
const insertionSort = (arr) => {

    if (arr[0] > arr[1]) {
        arr[1] = arr[0];
        arr[0] = arr[1];
    }

    return arr;
};
```

But which value do we _temporarily_ remove? `0` or `1`? 

Let's revisit our playing cards analogy again: if we are proceeding left to right through our hand, or array, do we pull the first card or the second? 

```js
const unsorted = [10, 1, 9, 2, 8, 3, 7, 4, 6, 5];
```

If we are using the first half of our array, our inclination is likely to _temporarily_ remove the first card as it is greater. But what if we are working with the latter half of the array, where the first value is _less than_ the next? 

```
3, 7, 4, 6, 5
```

If we _temporarily_ remove the first card, `3`, we would check its value against the next card, `7`, see that `3` is less than  `7`, and simply put it back in its original location. 

We could also start with `7`, check its value against the previous card, see that `7` is greater than `3`, and return it to our hand. 

Do you see the pattern? So what about `10` and `1`?

We _could_ temporarily remove `10` and check it against the next value, but as we saw above, we could accomplish the same end by starting with the second card, or value, in this case `1`. 

Long story short:
```js 
const insertionSort = (arr) => {
    let temp = arr[1];

    if (arr[0] > temp) {
        arr[1] = arr[0];
        arr[0] = temp;
    }

    return arr;
};
```

TODO
Now that we see the pattern, how do we _abstract_, or _model_, this? 

What do I mean by that? 

As soon as we declared `temp`, we entered the realm of abstraction. `arr[1]` and `arr[2]` both refer to specific values in our array. But `temp` can refer to _any_ value we assign to it. In our conditional statement, we are still making specific reference to `arr[0]`. How do we _model_ this value? 


TODO



```js 
const insertionSort = (arr) => {
    let temp = arr[1];
    let prev = 0;

    if (arr[prev] > temp) {
        arr[prev + 1] = arr[prev];
        arr[prev] = temp;
    }

    return arr;
};
```

TODO
Now what? 

It's time to get algorithmic. 

This solution is great for two values, but how do we sort an array of multiple values? 

For each value in the array, we will need to perform our conditional operation. Here's a biolerplate:
```js 
const insertionSort = (arr) => {
    for (let i = 0; i < arr.length; i++) { 
        // what are we doing here?

    }
    return arr;
};
```




Just like in our playing cards analogy, we need a means of _temporarily_ removing a value from our array. 
```js 
const insertionSort = (arr) => {
    for (let i = 0; i < arr.length; i++) { 
        let temp = arr[i];
        // and? 
    }
    return arr;
};
```

And then we need to compare it to the previous value. 

Wait! There is no previous value. 

On our first iteration, `i` is equal to `0`, the first index in our array. So let's start iterating with the second element. 

```js 
const insertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++) { 
        let temp = arr[i];
        // and? 
    }
    return arr;
};
```

TODO

Let's call it `j`. 

We _could_ simply set the value of `j` to 0, but what happens when the value of `i` increases? How do we do this _programmatically_? 

Let's set the value of `j` to `i - 1`. 

```js 
const insertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++) { 
        let temp = arr[i];
        let j = i - 1; 
    }
    return arr;
};
```



Here's the crux of the algorithm: 
you start iterating with the secvondf item in your array and compare it to the previous item
swap if necessary. 





```js 
const insertionSort = (arr) => {

    for (let i = 1; i < arr.length; i++) {
        let temp = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > temp) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = temp;
    }
    return arr;
};

let sorted = insertionSort(unsorted);
```

TODO


## Big O & Insertion Sort Algorithm

TODO 


## Reflection

* What Problem(s) Does Insertion Solve? 

* 

* What is computational thinking?


### What Problem(s) Does Insertion Sort Solve?

TODO 


### TODO BULLET #2

TODO


### What is computational thinking?

TODO


## Learn Insertion Sort Algorithm in JavaScript

TODO RECAP FOR SEO