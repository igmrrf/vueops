<template>
  <nav id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/helloworld">Hello World</router-link>
    <router-link to="/users">Users</router-link>
    <router-link to="/test">Test</router-link>
    <router-link to="/brazil">Brazil</router-link>
    <router-link to="/panama">Panama</router-link>
    <router-link to="/hawaii">Hawaii</router-link>
    <router-link to="/jamaica">Jamaica</router-link>
    <router-link to="/404">Unknown</router-link>
  </nav>
</template>

<style scoped>
#nav {
  display: flex;
  align-items: center;
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 0 10px;
}

#nav a.exact-active-link-class {
  color: red;
}
</style>