---
title: useEffect hook in React
description: Returns a stateful value, and a function to update it
date: 2020-12-02
image: /img/use-effect-hook-in-react.png
tags: hooks
layout: layouts/post.njk
---

```jsx
import React, {useState, useEffect} from 'react'
function Example() {
  const [count, setCount] = useState(0)

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`
  })
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}
```
