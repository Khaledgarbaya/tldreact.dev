---
title: Set innerHTML in a React Component
description: dangerouslySetInnerHTML is React’s replacement for using innerHTML in the browser DOM.
date: 2020-12-12
tags: component
image: /img/set-innerhtml-in-react.png
layout: layouts/post.njk
---

```jsx
const innerHTML = {__html: '<p> Hello innerHTML </p>'}
function MyComponent() {
  return <div dangerouslySetInnerHTML={innerHTML} />;
}
```

