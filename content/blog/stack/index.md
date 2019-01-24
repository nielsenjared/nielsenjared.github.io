---
title: Data Structures && JavaScript: Stacks and Stack Algorithms
date: "2019-01-28"
description:
---

A stack is a list of elements that are accessible only from one end of the list, which is called the top.

Common analogies for stacks are books, dishes, or cafeteria trays.

## Last In, First Out (LIFO)

Just like a stack of turtles, to get at the bottom of the stack, you need to take everything off the top.

## Stack Operations

* push
* pop
* peek
* isEmpty

A classic interview problem is implementing a stack with an array. Let's do it!

@TODO Stack with constructor

J4F, let's do it in ES6:

```js
class Stack {

  constructor() {
    this.list = [];
    this.length = 0;
  }

  push(value) {
    this.length++;
    this.list.push(value);
  }

  pop() {
    if (this.length === 0) return;

    this.length--;
    return this.list.pop();
  }

  peek() {
    return this.list[this.length - 1];
  }
}
```


## Problem-solving with Stacks

Now that we have a stack constructor/class, let's look at some other classic problems to solve.

### Decimal to Binary


```js
function divideBy2(num){
  const remStack = new Stack(),
     rem,
     binaryString = '';
     while (decNumber > 0){ //{1}
       rem = Math.floor(decNumber % 2); //{2}
       remStack.push(rem); //{3}
       decNumber = Math.floor(decNumber / 2); //{4}
}
     while (!remStack.isEmpty()){ //{5}
       binaryString += remStack.pop().toString();
}
     return binaryString;
   }
```

#### Base Converter
```js
function baseConverter(decNumber, base){
     var remStack = new Stack(),
     rem,
     baseString = '',
     digits = '0123456789ABCDEF'; //{6}
     while (decNumber > 0){
       rem = Math.floor(decNumber % base);
       remStack.push(rem);
       decNumber = Math.floor(decNumber / base);
}
     while (!remStack.isEmpty()){
       baseString += digits[remStack.pop()]; //{7}
}
     return baseString;
   }
```

### Balanced Parentheses

https://medium.com/@robhitt/balance-parenthesis-in-javascript-60f451a00c4c


### Tower of Hanoi

https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/uncategorized/hanoi-tower

### Postfix Notation

https://en.wikipedia.org/wiki/Reverse_Polish_notation




## (Re)Sources

https://github.com/jamiebuilds/itsy-bitsy-data-structures
