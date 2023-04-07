---
title: 'How To Break a Problem Down: A Guide for Using Decomposition in Computational Thinking'
date: '2023-04-07'
description: TODO 
keywords: ['TODO']
---


![ TODO ](./jarednielsen-TODO.png)


Thinking like a programmer means thinking like a computer. If you want to do that, you'll want to learn computational thinking. There are four stages of computational thinking: 

1. Decomposition

2. Pattern recognition

3. Abstraction 

4. Design (AKA patter forming)

This article outlines how to break a problem down with the first stage: decomposition. 


## How to break a problem down

Did this ever happen to you? 

You pick up a problem, jump right in and start coding a solution, only to find yourself rolling it back to account for something you didn't think about at the outset. 

This happens when we don't define our problem before we start solving it. Before we break a problem down, we need to understand it. The first step in understanding the problem is to define both the starting point, or current state, and the end point, or goal. 

TODO
In _How to Solve It_, George Polya provides some advice on how to understand the problem: 

* **Restate the problem in your own words**: TODO Restating the problem in your own words can also inadvertently reveal the solution. This is also a good habit to be in when working with others to ensure nothing gets lost in translation. 

* **Illustrate the problem with pictures and diagrams**: TODO This is especially useful if you are working on a problem with user flow or trying to make sense of spaghetti code. If the problem is spanning multiple modules or microservices, a quick sketch creates a map that provides a global perspective and, as above, may inadvertently reveal a solution. 

* **Identify and address any unknowns**: TODO Of course, there are always _unknown_ unknowns, and there's nothing to be done until we encounter them.


### Using decomposition in computational thinking

Now that we understand the problem we are solving, let's decompose it! 

🧟

What is decomposition? 

Just like rotting organice substances, decomposition is the process of breaking a problem down into smaller parts. 

How would you eat a watermelon? 

Unless it was very small or your mouth was very big, you would need to cut, or divide, it into bite-size pieces, then eat those pieces one at a time. 

The same is true for any programming problem. 

A common strategy in decomposition is to ask "What is the smallest problem I can solve?"

If, for example, you are writing a sorting algorithm. The smallest problem to be solved is an array or list containing two elements, like this:
```
[2, 1]
```

You can then begin building a solution to this problem, which is very likely a conditional statement combined with a swap. 

After solving the smallest problem, you can then move on to the _next_ smallest problem, which may be something like this: 
```
[2, 3, 1]
```

You build on your previous solution by wrapping it in a loop to iterate over the elements in the array. 

And so on...

Does this approach look familiar? 

If so, that's because it's similar to a very important concept in algorithm design...


#### Divide and conquer

Divide and conquer algorithms recursively break down a problem into smaller problems to be solved and then recombined into a solution. 

Not every problem requires a divide and conquer solution, but we want our approach to problem solving to be similar in that we continually break a problem down, or decompose it, into its smallest components. 

TODO 

##### Metacognition

TODO 

![ Spinning top GIF ](https://media.giphy.com/media/13S1lWb5qheNBC/giphy.gif)

We are now five headers deep! 

It's time to get meta! 

TODO 


## How to break a problem down with decomposition

TODO

The process of decomposition often reveals patterns that point to the solution. We'll look at pattern recognition in the next article. Stay tuned! 