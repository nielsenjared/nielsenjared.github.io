---
title: Learn Git Workflow Basics
date: "2019-01-28"
description: Whether you're learning full stack web development, machine learning or something else entirely, you're going to need to learn Git workflow basics.
---
Whether you're learning full stack web development, data visualization or something else entirely, you're going to need to learn Git workflow basics. This tutorial will walk you through the following:

* Initializing a Git repository
* Adding a Remote Origin
* The Three Phases of Git Workflow
* Working Backwards with Checkout, Revert and Reset

Subsequent tutorials will cover:

* [Learn Git Workflow Centralized](/learn-git-workflow-centralized)
* [Learn Git Workflow Branches](/learn-git-workflow-branches)
* [Learn Git Workflow Forks](/learn-git-workflow-forks)


## Initializing a Git Repository
Let’s create a local repository. From the command line:
```
mkdir git-basics
cd git-basics
```
From within your new git-basics directory, run:

```
git init
```

This is the git command short for initialize. Your terminal output will state something to this effect:

```
Initialized empty Git repository in /Users/jarednielsen/apps/git-basics/.git/
```

Before we forget, let’s add our remote repository. **What’s a remote repository?** If you are currently working locally on your repository, the remote is your repository hosted on a third party server allowing your collaborators to access your project.

On GitHub.com, create a new repo and name it git-basics, but don’t initialize with a README. Copy the URL to your new repo and from the command line run:

```
git remote add origin <URL-to-your-repo>
```

You won’t get a response from Git. But if you want to verify that your remote was added run:

```
git remote -v
```

It will list your origin twice, once for (fetch) and once for (push). This is like saying ‘When we fetch, it will be from this origin” and “When we push it will be to this origin”.

## Git Workflow Phases

We can break the git workflow down to three phases:
1. Working directory
2. Staging Area
3. Repository

The Working Directory is where you are currently in your file tree. It’s where, you, well, work, creating and editing files.

The Staging Area is where you store changes and additions for the next commit.

The Repository is a permanent record of the development of your project.

To summarize:
1. You work.
2. You add your work to the staging area.
3. You commit your staged work to the repository.

To see this in action, run:

```
git status
```

The Terminal output will be something like

```
On branch master
Initial commit
nothing to commit (create/copy files and use "git add" to track)
```

As you can see, there’s nothing to commit. Let’s change that.

```
touch index.html
```

Open the the new file with your IDE and add boilerplate HTML:
```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>

  </body>
</html>
```
Save index.html and add it to the repo:

```
git add index.html
```

You won’t get a response at Terminal. Run git status again and your output should be:
```
On branch master

Initial commit

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)

	new file:   index.html
```

Terminal is suggesting you commit index.html. Let’s not do that yet. Let’s make some changes to it first. In the <body> of your index.html, add a header:

```
<h1>I love Git!</h1>
```

Then save. Now run git status. The output should be:
```
On branch master

Initial commit

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)

	new file:   index.html

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

	modified:   index.html
```

Git is telling us that index.html has been modified. Neato! Let’s take a look at those changes. At the command line, run

```
git diff
```

The above command displays all the differences in your repo. If you only want to investigate one file, do so like this:

```
git diff index.html
```

Either way, your Terminal output should be something similar to this:
```
diff --git a/index.html b/index.html
index f540bc6..10dbac0 100644
--- a/index.html
+++ b/index.html
@@ -5,6 +5,6 @@
     <title></title>
   </head>
   <body>
-
+    <h1>I love Git!</h1>
   </body>
 </html>
```

The text highlighted in green is what we just added. Let’s add those changes

```
git add index.html
```

Now when we run git diff:

```
git diff
```

No diff. Why? We added our changes in the working directory to our staging area. But if we run git status, we still see that there are changes to commit. So… let’s do it.

```
git commit
```

Your Terminal window will change and present you with a block of text like the following and some stats about the file(s) you are committing:

```
# Please enter the commit message for your changes. Lines starting
# with '#' will be ignored, and an empty message aborts the commit.
#
# On branch master
# Changes to be committed:
#       modified:   index.html
#
~
~
~
```

You will notice that the top of your Terminal window now reads `vi - git commit`. It may also read `vim`. You are currently in edit mode using the vi (or vim) editor, built-in to your Terminal. vi allows you to edit files directly in your Terminal without needing to open those files in an IDE.

Let’s add a message:

```
Added h1 to index.html
```

When you begin typing you will notice that `-- INSERT --` appears at the bottom of the screen. When you finish typing your message press ESC. You are no longer in _write_ mode, but _read_ mode. To save your changes and exit vi type a colon immediately followed by an ‘x’ and hit Return:

```
:x
````

Run git status again and
```
On branch master
nothing to commit, working tree clean
```

If you are using a Unix-based OS and want to learn more about vi:

```
man vi
```

(Press q to exit)

We can avoid using vi if we add a message _flag_ to our commit command. Flags are options that we can pass to a command. Each command will have different flags available for us to use. As we did above, you can see the flags associated with a command by opening its manual in the Terminal using the `man` command. You will also sometimes see flags referred to as switches.

To index.html, add a title in the head:

```
<title>Learning Git Basics</title>
```

Save your changes and run:

```
git add index.html
git commit -m “Added title”
```

When we use the message flag, the message we pass it must be in quotes.

## Working Backwards
Let’s add another file.

```
touch style.css
```

Add some garish style to our new stylesheet:
 ```
body {
  background-color: red;
}
```

To index.html, add:

```
<link rel="stylesheet" type="text/css" href="style.css">
```

We can add multiple files to staging in one command, like so:

```
git add index.html style.css
```

Commit these changes:

```
git commit -m "Added style"
```

Then run:

```
git log
```

(Press q to exit.)

Your Terminal output will list your repo commits in descending order, with most recent at the top. It will be prepended with a line that reads something like this:

```
commit e11a83fa4ac06a7382c8ea7d367ecaf229cf6891 (HEAD -> master)
```

That long string of alphanumeric characters is the hash Git uses to track your commit(s). But what is (HEAD -> master)?

The HEAD is the commit you are currently working on. This will generally be your most recent commit. To see the HEAD commit, run:

```
git show HEAD
```

Let’s rollback to an earlier commit. Run `git log` again and copy the long string of characters associated with an earlier commit. For example:

```
git checkout 3ba7fe39eb5c0fd2de8a933e618aef1a3d67d49e
```

Your Terminal output will be something similar to:
```
Note: checking out '3ba7fe39eb5c0fd2de8a933e618aef1a3d67d49e'.

You are in 'detached HEAD' state. You can look around, make experimental
changes and commit them, and you can discard any commits you make in this
state without impacting any branches by performing another checkout.

If you want to create a new branch to retain commits you create, you may
do so (now or later) by using -b with the checkout command again. Example:

  git checkout -b <new-branch-name>

HEAD is now at 3ba7fe3... Added h1 to index.html
```

Note that git alerts us that we are in 'detached HEAD' state. This will be important later when you begin branching.

Now take a look at index.html. It should look a little different than last time. Run

```
git show HEAD
```

Your Terminal will output the changes that were associated with that commit.

To switch back, run:

```
git checkout master
```

### Revert
We can _checkout_ earlier commits, but we can also revert and reset to earlier commits, too. To index.html, under your `<h1>` add:

```
<h2>Learning Revert</h2>
```

Then run:
```
git add index.html
git commit -m “Learning revert”
git log
```

You can see in the log that we have a “Learning revert” commit. Now run:

```
git revert HEAD
```

Your Terminal will output something similar:
```
Revert "Learning revert"

This reverts commit 19c9bef19686bedc9d7e14f044e4aeb5396ff771.
```

You can edit the message if you want. Otherwise, commit the change by entering: `:x`

Now take a look at index.html. It _reverted_ to the previous commit. But if you run `git log`, you will see that we created a new commit from the previous commit.

### Reset
To index.html, under your `<h1>` add:

```
<h2>Learning Reset</h2>
```

Then run
```
git add index.html
git commit -m “Learning reset”
git log
```

Our HEAD is now at our latest commit, “Learning reset”. Copy the SHA hash for our very first commit and paste it into this command:
```
git reset --hard 3ba7fe39eb5c0fd2de8a933e618aef1a3d67d49e
```

Your Terminal output will read something like:
```
HEAD is now at 3ba7fe3 Added h1 to index.html
```

Run:
```
git log
```

You just rolled back your project to a previous commit.

## Removing Files
https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository

If you want to delete a file, you need to tell Git to stop tracking it. You can delete and remove it from Git with one command:
```
git rm <file-name>
```

If you're a cowboy and you shoot first and ask questions later, you will still need to remove the file from Git.
```
rm <file-name>
git rm <file-name>
```

If you want to stop tracking a file, but still want to keep it:
```
git rm --cached <file-name>
```

This is useful if you forgot to add a file to your `.gitignore`.

## Git Workflow Basics: What Did We Learn?

In this Git Workflow Basics tutorial, we learned:

* git init
* git remote
* git status
* git add
* git commit
* git diff
* git log
* git show
* git checkout
* git revert
* git reset
* git rm

But there's one last command we need to complete the three phases of the Git workflow:

```
git push
```

This will push your files to the `remote`.

Now that you know the basics, it's time to learn collaborative workflows. Join us in the next tutorial [Learn Git Workflow Centralized](/learn-git-workflow-centralized).

## (Re)Sources
* https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control
* https://www.atlassian.com/git
* http://rogerdudler.github.io/git-guide/
