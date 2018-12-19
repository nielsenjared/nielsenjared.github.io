---
title: How to Contribute to Open Source Project: Fork & Pull Request (w/ Real World Example!)
date: "2018-12-24"
description: This real-world example demonstrates how to contribute to an open source project through forking and a pull request.
---

![](./images/{...}.png)



![](./images/jared-nielsen-fork-pull-request-001.png)
![](./images/jared-nielsen-fork-pull-request-002.png)


## Fork the Repository

If this is your first fork, congrats! Hit the 'Fork' button in the upper right. You will be treated to a delightful animation and redirected back to your account. Note that now the repository is prepended with your username, with a link pointing to the source of the fork just below it.

Now clone your fork.

```sh
git clone git@github.com:nielsenjared/gatsby-starter-blog.git
```

## Add Upstream
When working with a forked repository, you will want and need to pull changes from the original repo to keep your fork up-to-date. If the original repository is "the source", then to use a water-based analogy, we could say that it is "upstream", which is what we'll do:

```sh
git remote add upstream git@github.com:gatsbyjs/gatsby-starter-blog.git
```

When you work on the project in the future, simply checkout master and fetch and merge upstream.

```sh
git checkout master
git fetch upstream
git merge upstream/master
```

## Get to Work: Checkout a Branch
When working on a fork that you intend to submit pull requests on, you will want to keep the `master` branch up-to-date and separate from the work you are doing in order to mirror the upstream and minimize conflicts. In this example, I created a branch `meta-description` as that was the feature I was implementing.

```sh
git checkout -b meta-description
```

Work on your feature or bug fix, then add, commit and push to your remote origin.

```sh
git push origin meta-description
```

When submitting a PR, you won't push directly to the upstream. Instead, you will push your branch to your remote fork and from there open a PR.

## Submitting a Pull Request
After pushing your branch to your remote origin, navigate back to your fork of the repository on GitHub. You should be presented with an alert stating { ... }. Click that button and you will be routed to a new page on the upstream repository with form to enter a title and a description for your pull request. Also note below the form the diff to review your changes before submitting your PR, which I recommend you do to ensure no errata found its way into your commit.

Write a descriptive title and a brief, but articulate explanation of the pull request.

Click `Submit` and if there are no errors, your pull request will be added to the queue. You can always return to your PR to edit its title and description. And, if after submitting, you need to make an edit to the PR, just add, commit and push the changes to your fork origin and they will automatically be updated in the upstream.

https://github.com/gatsbyjs/gatsby-starter-blog/pull/146


## (Re)Sources

* [GitHub Standard Fork & Pull Request Workflow](https://gist.github.com/Chaser324/ce0505fbed06b947d962)
