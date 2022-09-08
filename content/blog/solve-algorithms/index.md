---
title: "How to Solve Algorithms"
date: "2021-05-07"
description: "Learn how to solve any algorithm using these simple and easy-to-remember techiques."
keywords: ['algorithms', 'problem solving', 'computational thinking', 'heuristics']
---


![ algorithms ](./jarednielsen-algorithms.png)

In 1992, Mary Oliver published [Poem 133: The Summer Day](https://www.loc.gov/programs/poetry-and-literature/poet-laureate/poet-laureate-projects/poetry-180/all-poems/item/poetry-180-133/the-summer-day/), which ends with a question for the reader:

> Tell me, what is it you plan to do with your one wild and precious life?

What do you plan to do? Are you going to spend your one wild and precious life solving the same problem over and over? Or, worse yet, working on the wrong problem? 

We want to work smarter, not harder. 

How do we do that? 

Lucky for us, there's an old school approach to problem solving that is still relevant today. It's called, you'll never guess...


## How To Solve It

In [How to Solve It](https://amzn.to/33Mp30d), George Polya outlines four steps of problem solving: 

1. Understand the problem.

2. Make a plan.

3. Execute the plan. 

4. Evaluate the result.


### Understand the Problem

If you're a good developer, you'll realize that the best solutions emerge from listening to your customer tell their story. Many alogirthms are disguised as story problems, such as the farmer who needs to get duck, corn, and fox across the river.  But! He can only carry one of these at a time. If left alone, the duck will eat the corn and the fox will eat the duck. How does he get everything across?

Story time.

User story time, that is.

Yeah, I know. 

They're awkward. 

They _feel_ like work, don't they?

But the thing is, they _work_! 

The format for a user story is: 

```md
AS A < USER OF SOME SORT >
I WANT < TO DO THIS >
SO THAT < MY EXISTENCE IS VALIDATED >
```

In our farmer example above: 

```md
AS A farmer
I WANT to ferry my duck, fox, and corn across the river
SO THAT we all live happily ever after
```

Reframing a problem as a user story then makes it very easy to write acceptance criteria. 

The format for acceptance criteria is: 
```md
GIVEN < APPLICATION >
WHEN < I DO THIS >
THEN < I EXPECT THE APP TO DO THAT >
```

In our farmer example above: 
```md
GIVE three items that will eat each other
WHEN I ferry one item across the river
THEN the other two are safe
```


### Make a Plan

The next step in Polya's heuristic is to make a plan.

AKA pseudocode. 

You write pseudocode, don't you? 

Writing pseudocode is like making a sketch for a design. 

It's your back-of-the-envelope proof-of-concept. 

It's your discovery phase, your user research, your market validation. 

It's your roadmap. 

It's also the comments for your function. Just // each line and there you go. 


### Execute the Plan

It's show time! 

After all this problem understanding and plan making, it's time to crack your fingers, dust off the keyboard, and write some code! This part will be easy because why? Because you wrote pseudocode! All you need to do now is translate that plain language into JavaScript, Python, or (shudder) Java. Then hit Enter...


### Evaluate the Plan

Did your plan work? 

If no, back to step 1. 

If yes, can you do better? 


## How to Solve It with Computational Thinking 

The steps above are table stakes for problem solving and can be applied to any domain. If you want to turn pro, you need to assimilate with the Borg and learn how to think like a computer. There are four primary stages of computational thinking: 

* Decomposition

* Generalisation

* Abstraction 

* Algorithms 


### Decomposition

If composing a function is the process of assembling the various components, such as variable, control flow, and conditions, then decomposition is the opposite: it's breaking a problem down into smaller parts. This is both the easiest _and_ the hardest step in the process because sometimes the component parts of a problem are obvious, but other times the component parts are emergent, or intertwined, and it's difficult to cleanly separate them. 

How does our farmer decompose? 

Well, yes, he makes compost.

He also thinks through the problem.

If there was only one item, he would simply need to carry it across the river.

If there were two items, he would need to carry one across the river, then return for the second item and carry it across the river. 

If there are three? He would still need to carry one across the river, but he would need to ensure that the two left behind did not destroy, or should we say, decompose, one another. In thinking through his items he sees that there is only one combination that can be safely left alone: the fox 🦊 and the corn 🌽. The duck is the crux of the problem! 🦆 He sees that he must carry it across first. 

What does he choose when he returns for the second item? It doesn't matter. Either can be left alone and neither can be left with the duck. 

Do you see a pattern? 


### Generalisation

In decomposing the farmer's problem, we revealed a handful of crucial components to a solution: 

* conditional statements

* repetition

* logic

Another way of saying this is that we _recognized patterns_. 

A useful question to be in the habit of asking yourself is: where have I seen this or something like it before? 


### Abstraction 

Once we recognize patterns, we can remove the details, or form abstractions.

What if it wasn't a farmer? What if it was a lawyer? With three clients who would eat each other and they needed to get across town to the courthouse. 

Or what if it was a space shuttle transporting lifeforms to another planet and we needed to find the right combination of carbon and oxygen producers? 

It no longer matter who or what it is. What matters is that we can remove the details in order to form a conceptual model and focus on the relationships between concepts. 


### Algorithm

Now we simply need to write a series of repeatable steps to solve our problem, and, like above, evaluate its success. 

Where have we seen this or something like it before? 

🤔


## How to Solve Any Algorithm

You can solve any algorithm using Polya's heuristic and computational thinking. Like your health or your retirement, there's no shortcut to learning how to solve algorithms. Do the work. Practice makes practice. 

---

![A is for Algorithms](./jarednielsen-algorithms.png)
💯 Give yourself an A. Grab your copy of [A is for Algorithms](https://gum.co/algorithms)

---