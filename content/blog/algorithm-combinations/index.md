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
WHEN I specify the size of each set of combinations, `r`
THEN I am returned all possible combinations of the values from 1 to `n` in sets of size `r`
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

If `n` is equal to 2, and `r` is equal to 1, then our combinations are:
```
[1], [2]
```

If `n` is equal to 2, and `r` is equal to 2, then our only combination are:
```
[1, 2]
```

If `n` is equal to 3, and `r` is equal to 2, it starts to get interesting. Our combinations are:
```
[1, 2], [1, 3], [2, 3]
```

Do you see a pattern emerging? Let's do one more...

If `n` is equal to 4, and `r` is equal to 1, our combinations are: 
```
[1], [2], [3], [4]
```

If `n` is equal to 4, and `r` is equal to 2, our combinations are: 
```
[1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4]
```

If `n` is equal to 4, and `r` is equal to 3, our combinations are: 
```
[1, 2, 3], [1, 2, 4], [1, 3, 4], [2, 3, 4]
```

For good measure, if `n` is equal to 4, and `r` is equal to 4:
```
[1, 2, 3, 4]
```

We can see that we will need to iterate to generate our combinations, and that those loops will need to be nested, but just how many loops do we need to nest? It depends! 

If `n` is equal to 4, and `r` is equal to 1, how many loops are required to generate the combinations? 

Just 1. If we pseudocode it:
```
FOR EVERY VALUE i BETWEEN 1 AND n
    OUTPUT [i]
```

Now if `n` is equal to 4, and `r` is equal to 2, how many loops are required to generate the combinations? 

TODO step through this...

Only 2. 

When `i` is equal to 1, we need to run an inner loop to select the _next_ number. We don't want to select 1 again TODO

We create a new iterator, `j` and assign it the value of `i + 1`. When `i` is equal to `1`, `j` is equal to 2, and when `i` is equal to 2, `j` is equal to 3, and so on. 

If we pseudocode this...
```
SET n TO 4
SET r TO 2

SET i EQUAL TO 1

FOR EVERY VALUE BETWEEN i AND n:
    SET j EQUAL TO i + 1
    FOR EVERY VALUE BETWEEN j AND n:
        RETURN [i, j]
```

Do we need the outer loop to iterator `n`? 

No. The inner loop TODO

🤔




Let's write pseudocode where `n` is equal to 4 and `r` is equal to 2:
```
SET n TO 4
SET r TO 2

SET i EQUAL TO 1

FOR EVERY VALUE BETWEEN i AND n:
    SET j EQUAL TO i + 1
    FOR EVERY VALUE BETWEEN j AND n:
        SET k EQUAL TO j + 1
        FOR EVERY VALUE BETWEEN k AND n:
            RETURN [i, j]
```


TODO



TODO
We can capture this in an equation: 
```
n - r + 1
```




TODO
Let's look closer at what's happening when `n` is equal to 5 and `r` is equal to 3. 

Our outer loop will generate the first value in each combination







Let's write pseudocode where `n` is equal to 5 and `r` is equal to `3`:
```
SET n TO 5
SET r TO 3

SET i EQUAL TO 1

FOR EVERY VALUE BETWEEN i AND n:
    SET j EQUAL TO i + 1
    FOR EVERY VALUE BETWEEN j AND n:
        SET k EQUAL TO j + 1
        FOR EVERY VALUE BETWEEN k AND n:
            RETURN [i, j]
```

Let's step through this... In our first iteration, 


TODO

```
DON'T USE ```md FOR PSUEDOCODE SNIPPETS
    IT WILL RENDER TABBED TEXT 
        IN ANOTHER COLOR
```


### Execute the Plan

Now it's simply a matter of translating our pseudocode into the syntax of our programming language. Let's start with JavaScript...


#### How to Code the Combinations Algorithm in JavaScript

TODO
```js
const combinations = (n, k) => {
  const combos = [];
  
  let head, tails;
  
  if (k > n.length || k < 1) { 
    return []; 
  }
  
  if (k === n.length) { 
    return [ n ]; 
  }
  
  if (k === 1) {
    for (let i = 0; i < n.length; i++) {
      combos.push([n[i]]);
    }
    return combos;
  }



  for (let i = 0; i < n.length; i++) {
      head = n.slice(i, i + 1);

      tails = combinations(n.slice(i + 1), k - 1);

      for (let j = 0; j < tails.length; j++) {
        
        let combo = head.concat(tails[j]);
        combos.push(combo);

        // combos.push(head.concat(tails[j]));
      }
  }

  return combos; 
}
```

Within our `combinations` function, we first declare our `combos` array and our `head` and `tails` variables. We then run through a series of conditionals to check edge cases. The first checks if `k` is greater than `n` or less than `1` and if it validates, returns an empty array. The second checks if `k` is equal to the length of `n` and returns `n` within an array. The last conditional checks if `k` is equal to `1` and, if it validates, runs a loop that pushes each element of `n` into its own array. 

If none of the conditionals validate, we enter the first `for` loop 

TODO 

With each iteration of the loop, we slice out a `head`. So, on the first iteration, we slice `[1]`, on the second, `[2]`, and so on. 


We then recursively call our `combinations` function, passing it the remainder of the array, `n.slice(i + 1)` and `k -1`. We then store this in the variable `tails`. 

In each recursive call, we continually slice the `head` off the array and pass the remainder of the array to the `combinations` function. 

When our base case is met:
```js
  if (k === n.length) { 
    return [ n ]; 
  }
```  
TODO and we return `combos`. We then move down the call stack and pick up where we left off with the previous call to `combinations` and enter the nested `for` loop. Now we iterate over the length of `tails`, 

TODO 






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



