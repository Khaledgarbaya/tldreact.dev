# How to Contribute

👋 We're so excited you're interested in helping with Blitz! We happy to help you get started, even if you don't have any previous open-source experience :)

## First Things First

1. New to open source? take a look at [How to Contribute to an Open Source Project on GitHub](https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github)
2. Familiarize yourself with the [tldreact Code of Conduct](https://github.com/Khaledgarbaya/tldreact.dev/blob/main/code-of-conduct.md)

## What to Work On?

Issues with the label [`status/ready-to-work-on`](https://github.com/Khaledgarbaya/tldreact/labels/status%2Fready-to-work-on) are the best place to start.

If you find one that looks interesting and no one else is already working on it, comment in the issue that you are going to work on it. But only claim an issue if you can start work on it within a couple days.

Please ask as many questions as you need directly in the issue

### Things that are ALWAYS welcome

- Adding tests
- Improved documentation
- Performance or security improvements

## How to add your snippet

**1.** Create a new md file under `posts/you-snippet-name.md`

**2.** Past the following text inside the newly created file

```md
---
title: Your Snippet Title Goes here
description: Your Snippet Description goes here
date: Your Date goes here e.g 2020-12-04
tags: Your snippet tags goes here (make sure to check the existing ones
image: /img/you-snippet-name.png
layout: layouts/post.njk
---

``` ```jsx
// YOUR CODE SNIPPET GOES HERE

``` ```

```

**3.** Generate preview Image by visiting this [link](https://carbon.now.sh/?bg=rgba%2831%2C129%2C109%2C1%29&t=night-owl&wt=none&l=auto&ds=false&dsyoff=20px&dsblur=68px&wc=false&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=143%25&si=false&es=2x&wm=false&code=%252F%252F%2520TLDreact%2520Snippet%2520Goes%2520here) and past in the same code you added in your md file

**4.** Click Download and add the image inside the `img` folder and give it the same name you specified in the `image` frontmatter tag

**5.** Add your changes to a branch and submit a PR.

## Development Setup

**1.** Fork [the tldreact repo](https://github.com/Khaledgarbaya/tldreact)

**2.** Clone your forked repo

```sh
# replace USERNAME below with your GitHub username
git clone git@github.com:USERNAME/tldreact.git
cd tldreact
```

**3.** Install dependencies

```sh
yarn
```

**4.** Start the package server. 

```sh
yarn start
```

**5.** Build the project

```sh
yarn build
```

#### Sync your fork

```sh
git remote add upstream git@github.com:Khaledgarbaya/tldreact.git
git fetch upstream
git merge upstream/main
```
