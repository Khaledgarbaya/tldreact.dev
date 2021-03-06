---
title: A Simple React Component
description:
  React components implement a render() method that takes input data and returns
  what to display. This example uses an XML-like syntax called JSX. Input data
  that is passed into the component can be accessed by render() via this.props.
date: 2020-09-11
image: /img/simple-class-component.png
tags:
  - component
layout: layouts/post.njk
---

```jsx
import React from 'react'
import ReactDOM from 'react-dom'

class HelloMessage extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>
  }
}

ReactDOM.render(<HelloMessage name="Taylor" />, document.getElementById('root'))
```
