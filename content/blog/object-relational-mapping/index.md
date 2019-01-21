---
title: What is ORM? Object-Relational Mapping in JavaScript FTW
date: "2018-12-31"
description:
---
![Object-Relational Mapping](./jared-nielsen-object-relational-mapping.png)

@TODO: introduction

If you're just learning web development, the transition to an ORM and/or MVC framework can be challenging. This tutorial will walk you through a simple implementation of object-relational mapping to help you better understand how a full-featured JavaScript ORM, such as Sequelize, works under-the-hood, and how you can easily integrate it into a Model-View-Controller architecture.

## Object-Relational Mapping

**What is ORM?** Object Relational Mapping is a design system that maps an object-oriented programming language (such as JavaScript) to a relational database (such as MySQL).

**Why is it useful?** Object Relational Mapping allows us (developers) to separate concerns in our application with reusable methods for database queries. The added, and perhaps most important, benefit of this separation of concerns is that we can easily use other SQL databases without needing to rewrite the entire code-base and instead only make minor changes to the ORM.

**Why is it challenging?**
> Essentially what you are doing is synchronizing between two quite different representations of data, one in the relational database, and the other in-memory.

While researching this article, I encountered many references to ORMs as the 'Vietnam of Software Development'. This phrase can be traced back to a Ted Neward who describes it in detail on his [blog](http://blogs.tedneward.com/post/the-vietnam-of-computer-science/):

> Although it may seem trite to say it, Object/Relational Mapping is the Vietnam of Computer Science. It represents a quagmire which starts well, gets more complicated as time passes, and before long entraps its users in a commitment that has no clear demarcation point, no clear win conditions, and no clear exit strategy.

@TODO

For another nuanced perspective on the problem, read [OrmHate](https://martinfowler.com/bliki/OrmHate.html) by Martin Fowler.

In a 2016 article, [Should I Or Should I Not Use ORM?](https://medium.com/@mithunsasidharan/should-i-or-should-i-not-use-orm-4c3742a639ce), Mithun Sasidharan describes a different middle-ground between the two camps: choose the approach that is most appropriate for your application. He lists several questions to ask when making this decision, but we can distill it down to two:

* Are your data access patterns going to be simple? Use an ORM
* Is speed your priority? Don't use an ORM

In a recent article, [Why you should avoid ORMS (with examples in Node.js)](https://blog.logrocket.com/why-you-should-avoid-orms-with-examples-in-node-js-e0baab73fa5), Thomas Hunter II makes the case for a middle-ground between hand-written database drivers and third-party ORMs: query builders, such as [knex](https://www.npmjs.com/package/knex). The reasons he outlines are:

* ORMs are very complex.
* ORMs are inefficient.
* ORMs don't do everything.

While the above is true for a full-featured ORM, Sasidharan outlines several benefits:

* ORMs facilitate model implementation
* ORMs result in a smaller code-base
* ORMs enable a aster start-up time



## Promises, Promises

Both Sequelize and Mongoose tout themselves as Promise-based ORM/ODMs. In order to understand ORM, we need a baseline understanding of Promises.

@TODO: promises

For a deeper-dive, read my related article to [Learn JavaScript Promises and Promise Methods](http://jarednielsen.com/javascript-promises/).


## All The Cats Are Undefined

@TODO:

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

* Now that we are using a Promise, we chain `.then()` and `.catch()` to our call to `all()`.

```js
all()
  .then(function(data){
    console.log(data);
  })
  .catch(function(err){
    console.log(err);
  });
```


## CRUD

Implementing our remaining CRUD methods is straightforward:

```js
// create new cat with name and sleepy values
function create(name, sleepy){
  const sql = "INSERT INTO cats (name, sleepy) VALUES (?, ?)";

  return new Promise(function(resolve, reject){
    connection.query(sql, [name, sleepy], function(err, data) {
      if (err) reject(err);
      resolve(data);
    });
  })
}
```

* The `update` function receives `sleepy` and `id` arguments and updates the value in the `sleepy` column in a row in our `cats` table where the id is equal to the value stored in the `id` argument. Again, the order in which we pass our arguments to our `query` method is important to ensure the values are inserted into the correct columns.

```js
// update cat sleepy value by id
function update(sleepy, id){
  const sql = "UPDATE cats SET sleepy = ? WHERE id = ?";

  return new Promise(function(resolve, reject){
    connection.query(sql, [sleepy, id], function(err, data) {
      if (err) reject(err);
      resolve(data);
    });
  })
}
```

* Lastly, we call `create` and `update`, passing each their respective arguments.

```js
// pass in a string for the 'name' of the cat and a boolean for 'sleepy'
create("Keyboard", false)
  .then(function(data){
    console.log(data);
  })
  .catch(function(err){
    console.log(err);
  });

// pass in a boolean value for 'sleepy' and the id of the cat to be updated
update(true, 1)
  .then(function(data){
    console.log(data);
  })
  .catch(function(err){
    console.log(err);
  });
```

* If students attempted to use template literals or string concatenation to insert function arguments in their SQL statements rather than prepared statements, ask them why this might be a bad idea. Guide them toward the answer: it would make our application vulnerable to attack via SQL injection.

  * For a humorous explanation of SQL injection, refer students to this [xkcd](https://xkcd.com/327/) comic.

  * [SQL Injection](https://en.wikipedia.org/wiki/SQL_injection)
  * [Prepared statements](https://en.wikipedia.org/wiki/Prepared_statement).


## Models

  - What is the M in MVC? The M in MVC is Model.

  - Why is it called the Model? The Model is so named because it defines the architecture, or shape, of the database. You could say it "models" the data.

  - What does the Model do? The Model is responsible for managing the dynamic data structure of an application.

  - How does it interact with the other two components, View and Controller? The Model receives user input from the controller and returns data to be rendered in the View.

* [MVC](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller)

One of the primary reasons for using the MVC framework is the [Separation of concerns](https://en.wikipedia.org/wiki/Separation_of_concerns). You will be demonstrating how to modularize the Model by separating the database queries from the controller logic in `server.js`.



  * At the root level of the directory, we create a folder `db` and move the two `.sql` files into it. This is common practice for keeping an application organized.

  * Again, at the root level of the directory, we create a folder, `config`, and inside `config` we create a file `connection.js`. This is also common practice for keeping an application organized and is the location where other configuration files will be stored.

  * From `server.js`, we cut the boilerplate MySQL configuration, including the NPM import, and paste it into `connection.js`. We use `module.exports` to export `connection`.

  * Again, at the root level of the directory, we create a folder, `models`, and inside `models` we create a file `cat.js`. This is our first model.

  * At the top of `cat.js`, we require `connection.js` to import our database connection.

  * In `cat.js`, we create an object `cat`.

  * From `server.js`, cut the `all`, `create`, and `update` functions and paste them inside the `cat` object in `cat.js`. **Leave the calls to these functions in `server.js`.**

  * Now convert the functions in the `cat` object to object methods and export `cat`. **Don't forget the commas!**

  * In `server.js`, require `./models/cat.js` and modify the calls to `all`, `create`, and `update` to invoke the imported object methods.

  * Run `server.js` to verify that everything works.

* Answer any questions before introducing the next activity.

### 8. Students Do: Models (10 mins)

* See [16-Stu_Models/README.md](#)

* Based on your demonstration, and following the instructions included with the activity files, students will modularize the Promise-based functions from the previous activity and implement the Model layer of their application.

* Additionally, students will create a new model, `dogs`, and call its methods from `server.js`.


## ORM 

* See [17-Ins_ORM](#)

* Within the Unsolved folder, open `cat.js` and `dog.js` side-by-side in your IDE.

* Ask the class the following questions:

  * What is DRY?

  * Is this code DRY? If not, why?

  * What could we do to make this code DRY?

  * What does a constructor function do?

  * What is MySQL?

  * So what do you think Object Relational Mapping is?

  * What do you think the benefits of ORMs are?

* If students struggle, guide them to the following answers:

  * DRY is an acronym for Don't Repeat Yourself

  * The code is not DRY because both `cat.js` and `dog.js` implement the same functionality, albeit using different tables.

  * To make this code more DRY, we could create generic methods to import into both `cat.js` and `dog.js` to then query specific tables.

  * A constructor function creates an object.

  * MySQL is a relational database.

  * Object Relational Mapping is mapping database functionality and structure to an object.

* Feel free to make a bad Promise pun as you return to the concept of ORM.

* Briefly explain a few of the benefits of using an ORM:

  * ORMs allow developers to create reusable functions to query a relational database using their programming language.

  * ORMs allow developers to migrate to a different database architecture without needing to change the entire codebase, only the functionality of the ORM.

  * ORMs also provide more security as developers are not writing queries in their code and instead rely on the ORM to make queries.

* Either way, explain the following:

  * In the `config` folder create a new file, `orm.js`, and require `connection.js`.

  * Next, in `orm.js` create a constructor function, `ORM`, with a parameter `table`, and initialize it with `this.table = table`.

  * Cut the methods from either `cat.js` or `'dog.js` and paste them inside the `ORM` constructor.

  * Refactor the object methods into constructor methods using `this`. **Don't forget to change the `:` to `=`!**

  * Then export the ORM: `module.exports = ORM;`

  * Lastly, refactor each model to reflect the code below, respectively:

    ```js
    const ORM = require('../config/orm.js');

    const cat = new ORM("cats");

    module.exports = cat;
    ```

  * Run the server to verify that everything works.

* If students have further questions, refer them to the Wikipedia article on [Object Relational Mapping](https://en.wikipedia.org/wiki/Object-relational_mapping).


### 11. Students Do: ORM (10 min)

* See [18-Stu_ORM/README.md](#) for instructions

* Based on your demonstration, and following the instructions included with the activity files, students will implement ORM in their application.

* Additionally, students will add a `delete` method to the ORM and call it from `server.js`.

* The BONUS calls for students to refactor the constructor function as a class.


### 12. Everyone Do: ORM Review (10 min)

* Briefly address the implementation of the `delete` method in `orm.js`:

```js
this.delete = function(id) {
  const sql = `DELETE FROM ?? WHERE id = ?`;

  return new Promise(function(resolve, reject){
    connection.query(sql, [table, id], function(err, data) {
      if (err) reject(err);
      resolve(data);
    });
  })
}
```

@TODO: Finish ORM

(Re)Sources
* [OrmHate](https://martinfowler.com/bliki/OrmHate.html)
