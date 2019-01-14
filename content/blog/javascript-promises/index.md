---
title: Learn JavaScript Promises and Promise Methods
date: "2019-01-14"
description: Resolve to learn how JavaScript Promises work this year. This tutorial will introduce you to the Promise object and the resolve, reject, finally, all and race Promise methods.
---
![Learn JavaScript Promises and Promise Methods: Fingers Crossed](./jared-nielsen-javascript-promises.png)

If you've used jQuery's AJAX, the fetch API, or Axios for HTTP requests, you've used JavaScript Promises. When you're first learning web development, you immediately use Promise-based APIs and libraries without even knowing how callbacks work. At some point you grokked callbacks, but there's a good chance you never doubled back to learn JavaScript Promises. This year, resolve to learn how the Promise object works. (See what I did there?) In this tutorial, you will learn how to use the Promise object as well as the `resolve`, `reject`, `finally`, `all` and `race` Promise methods.

**What's a Promise?** A JavaScript Promise is an object that will produce a value at some point in the future. A Promise doesn't promise to be fulfilled. It only promises that it will finish execution. But first, a quick refresher (a callback?) on callbacks. We'll return to Promises. I promise.


## Callbacks

**What is a callback?** A callback is a function that is called after a previously called function finishes execution.

**Why are callbacks useful in JavaScript?** We use callbacks to handle asynchronous tasks, such as API calls or database queries.

**What is callback hell?** Callback hell is when you have callbacks nested in callbacks nested in callbacks...

Let's declare a function, `asynchronousEmulator`, to emulate asynchronous tasks, such as API calls or database queries. The function generates a random number and passes it to `setTimeout`.

```js
function asynchronousEmulator(str){
  const num = Math.floor(Math.random() * 1000)
  setTimeout(function(){
      console.log(str);
  }, num)
}
```

Next, let's declare a second function, `ordinalNumbers`, and make three calls to asynchronousEmulator.

```js
function ordinalNumbers(){
  asynchronousEmulator("First");
  asynchronousEmulator("Second");
  asynchronousEmulator("Third");
}

ordinalNumbers();
```

We would expect `ordinalNumbers` to log each number as it is written, but when we run this from the command line, the ordinal numbers are logged out of sequence. (Unless they are in sequence! 🤯)

This is a common situation in web development. We often want our functions to execute with the control flow of our application but they may resolve at different times due to the delayed return from an API or database.

We can fix this by passing our `asynchronousEmulator` a function, `cb`, in addition to a string. When `setTimout` finishes executing, it will then call our function `cb()`. We refactor `ordinalNumbers` so that each call to `asynchronousEmulator` takes a second argument, an anonymous function. That's our callback! Each anonymous function (except for the last) calls `asynchronousEmulator`.

```js
function asynchronousEmulator(str, cb){
  const rand = Math.floor(Math.random() * 1000)
  setTimeout(function(){
      console.log(str);
      cb();
  }, rand);
}

function ordinalNumbers(){
  asynchronousEmulator("First", function(){
    asynchronousEmulator("Second", function(){
      asynchronousEmulator("Third", function(){
        return;
      })
    });
  });
}

ordinalNumbers();
```

If you run this from the command line several times you will see that the ordinal numbers are now logged in sequence.

But.

We are now on the brink of callback hell. Why?

We are building a pyramid of doom! Our code is becoming harder to understand (and ultimately harder to manage). Fortunately for us (developers), ES6 introduced a means for addressing callback hell: Promises.

## JavaScript Promises Promises

Using the Promise object, we can omit the callback(s) and instead refactor `asynchronousEmulator` to return a new Promise object:

```js
function asynchronousEmulator(str){
  return new Promise(function(resolve, reject){
    const rand = Math.floor(Math.random() * 1000);
    setTimeout(function(){
       console.log(str);
       resolve();
       reject();
     }, rand);
  });
}
```

A Promise is an object (which is why we use the `new` keyword) that manages the eventual resolution (or failure) of an asynchronous task. A Promise only promises to end.

We pass our Promise a function (the executor) with two parameters, `resolve` and `reject`. The `resolve` will be called if the Promise is fulfilled (i.e., the execution is successful). The `reject` function will be called if the Promise fails (i.e., there is an error).

We then need to refactor ordinalNumbers to use `.then()` and `.catch()` rather than callbacks:
```js
function ordinalNumbers(){
  asynchronousEmulator("First")
  .then(function(){
    return asynchronousEmulator("Second")
  })
  .then(function(){
    return asynchronousEmulator("Third")
  })
  .catch(function(){
    return "Something went wrong...";
  });
}
```

We chain `.then()` and `.catch()` functions to our Promise invocation. We can chain as many as we want, effectively adding multiple callbacks to our Promise object. `.then()` handles the successful resolution of our Promise. `.catch()` handles the failure, or rejection, of our Promise.

**Bonus!** Our codebase gets super-sexy if we use arrow functions with Promises.

```js
const asynchronousEmulator = str => {
  return new Promise((resolve, reject) => {
    const rand = Math.floor(Math.random() * 1000);
    setTimeout(() => {
       console.log(str);
       resolve();
       reject();
     }, rand);
  });
}

const ordinalNumbers = () => {
  asynchronousEmulator("First")
  .then(() => asynchronousEmulator("Second"))
  .then(() => asynchronousEmulator("Third"))
  .catch(() => "Something went wrong...");
};

ordinalNumbers();
```
😙

## JavaScript Promise Methods
### Resolve && Reject

There are three states of a Promise:
1. pending
2. fulfilled
3. rejected.

Let's take a look at what is happening inside the Promise with this new snippet:

```js
const promise = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve('Success!');
    reject('Fail!');
  }, 300);
});

promise
  .then(function(value) {
    console.log(value);
  })
  .then(function(){
    console.log(promise);
  })
  .catch(function(value){
    console.log(value);
  })

//This will log first, notice the state of our Promise is <pending>
console.log(promise);
```
We create a new Promise, `promise`, containing a `setTimeout` to emulate asynchronous behavior. Within that `setTimeout` we call both `resolve()` and `reject()`. The order we pass our parameters to our Promise is important. It expects to receive the `resolve` first.

When we run this, we get the following:

```
Promise { <pending> }
Success!
Promise { 'Success!' }
```

The first line, `Promise { <pending> }`, is the status of our Promise while we wait 300ms for it to be fulfilled. The second line is `value` as it is passed to `.then()`. The last line is the status of our Promise after it has been fulfilled.

Just for the callback-hell-of-it, let's force a rejection to see what it looks like by swapping the position of the `.catch()` and `.then()` functions and commenting out our `resolve()`.

```js
const promise = new Promise(function(resolve, reject) {
  setTimeout(function() {
    // We comment out our resolve to force a rejection
    // resolve('Success!');
    reject('Fail!');
  }, 300);
});

promise
  .then(function(value) {
    console.log(value);
  })
  .catch(function(value){
    console.log(value);
  })
  .then(function(){
    console.log(promise);
  });

//This will log first, notice the state of our Promise is <pending>
console.log(promise);
```

The results in the shell should read:

```
Promise { <pending> }
Fail!
Promise { <rejected> 'Fail!' }
```

### Promise.finally()

Recently added to the Promise object is the `.finally()` method. As we saw above, `.then()` and `.catch()` are only invoked on their respective `resolve` or `reject`. We use `.finally()` to execute a callback _regardless_ of whether or not the Promise resolved or was rejected. Let's refactor the above code to use `.finally()`:

```js
const promise = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve('Success!');
    reject('Fail!');
  }, 300);
});

promise
  .then(function(value) {
    console.log(value);
  })
  .catch(function(value){
    console.log(value);
  })
  .finally(function(){
    console.log(promise);
  });

console.log(promise);
```

If we comment out the `resolve` to force a rejection, the promise itself will still be console.logged via `.finally()`.

### Promise.all()
The Promise object also include an `.all()` method that can be used to call multiple promises and return their values in an array.

In our first example, we called our `asynchronousEmulator` three times to return ordinal strings. Let's refactor it to use `Promise.all()`:

```js
const asynchronousEmulator = str => {
  return new Promise((resolve, reject) => {
    const rand = Math.floor(Math.random() * 1000);
    setTimeout(() => {
       resolve(str);
       reject(str);
     }, rand);
  });
}

Promise.all([
  asynchronousEmulator("First"),
  asynchronousEmulator("Second"),
  asynchronousEmulator("Third")
]).then(values => console.table(values));
```

If we wrap those three calls in an array and pass that array to `Promise.all()`, the returned value will be an array of strings (in order!).

```
┌─────────┬──────────┐
│ (index) │  Values  │
├─────────┼──────────┤
│    0    │ 'First'  │
│    1    │ 'Second' │
│    2    │ 'Third'  │
└─────────┴──────────┘
```
Keep in mind, though, `Promise.all()` rejects all of the promises if even it encounters one that rejects. For example:

```js
const asynchronousEmulator = str => {
  return new Promise((resolve, reject) => {
    const rand = Math.floor(Math.random() * 1000);
    setTimeout(() => {
       typeof str === 'string' ? resolve(str) : reject(str);
     }, rand);
  });
}

Promise.all([
  asynchronousEmulator("First"),
  asynchronousEmulator(2),
  asynchronousEmulator("Third")
]).then(values => console.table(values))
  .catch(value => console.log(value));
```

This will log the value `2`.

We can avoid this situation by handling possible rejections in-line:
```js
const asynchronousEmulator = str => {
  return new Promise((resolve, reject) => {
    const rand = Math.floor(Math.random() * 1000);
    setTimeout(() => {
       typeof str === 'string' ? resolve(str) : reject(str);
     }, rand);
  });
}

Promise.all([
  asynchronousEmulator("First").catch(err => console.log(err)),
  asynchronousEmulator(2).catch(err => console.log(err)),
  asynchronousEmulator("Third").catch(err => console.log(err))
]).then(values => console.table(values));
```

This will return:
```
2
┌─────────┬───────────┐
│ (index) │  Values   │
├─────────┼───────────┤
│    0    │  'First'  │
│    1    │ undefined │
│    2    │  'Third'  │
└─────────┴───────────┘
```

### Promise.race()

The Promise object also allows us to handle race conditions. Just like the similarly named sporting event, the `race()` method will resolve after any one of the promises resolves.

In the snippet below, we generate a random number in the `setTimeout` functions in each of our Promises. We don't know who will win the race, but I promise it will be exciting!

```js
const rand = () => Math.floor(Math.random() * 1000);

const tortoise = new Promise(function(resolve, reject) {
  setTimeout(resolve, rand(), '🐢');
});

const hare = new Promise(function(resolve, reject) {
  setTimeout(resolve, rand(), '🐇');
});

Promise.race([
  tortoise,
  hare
]).then(function(value) {
  console.log(value);
});
```

## It's Settled: JavaScript Promises FTW!
You didn't reject learning JavaScript Promises and Promise methods! If you found this article useful, consider sharing it. If you have any feedback, let me know [@jarednielsen](https://twitter.com/jarednielsen)


## (Re)Sources
* [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
* [Using Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)
* [callbackhell.com](http://callbackhell.com/)
