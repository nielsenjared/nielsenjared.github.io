---
title: Big O Log-Linear Time Complexity
date: "2020-02-21"
description: ~155-160 characters
keywords: ["big o", "log linear", "time complexity"]
---
![](./jarednielsen-image-title.png)

@TODO plug newsletter http://eepurl.com/cP8CMn


@TODO introduction

also known as quasilinear time

## Quick Refresher

### O(n)

In [Big O Linear Time Complexity](https://jarednielsen.com/big-o-linear-time-complexity/), we learned 

```js
const animals = [“ocelot”, “octopus”, “opossum”, “orangutan”, “orca”, “oriole”, “oryx”, “osprey”];
```



```js
for (let i = 0; i < animals.length; i++) {
    if (animals[i] === userInput) {
        return `Found ${userInput} at ${i}`;
    };
};
```






### O(n^2)

In [Big O Quadratic Time Complexity](https://jarednielsen.com/big-o-quadratic-time-complexity/), we learned...

A classic example of O(n^2) is [Bubble Sort](https://en.wikipedia.org/wiki/Bubble_sort).

```js
const bubbleSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                let tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }
    return arr;
};
```

Why is the order of `bubbleSort()` O(n^2)?

🔑 Nested iteration. 

We could also write this with a `while` loop:

```js
const bubbleSort = arr => {
  
  let swapped = true;
  
  while (swapped) {
    swapped = false;
    
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  }
  return arr;
}
```

Either way, it still uses nested iteration, so it's O(n^2).


### O(log n)


In [Big O Logarithmic Time Complexity](https://jarednielsen.com/big-o-logarithmic-time-complexity/), we learned... 

We looked at Binary Search to see how we could refactor a brute force function into something more efficient. 

```js
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

🔑 With each iteration, our function is dividing the input, thus performing the inverse operation of exponentiation. 


## O(n log n)

So what is O(n log n)? 

Well, it's just that. It's _n_, a linear time complexity, multiplied by _log n_, a logarithmic time complexity. 

☝️ 

"Hold up there, mister", I hear you say.

"You said we drop the non-dominant terms, so what's with this _n * log n_ business?"

While it _is_ true that we drop the non-dominant terms in Big O, which would you say is the dominant term? _n_ or _log n_?  

Remember this trick question?

```js
const matcher = (arr1, arr2) => {
   for (let i = 0; i < arr1.length; i++){
       for (let j = 0; j < arr2.length; j++){
           if (arr1[i] === arr2[j]){
               return `Match found at arr1[${i}] and arr2[${j}]`;
           }
       }
   }
   return 'No matches found 😞'; 
}
```

What's the order of `matcher()`?

If the arrays were the same length, it _would be_ O(n^2).

Because we don't know what we don't know, it's O(n * m).

O(n log n) gives us a means of notating the rate of growth of an algorithm that performs better than O(n^2) but not as well as O(n). 


## Merge Sort 

Let's look at an example. O(n log n) is common (and desireable) in sorting algorithms. As we saw with Bubble Sort above, we can easily brute force a sort using nested iteration, but that approach doesn't scale. 

Here's an implementation of Merge Sort. Have we see this problem, or something like it before?

🤔 

```js
const nums = [128, 0, 64, 16, 4, 8, 2];

const merge = (left, right) => {
  
    let result = [];
  
    while(left.length || right.length) {

        if(left.length && right.length) {
            if(left[0] < right[0]) {
                result.push(left.shift())
            } else {
                result.push(right.shift())
            }
        } else if(left.length) {
            result.push(left.shift())
        } else {
            result.push(right.shift())
        }
    }
    return result;
};

const mergeSort = (arr) =>{
    if(arr.length <= 1) {
        return arr;
    }

    const pivot = arr.length / 2 ;
    const left = arr.slice(0, pivot);
    const right = arr.slice(pivot, arr.length);

  return merge(mergeSort(left), mergeSort(right));
};

console.log(mergeSort(nums));
```

What's happening here? 

Our `merge()` function accepts two arrays, and, through a series of conditional statements, _shifts_ values out of the arrays and _pushes_ them into a new array, `result`. 

How many items will be merged? 

_n_

To sort an array, we need at least one iteration over each element, so we're already at O(n).

And what's happening in `mergeSort()`? 

We create a _pivot_ and divide our input into two arrays. 

What does this tell us? 

O(log n).

Our `mergeSort()` function is following a similar pattern to our `binarySearch()` above. 

This is a **divide and conquer** approach. 

If we _merge_ our two functions, the order of `mergeSort()` is O(n log n).


## Big O Log Linear Time Complexity

