---
title: "How to Be Curious" 
date: '2022-09-26'
description: "TODO" 
subject: How to Be Curious
preview_text: “TODO"
---

![TODO](./jarednielsen-TODO.png)

Why are we curious?

In _How Humans Learn_, Joshua R. Eyler, explores the evolutionary underpinnings of curiosity: 

> Children seek to know about the world not because they want to, but because they have to. To a certain extent, their survival depends on it, but more broadly their social, intellectual, and emotional worlds are driven by curiosity. Learning then occurs when this innate curiosity leads the child to explore and test the world around her. 

And then we grow up and go to school, where, according to Eyler, “Though children are curious, students are not.”

Why?

Story time...

If you were lucky, your mathematics teachers were good.

I wasn’t lucky. 

Where I grew up, the high school mathematics teachers were primarily hired to be sports coaches. 

In their salad days, they were all stars and MVPs. 

They knew what it took to succeed on the court or the field.

But not in the classroom as mathematics teachers.

They phoned it in. 

This made mathematics hard to learn.

Because it was hard to learn, I thought it wasn’t for me.

Instead I pursued a track in the humanities.

My English and Art teachers were very good. (Thank you Mrs. Burr and Mrs. Straw!)

Out of interest in the creative possibilities, I taught myself web development and eventually started freelancing.

Even though I was programming, I didn’t think of myself as a programmer.

Programmers knew things I would never know because they held degrees. 

I didn’t go to a prestigious university.

I went to the School of Hard Knocks.

Being a freelancer is feast or famine. And when the Great Recession hit, it was more famine than feast, so I took a gig as an exhibit technician at the Natural History Museum in Los Angeles designing interactive installations. 

This meant programming electronics.

I knew next to nothing about electronics.

But I knew how to learn.

And along came MOOCs.

One of the first of them was MITx - 6.002x, Circuits and Electronics.

It was all mathematics.

And it was awesome.

The instructor, Anant Agarwal, was not only a brilliant engineer but also a brilliant teacher. 

Why was Agarwal so good?

He put the fun in functions.

Here’s Agarwal answering a question on Quora:

> I think that my classes are challenging, but I feel the challenge is also to me as a professor to keep students engaged and ensuring they understand the material. So I try to create a fun environment for the students. For example, in the MIT course Circuits and Electronics I teach online on edX our teaching team does a number of fun demos including a wacky chainsaw jig to illustrate noise immunity in digital circuits. 

What does this mean for autodidacts and lifelong learners? 

How do we learn without a teacher? 

Perhaps the question to ask is not what or how, but why?

Agarwal used his fun demos to pique curiosity. 

He wanted students to ask ‘why’ because 'why' questions “really delve into the significance of an issue”.

In _How Humans Learn_, Joshua R. Eyler writes: 

> We often speak of education as something that happens to people and learning as the process by which people achieve these goals. But what if we already know how to educate ourselves? What if the process is a natural one that simply requires some attention, cultivation, and guidance to be fully utilized?

What Agarwal and Eyler both recognize is the problem with higher education, and with growing up in general: 

> The question “Why?” steadily gets replaced by “What do I need to do to achieve X?”

So... how do we relearn curiosity? 

Dan Rothstein and Luz Santana outline The Question Formulation Technique, a strategy for developing questions. It...

> ...begins with choosing a focus for the question and then proceeds through stages of refining, revising, reflecting on, and prioritizing the questions. This technique is effective because it combines authentic practice with the metacognitive reflection that allows them to improve. 

In _Learn Like a Pro_, Barbara Oakley describes _metacognition_ as "an extra brain outside your main one", where:

> This extra brain pauses to consider how you should best approach problems and what strategies you should use. 

Oakley outlines the following model for being a _metacognitive learner_:

1. Understand the task

2. Set goals and plan

3. Learn

4. Monitor and adjust

Where have we seen this or something like it before? 

🤔

This is very similar to Polya’s problem solving heuristic:

1. Understand the problem

2. Devise a plan

3. Execute the plan

4. Examine the solution

The key component for either of these approaches is that last step: _metacognitive reflection_. 

According to Oakley, "the easiest way to become more metacognitive is simply to start asking yourself higher-level questions," such as: 

* What are the resources available to help me when I struggle?

* Do I focus on the right things at the right level? Should I prioritize differently? 

* Can I be more effective? What can I improve? 

* What do I find difficult and why? 

One of my favorite activities to use in Agile retrospectives is [The Five Whys](https://en.wikipedia.org/wiki/Five_whys), which investigates cause-and-effect to get to the root of a problem. Wikipedia offers the following example, where the problem is that "The vehicle will not start":

* Why will the vehicle not start? _The battery is dead._

* Why is the battery dead? _The alternator is not functioning._

* Why is the alternator not functioning? _The alternator belt is broken._

* Why is the alternator belt broken? _The alternator belt was well beyond its useful service life and not replaced._

* Why was the alternator belt not replaced? _The vehicle was not maintained according to the recommended service schedule._

Where have we seen this or something like it before? 

Recursion! 

We use the recursive case, "Why?", to break the problem down into smaller instances until we reach the base case, the root cause. 

To bring things full circle, children are adept at getting to the bottom of things. A [study conducted at the University of Michigan](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2784636/) found that:

> ...young children are motivated to seek causal information actively and use specific conversational strategies to obtain it.

We've all been there. We can represent this is a function: 
```js
const questioning = moms_patience => {
 if (moms_patience <= 0) {
   return "Because! That's why!"
 }
 return questioning(moms_patience - 1);
};
```

Both programming and problem solving are metacognitive activities. 

We think about our thinking. 

We ask ‘why’ recursively. 

Why? 

Exactly.

Looking to improve your _metacognition_? Check out my latest article, [How to Code the Recursive Factorial Algorithm](https://jarednielsen.com/algorithm-recursive-factorial/)