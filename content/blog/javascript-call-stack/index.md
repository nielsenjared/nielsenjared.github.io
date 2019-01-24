---
title: Learn JavaScript Call Stack,
date: "2019-02-04"
description:
---
![Call Stack](./jared-nielsen-javascript-call-stack.png)

https://developer.mozilla.org/en-US/docs/Web/API/Console/trace

```js
function one() {
  function two() {
    function three() {
      console.trace();
    }
    three();
  }
  two();
}
one();
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










## (Re)Sources
* https://hungryturtlecode.com/tutorials/console-trace/
* 
