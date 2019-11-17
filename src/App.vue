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
@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap");
@import url("https://fonts.googleapis.com/css?family=Merriweather:400,700&display=swap");
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"); /* IMPORT FOR HVR-GROW CLASS, USED ON VARIOUS PAGES */

/**
 * GLOBAL STYLING BEGINS HERE
 * Note that "color: default" is merely a placeholder to avoid errors; remove it immediately when styling an element
 */

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/*------------------------------------*\
  #TEXT
\*------------------------------------*/
p {
  color: default;
}

p.error {
  color: red;
}

h1,
h2,
h3 {
  color: default;
}

h1 {
  color: default;
}

h2 {
  color: default;
}

h3 {
  color: default;
}

/* FORMS AND INPUT */
form {
  color: default;
}

form div.form-item {
  color: default;
}

input {
  color: default;
}

button {
  color: default;
}

/* POST TEXT */
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

/* SIGN IN/SIGN UP/ BASICALLY FORMS LMAO */

form {
  margin-left: auto;
  margin-right: auto;
  padding-top: 30px;
  padding-bottom: 30px;
  text-align: center;
  align-self: center;
  width: 500px;
  border: solid;
  border-width: 2px;
  border-radius: 6px;
  box-sizing: border-box;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

form > div > input[type="radio"] {
  margin-left: 5px;
  margin-right: 5px;
}

form > div > input[type="text"] {
  margin-left: 30px;
}

form > button {
  margin: 20px;
  transition: 0.7s;
}

form > button:hover {
  -webkit-transform: scale(1.3);
  -ms-transform: scale(1.3);
  transform: scale(1.3);
}

form > h1 {
  padding-bottom: 10px;
}

.buttonForm {
  margin: 20px;
  margin-top: 50px;
  padding: 8px;
  padding-right: 25px;
  padding-left: 25px;
  transition: 1s;
}

.buttonForm:hover {
  box-shadow: 1px 1px #000000, 2px 2px #000000, 3px 3px #000000;
  -webkit-transform: translateX(-3px);
  transform: translateX(-3px);
}
</style>
