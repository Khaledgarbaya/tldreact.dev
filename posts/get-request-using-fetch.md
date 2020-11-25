---
title: Doing a (GET) fetch request
description: Doing a (GET) fetch request on component mount
date: 2020-11-15
tags: fetch
layout: layouts/post.njk
---

```jsx
class HelloMessage = function({name}){
  const [state, setState] = useState()
  useEffect(()=> {
     fetch(your_url)
    .then(res => res.json())
    .then(data => {
      setState({your_state:data})
    })
  }, [])
  render() {
    return <div>Hello</div>
  }
}
```
