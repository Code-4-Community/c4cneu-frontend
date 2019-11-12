<template>
  <div>
    <section>
      <div class="parallax" id="plax_1">
        <img
          src="../assets/c4c-banner-logo.png"
          style="width:80%;height:100%;"
        />
        <h3>Changing the world with software</h3>
      </div>
    </section>

    <section>
      <div class="parallax" id="plax_2">
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
      </div>
    </section>

    <section>
      <div class="parallax" id="plax_3">
        <h1>OUR PROJECTS</h1>
        <p>
          Code 4 Community is an organization on GitHub with over 20 developers.
          Here, you can find the source code to our project frontends and
          backends (such as this website!)
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
      <div class="parallax" id="plax_4">
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
      <div class="parallax" id="plax_5">
        <h2>MEET THE TEAM</h2>
        <router-link to="/board">
          <button>Our Executive Board</button>
        </router-link>
      </div>
    </section>

    <footer class="footer">
      <a
        href="https://www.facebook.com/c4cneu/"
        class="fa fa-facebook hvr-grow"
      ></a>
      <a
        href="https://www.instagram.com/c4cneu/"
        class="fa fa-instagram hvr-grow"
      ></a>
      <a
        href="https://www.linkedin.com/company/code-4-community/about/"
        class="fa fa-linkedin hvr-grow"
      ></a>
      <a href="https://c4cneu.slack.com/" class="fa fa-slack hvr-grow"></a>
      <a
        href="https://github.com/Code-4-Community"
        class="fa fa-github hvr-grow"
      ></a>
      <a href="mailto:c4cneu@gmail.com" class="fa fa-envelope-o hvr-grow"></a>
    </footer>
  </div>
</template>

<style scoped>
/*SETS BACKGROUND IMAGES FOR ALL PARALLAX DIVS*/
#plax_1 {
  background-image: url("../assets/p1.png");
}
#plax_2 {
  background-image: url("../assets/p3.png");
}
#plax_3 {
  background-image: url("../assets/p2.png");
}
#plax_4 {
  background-image: url("../assets/p4.png");
}
#plax_5 {
  background-image: url("../assets/p5.png");
}
</style>
