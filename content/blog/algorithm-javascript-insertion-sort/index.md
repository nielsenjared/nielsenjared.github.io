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

* 


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

So... how do we translate this to JavaScript? 

```js 
const insertionSort = (arr) => {
    for (let i = 0; i < arr.length; i++) { 
        // what are we doing here?

    }
    return arr;
};
```

This is biolerplate. 



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

* 


### What Problem(s) Does Insertion Sort Solve?

TODO 


### TODO BULLET #2

TODO


### TODO BULLET #3

TODO


## Learn Insertion Sort Algorithm in JavaScript

TODO RECAP FOR SEO