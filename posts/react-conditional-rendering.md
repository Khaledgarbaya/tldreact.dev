---
title: Conditional Rendering in React
description:
  Use JavaScript operators like if or the conditional operator to create
  elements representing the current state
date: 2020-11-25
tags: component
layout: layouts/post.njk
---

```jsx
function LoggedInView(props) {
  return <h1>Welcome back!</h1>
}

function NonLoggedInView(props) {
  return <h1>Please sign up.</h1>
}

function Dashboard(props) {
  const isLoggedIn = props.isLoggedIn
  if (isLoggedIn) {
    return <LoggedInView />
  }
  return <NonLoggedInView />
}

ReactDOM.render(
  // Try changing to isLoggedIn={true}:
  <Dashboard isLoggedIn={false} />,
  document.getElementById('root'),
)
```
