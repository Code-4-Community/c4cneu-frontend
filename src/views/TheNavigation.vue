<template>
  <div>
    <div class="header">
      <router-link to="/"><h1>Home</h1></router-link>
      <router-link to="/checkin"><h1>Check-In</h1></router-link>
      <router-link to="/auth"><h1>Sign-In</h1></router-link>
    </div>

    <div id="NavBar" class="overlay">
      <a href="javascript:void(0)" class="closebtn" v-on:click="close()"
        >&times;</a
      >
      <div class="overlay-content">
        <router-link to="/"
          ><span v-on:click="close()"><h2>Home</h2></span></router-link
        >
        <router-link to="/checkin"
          ><span v-on:click="close()"><h2>Check-In</h2></span></router-link
        >
        <router-link to="/auth"
          ><span v-on:click="close()"><h2>Sign-In</h2></span></router-link
        >
      </div>
    </div>
    <div class="title">
      <router-link to="/"><h3>Code 4 Community</h3></router-link>
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
      openNav();
    },
    close() {
      closeNav();
    }
  }
};

function openNav() {
  document.getElementById("NavBar").style.width = "100%";
}

function closeNav() {
  document.getElementById("NavBar").style.width = "0%";
}
</script>

<style scoped>
@font-face {
  font-family: "Source Sans Pro", sans-serif;
  src: url("/fonts/Source_Sans_Pro/SourceSansPro-Regular.ttf");
}

h1 {
  font-family: "Source Sans Pro", sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: black;
  padding: 0px;
  margin: 0;
}
h2 {
  font-family: "Source Sans Pro", sans-serif;
  font-size: 22px;
  font-weight: 400;
  color: lightgrey;
  padding: 0px;
  margin: 0;
}
h3 {
  font-family: "Source Sans Pro", sans-serif;
  font-size: 22px;
  font-weight: 400;
  color: black;
  padding: 0px;
  margin: 0;
}

.header {
  justify-content: right;
  margin-left: 50vw;
  display: flex;
  width: 50%;
  background-color: inherit;
  position: absolute;
  top: 10px;
  z-index: 100;
  background-color: transparent;
}

.header a {
  text-decoration: none;
  margin-right: 30px;
}
.header a:hover,
.header a:focus {
  outline: none;
}

.overlay {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  background-color: inherit;
  background-color: #3b342b;
  overflow-x: hidden;
  transition: 0.5s;
}

.overlay-content {
  position: relative;
  top: 0%;
  width: 65%;
  text-align: left;
  left: 4vh;
  margin-top: 30px;
}

.overlay a {
  padding: 8px;
  text-decoration: none;
  display: block;
  transition: 0.3s;
}

.overlay a:hover,
.overlay a:focus {
  outline: none;
}

.overlay .closebtn {
  color: lightgrey;
  position: absolute;
  top: 15px;
  right: 20px;
  font-size: 25px;
}
.menu {
  width: 10%;
  font-size: 30px;
  cursor: pointer;
  position: absolute;
  margin-top: -4.5vh;
  margin-left: 85vw;
}
.title {
  z-index: 101;
  text-align: left;
  margin-left: 5vw;
  color: black;
  margin-top: 5px;
  cursor: pointer;
}
.title a {
  text-decoration: none;
  display: block;
  transition: 0.3s;
}
.title a:hover,
.title a:focus {
  outline: none;
}

@media only screen and (max-width: 768px) {
  .header {
    display: none;
  }
}
@media only screen and (min-width: 769px) {
  .overlay {
    display: none;
  }
  .menu {
    display: none;
  }
}
</style>
