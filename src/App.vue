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
  padding: 20px 40px 20px 40px;
  width: 60%;
  background-color: #f8f8f8;
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
  width: 60%;
}

/*TODO: STYLE RADIO BUTTONS*/
input[type="radio"] {
  color: default;
}

textarea {
  border: 1px solid #bec2f7;
  width: 80%;
  height: 200px;
}

input[type="password"] {
  padding: 8px;
  font-size: 18px;
  width: 60%;
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
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  padding: 20px;
}

.sidebar-layout {
  display: grid;
  grid-template-columns: 1fr 2fr;
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

/*SETS BACKGROUND IMAGES FOR ALL PARALLAX DIVS*/
#plax_1 {
  background-image: url("assets/p1.png");
}
#plax_2 {
  background-image: url("assets/p3.png");
}
#plax_3 {
  background-image: url("assets/p2.png");
}
#plax_4 {
  background-image: url("assets/p4.png");
}
#plax_5 {
  background-image: url("assets/p5.png");
}

.parallax p {
  color: white;
}

/* BOARD */

figure {
  position: relative;
}

figure figcaption {
  font-family: "Merriweather", serif;
  position: absolute;
  bottom: 5px;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
  text-align: center;
  color: #fff;
  padding: 10px;
}

/* EVENTS */

.event {
  width: 80%;
  margin: 10px auto;
  padding: 5px;
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
  justify-content: space-between;
}

.hvr-underline-from-center {
  font-size: 2em;
  color: aqua;
}

.home-nav {
  max-width: 24em;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #5a4f94;
}

/* NEWS */

.post-item {
  width: 80%;
  margin: 30px auto;
}

.post-item .card:hover {
  cursor: pointer;
  background: #eeeeee;
}

.post-item img {
  display: inline-block;
  height: 150px;
}

.card-title,
.card-text {
  text-align: left;
}

.card {
  display: grid;
  grid-template-columns: 1fr 3fr 2fr;
  height: 100%;
  padding: 10px;
}

/* POST */

.post-layout {
  display: grid;
  grid-template-columns: 3fr 1fr;
}
.post-header {
  margin: 5px 5%;
}

.post-title,
.post-date {
  text-align: left;
  margin-top: 10px;
}

.post-date {
  color: #666666;
}

.post-content {
  text-align: left;
  margin: 5%;
}
</style>
