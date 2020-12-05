---
title: React Fragments
description:
  Render multiple react components without the need of a DOM elevent wrapper
date: 2020-11-25
tags: component
image: /img/react-fragments.png
layout: layouts/post.njk
---

```jsx
const Columns = function () {
  return (
    <>
      <td>Hello</td>
      <td>World</td>
    </>
  )
}
```
