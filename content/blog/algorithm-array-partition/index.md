---
title: "Learn How to Code the Array Partition Algorithm"
date: "2022-07-01"
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

* How does the swap algorithm work? 

* How does a linear search work? 

* How does a selection algorithm work?  


### How Does the Swap Algorithm Work? 

The swap algorithm uses a temporary variable to store the value of one of the variables to swapped and the reassigns the values accordingly. 


### How Does a Linear Search Work? 

A linear search algorithm iterates over an array and compares the current value to the `n` value. 


### How Does a Selection Algorithm Work? 

A selection algorithm finds the index of the `k` element of an array, where `k` is the smallest, largest, or median value. It accomplishes this by tracking the index of the current `k` value and comparing the current `k` value to the index of the iterator. 


## Let's Get Meta

Ask yourself the following questions and keep them back of mind as you proceed:

* Why do I need to know this?

* Where have we seen this or something like it before? 

* What are other approaches for partitioning an array? 


## How to Code the Array Partition Algorithm 

[Programming is problem solving](https://jarednielsen.com/programming-problem-solving/). There are four steps we need to take to solve any programming problem: 

1. Understand the problem

2. Make a plan

3. Execute the plan

4. Evaluate the plan


### Understand the Problem

To understand our problem, we first need to define it. Let’s reframe the problem as acceptance criteria:

```md
GIVEN an unsorted array and a range of indexes to partition between
WHEN I select a pivot value from the array and partition the array on the pivot
THEN I am returned the index of the pivot
```

That’s our general outline. We know our input conditions, an unsorted array and starting and ending values for the partition, and our output requirements, the index of the value used to partition the array, and our goal is to partition the array on a pivot with lower values on the left and higher values on the right.

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

We _could_ iterate through the array, get the sum of all of the values, divide by 2, floor that value, and use it as the pivot, but that adds at least one more step to finding our solution. 

What if we just select a random value from the array for the pivot? 

We _could_ generate a random number, but because we don't know what the array looks like, we can just select any value. 

Which element do we select?

We know we're going to need to iterate and the standard approach to iteration is starting at 0 and incrementing by 1 to _n_. So let's take the path of least resistance and select _n_, the last, or `right` element in the array. 

We know we need to return the `index`, so we're going to need to declare an `index` variable. But how do we initialize it? 

If we're starting at `left`, let's set our `index` to `left`. 

Let's pseudocode what we identified so far...
```
FUNCTION partition(arr, left, right)
    SET index TO left
    SET pivot TO arr[right]

    ...

    RETURN index
```

We want to start iterating at `left` and only iterate up to `right`. Rather than starting at 0, we need to begin our iteration with `left`, which may or may not be 0. Our `for` loop needs to look something like this: 
```
FUNCTION partition(arr, left, right)
    SET index TO left
    SET pivot TO arr[right]

    FOR EACH VALUE i BETWEEN left AND right

        ...

    RETURN index
```

Now what? 

As we iterate over the array, we need to compare the value stored in `arr[i]` to our pivot. What comparison are we making? 

Less than? 

Greater than? 

Table time! 

Let's map each iteration using this array:
```
[3, 1, 2]
```

This is what we know on our first iteration:

| i     | arr[i]    | pivot | index | arr[index]    |
| ---   | ---       | ---   | ---   | ---           |
| 0     | 3         | 2     | 0     | 3             |


Our `index` variable and our iterator, `i`, are both indexing the value 3 in our arry. We can see that this value is greater than our pivot, 2. Let's see what happens in the next iteration:

| i     | arr[i]    | pivot | index | arr[index]    |
| ---   | ---       | ---   | ---   | ---           |
| 0     | 3         | 2     | 0     | 3             |
| 1     | 1         | 2     | 0     | 3             |   

Do you see a pattern? Or at least the emergence of a pattern? 

Note that the value of `arr[i]` is now 1, but the value of `arr[index]` is still 3. 

We need to swap the values stored in `arr[i]` and `arr[index]`, so our comparison is:
```
        IF arr[i] IS LESS THAN pivot
            swap(arr, index, i)
```

And before we exit the conditional, we need to increment `index`. 

Our pseudocode now looks like this: 
```
FUNCTION partition(arr, left, right)
    SET index TO left
    SET pivot TO arr[right]

    FOR EACH VALUE i BETWEEN left AND THE LENGTH OF arr
        IF arr[i] IS LESS THAN pivot
            swap(arr, index, i)
            INCREMENT index BY 1
    
    RETURN index
```

And our array now looks like this:
```
[1, 3, 2]
```

But in our final iteration, our condition won't be met, so how do we make that final swap? 

Let's look at that table again: 

| i     | arr[i]    | pivot | index | arr[index]    |
| ---   | ---       | ---   | ---   | ---           |
| 0     | 3         | 2     | 0     | 3             |
| 1     | 1         | 2     | 0     | 3             |   
| 2     | 2         | 2     | 1     | 3             |   

Our `index` value is correct, but the value stored in `arr[index]` is not. Where is that value? At the end, or `right` of the array. So let's swap 'em!

Our final pseudocode looks like this: 
```
FUNCTION partition(arr, left, right)
    SET index TO left
    SET pivot TO arr[right]

    FOR EACH VALUE i BETWEEN left AND THE LENGTH OF arr
        IF arr[i] IS LESS THAN pivot
            swap(arr, index, i)
            INCREMENT index BY 1
    
    swap(arr, index, right)

    RETURN index
```

Let's step through this using a slightly larger array: 
```
[5, 1, 4, 2, 3]
```

When we call our `partition` function, we'll use the default values of the first and last element for `left` and `right`, so `left` will be equal to 0 and `right` will be equal to the length of our arrary minus 1. 

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
def swap(arr, left, right):
    temp = arr[left]
    arr[left] = arr[right]
    arr[right] = temp

    return arr

def partitionLomuto(arr, left = 0, right = None):

    if right == None: 
        right = len(arr) - 1
        
    pivot = arr[right]
    index = left

    for i in range(left, right):
        if arr[i] < pivot:
            swap(arr, index, i)
            index += 1
    
    swap(arr, index, right)

    return index 
```

### Evaluate the Plan

Can we do better? 

Yes! 

This algorithm is using the Lomuto partition scheme. This approach is perfectly fine and perfect for beginners. There is another approach, the Hoare partition scheme, which is more efficient but slightly more complicated. It works by iterating forward _and_ back through the array.


#### What is the Big O Of Array Partition?

If you want to learn how to calculate time and space complexity, pick up your copy of [The Little Book of Big O](https://gum.co/big-o)


## Reflection

Remember those _meta_ questions we asked at the outset? Let’s make it stick and answer them now!

* Why do I need to know this?

* What problem(s) does array partitioning solve? 

* What are other approaches for partitioning an array? 


### Why Do I Need to Know This? 

Array partitioning is the kernel of quicksort. 


### Where Have We Seen This Or Something Like It Before? 

Array partitioning combines approaches from several algorithms, swap directly, and elements of selection. 


### What Are Other Approaches for Partitioning an Array? 

As I mentioned above, there's the Hoare partition scheme that 


## A is for Algorithms

![A is for Algorithms](./jarednielsen-algorithms.png)
Give yourself an A. Grab your copy of [A is for Algorithms](https://gum.co/algorithms)



