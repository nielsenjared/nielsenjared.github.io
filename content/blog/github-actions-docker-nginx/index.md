---
title: How to Build and Publish a Custom Docker Image with GitHub Actions
date: "2022-12-21"
description: TODO
---

![ Illustration of Octocat in a Docker boat](./jarednielsen-TODO.png)

TODO 

In this tutorial, you will learn how to do the following: 

* ...

* ...

* ...

## Prerequisites

TODO 

* Git installed

* A GitHub account

* Docker installed

* A DockerHub account 
 

## Create a Repository on GitHub 

Create a new repository and initialize it with a README. You can name it whatever you want, but I'll be using the name `nginxer` throughout this tutorial. 

Then clone the repository and `cd` into it. 


## Create Our Files

We're going to work with two files throughout this tutorial: 

* `index.html`

* `Dockerfile`

Let's create both of them now:
```sh
touch index.html Dockerfile
```

### TODO HTML

If you're using VSCode (who isn't?), simply type `html` and select the the `html

Let's add some boilerplate to the `index.html` file:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```

Let's personalize it a bit and change the title and add and `<h1>` to the body. 
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dockerment</title>
</head>
<body>
    <h1> Whale, Hello There! 🐋 </h1>
    <iframe src="https://giphy.com/embed/qhhamrBnxSKNG" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/whale-qhhamrBnxSKNG">via GIPHY</a></p>
</body>
</html>
```

### TODO Dockerfile

In order to demonstrate Actions, we will need to build a custom Docker image. To keep things simple, we're simply going to extend [the official build of nginx](https://hub.docker.com/_/nginx). We do so by adding the following to our `Dockerfile`:
```Dockerfile
FROM nginx:latest 
```

nginx requires us to serve our `index.html` file from `/usr/share/nginx/html/`, so let's add a line to copy it over when the image is built: 
```Dockerfile
FROM nginx:latest
COPY ./index.html /usr/share/nginx/html/index.html
```


## Docker Hub

If you're not signed up yet, you'll need an account on [Docker Hub](https://hub.docker.com/).


Navigate to DockerHub and click "Create a Repository" on the  welcome page.




