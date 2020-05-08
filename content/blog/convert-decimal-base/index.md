---
title: 'How to Convert a Decimal to Base'
date: '2020-05-15'
description: ''
keywords: ['javascript', 'decimal', 'base', 'conversion']
---

![](./jarednielsen-@TODO.png)


@TODO


A classic problem solved using the stack data structure is base conversion. 

```js
const decimalToBase = (num, base) => {
  const stack = new Stack();

  const digits = '0123456789ABCDEF';
  let mod;
  let result = '';
  
  while (num > 0) {
    mod = Math.floor(num % base);
    stack.push(mod);
    num = Math.floor(num / base);
  }
  
  while (stack.top > 0) {
    result += digits[stack.pop()];
  }

  return result;
}
```

What's happening here? 

To calculate a base, we need to divide the decimal by the desired base until the quotient is zero. We store the remainder of each division operation and use that to create a string representing the base. 

Let's pseudocode base 2 before we power up and convert the decimal `6` to binary. 

```
6 / 2 = 3
```

The remainder is 0, so we _push_ that to a string: 
```
0
```

We now divide our quotient, `3`, by `2`.
```
3 / 2 = 1
```

The remainder is 1, so we _push_ that to our string: 
```
10
```

We're not at zero, yet. Our quotient is `1`, so we divide that by 2.
```
1 / 2 < 0
```

Our remainder is again `1`, so we push that to our string:
```
110
```

There's our binary conversion of the decimal 6.

We first declare a new instance of our `Stack` class, `stack`. 

We next declare `mod`, `result`, and `digits`. We'll see how each of these are used as we proceed. 

We iterate using a `while` loop. 

1. We get the remainder of our num _modulo_ base and assign it to `mod`. We then push `mod` onto the stack. 

1234 16
2
77
77 16
13
4
4 16
4
0
4D2



