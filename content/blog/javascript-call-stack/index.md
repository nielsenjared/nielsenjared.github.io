---
title: Learn JavaScript Call Stack,
date: "2019-02-04"
description:
---

![Call Stack](./jared-nielsen-javascript-call-stack.png)

@TODO What is a concurrency model?
@TODO How is JS different from C or Java?
@TODO What is runtime?

@TODO What is a call stack?
A call stack is {...}


The call stack keeps track of where we are in an application.

https://en.wikipedia.org/wiki/Return_statement

@TODO add link to Stack article
If you're unfamiliar with the stack data structure, check out my tutorial { ... } [](./)


JavaScript is single-threaded, which means it is blocking, which means if we run a function that will take some time to return, everything else has to wait for that function. In other languages, you would use multiple threads or processes to handle this situation.


```js
function first() {
  function second() {
    function third() {
      console.trace();
    }
    third();
  }
  second();
}
first();
```

@TODO run on linux and update log

```sh
Trace
    at third (/Users/jarednielsen/apps/app.js:4:15)
    at second (/Users/jarednielsen/apps/app.js:6:5)
    at first (/Users/jarednielsen/apps/app.js:8:3)
    at Object.<anonymous> (/Users/jarednielsen/apps/app.js:10:1)
    at Module._compile (internal/modules/cjs/loader.js:688:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:699:10)
    at Module.load (internal/modules/cjs/loader.js:598:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:537:12)
    at Function.Module._load (internal/modules/cjs/loader.js:529:3)
    at Function.Module.runMain (internal/modules/cjs/loader.js:741:12)
```

Here's our stack trace. What's happening here?

@TODO animation

* When `first()` is called, a new frame is created containing its parameters and scoped variables.
* Then `second()` is called within `first()`, and another frame is created and pushed to the top of the stack.
* Then `third()` is called within `second()`, and another frame is created and pushed to the top of the stack.
* Lastly, `console.trace()` is called { ... }
* When `third()` returns, it is popped off the stack.
* Then `second()` returns and its frame is popped off the stack.
* Lastly, `first()` returns and its frame is popped off the stack, leaving the stack empty.

That anonymous object on the 4th line is our module itself, the global namespace.


@TODO What is a heap?


@TODD What is the event loop?

@TODO add Queue link
The call stack works with an event loop, which unlike the call stack, is a queue data structure. It's the queue that handles the asynchronous stuff. If you're new to data structures, check out my article [](./) Because it's a queue, the event loop works on a First In, First Out { ... } (FIFO).

Messages are added to the event loop.

@TODO What is a message queue? What is the message?

When the call stack is empty, the { ... } checks the event loop for any messages and { ... } the oldest message. It is then added to the call stack.

This is what is referred to as a [Run To Completion](https://en.wikipedia.org/wiki/Run_to_completion_scheduling) system.

>Run-to-completion scheduling is a scheduling model in which each task runs until it either finishes, or explicitly yields control back to the scheduler. Run to completion systems typically have an event queue which is serviced either in strict order of admission by an event loop, or by an admission scheduler which is capable of scheduling events out of order, based on other constraints such as deadlines. 

https://en.wikipedia.org/wiki/Run_to_completion_scheduling




For a deeper dive into how the event loop works in Node.js specifically, see [The Node.js Event Loop, Timers, and process.nextTick()](https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/).












## (Re)Sources
* https://hungryturtlecode.com/tutorials/console-trace/
* https://developer.mozilla.org/en-US/docs/Web/API/Console/trace
* [Concurrency model and Event Loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop)
* [Call Stack](https://developer.mozilla.org/en-US/docs/Glossary/Call_stack)
* [Call Stack](https://en.wikipedia.org/wiki/Call_stack)
* [The Node.js Event Loop, Timers, and process.nextTick()](https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/)
