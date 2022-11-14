---
title: "Learn How to Code the Combinations Algorithm"
date: "2022-TODO-TODO"
description: "If you want to learn how to code, you need to learn algorithms. Learning algorithms improves your problem solving skills by revealing design patterns in programming. In this tutorial, you will learn how to generate combinations in JavaScript and Python."
keywords: ['algorithm', 'combinations', 'javascript', 'python']
---


![ TODO ](./jarednielsen-algorithm-TODO.png)


If you want to learn how to code, you need to learn algorithms. Learning algorithms improves your problem solving skills by revealing design patterns in programming. In this tutorial, you will learn how to generate combinations in JavaScript _and_ Python.


---

![A is for Algorithms](./jarednielsen-algorithms.png)
Give yourself an A. Grab your copy of [A is for Algorithms](https://gum.co/algorithms)

---


## Retrieval Practice

Retrieval practice is the surest way to solidify any new learning. Attempt to answer the following questions before proceeding:

* TODO 

* TODO

* What's a combination? 


### TODO #1

TODO


### TODO #2

TODO


### TODO #3

TODO


## Let's Get Meta

Ask yourself the following questions and keep them back of mind as you proceed:

* Why do I need to know this?

* What problem(s) does TODO solve? 

* TODO


## How to Code the TODO Algorithm 

[Programming is problem solving](https://jarednielsen.com/programming-problem-solving/). There are four steps we need to take to solve any programming problem: 

1. Understand the problem

2. Make a plan

3. Execute the plan

4. Evaluate the plan


### Understand the Problem

To understand our problem, we first need to define it. Let’s reframe the problem as acceptance criteria:

```md
GIVEN a sequence of integers from 1 to `n`
WHEN I specify the size of each set of combinations, `k`
THEN I am returned all possible combinations of the values from 1 to `n` in sets of size `k`
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

If `n` is equal to 1, then the only combination is:
```
[1]
```

If `n` is equal to 2, and `k` is equal to 1, then our combinations are:
```
[1], [2]
```

If `n` is equal to 2, and `k` is equal to 2, then our only combination are:
```
[1, 2]
```

If `n` is equal to 3, and `k` is equal to 2, it starts to get interesting. Our combinations are:
```
[1, 2], [1, 3], [2, 3]
```

Do you see a pattern emerging? Let's do one more...

If `n` is equal to 4, and `k` is equal to 1, our combinations are: 
```
[1], [2], [3], [4]
```

If `n` is equal to 4, and `k` is equal to 2, our combinations are: 
```
[1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4]
```

If `n` is equal to 4, and `k` is equal to 3, our combinations are: 
```
[1, 2, 3], [1, 2, 4], [1, 3, 4], [2, 3, 4]
```

For good measure, if `n` is equal to 4, and `k` is equal to 4:
```
[1, 2, 3, 4]
```

We can see that we will need to iterate to generate our combinations, and that those loops will need to be nested, but just how many loops do we need to nest? It depends! 

TODO why?

What's the solution? 

Recursion! 

What's our base case? 

TODO 

Let's pseudocode that: 
```
FUNCTION combinations(n, k)
  SET combos TO AN EMPTY ARRAY

  IF k IS EQUAL TO 1
    RETURN n
```

Let's run through this using an array, `n`, containing five values: 
```
[1, 2, 3, 4, 5]
```

Now what? 

The fun stuff! 

What's the next problem we can solve? 

Combinations with a length of 2! 

If `n` is equal to `[1, 2, 3, 4, 5]` and `k` is equal to 2, then our goal is to return an array with the following combinations:
```sh
[ [ 1, 2 ],
  [ 1, 3 ],
  [ 1, 4 ],
  [ 1, 5 ],
  [ 2, 3 ],
  [ 2, 4 ],
  [ 2, 5 ],
  [ 3, 4 ],
  [ 3, 5 ],
  [ 4, 5 ] ]
```
Do we see a pattern?

There are four combinations beginning with 1...

...and three combinations beginning with 2...

...and two combinations beginning with 3...

...and only one combination beginning with 4.

What does this tell us?

TODO 
With each iteration over `n`, we decrement the next iteration by 1. 
As we iterate over the array, we generate all of the combinations for each element.
We're going to need _at least_ two iterations. 


Let's illustrate this...

If `n` is equal to `[1, 2, 3, 4, 5]` and `k` is equal to 2, on our first iteration over `n`, `i` is equal to 1. To build each combination, we'll need a nested loop where we iterate over the remaining elements in `n`, which are `[2, 3, 4, 5]`. How do we start our nested iteration at the next value? We _could_ set `j` equal to 1 rather than 0. 

TODO but why would we not want to do this? 

Or... we could just slice its head off. 

TODO 

Let's pseudocode this...
```
FUNCTION combinations(n, k)
  SET combos TO AN EMPTY ARRAY

  SET head
  SET tail

  IF k IS EQUAL TO 1
    RETURN n

  FOR EVERY VALUE i IN n
    SET head EQUAL TO THE FIRST SLICE OF n

    SET tail EQUAL TO THE REMAINDER OF n

    FOR EVERY VALUE j IN tail

      SET combo EQUAL TO head CONCATENATED WITH THE VALUE STORED IN tail[j]

      PUSH combo TO combos

  RETURN combos
```

TODO 

What's the next smallest problem we can solve? 

Combinations with a length of 3! 

If `n` is equal to `[1, 2, 3, 4, 5]` and `k` is equal to 3, then our goal is to return an array with the following combinations:

```sh
[ [ 1, 2, 3 ],
  [ 1, 2, 4 ],
  [ 1, 2, 5 ],
  [ 1, 3, 4 ],
  [ 1, 3, 5 ],
  [ 1, 4, 5 ],
  [ 2, 3, 4 ],
  [ 2, 3, 5 ],
  [ 2, 4, 5 ],
  [ 3, 4, 5 ] ]
```

Will the approach we outlined above work? 

Nope. We _could_ add another nested loop. But what do we do when `k` is equal to 4? Add another nested loop? Do we need more loops? 

Yes, but not the iterative variety. 

We need to get abstract annd make the leap to recursion. 

TODO 

Let's pseudocode this...
```
FUNCTION combinations(n, k)
  SET combos TO AN EMPTY ARRAY

  SET head
  SET tail

  IF k IS EQUAL TO 1
    RETURN n

  FOR EVERY VALUE i IN n
    SET head EQUAL TO THE FIRST SLICE OF n

    SET tail EQUAL THE RETURN VALUE OF combinations(THE REMAINDER OF n, k -1) 

    FOR EVERY VALUE j IN tail

      SET combo EQUAL TO head CONCATENATED WITH THE VALUE STORED IN tail[j]

      PUSH combo TO combos

  RETURN combos
```


### Execute the Plan

Now it's simply a matter of translating our pseudocode into the syntax of our programming language. Let's start with JavaScript...


#### How to Code the Combinations Algorithm in JavaScript

TODO
```js
const combinations = (n, k) => {
  const combos = [];
  
  let head, tail;
  
  if (k === 1) {
    return n;
  }

  for (let i = 0; i < n.length; i++) {
      head = n.slice(i, i + 1);

      tail = combinations(n.slice(i + 1), k - 1);

      for (let j = 0; j < tail.length; j++) {
        let combo = head.concat(tail[j]);
        combos.push(combo);
      }
  }

  return combos; 
}
```

Within our `combinations` function, we first declare our `combos` array and our `head` and `tail` variables. We then run through a series of conditionals to check edge cases. The first checks if `k` is greater than `n` or less than `1` and if it validates, returns an empty array. The second checks if `k` is equal to the length of `n` and returns `n` within an array. The last conditional checks if `k` is equal to `1` and, if it validates, runs a loop that pushes each element of `n` into its own array. 

If none of the conditionals validate, we enter the first `for` loop 

TODO 

With each iteration of the loop, we slice out a `head`. So, on the first iteration, we slice `[1]`, on the second, `[2]`, and so on. 


We then recursively call our `combinations` function, passing it the remainder of the array, `n.slice(i + 1)` and `k -1`. We then store this in the variable `tail`. 

In each recursive call, we continually slice the `head` off the array and pass the remainder of the array to the `combinations` function. 

When our base case is met:
```js
  if (k === n.length) { 
    return [ n ]; 
  }
```  
TODO and we return `combos`. We then move down the call stack and pick up where we left off with the previous call to `combinations` and enter the nested `for` loop. Now we iterate over the length of `tail`, We concatenate each value in `tail` with `head`, creating a new `combo`. We then push that `combo` into `combos`. With each recursive call, we return `combos`. 





Now let's see it in Python...


#### How to Code the TODO Algorithm in Python

TODO
```py
TODO
```

### Evaluate the Plan

Can we do better? 

TODO
We can make the algorithm more efficient by only iterating over `n.length - k + 1`: 

```js
  for (let i = 0; i < n.length - k + 1; i++) {
```



TODO

    return n.map(i => [i]);


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



