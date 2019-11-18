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
/* GLOBAL IMPORTS */
@import url("https://fonts.googleapis.com/css?family=Public+Sans:100,300,400,400i,700&display=swap");
@import url("https://fonts.googleapis.com/css?family=Merriweather:400,700&display=swap");
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"); /* IMPORT FOR HVR-GROW CLASS, USED ON VARIOUS PAGES */

/**
 * GLOBAL STYLING BEGINS HERE
 * Note that "color: default" is merely a placeholder to avoid errors; remove it immediately when styling an element
 */

#app {
  font-family: "Public Sans", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/*------------------------------------*\
  #TEXT
\*------------------------------------*/
p {
  font-family: "Public Sans";
  font-size: 16px;
  margin: 10px auto 10px auto;
}

p.error {
  color: red;
}

h1 {
  font-size: 80px;
  font-weight: 100;
}

h2 {
  font-size: 30px;
  font-weight: 300;
}

h3 {
  font-size: 24px;
  font-weight: 300;
}

/* TODO: STYLE LINKS */
a {
  text-decoration: none;
}

a:hover {
  text-decoration: none;
}

/* FORMS AND INPUT */
form {
  margin: 20px auto 20px auto;
}

form div.form-item {
  margin: 30px 0 30px 0;
}

input {
  padding: 8px;
  font-size: 18px;
  border: 1px solid #bec2f7;
}

input[type="text"] {
  width: 30%;
}

/*TODO: STYLE RADIO BUTTONS*/
input[type="radio"] {
  color: default;
}

textarea {
  border: 1px solid #bec2f7;
  width: 60%;
  height: 200px;
}

input[type="password"] {
  font: small-caption;
  padding: 0 8px 0 8px;
  font-size: 30px;
  width: 30%;
}

button {
  background-color: #bec2f7;
  border: none;
  padding: 10px 16px 10px 16px;
  font-size: 16px;
  text-transform: uppercase;
}

/* POST TEXT */
.post-title,
.post-date {
  font-family: "Public Sans";
}

.post-desc {
  font-family: "Merriweather", serif;
}

/*VIEWS/POST.VUE*/
.post-content {
  font-family: "Merriweather", serif;
}

/*------------------------------------*\
  #LAYOUT
\*------------------------------------*/

.center {
  margin: auto;
}

/* 3-div grid layout
 * Check out: https://www.w3schools.com/css/css_grid.asp
 */
.grid-layout {
  color: default;
}

/* TABLE */
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

/* PARALLAX, DO NOT TOUCH */
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

.parallax p {
  color: white;
}

/* FOOTER */
.footer {
  height: 20vh;
  background-color: #3b342b;
}

/* FOOTER LINKS, DO NOT TOUCH */
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

/* NAV */
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

/* POSTS */
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
</style>
