---
title: Learn Git Workflow Centralized Collaboration
date: "2019-02-04"
description: In order to learn Git workflow, you need to work with a team. This tutorial introduces the centralized model for collaboration and is designed for two to work through together.
---

The most powerful, and sometimes powerfully frustrating, aspect of Git is the collaborative workflow it enables. In order to _really_ learn Git workflow, you need to work through conflict, which means you need to work with a team. This tutorial introduces the centralized model for collaboration and is designed for two to work through together.

You will learn:
* Adding Collaborators to a New Repository
* Integrating Remote Changes
* Resolving Conflicts
* Using vi with Merge Commits

You don't necessarily need a partner to follow along, but you won't be able to perform all of the operations without a collaborator unless you configure two profiles to switch between.

Can't find a partner? Hit me up [@jarednielsen](https;//twitter.com/jarednielsen)

## Initialize a Repository and Add Collaborators

When you initialize a new repository, a master branch is created by default. A centralized workflow uses only the master branch. We will learn to use branches in the next article.

### Partner 1:

Go to [GitHub.com](https://github.com) and create a new repo named `git-workflow-centralized`

Initialize it with a `README`.

Under **Settings**, select the **Collaborators** menu option.

In the field in the **Collaborators** panel, search for your partners GitHub account and click **Add collaborators**.

This will send an email to your partner. Alternatively, you can select the **Copy invite link** and send it by other means.

### Partner 2
Accept the invitation.

### Both Partners
From the command line:
```
git clone <URL-to-git-workflow-centralized>
cd git-workflow-centralized
```
Verify that you both have the repository cloned locally.

## Git Workflow

### Partner 2
Recall that the Git workflow model is **EDIT**, **STAGE**, **COMMIT**. Create an index.html file:

```
touch index.html
```

Add boilerplate HTML:
```html
<!DOCTYPE html>
<html>
	<head>
    <title>Git Workflow, Centralized</title>
	</head>
	<body>
		<h1>Git Workflow, Centralized</h1>
	</body>
</html>
```

You should have ~9 lines of code. Save it. Then add, commit, and push to the remote origin:
```
git add .
git commit -m “Created index.html”
git push
```

### Partner 1
Pull the repo after your partner’s push. Verify that you both have boilerplate `index.html`.
```
ls
cat index.html
```

Now open `index.html` and add this image tag directly below `<h1>`, on line 8, replacing the `alt` attribute with your name:

```html
<img src=”https://gph.is/1nQGqSa” alt=”Jack” >
```

Save, then add, commit and push.

## Integrating Remote Changes && Resolving Conflicts

### Partner 2
After your partner pushes the changes, without making a new pull, add this image tag directly below `<h1>`, on line 8:

```html
<img src="https://gph.is/191zeP3" alt=”Jill” >
```

Save, then add, commit and push.

Uh oh! Errors!
```
To github.com:<repo-owners-name>/git-workflow-centralized.git
 ! [rejected]        master -> master (fetch first)
error: failed to push some refs to 'git@github.com:<repo-owners-name>/git-workflow-centralized.git'
hint: Updates were rejected because the remote contains work that you do
hint: not have locally. This is usually caused by another repository pushing
hint: to the same ref. You may want to first integrate the remote changes
hint: (e.g., 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
```

Git prevents you from overwriting official commits. You need to pull your partners' updates into your repository, integrate them with your local changes, and then try again.

If we read the response from Git in the console, we get a hint at what we need to do. What is it?

```
git pull
```

Uh oh again! When we run `git pull`, we get another error!
```
Auto-merging index.html
CONFLICT (content): Merge conflict in index.html
Automatic merge failed; fix conflicts and then commit the result.
```

You and your partner have conflicts! And you’re just getting to know each other…

Open index.html in your IDE. You will see something similar to this:
```html
<<<<<<< HEAD
    <img src="https://gph.is/191zeP3" alt=”Jill” >
=======
    <img src=”https://gph.is/1nQGqSa” alt="Jack">
>>>>>>> edf14c1afac38dd473d5ff2a75da6ccdbcf7cacc
```

Where did that noise come from? Git. The angle brackets and equal signs demarcate the conflicting code. Here, it’s the two images you and your partner added. `HEAD` is a reference to the last commit in the currently checked-out branch (in our case, `master`). The last commit was the image Partner 2 added, so, as you can see, that is the `HEAD`. That long string of numbers is a hash for the purposes of tracking.

Edit `index.html` so both images will be rendered. Do this by deleting the angle brackets, HEAD, equal signs and hash. Save, then add, commit and push. Be sure to give your commit a useful message like, “Resolved conflict between images”. Your HTML should now look something like this:
```html
<!DOCTYPE html>
<html>
<head>
  <title>Workflow Centralized</title>
</head>
  <body>
    <h1>Workflow Centralized</h1>
    <img src=”https://gph.is/1nQGqSa” alt="First image">
    <img src="https://gph.is/191zeP3" alt=”Second image” >
  </body>
</html>
```

### Both Partners
With great power comes great responsibility. It’s very easy to erase hours of work when resolving conflicts. What is the solution to this problem?

Communication.

### Partner 1
Update your local copy with the changes to the remote:

```
git pull
```

Add a link to an external stylesheet to `index.html`. Under `<title>` in the `<head>`, add a new line and this element:

```html
<link rel="stylesheet" href="style.css">
```

Do the same for an external JavaScript file on line 11.

```html
<script src="app.js"></script>
```

Save, then add, commit and push.

## Partner 2
From the command line, create two new files named, you guessed it, `app.js` and `style.css`:

```
touch app.js style.css
```

Add, commit and push the new files.

Git tells you that your local branch is out of sync with the remote. What do we do?

```
git pull
```

When you run git pull, your screen will change and you will be presented with something similar to this:
```
Merge branch 'master' of github.com:<repo-owners-name>/git-workflow-centralized

# Please enter a commit message to explain why this merge is necessary,
# especially if it merges an updated upstream into a topic branch.
#
# Lines starting with '#' will be ignored, and an empty message aborts
# the commit.
~                                                                               
~                                                                               
~                                                                               
~                                                                               
~                                                                               
~                                                                               
~                                                                               
~                                                                               
~                                                                               
~                                                                               
~                                                                               
~                                                                               
~                                                                               
~                                                                               
~                                                                               
"~/apps/git-workflow-centralized/.git/MERGE_MSG" 7L, 297C
```

Check out the bar at the top of your Terminal. It should read something like this:

`git-workflow-centralized -- vi < git pull`

If you haven’t already discovered it, built-in to your Terminal (or Git Bash) is a text editor, [**vi**](https://en.wikipedia.org/wiki/Vi) (also referred to as [**vim**](https://en.wikipedia.org/wiki/Vim_(text_editor))). This allows us to edit files from within the Terminal, rather than opening them in an IDE.

Note the readout at the bottom of your Terminal, something like this:
```
"~/apps/git-workflow-centralized/.git/MERGE_MSG" 7L, 297C
```

That is the absolute path to the git file you are currently editing.

You are being presented with this screen as an opportunity to add a message to the merge you are about to make. You are not required to add a message, but, if you recall, Linus Torvalds created Git. He is a character. Here he is announcing this ‘functionality’ many years ago:

>Spreading the word about an upcoming 'git' UI change, since I'm largely to blame. This change hopefully makes people write merge messages to explain their merges, and maybe even decide not to merge at all when it's not necessary. I've been using that git feature for the last few weeks now, and it has resulted in my merges from submaintainers having various notes in them (well, at least if the submainter gave me any). So I'm trying to lead by example. But if you don't like explaining your merges, this might be annoying. Of course, if you don't explain your merges, you are annoying, so it all evens out in the end. "Karmic balance", so to say.

Bottom line? Write a useful message.

**vi** may be configured differently for everyone. So if you attempt to add a message and nothing happens, press `i`. This is the **vi** keyboard shortcut for `INSERT`, which you should now see at the bottom of your Terminal.

Add a message. When you are finished typing, press `ESC`. You will notice that `INSERT` disappeared. You are no longer in ‘edit’ mode. You now need to save your changes and exit the file. Enter the following:

```
:wq
```

The colon is required, it’s how you tell **vi** that you are entering commands. As you enter these commands, you will see them appear in the bottom of your Terminal. What do you think `w` and `q` signify? Write and Quit.

Press `Enter` or `Return`.

Voila! You successfully merged a commit to your project without conflict.

Unless, of course, you and your partner are not so chummy.

### Both Partners
Delete this repository or create a new one, swap roles, and go through this process again.

## Learn Git Workflow, From Centralized to Branching

One of the most useful, but potentially confusing, aspects of git is the ability for developers to create branches of a project to test new features. In the next article, we will [learn git branching workflow](./{...}).

## (Re)Sourcess
* http://rogerdudler.github.io/git-guide/
* https://services.github.com/on-demand/downloads/github-git-cheat-sheet.pdf
