---
title: 'How To Break a Problem Down: A Guide for Using Decomposition in Computational Thinking'
date: '2023-04-07'
description: Decomposition is the first stage of computational thinking. When we decompose a problem, we break it down into smaller problems. The process of decomposition often reveals patterns that point to the solution. 
keywords: ['decompoisition', 'metacognition', 'problem', 'solution', 'computational thinking']
---


![ Illustrationg of a duck breaking into smaller pieces ](./jarednielsen-decomposition.png)


Thinking like a programmer means thinking like a computer. If you want to think like a programmer, you'll want to learn computational thinking. There are four stages of computational thinking: 

1. Decomposition

2. Pattern recognition

3. Abstraction 

4. Design (AKA pattern forming)

This article outlines how to break a problem down with the first stage: decomposition. 


## How to break a problem down

> It is foolish to answer a question that you do not understand. It is sad to work for an end that you do not desire. -George Polya

Did this ever happen to you? 

You pick up a problem, jump right in and start coding a solution, only to find yourself rolling it back to account for something you didn't think about at the outset. 

This happens when we don't define our problem before we start solving it. Before we break a problem down, we need to understand it. The first step in understanding the problem is to define both the starting point, or current state, and the end point, or goal. 

In _How to Solve It_, George Polya provides some advice on how to understand the problem: 

* **Restate the problem in your own words**: Restating the problem in your own words can also inadvertently reveal the solution. This is also a good habit to be in when working with others to ensure nothing gets lost in translation. 

* **Illustrate the problem with pictures and diagrams**: This is especially useful if you are working on a problem with user flow or trying to make sense of spaghetti code. If the problem is spanning multiple modules or microservices, a quick sketch becomes a map that provides a global perspective on the problem and, as above, may inadvertently reveal a solution. There's a reason Solutions Architects do this for clients... 🤔

* **Identify the principal parts of the problem: the data, the goal, and any unknowns**: Get clear on the input and the output of the problem as well as anything that might jam you up. Of course, there are always _unknown_ unknowns, and there's nothing to be done until we encounter them.

Polya also provides a set of questions we can ask ourselves to work towards a better understanding of a given problem: 

* **Where should I start?**: Start with the problem statement, obvi! 

* **What can I do?**: Visualize the problem as a whole (draw that picture!), then isolate the principal parts.  

* **What can I gain by doing so?**: Identify the details that are revealed through visualizing the problem and isolating the principal parts. 

Sounds like good life advice, too! 

Lastly, and not necessarily possible to answer at the outset, Polya counsels us to ask ourselves the following question: 

* Is a solution possible? 


### Using decomposition in computational thinking

Now that we understand the problem we are solving, let's decompose it! 

🧟

What is decomposition? 

Just like rotting organic substances, decomposition is the process of breaking a problem down into smaller parts. 

Speaking of rotting organic substances, how would you eat a watermelon? 

🍉

Unless it was very small or your mouth was very big, you would need to cut, or divide, it into bite-size pieces, then eat those pieces one at a time. 

The same is true for any programming problem. 

A common strategy in decomposition is to ask the following question:

> What is the smallest problem I can solve?

If, for example, you are writing a sorting algorithm. The smallest problem to be solved is an array or list containing two elements, like this:
```
[2, 1]
```

You can then begin building a solution to this problem, which is very likely a conditional statement combined with a swap. 

After solving the smallest problem, you can then ask yourself a variation of the previous question: 

> What is the _next_ smallest problem I can solve?  

Continuing with our sorting exampele, it may be something like this: 
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

Here's a real-world scenario: build a web application.

That's a significant undertaking and, whether you were tackling this alone or with a team, you would want to divvy up the work. How would you do that? 

First, divide the application in half: front end and back end. 

Then, for each branch of this tree, there are a series of questions to be answered: what frameworks, libraries, and architectural patterns will you be using. Those decisions will determine how to divide the front end into components and the back end into modules. 


##### Metacognition

![ Spinning top GIF ](https://media.giphy.com/media/13S1lWb5qheNBC/giphy.gif)

We are now five headers deep! 

It's time to get meta! 

This process of applying divide and conquer strategy to our own thinking is called _metacognition_. 

According to Barbara Oakley in _Learn Like a Pro_, metacognition is like "an extra brain outside your main one" that "think about _how_ you are thinking." Oakley continues: 

> This extra brain pauses to consider how you should best approach problems and what strategies you should use. 

How do we use and strengthen our extra brain? 

By asking questions. 

Oakley provides a four step model for being a metacognitive learner: 

1. Understand the task

2. Set goals and plan. 

3. Learn 

4. Monitor and adjust. 

Where have we seen this or something like it before?

🤔

It's similar to the four step model outlined by George Polya in _How to Solve It_: 

1. Understand the problem 

2. Develop a plan

3. Execute the plan

4. Evaluate the results

We'll bring things full-circle with this metacognitive quote from Polya on the process of decomposition: 

> You examine an object that touches your interest or challenges your curiosity: a house you intend to rent, an important but cryptic telegram, any object whose purpose and origin you puzzle, or any problem you intend to solve. You have an impression of the object as a whole, but this impression, possibly, is not definite enough. A detail strikes you, and you focus your attention upon it. Then, you concentrate upon another detail; then again, upon another. Various combinations of details may present themselves and after a while you again consider the object as a whole but you see it now differently. You decompose the whole into its parts, and you recombine the parts into a more or less different whole. 


## How to break a problem down with decomposition

Decomposition is the first stage of computational thinking. When we decompose a problem, we break it down into smaller problems. The process of decomposition often reveals patterns that point to the solution. We'll look at pattern recognition in the next article. Stay tuned! 