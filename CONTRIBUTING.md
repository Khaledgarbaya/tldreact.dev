# How to Contribute

👋 We're so excited you're interested in helping with Blitz! We happy to help you get started, even if you don't have any previous open-source experience :)

## First Things First

1. New to open source? take a look at [How to Contribute to an Open Source Project on GitHub](https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github)
2. Familiarize yourself with the [tldreact Code of Conduct](https://github.com/Khaledgarbaya/tldreact.dev/blob/main/code-of-conduct.md)

## What to Work On?

Issues with the label [`status/ready-to-work-on`](https://github.com/Khaledgarbaya/tldreact/labels/status%2Fready-to-work-on) are the best place to start.

If you find one that looks interesting and no one else is already working on it, comment in the issue that you are going to work on it. But only claim an issue if you can start work on it within a couple days.

Please ask as many questions as you need, either directly in the issue or in Slack. We're happy to help!

### Things that are ALWAYS welcome

- Adding tests
- Improved documentation
- Performance or security improvements

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
