---
title: How to Deploy a GatsbyJS Blog on GitHub Pages as a User Site
date: "2018-12-24"
description: Deploying a GatsbyJS blog on GitHub Pages for your user site requires additional configuration. Here's how to deploy.
---
GatsbyJS is a great option for a static site generator, even if you're unfamiliar with React. It's very easy to use, super snappy, and has a robust ecosystem. Plus: there's the added of bonus of working with React! Win win win! To deploy a GatsbyJS blog as a User site on GitHub Pages requires some minor additional configurations. According to the docs, [your personal User site on GitHub Pages repository must be deployed from `master` branch](https://help.github.com/articles/user-organization-and-project-pages/#user-and-organization-pages-sites). This creates an issue for us (no pun intended). When we run `build` our `master` branch will be cluttered with files (not to mention entirely transformed). The solution is to work locally from a `develop` branch and use `gh-pages` to deploy to `master` on remote.

## Install GatsbyJS and Create a New Blog
If you're entirely new to this, run the following commands from the command line:

```sh
npm install -g gatsby-cli
gatsby new <your-gh-pages-repo.github.io> https://github.com/gatsbyjs/gatsby-starter-blog
cd <your-gh-pages-repo.github.io>
gatsby develop
```

Your terminal output should read:

```sh
You can now view gatsby-starter-blog in the browser.

  http://localhost:8000/
```

## Initialize Git
If you haven't already, create your repository on GitHub and initialize it locally. Add your remote origin; then add, commit and run:  

```sh
git branch -m develop
```

This will 'move' your `master` branch to a new branch named `develop`. I name mine `develop` to mirror the GatsbyJS command for local development, but you can name it whatever you like.

If you run `git branch`, you will notice you don't have a `master` branch anymore. This is fine and good. If you navigate back to GitHub, you will find your `master` branch there. You won't push to `master`. Instead, you will run:

```sh
git push -u origin develop
```

## Configure gh-pages to Deploy Your GatsbyJS Blog to GitHub Pages as a User Site
Install [`gh-pages`](https://www.npmjs.com/package/gh-pages):

```sh
npm install gh-pages --save-dev
```

To your `package.json`, add the following script:

```sh
{
    "scripts": {
        ...
        "deploy": "gatsby build && gh-pages -d public -b master",
    }
}
```

Note the `-b master` flag. When we run `gh-pages`, we will do so from our `develop` branch, but we want it to deploy to our `master`.  

To deploy, run:

```sh
npm run deploy
```

## Customizing Your GatsbyJS Blog
[Kyle Mathews](https://twitter.com/kylemathews) is a swell guy, but it's not his blog anymore. You will want to customize it...

* In `assets`, add your own profile picture. You can replace the current `.jpg` with your own and use the same name, or, if you choose a different file name (or format), you will need to edit the GraphQL query in `src/components/bio.js`.

* While you're in `bio.js`, you'll want to add your own bio and social links.

* There are a few things to update in `gatsby-config.js`:
  * `siteMetadata`: Should be self-explanatory.
  * `gatsby-plugin-google-analytics`: If you're using Google Analytics, add your tracking ID here.
  * `gatsby-plugin-manifest`: Update the `icon` property, unless you're okay using the Gatsby icon.

* Lastly, don't forget the `favicon.ico` in `static`!


## Draft Branches
When I'm working on a draft for a blog post, I create a new branch and after I'm ready to publish, I merge it with develop, then add/commit/push and `npm run deploy`.

## Using a Custom Domain Name with GitHub Pages
If you own and want to use a custom domain name with your personal GitHub Pages, the set up is fairly easy, but different depending on your DNS provider. I refer you to the GitHub Help article on [Using a custom domain with GitHub Pages](https://help.github.com/articles/using-a-custom-domain-with-github-pages/) for your specific situation.

If you need a `CNAME` file, like me, add it to your `static` directory. The `CNAME` file only needs to contain the name of your domain, so, in my case there is one line that reads:

```
jarednielsen.com
```

## (Re)Sources

* [GitHub Pages](https://pages.github.com/)

* [gatsbyj-starter-blog](https://github.com/gatsbyjs/gatsby-starter-blog)

* [How Gatsby Works with GitHub Pages](https://www.gatsbyjs.org/docs/how-gatsby-works-with-github-pages/)

* [How to Use Gatsby to Create Your Blog and Work on It From Your Phone](https://medium.freecodecamp.org/how-to-write-a-blog-using-gatsby-from-your-phone-e92a99851a04)
