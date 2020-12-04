---
title: Simple Form in React
description: A simple form in React using useState hooks
date: 2020-12-04
tags: component
layout: layouts/post.njk
---

```jsx
function SimpleForm() {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
    //...send data to your server
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
      <label htmlFor="firstName">First Name</label>
      <input
        type="text"
        id="firstName"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      </div>
      <div>
      <label htmlFor="lastName">Last Name</label>
      <input
        type="text"
        id="lastName"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      </div>
    </form>
  );
}
```
