<template>
    <router-link to="/"></router-link>
    <router-link to="/preview"></router-link> 
  <router-view/>
</template>

<style>
body{
  margin: 0;
  display: flex;
}
#app {

  display: flex;
  width: 100vw;
  height: 100vh;
  padding: 0;
  margin: 0;
  background-color: #1e1e1e;
}

nav {
  padding: 0;
}

/* nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
