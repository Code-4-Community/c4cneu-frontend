<template>
  <div>
    <section>
      <div class="parallax-one">
        <img
          src="../assets/c4c-banner-logo.png"
          style="width:80%;height:100%;"
        />
        <h3>Changing the world with software</h3>
      </div>
    </section>

    <section>
      <div class="parallax-two">
        <h1>MISSION STATEMENT</h1>
        <p>
          Code 4 Community (C4C) is a student organization at Northeastern
          University focused on developing and maintaining software solutions
          for non-profit organizations within Boston. We empower our members via
          mentoring and workshops, while enabling them to connect with, give
          back to, and support the local community they live in. C4C strives to
          deliver work engineered with excellence and led by inclusive design
          principles to ensure our solutions are intuitive, performant, and
          deliver the best user experience.
        </p>
        <a
          class="github-button"
          href="https://github.com/Code-4-Community"
          aria-label="Follow @Code-4-Community on GitHub"
          >Follow C4C on GitHub</a
        >
      </div>
    </section>

    <section>
      <div class="parallax-three">
        <h1>Get involved today!</h1>
        <p>
          Interested in making an impact with Code4Community? Anyone is welcome
          to join our Slack workspace at
          <a href="https://c4cneu.slack.com/">c4cneu.slack.com</a>
          using an @husky.neu.edu email address.
        </p>
        <p>
          There, you will find all announcements about upcoming events and can
          reach out to anyone on the executive board with questions!
        </p>
      </div>
    </section>

    <section>
      <div class="parallax-four">
        <h2>MEET THE TEAM</h2>
        <router-link to="/board">
          <button class="btn board">
            <pb>Our Executive Board</pb>
          </button>
        </router-link>
      </div>
    </section>

    <footer class="footer">
      <a href="https://www.facebook.com/c4cneu/" class="fa fa-facebook"></a>
      <a href="https://www.instagram.com/c4cneu/" class="fa fa-instagram"></a>
      <a
        href="https://www.linkedin.com/company/code-4-community/about/"
        class="fa fa-linkedin"
      ></a>
      <a href="https://c4cneu.slack.com/" class="fa fa-slack"></a>
      <a href="https://github.com/Code-4-Community" class="fa fa-github"></a>
      <a href="mailto:c4cneu@gmail.com" class="fa fa-envelope-o"></a>
    </footer>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap");
@import url("https://fonts.googleapis.com/css?family=Merriweather:400,700&display=swap");
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");
h1 {
  font-family: "Source Sans Pro", sans-serif;
  font-size: 32px;
  font-weight: 600;
  color: white;
  padding: 20px;
  margin: 0;
}
h2 {
  font-family: "Source Sans Pro", sans-serif;
  font-size: 128px;
  font-weight: 600;
  line-height: 120px;
  letter-spacing: -4px;
  color: white;
  padding: 20px;
  margin: 0;
}
h3 {
  font-family: "Source Sans Pro", sans-serif;
  font-size: 22px;
  font-weight: 400;
  color: white;
  padding: 20px;
  margin: 0;
}
p {
  font-family: "Merriweather", serif;
  font-weight: 400;
  color: white;
  font-size: 16px;
  line-height: 32px;
  margin-right: 15%;
  margin-left: 15%;
}
pb {
  font-family: "Merriweather", serif;
  font-weight: 700;
  color: white;
  font-size: 16px;
  line-height: 32px;
}
@media only screen and (max-width: 768px) {
  h2 {
    font-size: 48px;
    letter-spacing: 0px;
  }
  p {
    margin-right: 2vh;
    margin-left: 2vh;
  }
}
@media only screen and (min-width: 769px) {
}
.parallax-one {
  padding-top: 50vh;
  padding-bottom: 50vh;
  overflow: hidden;
  position: relative;
  width: 100%;
  background-image: url("../assets/p1.png");
  background-attachment: fixed;
  background-size: cover;
  -moz-background-size: cover;
  -webkit-background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
}
.parallax-two {
  padding-top: 50vh;
  padding-bottom: 50vh;
  overflow: hidden;
  position: relative;
  width: 100%;
  background-image: url("../assets/p2.png");
  background-attachment: fixed;
  background-size: cover;
  -moz-background-size: cover;
  -webkit-background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}
.parallax-three {
  padding-top: 50vh;
  padding-bottom: 50vh;
  overflow: hidden;
  position: relative;
  width: 100%;
  background-image: url("../assets/p3.png");
  background-attachment: fixed;
  background-size: cover;
  -moz-background-size: cover;
  -webkit-background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}
.parallax-four {
  padding-top: 50vh;
  padding-bottom: 50vh;
  overflow: hidden;
  position: relative;
  width: 100%;
  background-image: url("../assets/p4.png");
  background-attachment: fixed;
  background-size: cover;
  -moz-background-size: cover;
  -webkit-background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}
.footer {
  height: 20vh;
  background-color: #3b342b;
}
.btn {
  border: line;
  background-color: inherit;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  display: inline-block;
  border-radius: 40%;
}
.btn:hover {
  background: #eee;
}
a:link {
  color: #cc6600;
}
a:visited {
  color: #cc6600;
}
a:hover {
  color: #804000;
}
.fa {
  padding: 12px;
  font-size: 20px;
  width: 20px;
  text-align: center;
  text-decoration: none;
  margin: 3vh 5px;
  border-radius: 50%;
}
.fa:hover {
  opacity: 0.7;
}
.fa-facebook {
  color: black;
  background-color: white;
}
.fa-instagram {
  color: black;
  background-color: white;
}
.fa-linkedin {
  color: black;
  background-color: white;
}
.fa-slack {
  color: black;
  background-color: white;
}
.fa-github {
  color: black;
  background-color: white;
}
.fa-envelope-o {
  color: black;
  background-color: white;
}
.board {
  color: white;
}
</style>
