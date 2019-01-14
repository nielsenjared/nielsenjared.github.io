---
title: Object-Relational Mapping
date: "2019-01-21"
description:
---
![Object-Relational Mapping](./jared-nielsen-object-relational-mapping.png)

@TODO: introduction

If you're just learning web development, the transition to an ORM and/or MVC framework can be challenging. This tutorial will walk you through the implementation of a simple ORM to help you understand how a full-featured object-relational mapper, such as Sequelize, works under-the-hood, and how you can easily integrate it into a Model-View-Controller architecture.

In this tutorial we will build a basic ORM to perform CRUD commands with a MySQL database.


## Object-Relational Mapping

**What is ORM?** Object Relational Mapping is a design system that maps an object-oriented programming language (such as JavaScript) to a relational database (such as MySQL).

**Why is it useful?** Object Relational Mapping allows us (developers) to interface with a database with reusable methods and allows us to use other SQL databases without needing to rewrite the entire codebase and instead only update the ORM.


## Promises, Promises

Both Sequelize and Mongoose tout themselves as Promise-based ORM/ODMs. In order to understand ORM, we need a baseline understanding of Promises.

@TODO: promises

For a deeper-dive, read my related article to [Learn JavaScript Promises and Promise Methods](http://jarednielsen.com/javascript-promises/).


### 3. Students Do: All The Cats (10 mins)

* See [13-Stu_All-The-Cats/README.md](#) for instructions

* In this activity, students will solve an issue with asynchronicity using a Promise.

* This is a straightforward activity, but students still struggling to understand callbacks may find it challenging to understand the problem and implement a solution with a Promise. If students seem stuck, refer them to the files in the previous activity.


### 4. Everyone Do: All The Cats Review (5 mins)

* Ask students to post their solutions in Slack. Select one and call on other students to explain snippets. As students explain the code, reiterate (while rephrasing their explanations) the following points:

  - What was the problem? We logged our variable, `allTheCats`, before the database query resolved, which returned `undefined`.

* The solution to the problem is to refactor `all()` to return a Promise encapsulating our query.

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
* Answer any questions before introducing the next activity.


### 5. Students Do: Promises Promises (10 mins)

* See [14-Stu_Promises-Promises/README.md](#) for instructions

* In this activity, students will add `create` and `update` functions to their `server.js` files utilizing Promises.

* The solution to this activity is straightforward, but if students are struggling, refer them back to previous Handlebars activities where they used CRUD methods, then encourage them to encapsulate those methods in a Promise and modify as needed to query their database.


### 6. Everyone Do: Promises Promises Review (10 mins)

* Ask students to post their solutions in Slack. Select one solution and call on someone other than the author to explain the `create` function. Then call on another student to explain the `update` function. As students explain the code, reiterate (while rephrasing their explanations) the following points:

* Our `create` and `udpate` functions are very similar to the `all` function we created in the previous activity with the exception that these two receive arguments.

* The `create` function receives `name` and `sleepy` arguments and inserts their values into their corresponding columns using SQL prepared statements. The order in which we pass our arguments to our query method is important to ensure the values are inserted into the correct columns.

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

  * If students have further questions, refer them to the Wikipedia articles on [SQL Injection](https://en.wikipedia.org/wiki/SQL_injection) and [Prepared statements](https://en.wikipedia.org/wiki/Prepared_statement).


### 7. Instructor Do: Models (15 mins)

* See [15-Ins_Models](#)

* Activities 15 through 18 are crucial for students to understand MVC framework, especially in regards to data flow. Before walking students through building a model, lead a brief discussion on the topic.

* Ask students the following questions:

  - What is the M in MVC?

  - Why is it called the Model?

  - What does the Model do?

  - How does it interact with the other two components, View and Controller?

* If students struggle, guide them towards these answers:

  - The M in MVC is Model.

  - The Model is so named because it defines the architecture, or shape, of the database. You could say it "models" the data.

  - The Model is responsible for managing the dynamic data structure of an application.

  - The Model receives user input from the controller and returns data to be rendered in the View.

* If students have further questions, refer them to the Wikipedia article on [MVC](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller)

* Remind students that one of the primary reasons for using the MVC framework is the separation of concerns. You will be demonstrating how to modularize the Model by separating the database queries from the controller logic in `server.js`.

  - If students have further questions, refer them to the Wikipedia article on [Separation of concerns](https://en.wikipedia.org/wiki/Separation_of_concerns).

* If you are comfortable doing so, live code the refactoring of the application in the Unsolved folder and explain each step as you proceed. If you are not comfortable live coding, walk students through the files in the Solved folder. Either way, explain the following:

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


### 9. Everyone Do: Models Review (10 mins)

* If you are comfortable doing so, call on students to live code the solution using your laptop. Alternatively, ask students to Slack individual files to #class-instruction and piece together the solution using files from different authors. This will help reinforce the usefulness of modularity in the MVC framework by demonstrating that components can be completed by a team of developers. This is also an opportunity to debug in front of the class if there are discrepancies between files.

* Answer any questions. If students ask about the dog model, `dog.js`, and its implementation, use it as a segue into the next demo.


### 10. Instructor Do: ORM (15 mins)

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
