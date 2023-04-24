---
title: "How to Design Algorithms: A Guide for Forming Patterns in Your Programs" 
description: 
keywords: [ '',]
--- 

![TODO](./jarednielsen-TODO.png)


TODO intro



How do you build something out of nothing? 

In [The Mythical Man-Month](https://amzn.to/2xDStS6), Fred Brooks writes:

> The programmer, like the poet, works only slightly removed from pure thought stuff. He builds his castles in the air, from air, creating by exertion of the imagination.

How does this ‘pure thought stuff’ become code? 

Patterns. 


## Pattern Forming is Problem Solving 

In [Sparks of Genius](https://amzn.to/2UhVpgo), Robert and Michele Root-Bernstein write:

> All language can be transcribed using as few as two symbols--the dot and dash of Morse code--and virtually any kind of information can be translated into zeros and ones and fed into a computer. The striking thing about pattern forming is not the complexity of the elements that are combined, but the cleverness and unexpectedness with which the combinations are made.

The Root-Bernstein’s outline two lessons learned from their study of pattern forming:

1. Pattern forming crosses disciplinary boundaries in both its origins and its meanings
    
2. The complexity of the final product doesn’t reside in the complexity of the components but in the cleverness with which a handful of simple elements is used to generate diverse surprises

> Learning to create patterns is therefore one of the keys to innovating in every discipline, and it is wise to learn this skill early on.

We want to form a pattern of forming patterns. 

How do we do that?


## The Pattern Forming / Habit Forming Feedback Loop

In [Atomic Habits](https://amzn.to/2NZz8jx), James Clear discusses the importance of using habits to form an identity rather than to achieve a goal: 

> Your habits shape your identity, and your identity shapes your habits. It’s a two-way street. The formation of all habits is a feedback loop, but it’s important to let your values, principles, and identity drive the loop rather than your results. The focus should always be on becoming that type of person, not getting a particular outcome. 

Clear outlines a two-step process for shaping your identity through habits:

1. Decide the type of person you want to be.

2. Prove it to yourself with small wins. 

Where have we seen this, or something like it, before? 

🤔

Recursion!

It also consists of two steps:

1. Establish a base

2. Perform recursion

We use recursion to solve a large problem by breaking it down into smaller instances of the same problem.

We recognize a pattern in the problem then we form a pattern to solve it.  


## Problem Solving is Pattern Forming

In [How To Solve It](https://amzn.to/33Mp30d), George Polya outlines four steps for solving any problem:

1. Understand the Problem

2. Devise a Plan

3. Execute the Plan

4. Examine the Solution

The last point is the most important. 

"What is the solution? 

"Can it be modified? 

"If so, what could be improved, if anything? 

"Could we use this solution for other problems?"

We gain mastery through this process of reflection and remodeling.

Make it a habit!




## To Succeed, Build Structure 

How do we build structure?

It's a paradox. 

If you want to build a structure, you must learn how. 

If you want to learn how, you must build a structure. 

According to the authors of [Make It Stick](https://amzn.to/2QTzklN), structure building is:

> ...the act, as we encounter new material, of extracting the salient ideas and constructing a coherent mental framework out of them. 

AKA mental models.

Like any construction project, it takes time to build mental models. As Steve McConnell writes in [Code Complete](https://amzn.to/2JCCarc):

> People who are effective at developing high-quality software have spent years accumulating dozens of techniques, tricks and magic incantations. The techniques are not rules; they are analytical tools. 

Time is not the only requirement to become an effective problem solver. 

What else does it take? 

The authors of [Make It Stick](https://amzn.to/2QTzklN) distinguish two paths to building mental models: **high structure** and **low structure**. 

We want to take the former route because high structure-builders:

> … develop the skill to identify foundational concepts and their key building blocks and to sort new information based on whether it adds to the larger structure and one's knowledge or is extraneous and can be put aside.

High structure-builders see the forest for the trees. 

Low structure-builders get lost in the weeds. 

How do we become high structure-builders? 

Reflection.

“Reflecting on what went right, what went wrong, and how I might do it differently next time helps me isolate key ideas, organize them into mental models, and apply them again in the future with an eye to improving and building on what I’ve learned.”

We want to learn the rules and not the examples. 

When we learn by rules, we can apply them to new situations. If we learn by example, we get trapped in the black hole of tutorials and copypasta. Additionally, learning the underlying principles of a concept allows us to more easily and quickly get in a flow state. 

As Barbara Oakley writes in [A Mind for Numbers](https://amzn.to/2UWpClG):

> Once you understand why you do something in math and science, you don’t have to keep reexplaining the how to yourself every time you do it.
 

## Manage Complexity 

In [Code Complete](https://amzn.to/2JCCarc), Steve McConnell coins the phrase software metaphors and proffers his favorite for development: construction. 

Like building a house, we build software. 

As in construction, McConnell counsels against reinventing the wheel:

> In building a house, you won’t try to build things you can buy already built.

We’re accustomed to this as developers. We rely heavily on libraries, frameworks, and package managers to expedite our workflow. But we can also use “off-the-shelf” mental models, too. 

McConnell defines _Software’s Primary Technical Imperative_ as managing complexity and outlines several heuristics to aid us in this endeavor:

* **Find Real-World Objects**: This is the ‘by-the-books’ object-oriented approach to software design; in brief:

    * Identify the objects and their attributes (methods and data)

    * Determine what can be done to each object

    * Determine what each object is allowed to do to other objects

    * Determine the parts of each object that will be visible to other objects--which parts will be public and which will be private

    * Define each object’s public interface

* **Form Consistent Abstractions**: Abstraction is the ability to engage with a concept while safely ignoring some of its details--handling different details at different levels. 

* **Encapsulate Implementation Details**: Encapsulation helps to manage complexity by forbidding you to look at the complexity. 

* **Inherit When Possible**: Inheritance simplifies programming because you write a general routine to handle anything that depends on an object’s general properties and then write specific routines to handle specific operations on specific kinds of objects. 

* **Hide Secrets**: Hide complexity so that your brain doesn’t have to deal with it unless you’re specifically concerned with it. Hide sources of change so that when change occurs the effects are localized

* **Identify Areas Likely to Change**: Accommodating changes is one of the most challenging aspects of good program design. The goal is to isolate unstable areas so that the effect of a change will be limited

* **Keep Coupling Loose**: Make connections as simple as possible. 

* **Look for Common Design Patterns**: Most problems are similar to past problems, and those can be solved using similar solutions, or patterns. 

But. 

McConnell cautions us:

> If you buy into any single methodology 100 percent, you’ll see the whole world in terms of that methodology. 

Or, as Maslow said: 

> I suppose it is tempting, if the only tool you have is a hammer, to treat everything as if it were a nail.

This is _The Law of the Instrument_. 

It’s a common anti-pattern in software development. 

So common it’s referred to as _The Golden Hammer_. 

In [AntiPatterns](https://amzn.to/3bWK4bL), the authors define this phenomenon as "a familiar technology or concept applied obsessively to many software problems". 

We need more than hammers to build our structures.
 

## Build a Structure Building Habit

If you really want to build a structure, stack your habits.

In [Atomic Habits](https://amzn.to/2NZz8jx), James Clear outlines a formula for forming habits, asking us to fill-in-the-blanks in this sentence:

> I will [BEHAVIOR] at [TIME] in [LOCATION].

Just like Software’s Primary Technical Imperative, we need to manage complexity and be specific about what we want and how we will achieve it. 

As Clear explains:

> When your dreams are vague, it’s easy to rationalize little exceptions all day long and never get around to the specific things you need to do to succeed. 

As in building a structure for learning and software, we can also build structure for habit formation. Clear defines this as habit stacking and outlines a formula:

> After [CURRENT HABIT], I will [NEW HABIT].


























## How TODO

TODO conclusion