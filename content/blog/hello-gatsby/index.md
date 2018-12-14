---
title: How to Deploy a GatsbyJS Blog on Personal GitHub Pages
date: "2018-12-24"
description:
---
Your personal GitHub Pages repository must be deployed from `master` branch. This creates an issue for us as at `build` our `master` branch will be cluttered with `build` files. The solution is to work locally from a `develop` branch and deploy to `master`.  

## Quick Start: Install Gatsby.js and Create a New Blog

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

## Configure Git

If you haven't already, create your repository on GitHub and initialize it locally. Add your remote origin, add, commit and then run:  

```sh
git branch -m develop
```
This will 'move' your `master` branch to a new branch named `develop`. I name mine `develop` to mirror the Gatsby command for local development, but you can name it whatever you like.

If you run `git branch`, you will notice you don't have a `master` branch anymore. This is fine and good. If you navigate back to GitHub, you will find your `master` branch there. You won't push to `master`. Instead, you will run:

```sh
git push -u origin develop
```

## Configure gh-pages GitHub Pages

Install `gh-pages`:

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

Notice the `-b master` flag. When we run `gh-pages`, we will do so from our `develop` branch, but we want it to deploy to our `master`.  

To deploy, run:
```sh
npm run deploy
```

## Customizing Your GatsbyJS Blog

Kyle Mathews is a great guy, but it's not his blog anymore. You will want to customize it...

* In `assets`, add your own profile picture. You can replace the current `.jpg` with your own and use the same name, or, if you choose a different file name (or format), you will need to edit the GraphQL query in `src/components/bio.js`.

* While you're in `bio.js`, you'll want to add your own bio and social links.

* There are a few things to update in `gatsby-config.js`:
  * `siteMetadata`:
  * `gatsby-plugin-google-analytics`: If you're using Google Analytics
  * `gatsby-plugin-manifest`: Update the `icon` property, unless you're fine using the Gatsby icon

* Lastly, don't forget the `favicon.ico` in `static`!


## Draft Branches

When I'm working on a draft blog post, I create a new branch and after I'm ready to publish, I merge it with develop, then add/commit/push and `npm run deploy`. 

## Using a Custom Domain Name with GitHub Pages

If you own and want to use a custom domain name with your personal GitHub Pages, the set up is fairly easy, but different depending on your DNS provider. I refer you to the GitHub Help article on [Using a custom domain with GitHub Pages](https://help.github.com/articles/using-a-custom-domain-with-github-pages/).

In my case, I need to create a `CNAME` file. Add it to your `static` directory. The `CNAME` file only needs to contain the name of your domain, so, in my case there is one line that reads:

```
jarednielsen.com
```

## (Re)Sources

* [gatsbyj-starter-blog](https://github.com/gatsbyjs/gatsby-starter-blog)

* [How Gatsby Works with GitHub Pages](https://www.gatsbyjs.org/docs/how-gatsby-works-with-github-pages/)

*

* [How to Use Gatsby to Create Your Blog and Work on It From Your Phone](https://medium.freecodecamp.org/how-to-write-a-blog-using-gatsby-from-your-phone-e92a99851a04)

*
