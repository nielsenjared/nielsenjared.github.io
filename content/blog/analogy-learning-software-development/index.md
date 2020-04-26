---
title: "Analogy in Learning and Software Development"
date: "2020-04-13"
description: How do we learn concepts that we can’t see, smell, taste, touch, or hear? Learning itself, especially software development, depends on analogy.
keywords: ['analogy', 'learning', 'software development']
---


![Illustration of rubber duck lightbulb](./jarednielsen-solution-analogy-metaphor.png)

How do we learn concepts that we can’t see, smell, taste, touch, or hear? Learning itself, especially software development, depends on analogy.

_This article originally published in my weekly newsletter, [The Solution](https://mailchi.mp/f7da8a0d5542/the-solution-how-do-we-learn-abstract-concepts)._

## Analogy and Learning 

How do we learn abstract concepts?

How do we learn anything that we can’t see, smell, taste, touch, or hear? 

In [Sparks of Genius](https://amzn.to/2UhVpgo), Robert and Michel Root-Bernstein write:

> It is not our senses that limit or liberate us, but our ability to illuminate the unknown by means of analogies to the known. Learning itself depends on analogizing. 


## What is an Analogy? 

> In its most general sense, analogy refers to a functional resemblance between things that are otherwise unlike.

You are probably familiar with some of these classic analogies for understanding natural phenomena:

* Ancient Greek analogy of sound to water waves

* European analogy of light to sound

* William Harvey’s analogy of the heart to a pump

* Benjamin Franklins’ analogy of lightning to electricity

* James Clerk Maxwell’s analogy of electromagnetic forces to continuum mechanics

* Max Planck's analogy of electrons to vibrating strings


## What Problem(s) Does Analogy Solve?

All of them! 

Analogy is an important and useful tool for learning and problem solving. 

One of my favorite approaches for teaching functions is to use the analogy of a toaster:
```js
function toaster(bread) {
    return bread + “ toast!”;
}

toaster(“Sourdough”);
```

We could manually toast a piece of bread on the stove. 

Or, we could use a toaster. 

A function, like a toaster, is a little machine that lets us repeat a process without needing to perform the manual steps every time. 

We put bread in the toaster. 

The toaster returns toast. 

We put an argument in the function.

The function returns a value.

No analogy is perfect.

If we push any analogy far enough, we'll see it eventually break down.

The authors of [Sparks of Genius](https://amzn.to/2UhVpgo) pose the following question:

> How and why do things that correspond only inexactly to whatever we are trying to explain nonetheless provide us with useful insights into real phenomena?

A function is not a toaster and a toaster is not a function.

But the analogy works.

Why?

> Analogies, as imperfect correspondences presumed in spite of difference, help us make the leap from existing knowledge to new worlds of understanding that no other mental tool allows.


## Analogy and Software Development

You'll encounter purists working in the sciences who believe that analogies are "misleading" and "illogical" due to this inexactness.

There’s no room for ambiguity in formal languages.

Or is there?

In [Code Complete](https://amzn.to/2JCCarc), Steve McConnell writes:

> Important developments often arise out of analogies. By comparing a topic you understand poorly to something similar you understand better, you can come up with insights that result in a better understanding of the less-familiar topic. 

How do we use analogy in software development?

Metaphors. 

☝️ What's the difference between an anlogy and a metaphor? 

An analogy is what is expressed and a metaphor is how it is expressed.

McConnell goes on to define _software metaphors_:

> A software metaphor is more like a searchlight than a road map. It doesn’t tell you where to find the answer; it tells you how to look for it. A metaphor serves more as a heuristic than it does as an algorithm.

There are a lot of popular metaphors for software development, such as writing, gardening and oyster farming, but McConnell ultimately settles on his favorite: construction.

We _build_ software.

The process of software construction is also analogous to the problem solving heuristic developed by George Polya in [How To Solve It](https://amzn.to/33Mp30d):

| Problem solving           | Software construction     |
| ---                       | ---                       |
| Define the problem        | What are we building?     |
| Develop a plan            | How are we building it?   |
| Execute the plan          | Are we having fun yet?    |
| Reflect on the solution   | Does it pass inspection?  |

> A good craftsman knows the right tool for the job and knows how to use it correctly. Programmers do, too. The more you learn about programming, the more you fill your mental toolbox with analytical tools and the knowledge of when to use them and how to use them correctly.

Now you can add this to your toolbox! 