<template>
  <div>
    <div class="title">
      <router-link to="/"><h3>Code 4 Community</h3></router-link>
    </div>

    <div class="nav">
      <router-link to="/"><h1>Home</h1></router-link>
      <router-link class="hvr-underline-from-center" to="/news"
        ><h1>News</h1></router-link
      >
      <router-link class="hvr-underline-from-center" to="/events">
        <h1>Events</h1>
      </router-link>
      <router-link class="hvr-underline-from-center" to="/board">
        <h1>Board</h1>
      </router-link>
      <router-link class="hvr-underline-from-center" to="/apply">
        <h1>Apply</h1>
      </router-link>
      <router-link class="hvr-underline-from-center" to="/auth">
        <h1>Sign In</h1>
      </router-link>
      <router-link to="/donations"><h1>Donations</h1></router-link>
    </div>

    <div id="navbar" class="phoneScreen">
      <a href="javascript:void(0)" class="xButton" v-on:click="close()"
        >&times;</a
      >
      <div class="phoneNav">
        <router-link to="/">
          <span v-on:click="close()"><h2>Home</h2></span></router-link
        >
        <router-link to="/news">
          <span v-on:click="close()"><h2>News</h2></span></router-link
        >
        <router-link to="/events">
          <span v-on:click="close()"><h2>Events</h2></span></router-link
        >
        <router-link to="/board">
          <span v-on:click="close()"><h2>Board</h2></span></router-link
        >
        <router-link to="/apply">
          <span v-on:click="close()"><h2>Apply</h2></span></router-link
        >
        <router-link to="/auth">
          <span v-on:click="close()"><h2>Sign In</h2></span></router-link
        >
        <router-link to="/donations">
          <span v-on:click="close()"><h2>Donations</h2></span></router-link
        >
      </div>
    </div>

    <div class="menu">
      <span v-on:click="open()">&#9776;</span>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    open() {
      openNavbar();
    },
    close() {
      closeNavbar();
    }
  }
};

function openNavbar() {
  document.getElementById("navbar").style.width = "100%";
}

function closeNavbar() {
  document.getElementById("navbar").style.width = "0%";
  //document.getElementById("navbar").style.height = "0%";
}
</script>

<style scoped>
@font-face {
  font-family: "Source Sans Pro", sans-serif;
  src: url("/fonts/Source_Sans_Pro/SourceSansPro-Regular.ttf");
}

h1 {
  font-family: "Source Sans Pro", sans-serif;
  font-size: 23px;
  font-weight: bold;
  margin: 0;
  padding: 0px;
}

h2 {
  font-family: "Source Sans Pro", sans-serif;
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  padding: 0px;
  color: gray;
}

h3 {
  font-family: "Source Sans Pro", sans-serif;
  font-size: 28px;
  font-weight: bold;
  margin: 0;
  padding: 0px;
}

.title {
  text-align: left;
  text-decoration: none;

  display: flex;
  background-color: transparent;
  padding: 0em 1.5em;
  border-radius: 0.5em;
}

.title a {
  text-decoration: none;
  margin-right: 30px;
  color: black;
}

.title a:hover {
  color: gray;
  cursor: pointer;
}
.nav {
  justify-content: flex-end;
  width: 100%;
  display: flex;
  background-color: transparent;
  padding: 1em 1em;
}

.nav a {
  text-decoration: none;
  margin-right: 30px;
  color: black;
}

.nav a:hover {
  color: gray;
  cursor: pointer;
}

.phoneNav {
  top: 0%;
  width: 100%;
  text-align: left;
  left: 4vh;
  margin-top: 30px;
}

.phoneScreen {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  background-color: #3b342b;
  transition: 0.5s;
}

.phoneScreen a {
  padding: 8px;
  text-decoration: none;
  display: block;
  transition: 0.3s;
  text-align: center;
  margin-bottom: 5px;
}

.phoneScreen .xButton {
  color: gray;
  position: absolute;
  right: 15px;
  font-size: 25px;
}

.menu {
  display: block;
  text-align: right;
  font-size: 30px;
  cursor: pointer;
  margin-right: 15px;
  padding: 25px 25px 25px 25px;
}

@media only screen and (max-width: 768px) {
  .nav {
    display: none;
  }

  .title {
    display: none;
  }
}
@media only screen and (min-width: 769px) {
  .phoneScreen {
    display: none;
  }
  .menu {
    display: none;
  }
}
</style>
