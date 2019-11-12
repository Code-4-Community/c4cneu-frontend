<template>
  <div id="nav">
    <router-link class="hvr-underline-from-center" to="/">Home</router-link>
    <router-link class="hvr-underline-from-center" to="/news">News</router-link>
    <router-link class="hvr-underline-from-center" to="/events"
      >Events</router-link
    >
    <router-link class="hvr-underline-from-center" to="/board"
      >Board</router-link
    >
    <router-link class="hvr-underline-from-center" to="/apply"
      >Apply</router-link
    >
    <router-link class="hvr-underline-from-center" to="/apply"
      >Apply</router-link
    >
    <router-link class="hvr-underline-from-center" to="/auth"
      >Sign In</router-link
    >
  </div>
</template>
<style scoped>
#nav {
  padding: 30px;
  display: flex;
  justify-content: space-around;
}

.hvr-underline-from-center {
  font-size: 2em;
  color: aqua;
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
