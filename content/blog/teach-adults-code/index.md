---
title: How to Teach Adults to Code
date: "2018-12-10"
description: When we teach adults to code, we ensure success by cultivating a growth mindset with problem-solving heuristics, articulate language and fun.
---
![How to Teach Adults to Code: Rubber Duck](./jared-nielsen-teach-adults-code-duck.png)

My first full-time job was teaching wilderness survival to adjudicated youth in the deserts of Utah. Though the technologies were primitive, I learned one fundamental skill that I have carried throughout my career: the ability to break complicated processes down into simple steps. To become a lifelong learner, I believe problem solving is the most important skill any individual can acquire. Starting a fire with bow and drill is not so different from handling asynchronous HTTP requests. I now teach adults to code at a prominent university bootcamp. After graduating six cohorts in web development and data visualization, I’ve discovered and implemented a number of approaches that ensure student success through the cultivation of a problem-solving mindset. I am here addressing how to teach adults to code in particular, but the fundamental concepts can easily be applied to any domain of knowledge.

*Disclaimer & disclosure: The views here are my own and do not necessarily reflect those of my employer. Amazon links are affiliate. Additionally, I am a practitioner, not an academic. I have not read all the things. Please share any suggestions or feedback with me [@jarednielsen](https://twitter.com/jarednielsen).*

## Programming is Problem-Solving
>“Children begin their lives as eager learners. They have to learn to have trouble with learning...”

The above quote is taken from one of the opening passages of _[Mindstorms](https://amzn.to/2PpZFV3/)_, published in 1980 by [Seymour Papert](http://www.papert.org/). Much of _Mindstorms_ explores the history and philosophy of [LOGO](https://en.wikipedia.org/wiki/Logo_(programming_language)), the programming environment Papert and his peers developed at MIT to introduce computer science to children. One of the motivating factors of LOGO was the creation of a sandbox in which children could develop problem-solving and critical thinking skills through trial and error and immediate visual feedback using a computer as intermediary and interface.

In _Mindstorms_, Papert defines and describes the phenomenon of [mathphobia](https://en.wikipedia.org/wiki/Mathematical_anxiety), in which students develop an aversion to mathematics, generally due to poor instruction that emphasized (correct) product over process. This socio-cultural phenomenon divides children into two groups: “smart people” and “dumb people”. A child’s first unsuccessful or uncomfortable learning experience in a given field leads them to label themselves as “dumb at _x_”. “Children will define themselves in terms of their limitations, and this definition will be consolidated and reinforced throughout their lives.” (Papert)

In _[Mindset](https://amzn.to/2E4SL5E)_, [Carol Dweck](https://profiles.stanford.edu/carol-dweck) outlines two different learner mindsets, _fixed_ and _growth_. Individuals with a fixed mindset view intelligence as static, an innate, unchanging quality, whereas individuals with a growth mindset view intelligence as a quality that can be developed and changed over time. We can easily see how these binary mindsets map to the phenomenon described by Papert above. The table below is taken from the concluding chapter of _Mindset_ and quickly summarizes the difference between the two. It is important to note that the categories are not truly binary. An individual may have a fixed mindset in one area of life, but growth in another, or may oscillate between the two based on situational context.

| Fixed Mindset                                                   | Growth Mindset                                           |
| --------------------------------------------------------------- | --------------------------------------------------------- |
| Believes that intelligence is static...                         | Believes intelligence can be developed...              |
| ... which leads to a desire to look smart and therefore a tendency to...  | ... which leads to a desire to learn and therefore a tendency to... |
| … avoid challenges                                              | … embrace challenges                                      |
| … get defensive or give up easily                               | … persist in the face of setbacks                         |
| … see effort as fruitless                                       | … see efforts as the path to mastery                      |
| … ignore useful negative feedback                               | … learn from criticism                                    |
| … feel threatened by the success of others                      | … find lessons and inspiration in the success of others   |

We are not just teaching adults to code. We are teaching problem-solving. This distinction is particularly important as it is very easy, as a beginner, to become frustrated and give up. A programming language is, fundamentally, a combination of logic and syntax. We need to emphasize the logic aspect of programming over the syntax, to teach students to see the forest for the trees. My most rigid, fixed mindset students berate themselves when discovering that the solution to a problem was simply a missing comma, a common mistake that even the pros make. It’s very important that we not allow students to get hung up on the syntax and maintain a big picture perspective on how all the pieces fit together.

How do we teach students to be problem solvers first and programmers second? I like to start with the common denominator: language.

## The Limits of My Language Mean The Limits of Their World
> “It’s not a question of ‘can this be communicated?’. Rather, it’s a question of ‘How can we improve our ability to communicate?”
>
> -Seymour Papert

One of the biggest challenges for most students is making [the transition from natural language to formal language](https://thehelloworldprogram.com/python/now-something-completely-different/), or, learning to think like a computer. Why don’t we learn procedural thinking from daily life? Giving directions or following a recipe are exercises in procedural thinking, “[b]ut in everyday life, procedures are lived and used, they are not necessarily reflected on.” (Papert)

This may also be the biggest challenge for instructors who teach adults to code. When we make the transition from natural to formal language, precision of speech becomes imperative. There is no room for ambiguity and no margin of error in programming. It is the responsibility of the instructor to find and use language that explains concepts in the most articulate manner. From this, students will learn to imitate mechanical thinking and will be equipped with descriptive formalisms to draw upon when asked to answer technical questions.  

How does one learn this process? Explain the concept to a five-year old. If you can’t, refine your language and try again. This is a thought-experiment (because not everyone has a five-year old on-hand) developed by [Richard Feynman](https://en.wikipedia.org/wiki/Richard_Feynman). With articulate, descriptive language, complicated concepts, even theoretical physics, can be explained to anyone.

> “An important part of becoming a good learner is learning how to push out the frontier of what we can express with words.”
>
> -Seymour Papert

More important than the syntax we are teaching are the words we use to describe it. In _[Thinking, Fast and Slow](https://amzn.to/2PkZVER)_, [Daniel Kahneman](https://en.wikipedia.org/wiki/Daniel_Kahneman) describes an experiment conducted by John Bargh at NYU, in which students were asked to assemble four word sentences from sets of five words. Students in the experimental arm were given word sets associated with the elderly, such as “Florida, forgetful, bald, gray, or wrinkle”. After completing the word sets, students were sent to an adjacent room for a subsequent task. The real test was the walk from the first room to the second. The researchers discovered that the students in the experimental arm, those working with word sets associated with the elderly, walked much slower than their contemporaries in the control group.

This is _priming_.  Exposure to specific words will have a measurable effect on our behavior. How does this relate to programming? Rather than ‘difficult’, ‘hard’, or ‘boring’, I use ‘challenging’, ‘demanding’ and ‘interesting’. Programming is problem-solving. Problems are never hard: they are challenging; some more so than others. It is through accepting the challenge that we learn and gain mastery. When a student says to me, “This is hard”, I probe why. The answer is most often “I’m not good at this”. This then becomes the starting point for a conversation about goals and growth.

## Teach Solving, Not Solutions
> “One does not expect anything to work at the first try. One does not judge by standards like ‘right--you get a good grade’ and ‘wrong--you get a bad grade’. Rather one asks the question: ‘How can I fix it?’ and to fix it one has first to understand what happened in its own terms.”
>
> -Seymour Papert

In _Mindstorms_, Papert introduces the concept of _microworlds_. In programming, a microworld is a self-contained environment in which the learner can model and test assumptions, or intuitions. Each activity, each homework assignment, each project is a microworld. The boundaries of the microworld are simultaneously defined by the language and by the learner’s approach to the language. When learning a programming language, we will have intuitions about how it should work but we may be presented with evidence that it does not work (bugs!). We are then forced to confront and evaluate the limits of our intuitions.

Papert sees the computer as helping learners confront their intuitions in two ways:
* _The computer allows, or obliges, the [learner] to externalize intuitive expectations. When the intuition is translated into a program it becomes more obtrusive and more accessible to reflection._
* _Computational ideas can be taken up as materials for the work of remodeling intuitive knowledge._

The key to long-term success in programming is in this two-fold process of reflection and remodeling, or, learning how to think about thinking. Ultimately, what each student needs is a better understanding of themselves, but getting _meta_ is not easy for everyone, especially those with a fixed mindset. Why did they think this approach would or would not work? Why do they think it does or doesn’t? What does this situation reveal to them about their assumptions and intuitions? Their biases?

> “The key technique is asking yourself why you made a particular mistake, rather than just fixing the mistake and moving on.”
>
> -V. Spraul

Bugs are “an intrinsic part of the learning process”, not something to be avoided. It is through debugging that we learn the most about ourselves. Our goal is to teach adults how to debug themselves and in the process write some code. How do we do that?

In the classic _[How To Solve It](https://amzn.to/2L3jmBE)_, [George Polya](https://en.wikipedia.org/wiki/George_P%C3%B3lya) outlines a methodology for the facilitation of problem-solving in the context of mathematics. These heuristics have two aims:

* Help the student to solve the problem at hand.
* Develop the student’s ability to solve future problems themselves.

Polya’s heuristics can be distilled into four ordinate categories, each with specific questions to ask of students:

1. Understand the Problem
    - What is the problem? What is the goal? Ask students to describe the issue or bug to the best of their ability. What is the console or terminal telling them? If there is no feedback, why might that be so and what can we do about it?
2. Devise a Plan
    * Have we seen this problem, or something like it, before? If we haven’t seen this problem before, can we restate it in terms we are familiar with? Can we break the problem down into smaller problems that are familiar and accessible?
3. Execute the Plan
4. Examine the Solution
    * What is the solution? Ask students to explain it. Can it be modified? If so, what could be improved, if anything? Could we use this solution for other problems?

In the beginning, these steps can be very time-consuming, but by the end of a course, students are so accustomed to this methodology that they will only ask for help for the thorniest of issues.

In _[Think Like a Programmer](https://amzn.to/2QGSi0b)_, [V. Anton Spraul](http://vantonspraul.com/) similarly outlines the same process:
1. Always Have a Plan
2. Restate the Problem
3. Divide the Problem
4. Start with What You Know
5. Reduce the Problem
6. Look for Analogies
7. Experiment
8. Don’t Get Frustrated

That last point is very important. Learning how to debug an application with calm and confidence doesn’t happen overnight. Beginner’s, especially those with a fixed mindset, when confronted with an application-breaking bug and the clock ticking, tend to freak out and, rather than read the logs and think it through, get lost in the black hole of StackOverflow and throw every copy/pasted solution they can find at their problem, making things much worse and much more difficult to correct.

How do we teach adults to code with calm and confidence?

> “Trying to solve problems, you have to observe and to imitate what other people do when solving problems and, finally, you learn to do problems by doing them”
>
> -George Polya

When, and as much as, possible, live code solutions to activities. Ask students for their attempts, even if they are incorrect or unfinished, and debug them in front of the class. If your students give you working solutions, refactor and modify them to demonstrate that there is always more than one way to find a solution. Polya writes:

> “A good teacher should understand and impress on his [or her] students the view that no problem whatever is completely exhausted. There remains always something to do; with sufficient study and penetration, we could improve any solution, and, in any case, we can always improve our understanding of the solution.”

How do we maintain this investment in problem-solving? How do we not only keep students engaged, but ourselves as well?

## Put the Fun in Functions
Programming is fun. If you disagree, you might be in the wrong field (or you might have the wrong mindset). It’s like playing a game, but before you play any game, you need to learn the rules. From the [Wikipedia definition of play](https://en.wikipedia.org/wiki/Play_(activity)), we read:

> “[Play] proceeds within its own proper boundaries of time and space according to fixed rules and in an orderly manner.”

Sounds a lot like programming, doesn’t it? Add to that the following quote by Papert, and we begin to see a formula for putting the fun in functions:

> “The process reminds one of tinkering: learning consists of building up a set of materials and tools that one can handle and manipulate. Perhaps most central of all, it is a process of working with what you’ve got”

How can we create a learning environment that emphasizes process over product, or, play, if you will?

* Relate new concepts to what students already know
* Ask students to take the new concept and make it their own

When designing activities, it’s imperative that students know the rules and are equipped with the tools to find the solution. The solution should never be a concept that has yet to be introduced, but should probably (if not always) be an assemblage of previously learned concepts. Open-ended assignments will encourage investment of effort as it is when we set out to solve problems of our own creation that we learn the most.

If you’re not having fun, they’re not having fun.

## How to Teach Adults to Code (Including Yourself)

> “One learns that the most powerful idea of all is the idea of powerful ideas.”
>
> -Seymour Papert

The scope of benefits for teaching adults to code is twofold. First, global: we live in a paradoxical time. Every day we see news items about “adults” resisting change yet wholly embracing the technologies that precipitate change in their lives. Has every era of human history been characterized by paradox? If the choice is ‘_[Program or Be Programmed](https://amzn.to/2UqY2tY)_’, the answer is obviously the former, not because of some economic inevitability, but because the primary skill one acquires through programming is problem-solving. A problem-solving mindset not only equips one with the ability to think critically about a given problem, but to think critically about oneself, to see change as an opportunity rather than an inhibitor. In this regard, we as instructors can be agents of societal change. Second, local: we as instructors are also lifelong learners. If you want to become a better programmer, teach adults to code. In addition to solidifying your understanding of underlying concepts, it will teach you to recursively apply the reflection/remodeling heuristic to itself which will not only refine your problem-solving skills exponentially, but, perhaps more importantly, equip you with the ability to articulately and effectively communicate any concept.

## (Re)Sources

* [Mindstorms](https://amzn.to/2PpZFV3)
* [Mindset](https://amzn.to/2E4SL5E)
* [Thinking, Fast and Slow](https://amzn.to/2PkZVER)
* [Think Like a Programmer](https://amzn.to/2QGSi0b)
* [How To Solve It](https://amzn.to/2L3jmBE)
* [Program or Be Programmed](https://amzn.to/2UqY2tY)
