<template>
  <div id="app">
    <NavBar />
    <router-view />
  </div>
</template>
<script>
import NavBar from "./components/nav/NavBar";
export default {
  components: {
    NavBar
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap");
@import url("https://fonts.googleapis.com/css?family=Merriweather:400,700&display=swap");

/*IMPORT FOR HVR-GROW CLASS, USED ON VARIOUS PAGES*/
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/*GENERALIZED PARALLAX CSS*/
.parallax {
  padding-top: 50vh;
  padding-bottom: 50vh;
  color: white;
  overflow: hidden;
  position: relative;
  width: 100%;
  background-attachment: fixed;
  background-size: cover;
  -moz-background-size: cover;
  -webkit-background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
}

/*SETS P COLOR TO WHITE, TO MAKE TEXT VISIBLE ON DARK BACKGROUND IMAGES*/
.parallax p {
  color: white;
}

/***********************/
/***********************/
/*PREVIOUSLY SCOPED CSS*/
/*THE FOLLOWING CSS USED TO BE SCOPED AND IS NOW GENERALIZED. IT IS NOT FINAL AND SHOULD BE CHANGED BY WHOEVER COMPLETES THE GLOBAL STYLING TICKETS*/

/*VIEWS/EVENTS.VUE*/
.error {
  color: red;
}

/*COMPONENTS/CHECKINEVENT.VUE*/
.event-button {
  background-color: whitesmoke;
  margin-top: 1em;
  border-radius: 2px;
  border: 2px solid rgb(112, 231, 235);
  width: 20em;
}

/*VIEWS/BOARD.VUE*/
.eboard {
  margin: auto;
  padding-top: 100px;
}

/*COMPONENTS/EBOARDPEOPLE.VUE*/
/*SHOULD BE IMPLEMENTED AS CSS GRID*/
.grid-layout {
  color: inherit; /*placeholder to remove warning, delete later*/
}

/*COMPONENTS/POSTITEM.VUE*/
.post-item {
  width: 80%;
  margin: 50px auto;
}

.card-title:hover {
  cursor: pointer;
}

.post-item-image {
  display: inline-block;
  height: 100%;
  border: 1px solid black;
}

.post-item-content {
  display: inline-block;
  height: 100%;
  border: 1px solid black;
  padding: 10px;
}

.post-title,
.post-date {
  font-family: "Source Sans Pro", sans-serif;
}

.post-desc {
  font-family: "Merriweather", serif;
}

/*VIEWS/POST.VUE*/
.post-content {
  font-family: "Merriweather", serif;
}

/*CURRENTLY IN VIEWS/LANDING.VUE, BUT WILL SOON BE COMPONENTS/FOOTER/FOOTER.VUE*/
.footer {
  height: 20vh;
  background-color: #3b342b;
}

.fa {
  padding: 12px;
  font-size: 20px;
  text-align: center;
  text-decoration: none;
  margin: 3vh 5px;
  border-radius: 50%;
  color: black;
  background-color: white;
}

/*COMPONENTS/NAV/NAVBAR.VUE*/
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

/*VIEWS/EVENTSADMIN.VUE*/
/*TABLES SHOULD BE STYLED GENERALLY*/
table {
  border-collapse: collapse;
  width: 75%;
}

td,
th {
  border: 2px solid #dddddd;
  padding: 5px;
  text-align: center;
}

.action-bar {
  padding-top: 10px;
  padding-bottom: 10px;
  border: solid;
  width: 30%;
  margin-left: 180px;
  margin-bottom: 20px;
}

.action-bar button {
  padding: 10px;
  margin-left: 10px;
  margin-right: 10px;
}

.center {
  margin: auto;
}
</style>
