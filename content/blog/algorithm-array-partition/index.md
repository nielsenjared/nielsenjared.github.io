---
title: "Learn How to Code the Array Partition Algorithm"
date: "2022-TODO-TODO"
description: "If you want to learn how to code, you need to learn algorithms. Learning algorithms improves your problem solving skills by revealing design patterns in programming. In this tutorial, you will learn how to code the array partition algorithm in JavaScript and Python."
keywords: ['algorithm', 'Array Partition', 'javascript', 'python']
---


![ Illustration of array partition ](./jarednielsen-algorithm-array-partition.png)


If you want to learn how to code, you need to learn algorithms. Learning algorithms improves your problem solving skills by revealing design patterns in programming. In this tutorial, you will learn how to code the array partition algorithm in JavaScript _and_ Python.


---

![A is for Algorithms](./jarednielsen-algorithms.png)
Give yourself an A. Grab your copy of [A is for Algorithms](https://gum.co/algorithms)

---


## Retrieval Practice

Retrieval practice is the surest way to solidify any new learning. Attempt to answer the following questions before proceeding:

* TODO linear search

* TODO

* TODO 


### TODO #1

TODO


### TODO #2

TODO


### TODO #3

TODO


## Let's Get Meta

Ask yourself the following questions and keep them back of mind as you proceed:

* Why do I need to know this?

* What problem(s) does array partitioning  solve? 

* TODO


## How to Code the Array Partition Algorithm 

[Programming is problem solving](https://jarednielsen.com/programming-problem-solving/). There are four steps we need to take to solve any programming problem: 

1. Understand the problem

2. Make a plan

3. Execute the plan

4. Evaluate the plan


### Understand the Problem

To understand our problem, we first need to define it. Let’s reframe the problem as acceptance criteria:

```md
GIVEN an unsorted array
WHEN I select a pivot value from the array and partition the array on the pivot
THEN I am returned the index of the pivot
```

That’s our general outline. We know our input conditions, an unsorted array, and our output requirements, an array with lower values on the left and high values on the right, and our goal is to partition on a pivot value.

Let’s make a plan!


### Make a Plan

Let’s revisit our computational thinking heuristics as they will aid and guide is in making a plan. They are: 

* Decomposition

* Pattern recognition

* Abstraction

* Algorithm design

The first step is decomposition, or breaking our problem down into smaller problems. What's the smallest problem we can solve? 

An array with two elements:
```
[1, 2]
```

Easy! 

It's already done. 

What if the array was reversed? 
```
[2, 1]
```

Where have we seen this or something like it before? 

Swap! 

Because we are pragmatic programmers, we're going to repurpose our swap algorithm and copy/pasta it right here: 
```
FUNCTION swap(arr, left, right)
    SET temp TO THE VALUE STORED IN arr[left]
    SET arr[left] TO THE VALUE STORED IN arr[right]
    SET arr[right] TO THE VALUE STORED IN temp

    RETURN arr
```

If we pass our two element array to our `swap` function, the output will be:
```
[1, 2]
```

But! We didn't partition on a pivot. We could pivot on one of the two existing values, but let's make it more fun and add another element to our array: 
```
[3, 2, 1]
```

How do we choose our pivot? 

In our array above, we could simply choose the second element containing the value 2. But what if our array looked like this?
```
[3, 1, 2]
```

Or this?
```
[2, 1, 3]
```

We don't know what our array will look like, so we need to find a programmatic approach and not try to brute force it. 

We _could_ iterate through the array, get the sum of all of the values, divide by 2, floor that value, and use it as the pivot, but that adds one more step to finding our solution. 

What if we just select a random value from the array for the pivot? 

We _could_ use a random number generator, but because we don't know what the array looks like, we can just select any value. 

Which element do we select?

We know we're going to need to iterate and the standard approach to iteration is starting at 0 and incrementing by 1 to _n_. So let's select _n_, the last element in the array. 

TODO explain left and right, partition a partition of an array




```
FUNCTION partition(arr, left, right)
    SET index TO left
    SET pivot TO arr[right]

    ...

    RETURN index
```


We want to start iterating at `left` and only iterate up to `right`, so our `for` loop needs to look something like this: 
```
FUNCTION partition(arr, left, right)
    SET index TO left
    SET pivot TO arr[right]

    FOR EACH VALUE i BETWEEN left AND THE LENGTH OF arr

        ...

    RETURN index
```

Now what? 

Now we simply iterate over the array, comparing the value stored in `arr[i]` to our pivot. 

TODO 



```
FUNCTION partition(arr, left, right)
    SET index TO left
    SET pivot TO arr[right]

    FOR EACH VALUE i BETWEEN left AND THE LENGTH OF arr
        IF arr[i] IS LESS THAN pivot
            swap(arr, index, i)
            INCREMENT index
    
    swap(arr, index, right)

    RETURN index
```

TODO 
Let's step through this using the following array: 
```
[5, 1, 4, 2, 3]
```

When we call our `partition` function, we'll use the default values of the first and last element for `left` and `right`. `left` will be equal to 0 and `right` will be equal to the length of our arrary minus 1. 

We then set our `index` to `left` and our `pivot` to the value stored in `arr[right]`. In this case, that's 3. 

When we begin iterating, `i` is equal to `left`, which is 0. 

The value stored in `arr[i]` is 5. 

5 is not less than 3, so we leave it. 

In the next iteration, `i` is equal to 1. 

The value stored in `arr[i]` is now 1. 

1 _is_ less than 3, so we swap the values in `arr[index]` and `arr[i]`, here that's 5 and 1. 

Now our array looks like this:
```
[1, 5, 4, 2, 3]
```

We increment our `index` by 1, so its value is now 1. 

In the next iteration, `i` is equal to 2. 

The value stored in `arr[i]` is now 4. 

4 is not less than 3, so we leave it. 

In the next iteration, `i` is equal to 3. 

The value stored in `arr[i]` is now 2.

2 _is_ less than 3, so we swap the values in `arr[index]` and `arr[i]`, here that's 5 and 2.

Now our array looks like this:
```
[1, 2, 4, 5, 3]
```

We increment our `index` by 1, so its value is now 2. 

In the next iteration, `i` is equal to 4. 

The value stored in `arr[i]` is now 3.

3 _is not_ less than 3, so we leave it and exit our loop. 

We still need to get our pivot in the right place, and we do this by swapping the value stored in `arr[index]` with the value stored in `arr[right]`, which are 4 and 3 respectively. 

Now our array looks like this:
```
[1, 2, 3, 5, 4]
```

Finally, we return our `index`, which is 2, where the value of our pivot is currently stored in the array. 


### Execute the Plan

Now it's simply a matter of translating our pseudocode into the syntax of our programming language. 

#### How to Code the Array Partition Algorithm in JavaScript

Let's start with JavaScript...

```js
const swap = (arr, left, right) => {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;

    return arr;
}

const partition = (arr, left = 0, right = arr.length - 1) => {

    let index = left; 
    let pivot = arr[right];

    for (let i = left; i < right; i++) {
        if (arr[i] < pivot) {
            swap(arr, index, i);
            index++;
        }
    }
    swap(arr, index, right);
    
    return index;
}
```


#### How to Code the Array Partition Algorithm in Python

Now let's see it in Python...

```py
TODO
```

### Evaluate the Plan

Can we do better? 

TODO


#### What is the Big O Of Array Partition?

If you want to learn how to calculate time and space complexity, pick up your copy of [The Little Book of Big O](https://gum.co/big-o)


## Reflection

Remember those _meta_ questions we asked at the outset? Let’s make it stick and answer them now!

* Why do I need to know this?

* What problem(s) does array partitioning solve? 

* TODO


### Why Do I Need to Know This? 

TODO


### What Problem(s) Does Array Partitioning Solve? 

TODO


### TODO

TODO


## A is for Algorithms

![A is for Algorithms](./jarednielsen-algorithms.png)
Give yourself an A. Grab your copy of [A is for Algorithms](https://gum.co/algorithms)



