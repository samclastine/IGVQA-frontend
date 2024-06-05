<template>
  <div id="appContainer">
    <nav>
      <router-link to="/"></router-link>
      <router-link to="/preview"></router-link>
    </nav>
    <router-view />
  </div>
</template>

<style >




html, body {
  margin: 0;
  padding: 0;
}
body {
  margin: 0 !important;
  display: flex;
  flex-direction: column;
}
#appcontainer{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

}

#app {
  display: flex;
  margin: 0 !important;
  padding: 0;
  flex-direction: column;

}

nav {
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* nav a {
  margin: 0 15px;
  text-decoration: none;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
} */

router-view {
  margin: 0 !important;
  flex: 1 ;
  display: flex;
  flex-direction: column;
}
</style>
