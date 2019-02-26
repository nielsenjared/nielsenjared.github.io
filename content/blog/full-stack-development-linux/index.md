---
title: How to Configure Full-Stack Development Environment for Linux
date: "2019-01-21"
description: A quick reference for setting up a full-stack development environment on Linux, including instructions for Git, Node.js, MySQL, MongoDB and more.
---

![How to Configure Full Stack Development Environment for Linux: Penguins](./jared-nielsen-full-stack-development-linux.png)

My preferred development environment is Linux and my preferred approach to upgrading my distro is a clean install. This means with each upgrade I need to reinstall all of my tools. This article is primarily a reference for myself as this is something I’ve done before and will definitely do again. I hope you also find it useful. If you have any feedback, let me know [@jarednielsen](http://twitter.com/jarednielsen).

## Git
Perhaps most important is version-control. Being Linux, it’s a one-liner.
```
sudo apt install git-all
```

Then generate your keys and add them to [GitHub](https://github.com/settings/keys):
```
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```

Follow the prompts, then run:
```
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_rsa
```

## IDE

### Atom
All the cool kids are using VSCode, but Atom is still my favorite. You can’t teach an old dev new tricks.
* [https://atom.io/](https://atom.io/)
* Download the .deb

Alternatively, you can [install it from the command line following the instructions here](https://flight-manual.atom.io/getting-started/sections/installing-atom/)

### VSCode
https://code.visualstudio.com/Download

## Node.js
You’ll want to [download the latest version of Node](https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions). The command you then run will be similar to the following:
```
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
```

The terminal will prompt you to run the following command:
```
sudo apt-get install -y nodejs
```
Optionally, install
```
sudo apt-get install -y build-essential
```

## MySQL
Installing MySQL on Linux is a breeze, but I always get the same permission error, so I added the solution below.
```    
sudo apt-get install mysql-server
service mysql start
```

If you get `ERROR 1698 (28000): Access denied for user 'root'@'localhost'`:
```
sudo mysql -u root

mysql> USE mysql;
mysql> UPDATE user SET plugin='mysql_native_password' WHERE User='root';
mysql> FLUSH PRIVILEGES;
mysql> exit;

service mysql restart
```
OR create a new user:

```
sudo mysql -u root

mysql> USE mysql;
mysql> CREATE USER 'YOUR_SYSTEM_USER'@'localhost' IDENTIFIED BY '';
mysql> GRANT ALL PRIVILEGES ON *.* TO 'YOUR_SYSTEM_USER'@'localhost';
mysql> UPDATE user SET plugin='auth_socket' WHERE User='YOUR_SYSTEM_USER';
mysql> FLUSH PRIVILEGES;
mysql> exit;

service mysql restart
```

### MySQL GUI
I generally prefer the command prompt when working with databases, but sometimes a GUI is helpful.  

#### Workbench
It’s buggy in different ways on every platform, but still widely used. [Download Workbench here.](https://www.mysql.com/products/workbench/)

You will be prompted for your Linux distro. To see it, run the following:
```
lsb_release -a
```
That might not be helpful if you’re using a derivative distro like Mint, so try:
```
cat /etc/*release
```

#### DBeaver
Alternatively, try [DBeaver](https://dbeaver.io/)

## MongoDB
Installing MongoDB via .deb packages is also easy. The following commands are current at the time of this writing (2019/01), but you may want to [consult the documentation for changes or instructions for your specific distribution](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/#install-mongodb-community-edition-using-deb-packages):
```
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 9DA31620334BD75D9DCB49F368818C72E52529D4

echo "deb [ arch=amd64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.0.list

sudo apt-get update

sudo apt-get install -y mongodb-org
```
Then run:
```
sudo service mongod start
```

### Mongo GUI
#### Robot3T
[Download Robo3T here.](https://robomongo.org/download)

## Bonus
Other tools I find useful and necessary, but aren’t _necessarily_ web development:

### Slack
[https://slack.com/downloads/linux](https://slack.com/downloads/linux)

### Chrome
I prefer Firefox which ships with Mint, but gotta have this, too
[https://www.google.com/chrome/](https://www.google.com/chrome/)

### Dropbox
[https://www.dropbox.com/install-linux](https://www.dropbox.com/install-linux)


I often find myself needing to do minor photo or graphics work. Inkscape and GIMP are great (and free) Adobe alternatives.

### Inkscape
 `sudo apt-get install inkscape`

### GIMP    
Ships with Mint, but if your distro doesn’t include it:

```
sudo add-apt-repository ppa:otto-kesselgulasch/gimp
sudo apt update
sudo apt install gimp
```

## (Re)Sources

* [Generating a new SSH key and adding it to the ssh-agent](https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/)

* [ERROR 1698 (28000): Access denied for user 'root'@'localhost'
](https://stackoverflow.com/questions/39281594/error-1698-28000-access-denied-for-user-rootlocalhost)
