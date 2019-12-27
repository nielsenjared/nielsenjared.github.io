---
title: Create a Cron Job to Change Default Browser for Work-Life Balance
date: "2019-12-23"
description: Maintaining a healthy work-life balance is important when you're a developer. Especially if you work remote. When I set up a new development environment, I create a cron job to change the default browser between work and 'play' hours.
keywords: ["cron job", "default browser"]
---
![]()

Maintaining a healthy work-life balance is important when you're a developer. Especially if you work remote. When I set up a new development environment, I create a cron job to change the default browser between work hours and 'play' hours. I use Chrome professionally as much of my workflow is built around the Google ecosphere. But I use Firefox as my personal browser (and so should you) for several reasons, the most important being [Mozilla's emphasis on privacy](https://www.mozilla.org/en-US/privacy/principles/). 

## How to Create a Cron Job to Change the Default Browser

Here's the snippet I use to create a cron job to change the default browser between 8:30AM and 5PM:

```sh
30 8 * * 1-5 xdg-settings set default-web-browser google-chrome.desktop
0 17 * * 1-5 xdg-settings set default-web-browser firefox.desktop
```

Cron jobs follow the '5 Star' format: 

```sh
* * * * * 
```

From left-to-right, each asterisk corresponds to the following: 

1. Minute (by the hour)
2. Hour (by 24-hour clock)
3. Day (of the month)
4. Month
5. Day(s) (of the week)

In my snippet above, the cron job I created will run at 8:30AM (30 8), but only on weekdays (1-5). This will set my default browser as Chrome.

```sh
30 8 * * 1-5 xdg-settings set default-web-browser google-chrome.desktop
```

At 5PM (0 17), the cron job will run and set my default browser back to Firefox.

```sh
0 17 * * 1-5 xdg-settings set default-web-browser firefox.desktop
```

I leave the day of the month and the month at their default values (*).

## Create a Cron Job to Change Default Browser

Creating a cron job on a Unix/Linux environment is easy. 

To _list_ the cron job for the current user:

```sh
crontab- l
```

To _edit_ the cron job for the current user:

```sh
crontab -e
```

What are your work-life balance hacks? Let me know on Twitter [@jarednielsen](https://jarednielsen.com)



