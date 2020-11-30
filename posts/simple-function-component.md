---
title: A simple React function component
description: This is a simple react function component
date: 2020-11-15
tags:
  - component
layout: layouts/post.njk
---

```jsx
import React from 'react'
import ReactDOM from 'react-dom'

const HelloMessage = function({name}){
  render() {
    return <div>Hello {name}</div>
  }
}

ReactDOM.render(
  <HelloMessage name="Taylor" />,
  document.getElementById('root'),
)
```
