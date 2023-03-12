---
title: "How to Work at Human Scale: A Guide for Living the Golden Rule of Programming"
date: "2023-03-10"
description: "Programmers work at two scales of computation: the micro and the macro. How do we ensure we are creating computational systems that relate to humans? By living The Golden Rule of Programming."
keywords: ['golden rule', 'programming', 'human scale']
---

![Graphic of an open laptop with a globe on the screen ](./jarednielsen-golden-rule-programming.png)

Everybody is chatting about AI these days, for better or worse. The doomsayers and evangelists both present strong arguments. At the core of each is the data used to train the models, and there are (at least) two issues to consider:  

* It's not (always) clear what data the models were trained on

* It's (becoming) clear that the developers of the models didn't ask permission to use some of that data

Programmers generally work at two scales of computation: the micro and the macro. 

We structure syntaxes that return big data. We obsess over performance gains and rates of growth. We split code, shake trees, and bikeshed. 

Our goal is to find the optimal solution to a problem. But real-world problems are hard! In between the two scales of the micro and macro is the human world. It’s very easy for us to get lost in the weeds and miss the forest for the trees. 

David Auerbach summarizes this challenge in _Bitwise_:

> The dream…  is to create algorithms of maximum generality while sacrificing as little specificity as possible. In reality, software engineers always compromise, blocking off a certain problem area and finding an expedient path that’s neither too ambitious nor too kludgy. And that sort of heuristic optimization is not so far off from what we do every day in life and language. We lump things into human comprehensible categories while trying to respect special cases, but we never reach perfect abstraction, nor perfect comprehensiveness.

When we communicate with natural language, we can rely on inference and non-verbal cues to get our point across. When we communicate in a formal language, we are required to be exact and specific. There’s no room for ambiguity.

Auerbach continues that our use of language...

> ...inevitably carries bias. Computer code itself lacks any such bias. But the computer data our software processes reflects life, and so it reflects our blind spots and prejudices. Once a computer starts to speak the language of human and human practices, it plays out our linguistic biases. To be labeled is to be prejudged. By standardizing classification and making explicit our social classifications, computers have amplified the gaps and biases in our concepts to their breaking point.

Programming is powerful! 

But with great power comes great responsibility. 

🕷️

According to Auerbach, “Data does not come with a ‘Use Only for Good’ sign attached to it.”

In _How to Speak Machine_, John Maeda asserts that “losing touch with human scale can make you toxic.” According to Maeda, programmers can easily develop “an unusual relationship with reality” which can affect our relationships with others because, as David Auerbach points out, “...engineers function at a priestly remove from the world.” It’s easy to automate operations at exponential scales. It’s also easy to forget that the real-world does not work the same way. 

Maeda distinguishes two types of problems, complicated and complex:

* “Complicated” means something that is knowable, and although it may take time, it’s wholly possible to understand. 

* “Complex” means something that is not knowable, and even brute force can’t easily tackle it. 

He continues: 

> How we make systems out of computation is generally complicated, but how we humans relate to the computational systems we make has complex effects that we’re still figuring out.

In _Bitwise_, David Auerbach discusses Hanlon’s razor and how it applies to software development. Hanlon’s razor states that we should...

> Never attribute to malice what can adequately be explained by stupidity.

Auerbach rephrases this “law” such that we should...

> Never attribute programmer intent what can adequately be explained by incomprehensible complexity.

How do we, as programmers, ensure we are creating computational systems that relate to humans? How do we manage incomprehensible complexity? 

We get agile.

The authors of the Agile manifesto outlined four tenets to help us. They are:

* Individuals and interactions over processes and tools

* Working software over comprehensive documentation

* Customer collaboration over contract negotiation

* Responding to change over following a plan

The first and third points are extremely important when considering complexity as it relates to other humans: we need to work together!

Say, for example, we want to build a web application that is accessible and inclusive. A lot of us are out of our league here. What do we do? 

Safiya Noble offers a solution in _Algorithms of Oppression_:

> We need people designing technologies for society to have training and education on the histories of marginalized people, at a minimum, and we need them working alongside people with rigorous training and preparation from the social sciences and humanities.

This form of collaboration will, according to John Maeda, help you “...keep the real-world impacts of your decisions always in view.”

This is ideal, but not always possible. What then?

In _How to Speak Machine_, John Maeda translates the Japanese concept of _omotenashi_ as “hospitality”, or, “the desire to care for others”. He uses his parents' tofu shop to illustrate his concept. They ran a very successful business precisely because they made their customers feel welcome and important. This concept can easily be extended to software development...

So as you begin to work with your customer’s data, fully embrace the omotenashi approach--and treat their data as you would like your own data to be treated.

There it is! The Golden Rule of Programming:

_Treat others data as you would like others to treat your data._