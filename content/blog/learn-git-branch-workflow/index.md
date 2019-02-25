---
title: Learn Git Branch Workflow
date: "2019-02-11"
description: The Git branch workflow allows developers to create branches of a project to test new features and fix bugs without modifying code in production. In this tutorial, you will learn Git branch workflow basics and best practices.
keywords: ["learn git", "git", "git workflow", "git branch"]
---


![Learn Git Branch Workflow](./jared-nielsen-learn-git-branch-workflow.png)

One of the most useful aspects of Git is the ability for developers to create branches of a project to test new features and fix bugs without modifying the code in production. Each repository has at least one if not more branches. When you initialize a new repository, a master branch is created by default. Git allows you to create branches that _stem_ from the _trunk_ of your project. A branch, at its core (no pun intended), is a unique series of code changes with a unique name. Your branch name should be descriptive, so that you and your collaborators can easily infer the work being done. If you're just joining us, you may want to [Learn Git Workflow Basics](/learn-git-workflow-basics/) or [Learn Git Workflow Centralized Collaboration](/learn-git-workflow-centralized)

In this tutorial, you will learn:
* How to create and checkout a branch
* How to merge branches
* How to delete branches
* How to push a branch to a remote origin
* How to open a pull request
* How to resolve conflicts using the Git branch workflow

This tutorial is divided into two parts. The first part walks you through the basics of a Git branch workflow. The second part is designed for collaborating with a partner using the Git branch workflow. You don't need a partner to follow along, but you won't be able to complete all of the operations unless you configure two separate Github accounts.

Can't find a partner? Hit me up [@jarednielsen](https;//twitter.com/jarednielsen)

## Initializing a Repository

On [GitHub.com](https://github.com), create a new repository `git-workflow-branching`

Initialize with a `README`

On the landing page of your repository, note that you have 1 branch named _master_.

From the command line,
```
git clone <URL to git-workflow-branching>
cd git-workflow-branching
```

## Git Branch Workflow

Run the following command to see all your branches:
```
git branch
```

The output will be:
```
* master
```

By default, the first branch is called `master`. The asterisk alerts us to which branch we are currently in. There's one very important rule in the Git branch workflow: anything in the `master` branch is always deployable. Because of this, it's extremely important that your new branch is created off of master when working on a feature or a fix.

To create a new branch, named `dev`, type the following:
```
git checkout -b dev
```

You’ll receive this message:
```
Switched to a new branch 'dev'
```

And if you run `git branch` again the output will be:
```
* dev
  master
```

The `git checkout` command lets you navigate between the branches created by `git branch`. Checking out a branch updates the files in the working directory to match the version stored in that branch, and it tells Git to record all new commits on that branch. Think of it as a way to select which line of development you’re working on. The `-b` flag allows you to simultaneously checkout and create a branch. You can also create a branch using
```
git branch <name-of-branch>
```

This does not ‘checkout’ the branch, though. Try it.
```
git branch test
git branch
```

Your output should be:
```
* dev
  master
  test
```

You are still working in the `dev` branch, even though you created a new branch `test`.

To delete a branch:
```
git branch -d test
```

Verify that test is gone
```
git branch
```

You can switch back and forth between your two branches, by using the `git checkout` command:
```
git checkout master
git checkout dev
```

Every time you begin working on your project, run
```
git checkout master
git pull
```

**Every time!**

_Why?_

1. So you know where you are and you don’t start working in the wrong branch.
2. So your local repo is up to date with the remote.

So what’s the habit you’re going to make?
```
git checkout master
git pull
```

## Merging Branches

Now, switch to your dev branch if you’re not already there.
```
git checkout dev
```

Create a new file
```
touch index.html
```

Add and commit the file
```
git add index.html
git commit -m “Add index”
```

The new file is now committed to our dev branch.

Run `ls` to view all files in the dev branch.

Switch to your master branch
```
git checkout master
```

And list (`ls`) all files.

What’s missing?

`index.html.`

Let’s merge the file from `dev` into our `master` branch.
```
git merge dev
```

The merge command does what? You guessed it. For educational purposes, let’s verify that `index.html` was in fact merged from `dev` to `master`.
```
ls
```

Yo la tengo!

What does Fast-forward mean? When we merged our `dev` branch it was ahead of our `master` branch, so Git _fast-forwarded_ our `master` branch to catch up to the changes we merged from `dev`.

Now push to the remote:
```
git push
```

## Pull Requests

Back at GitHub.com, you will see that `index.html` is now in our remote repository. But we still only have one branch. Our `dev` branch didn’t push.

Back at the Terminal, switch to your `dev` branch.
```
git checkout dev
```

Add a new file
```
touch server.js
git add server.js
git commit -m “server.js”
```

If you run git push, you will receive this error:
```
fatal: The current branch dev has no upstream branch.
```

To push the current branch and set the remote as upstream, use
```
git push --set-upstream origin dev
```

While the solution this prompt offers works, it isn’t best practice for our workflow model. Instead, we only need to push our new branch to our origin:
```
git push origin dev
```

Go back to your repo on GitHub.com. You will see that you now have two branches, Using the **Branch** toggle, you can switch back and forth between your branches and see the changes that exist between them.

Either click the green **Compare & pull request** button or select the branches tab and under your dev branch click **New pull request**. This will route you to a page where you can compare the changes between branches and merge the two. Add a useful comment and click **Create Pull Request**. You will be routed to another page where you can confirm the merge.

Return to the landing page for your repo and you will see that `server.js` is now in your master branch.

Back at your Terminal, switch to your master branch.
```
git checkout master
```

And update your repo locally.
```
git pull
```

Best practice with branches is to delete them once the work has been merged. First delete it remotely:
```
git push --delete origin dev
```

Then delete it locally. (Note: you can’t be in the branch you want to delete and if the branch is not _empty_, you need to use the `-D` switch.)
```
git branch -D dev
```

Now
```
git branch
```

You should only have master. Verify that it is in fact removed from your remote repo.

Cool beans? Now find a friend.

## Collaborative Git Workflow with Branches

### Partner 1

In your master branch, create a `.gitignore` for your project.
```
touch .gitignore
```

Don’t forget the `.` at the beginning of the file name.

Open this in your IDE and add the following:
```
node_modules
```

Save, add, commit and push.

[What is .gitignore doing?](http://bfy.tw/2V2w)

Now that we are working with packages, your applications will always need a .gitignore.

On GitHub.com, under **Settings**, select the Collaborators menu option in the left sidebar.

In the field in the Collaborators panel, search for your partners GitHub account and click **Add collaborators**.

This will send an email to your partner. Alternatively, you can select the **Copy invite link** option and send it by other means.

### Partner 2

Accept the invitation and clone your partner’s repo:
```
rm -rf git-workflow-branching
git clone <URL-to-partners-git-workflow-branching>
cd git-workflow-branching
```

Now create a branch called "new-feature"
```
git checkout -b new-feature
```

Open `server.js` in your IDE and add boilerplate Express app code:
```js
var express = require("express");

var app = express();
var PORT = 3000;

app.get("/", function(req, res) {
  res.send("I love Git!");
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
```

Save, add, and commit. When you run git push, you’re going to get this error:
```
fatal: The current branch new-feature has no upstream branch.
```

To push the current branch and set the remote as upstream, use
```
git push --set-upstream origin new-feature
```

What do you need to do?
```
git push origin new-feature
```

Now go to GitHub.com. You will see that your branch, `new-feature`, is now added to the remote repo. Make a pull request with a useful comment. Let your partner know you’ve made the pull request, but don’t merge it.

### Partner 1

You should receive an email informing you that your partner made a pull request. Click the link in the email to review it on GitHub. Alternatively, navigate to the **Pull requests** tab via the landing page of your repo. You will see this message:
_This branch has no conflicts with the base branch_

So go ahead and merge the pull request.

### Partner 2

Check your email. You should receive a notification that your pull request was merged. You can follow the link to see the details.

## Resolving Conflict in the Git Branch Workflow

### Both Partners

If only it was always this easy. Let’s make some conflict!

What are the first two things you need to do before working on a project?
```
git checkout master
git pull
```

### Partner 1

Create a branch to work on:
```
git checkout -b another-feature
```

Open `server.js` in your IDE and replace `res.send()` in the GET method to `res.sendFile()`
```js
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});
```

Don’t forget to add the path package to your app:
```js
var path = require("path");
```

Save, add, commit, push.

Yup.

You need to add the upstream to remote.

### Partner 2

Navigate to the repo on GitHub.com. In the Branches tab, under Active, you will see the new branch `another-feature`. Click the **New pull request** button. Towards the bottom of this page, you should see something like this:

```
@@ -1,10 +1,11 @@

var express = require("express");
+  var path = require("path");

var app = express();
var PORT = 3000;

app.get("/", function(req, res) {
-  res.send("I love Git!");
+  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, function() {
```

Your partner’s changes and additions are highlighted in green and deleted code is highlighted in red. If you agree with what your partner did, leave a useful comment such as, “Nice! Now we need some HTML to serve!’, and create the pull request. On the next page, **Merge and Confirm**.

Nice! Now we need some HTML to serve!

On GitHub.com, navigate to your `index.html` file.

Click the pencil icon to edit the blank file and copy/paste the following code into the editor:
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <h1>I love Git!</h1>
  </body>
</html>
```

Commit the changes by clicking the big green button at the bottom of the screen.

**Both Partners**

What’s the first thing you do when sitting down to work on your application?
```
git checkout master
git pull
```

## Learn Git Fork & Pull Request Workflow

In the next tutorial you will [Learn Git Fork & Pull Request Workflow](/learn-git-fork-pull-request/).
