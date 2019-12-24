<template>
  <div id="app">
    <NavHeader />
    <router-view />
    <NavFooter />
  </div>
</template>
<script>
import NavHeader from "./components/nav/NavHeader";
import NavFooter from "./components/nav/NavFooter";
export default {
  components: {
    NavHeader,
    NavFooter
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

.big {
  font-size: 24px;
  font-weight: 300;
}

.align-left {
  text-align: left;
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

@media only screen and (max-width: 700px) {
  h1 {
    font-size: 32px;
  }

  h2 {
    font-size: 20px;
  }

  h3 {
    font-size: 18px;
  }
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
  margin: 20px 0 20px 0;
  text-align: left;
  padding: 2% 4% 2% 4%;
  width: 60%;
  max-width: 800px;
  min-width: 200px;
}

form.center {
  margin-left: auto;
  margin-right: auto;
  text-align: center;
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

input[type="file"] {
  width: 80%;
}

/*TODO: STYLE RADIO BUTTONS*/
input[type="radio"] {
  color: default;
}

input.code {
  width: 100px;
}

select {
  padding: 10px;
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

@media only screen and (max-width: 700px) {
  form {
    width: 100%;
  }

  input[type="text"] {
    width: 80%;
  }
}

/* POST TEXT */
.post-title,
.post-date {
  font-family: "Public Sans";
}

.post-desc {
  font-family: "Merriweather", serif;
}

/*------------------------------------*\
  #LAYOUT
\*------------------------------------*/

.content {
  margin: 5% 7% 5% 7%;
}

.center {
  margin: auto;
}

.hidden {
  display: none;
}

/* 3-div grid layout
 * Check out: https://www.w3schools.com/css/css_grid.asp
 */
.grid-layout {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
}

.popup {
  display: none;
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}

.popup-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%; /* Could be more or less, depending on screen size */
  max-width: 600px;
}

/* The Close Button */
.popup-close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

@media only screen and (max-width: 700px) {
  .grid-layout {
    grid-template-columns: repeat(1, 1fr);
  }
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

.landing {
  padding-left: 10%;
  padding-right: 10%;
}

.landing p {
  font-size: 20px;
}

@media only screen and (max-width: 700px) {
  .parallax {
    height: 80px;
    padding: 20px;
  }

  /* LANDING PAGE PARALLAX SHOULD BE FULL HEIGHT */
  .landing {
    height: auto;
    padding: 60px 10% 60px 10%;
  }

  .landing p {
    font-size: 16px;
  }
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
  margin: 1vh 5px;
  border-radius: 50%;
  color: black;
  background-color: white;
  width: 40px;
}

/* NAV */
#nav {
  padding: 30px;
}

.big-menu {
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: auto;
}

.home-nav {
  max-width: 300px;
}

.nav-item {
  font-weight: 300;
  margin: 10px 0 0 0;
  text-transform: uppercase;
  font-size: 28px;
  color: #2c3e50;
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  overflow: hidden;
  height: 50px;
}

.nav-item:hover {
  color: #2c3e50;
}

.nav-item:before {
  content: "";
  position: absolute;
  bottom: 0;
  background: #7a00cc;
  height: 1px;
  z-index: -1;
  left: 51%;
  right: 51%;
  -webkit-transition-property: left, right;
  transition-property: left, right;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}
.nav-item:hover:before,
.nav-item:focus:before,
.nav-item:active:before {
  left: 0;
  right: 0;
}

.nav-item.router-link-exact-active {
  color: #5a4f94;
}

.hamburger-icon {
  display: none;
  width: 20px;
  height: 15px;
}

.mobile-logo {
  display: none;
}

@media only screen and (max-width: 700px) {
  #nav {
    width: 100%;
  }

  .hamburger-icon {
    display: inline-block;
    position: absolute;
    right: 10%;
    top: 40px;
  }

  .big-menu {
    display: none;
  }

  .mobile-logo {
    width: 50%;
    margin: auto;
    display: inline-block;
  }

  .nav-item {
    display: block;
    margin: 15px auto 15px auto;
  }
}

.mobile-menu {
  z-index: 1;
  background-color: white;
  width: 100%;
  height: 100%;
}

/* NEWS */

.post-item {
  margin: 30px auto;
  cursor: pointer;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 5%;
}

.post-item:hover {
  background: #f8f8f8;
  transition: 0.5s;
}

.post-item img {
  width: 150px;
}

.post-date {
  color: gray;
}

@media only screen and (max-width: 700px) {
  .post-item {
    display: block;
    border-bottom: 1px solid #dddddd;
    padding-bottom: 30px;
  }

  .post-item img {
    width: 100%;
  }
}

/* POST */

.post-header {
  display: grid;
  grid-template-columns: 1fr auto;
  margin-bottom: 5%;
}

.post-title,
.post-date {
  text-align: left;
}

.post-date {
  color: #666666;
  margin-top: 20px;
}

.post-content {
  text-align: left;
  font-family: "Merriweather", serif;
  margin: 0 10% 0 0;
}

@media only screen and (max-width: 700px) {
  .post-header {
    grid-template-columns: repeat(1, 1fr);
  }

  .post-image {
    grid-row: 1;
    width: 100%;
    margin: 0 auto 30px auto;
    max-width: 400px; /* IN CASE OF LO-RES */
  }
}
</style>
