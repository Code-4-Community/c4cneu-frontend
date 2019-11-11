<template>
  <div id="app">
    <div id="nav">
      <router-link class="hvr-underline-from-center" to="/">Home</router-link>
      <router-link class="hvr-underline-from-center" to="/media"
        >Media</router-link
      >
      <router-link class="hvr-underline-from-center" to="/auth"
        >Sign In</router-link
      >
      <router-link class="hvr-underline-from-center" to="/checkin"
        >Check In</router-link
      >
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  display: flex;
  justify-content: space-around;
}

.hvr-underline-from-center {
  font-size: 2em;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
