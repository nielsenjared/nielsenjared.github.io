---
title: What is Object-Relational Mapping? Roll-Your-Own ORM with JavaScript
date: "2018-12-31"
description:
---
![Object-Relational Mapping](./jared-nielsen-object-relational-mapping-orm-javascript.png)

@TODO: introduction

If you're just learning web development, the transition to an ORM and/or MVC framework can be challenging. This tutorial will walk you through a simple implementation of object-relational mapping to help you better understand how a full-featured JavaScript ORM, such as Sequelize, works under-the-hood, and how you can easily integrate it into a Model-View-Controller architecture.

## What is Object-Relational Mapping?

According to [Wikipedia](https://en.wikipedia.org/wiki/Object-relational_mapping), Object-Relational Mapping is:

>... a programming technique for converting data between incompatible type systems using object-oriented programming languages.

According to Martin Fowler in [OrmHate](https://martinfowler.com/bliki/OrmHate.html)
> Essentially what you are doing is synchronizing between two quite different representations of data, one in the relational database, and the other in-memory.

What does this mean for us as Node developers? In JavaScript, with the exception of primitive data types, everything is an object. The first problem for us is that SQL database management systems only store _scalar_ values. Scalar variables can only hold one value at a time, unlike arrays or objects. So in the case of using a SQL DBMS, that means strings or integers. Lucky for us, there are npm packages such as [mysql](@TODO) and [mysql2](@TODO) that handle this translation and return our queries in JSON format. But that's only half the battle. The other half is writing methods that allow us to query our database in our _native_ language and not that of the SQL DBMS.



Object Relational Mapping is useful as it allows us (the developers) to separate concerns in our application with reusable methods for database queries. The added, and perhaps most important, benefit of this separation of concerns is that we can easily use other SQL databases without needing to rewrite the entire code-base and instead only make minor changes to the ORM.

While researching this article, I encountered many references to ORMs as the 'Vietnam of Software Development'. This phrase can be traced back to a conference presentation by Ted Neward who describes it in detail on his [blog](http://blogs.tedneward.com/post/the-vietnam-of-computer-science/):

> Although it may seem trite to say it, Object/Relational Mapping is the Vietnam of Computer Science. It represents a quagmire which starts well, gets more complicated as time passes, and before long entraps its users in a commitment that has no clear demarcation point, no clear win conditions, and no clear exit strategy.

In a 2016 article, [Should I Or Should I Not Use ORM?](https://medium.com/@mithunsasidharan/should-i-or-should-i-not-use-orm-4c3742a639ce), Mithun Sasidharan describes a different middle-ground between the two camps: choose the approach that is most appropriate for your application. He lists several questions to ask when making this decision, but we can distill it down to two:

* Are your data access patterns going to be simple? Use an ORM
* Is speed your priority? Don't use an ORM

In a recent article, [Why you should avoid ORMs (with examples in Node.js)](https://blog.logrocket.com/why-you-should-avoid-orms-with-examples-in-node-js-e0baab73fa5), Thomas Hunter II makes the case for a middle-ground between hand-written database drivers and third-party ORMs: query builders, such as [knex](https://www.npmjs.com/package/knex). The reasons he outlines are:

* ORMs are very complex.
* ORMs are inefficient.
* ORMs don't do everything.

While the above is true for a full-featured ORM, Sasidharan outlines several benefits:

* ORMs facilitate model implementation
* ORMs result in a smaller code-base
* ORMs enable faster start-up time

@TODO

## Promises, Promises

Both Sequelize and Mongoose tout themselves as Promise-based ORM/ODMs. In order to understand object-relational mapping, we need a baseline understanding of Promises.

@TODO

We have asynchronous code.

```js
function asynchronousEmulator(num){
  const rand = Math.floor(Math.random() * 1000)
  setTimeout(function(){
      console.log(num);
  }, rand);
}

function ordinalNumbers(){
  asynchronousEmulator("First");
  asynchronousEmulator("Second");
  asynchronousEmulator("Third");
}

ordinalNumbers();
```

### Callbacks

We use callbacks to handle asynchronicity.
```js
function asynchronousEmulator(num, cb){
  const rand = Math.floor(Math.random() * 1000)
  setTimeout(function(){
      console.log(num);
      cb();
  }, rand);
}

function ordinalNumbers(){
  asynchronousEmulator("First", function(){
    asynchronousEmulator("Second", function(){
      asynchronousEmulator("Third", function(){
        return;
      });
    });
  });
}

ordinalNumbers();
```

But we are now on the brink of callback hell!

### Promises

```js
function asynchronousEmulator(num){
  return new Promise(function(resolve, reject){
    const rand = Math.floor(Math.random() * 1000);
    setTimeout(function(){
       console.log(num);
       resolve();
       reject();
     }, rand);
  });
}

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

ordinalNumbers();
```

For a deeper-dive, read my related article to [Learn JavaScript Promises and Promise Methods](http://jarednielsen.com/javascript-promises/).

## Setup The MySQL Database

We'll use the following schema and seeds.

```
DROP DATABASE IF EXISTS petshop_db;
CREATE DATABASE petshop_db;
USE petshop_db;

CREATE TABLE cats
(
	id INT NOT NULL AUTO_INCREMENT,
	pet_name VARCHAR(30) NOT NULL,
	pet_age INTEGER(2),
	pet_sex VARCHAR(6) NOT NULL,
	desexed BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
```

```
INSERT INTO cats (pet_name, pet_age, pet_sex, desexed)
VALUES  ('Tommy', 12, "Male", false),
        ('Whiskers', 2, "Female", true),
        ('Felix', 1, "Male", true)
;
```


## All The Cats Are Undefined

Install our dependency:
```
npm install mysql
```

Then setup a connection to our database:

```js
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "petshopDB"
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId);
});
```

Let's write our first database query and select all the cats from our `cats` table:

```js
function all(){
  connection.query("SELECT * FROM cats;", function(err, data) {
    if (err) throw err;
    return data;
  });
}

let allTheCats = all();

console.log(`All the cats are ${allTheCats}!`);
```

All the cats are undefined! Why? We are attempting to query our database before we have connected to it. We can resolve (pun intended) this situation with a Promise.

```js
function all(){
  const sql = "SELECT * FROM cats";

  return new Promise(function(resolve, reject){
    connection.query(sql, function(err, data) {
      if (err) reject(err);
      resolve(data);
    });
  })
}
```

Now that we are using a Promise, we chain `.then()` and `.catch()` to our call to `all()`.

```js
all()
  .then(function(data){
    console.log(data);
  })
  .catch(function(err){
    console.log(err);
  });
```

The results should be something like:

```
Connected as id 6
[ RowDataPacket {
    id: 1,
    pet_name: 'Tommy',
    pet_age: 12,
    pet_sex: 'Male',
    desexed: 0 },
  RowDataPacket {
    id: 2,
    pet_name: 'Whiskers',
    pet_age: 2,
    pet_sex: 'Female',
    desexed: 1 },
  RowDataPacket {
    id: 3,
    pet_name: 'Felix',
    pet_age: 1,
    pet_sex: 'Male',
    desexed: 1 } ]
```

## CRUD

Implementing our remaining CRUD methods is straightforward:

```js
// create new cat with name and sleepy values
function create(name, age, sex, fixed){
  const sql = `INSERT INTO cats (pet_name, pet_age, pet_sex, desexed) VALUES (?, ?, ?, ?)`;

  return new Promise(function(resolve, reject){
    connection.query(sql, [name, age, sex, fixed], function(err, data) {
      if (err) reject(err);
      resolve(data);
    });
  })
}
```

We call `create`:
```


```
The results will be something similar to:
```
Connected as id 7
OkPacket {
  fieldCount: 0,
  affectedRows: 1,
  insertId: 4,
  serverStatus: 2,
  warningCount: 0,
  message: '',
  protocol41: true,
  changedRows: 0 }
[ RowDataPacket {
    id: 1,
    pet_name: 'Tommy',
    pet_age: 12,
    pet_sex: 'Male',
    desexed: 0 },
  RowDataPacket {
    id: 2,
    pet_name: 'Whiskers',
    pet_age: 2,
    pet_sex: 'Female',
    desexed: 1 },
  RowDataPacket {
    id: 3,
    pet_name: 'Felix',
    pet_age: 1,
    pet_sex: 'Male',
    desexed: 1 },
  RowDataPacket {
    id: 4,
    pet_name: 'Keyboard',
    pet_age: 7,
    pet_sex: 'female',
    desexed: 0 } ]
```

@TODO UD methods

```js
// update cat sleepy value by id
function update(desexed, id){
  const sql = `UPDATE cats SET desexed = ? WHERE id = ?`;

  return new Promise(function(resolve, reject){
    connection.query(sql, [desexed, id], function(err, data) {
      if (err) reject(err);
      resolve(data);
    });
  })
}
```
We call `update` like so:

```js
update(true, 1)
  .then(function(data){
    console.log(data);
  })
  .catch(function(err){
    console.log(err);
  });
```
The results of our query will be something like:
```
Connected as id 8
OkPacket {
  fieldCount: 0,
  affectedRows: 1,
  insertId: 5,
  serverStatus: 2,
  warningCount: 0,
  message: '',
  protocol41: true,
  changedRows: 0 }
OkPacket {
  fieldCount: 0,
  affectedRows: 1,
  insertId: 0,
  serverStatus: 2,
  warningCount: 0,
  message: '(Rows matched: 1  Changed: 1  Warnings: 0',
  protocol41: true,
  changedRows: 1 }
[ RowDataPacket {
    id: 1,
    pet_name: 'Tommy',
    pet_age: 12,
    pet_sex: 'Male',
    desexed: 1 },
  RowDataPacket {
    id: 2,
    pet_name: 'Whiskers',
    pet_age: 2,
    pet_sex: 'Female',
    desexed: 1 },
  RowDataPacket {
    id: 3,
    pet_name: 'Felix',
    pet_age: 1,
    pet_sex: 'Male',
    desexed: 1 },
  RowDataPacket {
    id: 4,
    pet_name: 'Keyboard',
    pet_age: 7,
    pet_sex: 'female',
    desexed: 0 },
  RowDataPacket {
    id: 5,
    pet_name: 'Keyboard',
    pet_age: 7,
    pet_sex: 'female',
    desexed: 0 } ]

```
@TODO add Primus link
Notice that Tommy is now fixed. No longer the stud bull! Also notice that we have two Keyboard cats because we ran the `create` method again. Let's address that with a `destroy` method. ("Destroy" sounds extreme, but `delete` is a reserved keyword in JavaScript.)

```js
function destroy(id){
  const sql = `DELETE FROM cats WHERE id = ?`;

  return new Promise(function(resolve, reject){
    connection.query(sql, [id], function(err, data) {
      if (err) reject(err);
      resolve(data);
    });
  })
}
```

We call the `destroy` method like so:
```js
destroy(5)
  .then(function(data){
    console.log(data);
  })
  .catch(function(err){
    console.log(err);
  });
```

@TODO address prepared statements
Rather than use template literals or string concatenation to insert function arguments in our SQL statements we want to use prepared statements to protect our application from attack via SQL injection.

For a humorous explanation of SQL injection: [xkcd](https://xkcd.com/327/)

  * [SQL Injection](https://en.wikipedia.org/wiki/SQL_injection)
  * [Prepared statements](https://en.wikipedia.org/wiki/Prepared_statement).

## Model Pets

  - What is the M in MVC? The M in MVC is Model.

  - Why is it called the Model? The Model is so named because it defines the architecture, or shape, of the database. You could say it "models" the data.

  - What does the Model do? The Model is responsible for managing the dynamic data structure of an application.

  - How does it interact with the other two components, View and Controller? The Model receives user input from the controller and returns data to be rendered in the View.

* [MVC](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller)

One of the primary reasons for using the MVC framework is the [Separation of concerns](https://en.wikipedia.org/wiki/Separation_of_concerns). We will modularize the Model by separating the database queries from the controller logic in `server.js`.

@TODO graphic of directory structure

At the root level of the directory, we create a folder `db` and move the two `.sql` files into it. This is common practice for keeping an application organized.

Again, at the root level of the directory, we create a folder, `config`, and inside `config` we create a file `connection.js`. This is also common practice for keeping an application organized and is the location where other configuration files will be stored.

From `server.js`, we cut the boilerplate MySQL configuration, including the NPM import, and paste it into `connection.js`. We use `module.exports` to export `connection`.

```js
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "petshop_db"
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId);
});

module.exports = connection;
```

Again, at the root level of the directory, we create a folder, `models`, and inside `models` we create a file `cat.js`. This is our first model.

At the top of `cat.js`, we require `connection.js` to import our database connection.

In `cat.js`, we create an object `cat`.

From `server.js`, cut the `all`, `create`, `update` and `destroy` functions and paste them inside the `cat` object in `cat.js`. **Leave the calls to these functions in `server.js`.**

Now convert the functions in the `cat` object to object methods and export `cat`. **Don't forget the commas!**

@TODO cat model
```js
const connection = require('../config/connection.js');

const cat = {
  all: function(){
    const sql = "SELECT * FROM cats";

    return new Promise(function(resolve, reject){
      connection.query(sql, function(err, data) {
        if (err) reject(err);
        resolve(data);
      });
    })
  },

  create: function(name, age, sex, fixed){
    const sql = `INSERT INTO cats (pet_name, pet_age, pet_sex, desexed) VALUES (?, ?, ?, ?)`;

    return new Promise(function(resolve, reject){
      connection.query(sql, [name, age, sex, fixed], function(err, data) {
        if (err) reject(err);
        resolve(data);
      });
    })
  },

  update: function(desexed, id){
    const sql = `UPDATE cats SET desexed = ? WHERE id = ?`;

    return new Promise(function(resolve, reject){
      connection.query(sql, [desexed, id], function(err, data) {
        if (err) reject(err);
        resolve(data);
      });
    })
  },

  destroy: function(id){
    const sql = `DELETE FROM cats WHERE id = ?`;

    return new Promise(function(resolve, reject){
      connection.query(sql, [id], function(err, data) {
        if (err) reject(err);
        resolve(data);
      });
    })
  }
}

module.exports = cat;

```

In `server.js`, require `./models/cat.js` and modify the calls to `all`, `create`, and `update` to invoke the imported object methods.

```js
const connection = require('../config/connection.js');

const cat = {
  all: function(){
    const sql = "SELECT * FROM cats";

    return new Promise(function(resolve, reject){
      connection.query(sql, function(err, data) {
        if (err) reject(err);
        resolve(data);
      });
    })
  },

  create: function(name, age, sex, fixed){
    const sql = `INSERT INTO cats (pet_name, pet_age, pet_sex, desexed) VALUES (?, ?, ?, ?)`;

    return new Promise(function(resolve, reject){
      connection.query(sql, [name, age, sex, fixed], function(err, data) {
        if (err) reject(err);
        resolve(data);
      });
    })
  },

  update: function(desexed, id){
    const sql = `UPDATE cats SET desexed = ? WHERE id = ?`;

    return new Promise(function(resolve, reject){
      connection.query(sql, [desexed, id], function(err, data) {
        if (err) reject(err);
        resolve(data);
      });
    })
  },

  destroy: function(id){
    const sql = `DELETE FROM cats WHERE id = ?`;

    return new Promise(function(resolve, reject){
      connection.query(sql, [id], function(err, data) {
        if (err) reject(err);
        resolve(data);
      });
    })
  }
}

module.exports = cat;
```

Run `server.js` to verify that everything works.

Unless our vet specializes in cats, we will want models for other species. We _could_ copy the `cat.js` file, rename it, and all appropriate references to `dog`, _but_, that would not be DRY. What's the solution? You guessed it.

## Object Relational Mapping

If we read the Sequelize source code, we will see that it is class-based. Classes in JavaScript are syntactic sugar on constructors, so, for the time-being we will work with constructors then later translate our ORM to classes.

**What does a constructor function do?**

A constructor creates an object.

**What is MySQL?**

A relational database.

**So what do you think Object Relational Mapping is?**

[Object Relational Mapping](https://en.wikipedia.org/wiki/Object-relational_mapping) is mapping database functionality and structure to an object.

**What do you think the benefits of ORMs are?**

  * ORMs allow developers to create reusable functions to query a relational database using their programming language.

  * ORMs allow developers to migrate to a different database architecture without needing to change the entire codebase, only the functionality of the ORM.

  * ORMs also provide more security as developers are not writing queries in their code and instead rely on the ORM to make queries.

In the `config` folder create a new file, `orm.js`, and require `connection.js`.

Next, in `orm.js` create a constructor function, `ORM`, with a parameter `table`, and initialize it with `this.table = table`.

Cut the methods from `cat.js` and paste them inside the `ORM` constructor.

Refactor the object methods into constructor methods using `this` and replace all references to the `cats` table with `this.table`.

**Don't forget to change the `:` to `=`!**

Then export the ORM: `module.exports = ORM;`

The finished `orm.js` will look like:

```js
const connection = require('./connection.js');

const ORM = function(table){
  this.table = table;

  this.all = function(){
    const sql = `SELECT * FROM ??`;

    return new Promise(function(resolve, reject){
      connection.query(sql, table, function(err, data) {
        if (err) reject(err);
        resolve(data);
      });
    })
  },

  this.create = function(name, age, sex, fixed){
    const sql = `INSERT INTO ?? (pet_name, pet_age, pet_sex, desexed) VALUES (?, ?, ?, ?)`;

    return new Promise(function(resolve, reject){
      connection.query(sql, [table, name, age, sex, fixed], function(err, data) {
        if (err) reject(err);
        resolve(data);
      });
    })
  },

  this.update = function(desexed, id){
    const sql = `UPDATE ?? SET desexed = ? WHERE id = ?`;

    return new Promise(function(resolve, reject){
      connection.query(sql, [table, desexed, id], function(err, data) {
        if (err) reject(err);
        resolve(data);
      });
    })
  },

  this.destroy = function(id){
    const sql = `DELETE FROM ?? WHERE id = ?`;

    return new Promise(function(resolve, reject){
      connection.query(sql, [table, id], function(err, data) {
        if (err) reject(err);
        resolve(data);
      });
    })
  }
}

module.exports = ORM;
```

@TODO !!!
Lastly, refactor the `cat.js` model to reflect the code below, respectively:

```js
const ORM = require('../config/orm.js');

const cat = new ORM("cats");

module.exports = cat;
```

Note that we didn't change anything in `server.js`. Run it now to verify that everything works.

## Dogs && Cats

We have a few options now for extending our ORM. If we wanted to keep it as is, we could rename `cat.js` to `index.js` and create a new ORM, `dog`, then export both of them in an object, `db`. That would look like this:

```js
const ORM = require('../config/orm.js');

const Cat = new ORM("cats");
const Dog = new ORM("dogs");

module.exports = { Cat, Dog };
```

Now we can change the import in our `server.js` to import the `models` directory (Node will find the `index.js`) and update the method instances to use the nested model objects:

```js
const db = require('./models');

db.Cat.all()
  .then(function(data){
    console.log(data);
  })
  .catch(function(err){
    console.log(err);
  });

db.Dog.all()
  .then(function(data){
    console.log(data);
  })
  .catch(function(err){
    console.log(err);
  });
```

Before we run our server, we will need to create a `dogs` table:
```
CREATE TABLE dogs
(
	id INT NOT NULL AUTO_INCREMENT,
	pet_name VARCHAR(30) NOT NULL,
	pet_age INTEGER(2),
	pet_sex VARCHAR(6) NOT NULL,
	desexed BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
```

And seed it with dogs:
```
INSERT INTO dogs (pet_name, pet_age, pet_sex, desexed)
VALUES  ('Rex', 12, "Male", false),
        ('Fido', 2, "Female", true),
        ('Spot', 1, "Male", true)
;
```
The results should be all the cats and dogs, like so:
```
connected as id 16
[ RowDataPacket {
    id: 1,
    pet_name: 'Tommy',
    pet_age: 12,
    pet_sex: 'Male',
    desexed: 0 },
  RowDataPacket {
    id: 2,
    pet_name: 'Whiskers',
    pet_age: 2,
    pet_sex: 'Female',
    desexed: 1 },
  RowDataPacket {
    id: 3,
    pet_name: 'Felix',
    pet_age: 1,
    pet_sex: 'Male',
    desexed: 1 } ]
[ RowDataPacket {
    id: 1,
    pet_name: 'Rex',
    pet_age: 12,
    pet_sex: 'Male',
    desexed: 0 },
  RowDataPacket {
    id: 2,
    pet_name: 'Fido',
    pet_age: 2,
    pet_sex: 'Female',
    desexed: 1 },
  RowDataPacket {
    id: 3,
    pet_name: 'Spot',
    pet_age: 1,
    pet_sex: 'Male',
    desexed: 1 } ]
```

## @TODO header!

This approach is all fine and good if our tables have similar structures. But what if our tables differ? Let's create an owners table.

```
CREATE TABLE owners
(
	id INT NOT NULL AUTO_INCREMENT,
	first_name VARCHAR(30) NOT NULL,
	last_name VARCHAR(30) NOT NULL,
	PRIMARY KEY (id)
);
```

We need to refactor our ORM to use prepared statements and the `format` method:

```js
this.create = function(cols, vals){
    let sql = `INSERT INTO ?? (??) VALUES (?)`;
    let inserts = [this.table, cols, vals];
    sql = connection.format(sql, inserts);

    return new Promise(function(resolve, reject){
      connection.query(sql, function(err, data) {
        if (err) reject(err);
        resolve(data);
      });
    })
  },
```

Then we need to modify `models/index.js` to create and export and `Owner`:
```js
const ORM = require('../config/orm.js');

const Cat = new ORM("cats");
const Dog = new ORM("dogs");
const Owner = new ORM("owners");

module.exports = { Cat, Dog, Owner };
```

Lastly, in `server.js`, we need to create an owner and select it from the database:

```js
db.Owner.create(
  ["first_name", "last_name"],
  ["Jared", "Nielsen"]
  )
  .then(function(data){
    console.log(data);
  })
  .catch(function(err){
    console.log(err);
  });

db.Owner.all()
  .then(function(data){
    console.log(data);
  })
  .catch(function(err){
    console.log(err);
  });
```


@TODO: Finish ORM




@TODO: refactor as class

(Re)Sources
* [OrmHate](https://martinfowler.com/bliki/OrmHate.html)
