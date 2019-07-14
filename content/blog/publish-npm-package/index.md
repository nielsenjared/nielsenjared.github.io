---
title: How To Publish an npm Package

---

* Create an npm account
* login to your npm account on the command line

```sh
npm login
```

Username: nielsenjared
Password: 
Email: (this IS public) nielsen.jared@gmail.com
Logged in as nielsenjared on https://registry.npmjs.org/.


Create a directory for your package

```sh
mkdir badmath
cd badmath
```

Initialize the project
```
npm init
```


```sh
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help json` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (badmath) 
version: (1.0.0) 
description: Bad math for educational purposes.
entry point: (index.js) 
test command: 
git repository: https://github.com/nielsenjared/badmath
keywords: bad, math
author: Jared Nielsen
license: (ISC) GPL-3.0-or-later
About to write to /home/jarednielsen/apps/badmath/package.json:

{
  "name": "badmath",
  "version": "1.0.1",
  "description": "Bad math for educational purposes.",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/nielsenjared/badmath.git"
  },
  "keywords": [
    "bad",
    "math"
  ],
  "author": "Jared Nielsen",
  "license": "GPL-3.0-or-later",
  "bugs": {
    "url": "https://github.com/nielsenjared/badmath/issues"
  },
  "homepage": "https://github.com/nielsenjared/badmath#readme"
}


Is this OK? (yes) 
```

If you haven't already, write the code!




```sh
npm publish
```

```sh
npm notice 
npm notice 📦  badmath@1.0.0
npm notice === Tarball Contents === 
npm notice 550B package.json
npm notice === Tarball Details === 
npm notice name:          badmath                                 
npm notice version:       1.0.0                                   
npm notice package size:  387 B                                   
npm notice unpacked size: 550 B                                   
npm notice shasum:        ca01e02893cec668cb4c1f1826924b71b770310d
npm notice integrity:     sha512-DIZmYOP/gId5f[...]IdvuSZXv/HSkg==
npm notice total files:   1                                       
npm notice 
+ badmath@1.0.0
```

📝 If you make any changes to your package, you will need to update the version number, otherwise the registry will yell at you. 