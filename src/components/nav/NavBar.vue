<template>
  <div id="nav">
    <div class="big-menu">
      <router-link to="/" class="nav-home-link">
        <img src="../../assets/c4c-banner-logo.png" class="home-nav" />
      </router-link>
      <router-link to="/news" class="nav-item">News</router-link>
      <router-link to="/events" class="nav-item">Events</router-link>
      <router-link to="/board" class="nav-item">Board</router-link>
      <router-link to="/apply" class="nav-item">Apply</router-link>
      <router-link to="/auth" class="nav-item">Sign In</router-link>
    </div>
    <img
      class="hamburger-icon"
      @click="toggle"
      src="../../assets/hamburger.png"
    />
    <router-link @click.native="hide" to="/">
      <img src="../../assets/c4c-banner-logo.png" class="mobile-logo" />
    </router-link>
    <div class="mobile-menu" :style="{ display: displayType }">
      <router-link to="/news" @click.native="toggle" class="nav-item"
        >News</router-link
      >
      <router-link to="/events" @click.native="toggle" class="nav-item"
        >Events</router-link
      >
      <router-link to="/board" @click.native="toggle" class="nav-item"
        >Board</router-link
      >
      <router-link to="/apply" @click.native="toggle" class="nav-item"
        >Apply</router-link
      >
      <router-link to="/auth" @click.native="toggle" class="nav-item"
        >Sign In</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      displayType: "none"
    };
  },
  methods: {
    //Toggles menu (mobile only)
    toggle: function() {
      if (this.displayType == "none") {
        this.displayType = "inline-block";
      } else {
        this.displayType = "none";
      }
    },

    //Hides menu, regardless of whether it is showing or not (mobile only)
    hide: function() {
      this.displayType = "none";
    }
  }
};
</script>

<style scoped></style>
