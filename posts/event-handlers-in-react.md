---
title: EVENT HANDLER IN REACT
description: a button example in React for a specific onClick event handler
date: 2020-11-25
tags: event-handling
layout: layouts/post.njk
---

```jsx
import React from 'react';

function App() {
  const handleClick = () => {
    console.log('Button click ...');
  };

  return (
    <div>
      <button type="button" onClick={handleClick}>
        Event Handler
      </button>
    </div>
  );
```
