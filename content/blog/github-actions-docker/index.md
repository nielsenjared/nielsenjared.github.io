---
title: How to Build and Publish a Docker Image Using GitHub Actions
date: "2022-12-21"
description: TODO
keywords: ['GitHub Actions', 'Actions', 'Docker', 'Docker image']
---

![ Illustration of Octocat in a Docker boat](./jarednielsen-TODO.png)

TODO 

In this tutorial, you will learn how to do the following: 

* Create a custom Docker image

* Automate building a Docker image with GitHub Actions

* Automate publishing a Docker image with GitHub Actions


## Prerequisites

To follow along, you will need the following: 

* Git is installed on your machine and you know the basics

* If you're not signed up yet, you'll need a GitHub account

* Docker is installed on your machine and you know the basics

* If you're not signed up yet, you'll need an account on [Docker Hub](https://hub.docker.com/).

 
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

Let's add some boilerplate to the `index.html` file:
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

### Dockerfile

In order to demonstrate Actions, we will need to build a custom Docker image. To keep things simple, we're simply going to extend [the official build of nginx](https://hub.docker.com/_/nginx). We do so by adding the following to our `Dockerfile`:
```Dockerfile
FROM nginx:latest 
```

nginx requires us to serve our `index.html` file from `/usr/share/nginx/html/`, so let's add a line to copy it over when the image is built: 
```Dockerfile
FROM nginx:latest
COPY ./index.html /usr/share/nginx/html/index.html
```

Before we build and run this image, let's set things up on Docker Hub. 

Before we do _that_, add, commit, and push these changes to your repository. 


### Docker Hub

Navigate to [Docker Hub](https://hub.docker.com/) and click "Create a Repository" on the  welcome page. 

The naming convention is `your-username/image`. I'll be using my username thoroughout this tutorial, so my image will be named `nielsenjared/nginxer`. 

#### Access Tokens

If you haven't yet, you will need to set up access tokens with Docker Hub. Do so under settings in the UI, then run: 
```
docker login -u nielsenjared
```

And at the `Password` prompt paste in your access token. 

Keep this tab open as we're going to need to create an access token for GitHub in a moment. 


## Build the Custom Image

From the command line, run the following: 
```sh
docker build -t nielsenjared/nginxer .
```

Don't forget the `.`! 

Then run the container:
```sh
docker run nielsenjared/nginxer
```

Open your favorite browser and... voila! 

TODO stop the container

Then push the image to DockerHub:
```sh
docker push nielsenjared/nginxer
```

If you navigate back to DockerHub, you will see that TODO.


## GitHub Actions

HTML! Dockerfile! Actions! 

TODO GitHub actions

If you haven't yet, add, commit, and push your local changes to GitHub. 


### Build Image on GitHub

The first action we will set up is building our image on GitHub. Every time we make a change to our Dockerfile, we need to rebuild the image. We can automate that with Actions. 

From the repository landing page, select the Actions tab. The click 'New workflow'. 

This will route you to a page with the heading 'Get started with GitHub Actions'. GitHub recognizes a Dockerfile in the repository so you should see under 'Suggested for this repository' the 'Docker image' workflow. Select 'Configure'. 

You will be routed to an IDE pre-populated with a `docker-image.yml` file that looks like this: 
```yml
name: Docker Image CI

on:
  push:
    branches: [ "main" ]
  pull_request:
    branches: [ "main" ]

jobs:

  build:

    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v3
    - name: Build the Docker image
      run: docker build . --file Dockerfile --tag my-image-name:$(date +%s)
```

We don't need to do modify this, but let's run through what's happening here. 

The `on` field is a dictionary of events. A `push` or a `pull_request` made to and on the `main` branch will trigger the job. 

The `jobs` field is also a dictionary containing, you guessed it, jobs. The job specified here is `build`. We need a server to build our image, so we specify `ubuntu-latest`. In the `steps` dictionary, we create a list, denoted by the `-`. The first item is, wait for it... another action! We can compose actions from other actions. In this case, we are using [Checkout V3](https://github.com/actions/checkout). We next specify a `name` and the command that will be `run` when the workflow is triggered. That command should look familiar. That last piece, `--tag my-image-name:$(date +%s)`, adds a tag to each build using a datestamp. 

Click the `Start commit` button and commit the action to your repository. It will now be located under `.github/workflows/docker-image.yml`. 

Let's check it out! 

Back in your IDE, add the following line to your Dockerfile: 
```Dockerfile
FROM nginx:latest
COPY ./index.html /usr/share/nginx/html/index.html

# This comment is false. 
```

Then add, commmit, and push the changes to GitHub. 

Navigate back to GitHub, and you'll see a notification that your image was rebuilt. 


### Publish Changes to Docker Hub

For the next Action, we're going to need to give GitHub access to your DockerHub account. You'll need to navigate back and forth between two browser tabs or windows. 

On GitHub, open the repository Settings, and go to Secrets > Actions.

Create a new secret named `DOCKER_HUB_USERNAME` and enter your Docker ID as the value.

Now switch over to DockerHub and create a new Access Token. Copy the token and switch back over to GitHub.

Add the PAT as a second secret in your GitHub repository, with the name 

Create a new secret named `DOCKER_HUB_ACCESS_TOKEN` and paste in the Access Token from DockerHub as the value. 

Now navigate to the Actions tab in your GitHub repository. Under "Choose a Workflow", click "...set up a workflow yourself."

This takes you to a page for creating a new GitHub actions workflow file in your repository, under `.github/workflows/main.yml` by default.

In the editor window, copy and paste the following YAML configuration.
```yml
name: Docker Hub CI

on:
  push:
    branches:
      - "main"

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      -
        name: Checkout
        uses: actions/checkout@v3
      -
        name: Login to Docker Hub
        uses: docker/login-action@v2
        with:
          username: ${{ secrets.DOCKER_HUB_USERNAME }}
          password: ${{ secrets.DOCKER_HUB_ACCESS_TOKEN }}
      -
        name: Set up Docker Buildx
        uses: docker/setup-buildx-action@v2
      -
        name: Build and push
        uses: docker/build-push-action@v3
        with:
          context: .
          file: ./Dockerfile
          push: true
          tags: ${{ secrets.DOCKER_HUB_USERNAME }}/TODO:latest
```

Most of this will be familiar from the first Action we set up, but let's run through the new steps under our `build`. After we checkout the branch, we log in to Docker Hub using the secrets that we added earlier. We then use two more Actions, `docker/setup-buildx-action@v2` and `docker/build-push-action@v3` to build and push our image to DockerHub. Rather than a datestamp, we tag the latest iteration of our image with `latest`. 

Click `Start a commit` and commit the file to your repository.

Then, in your IDE, add another comment to your Dockerfile: 
```Dockerfile
FROM nginx:latest
COPY ./index.html /usr/share/nginx/html/index.html

# This comment is false. 
# The previous comment is true. 
```

If you navigate to your GitHub repository, you will see that _both_ Actions were triggered. 

If you navigate to your DockerHub repository, you will see that the the latest version was just published. 

## Conclusion




