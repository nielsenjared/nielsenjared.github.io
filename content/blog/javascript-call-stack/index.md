---
title: Learn JavaScript Call Stack,
date: "2019-02-04"
description:
---
![Call Stack](./jared-nielsen-javascript-call-stack.png)





The call stack works with a stack as well as with a queue. It's the queue that handles the asynchronous stuff.

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
    at three (/Users/jarednielsen/apps/app.js:4:15)
    at two (/Users/jarednielsen/apps/app.js:6:5)
    at one (/Users/jarednielsen/apps/app.js:8:3)
    at Object.<anonymous> (/Users/jarednielsen/apps/app.js:10:1)
    at Module._compile (internal/modules/cjs/loader.js:688:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:699:10)
    at Module.load (internal/modules/cjs/loader.js:598:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:537:12)
    at Function.Module._load (internal/modules/cjs/loader.js:529:3)
    at Function.Module.runMain (internal/modules/cjs/loader.js:741:12)
```

Here's our stack trace. What's happening here?

When `one()`
That anonymous object on the 4th line is our module itself, the global namespace.










## (Re)Sources
* https://hungryturtlecode.com/tutorials/console-trace/
* https://developer.mozilla.org/en-US/docs/Web/API/Console/trace
