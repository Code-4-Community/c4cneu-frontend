<template>
  <div>
    <footer class="footer">
      <div class="container">
        <div class="column1" align="left">
          <h3>Made at</h3>
          <a href="https://www.khoury.northeastern.edu/">
            <img class="khoury-logo" src="../../assets/khoury-logo.png" />
          </a>
        </div>
        <div class="column2" align="left">
          <h3>Upcoming events</h3>
          <router-link
            to="../../events"
            v-for="event in events.slice(0, 3)"
            :key="event.title"
          >
            <p>{{ event.title }}</p>
          </router-link>
        </div>
        <div class="column3" align="left">
          <h3>Find us on</h3>
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
          <a
            href="mailto:c4cneu@gmail.com"
            class="fa fa-envelope-o hvr-grow"
          ></a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      events: this.$store.state.events
    };
  },
  mounted() {
    this.FETCH_EVENTS();
  }
};
</script>

<style scoped>
.container {
  width: 75%;
  position: relative;
  top: 30px;
}
.column1,
.column2,
.column3 {
  color: white;
  float: left;
  width: 33.33%;
}
.khoury-logo {
  position: relative;
  top: 6px;
  width: 250px;
}

@media only screen and (max-width: 1200px) {
  .container {
    width: 100%;
  }
  .column1,
  .column2 {
    display: none;
  }
  .column3 {
    font-size: 150%;
    width: 100%;
    float: none;
    text-align: center;
  }
  .column3 h3 {
    font-size: 100%;
  }
}
</style>
