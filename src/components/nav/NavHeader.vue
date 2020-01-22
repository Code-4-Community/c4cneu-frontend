<template>
  <div id="nav">
    <div class="big-menu">
      <router-link to="/" class="nav-home-link">
        <img src="../../assets/c4c-banner-logo.png" class="home-nav" />
      </router-link>
      <router-link to="/news" class="nav-item">News</router-link>
      <router-link to="/events" class="nav-item">Events</router-link>
      <router-link to="/board" class="nav-item">Board</router-link>
      <!-- TODO: Hiding these until they are fully-functional -->
      <!-- <router-link to="/apply" class="nav-item">Apply</router-link> -->
      <!-- <router-link to="/auth" class="nav-item">Sign In</router-link> -->
    </div>
    <img
      class="hamburger-icon"
      @click="toggle"
      src="../../assets/hamburger.png"
    />
    <router-link @click.native="hide" to="/">
      <img src="../../assets/c4c-banner-logo.png" class="mobile-logo" />
    </router-link>
    <!-- Should this just be a v-if instead of inline styling hiding -->
    <div class="mobile-menu" :style="{ display: displayType }">
      <!-- Can someone explain this inline block toggle thing? -->
      <router-link to="/news" @click.native="toggle" class="nav-item"
        >News</router-link
      >
      <router-link to="/events" @click.native="toggle" class="nav-item"
        >Events</router-link
      >
      <router-link to="/board" @click.native="toggle" class="nav-item"
        >Board</router-link
      >
      <!-- TODO: Hiding these until they are fully-functional 
      <router-link to="/apply" @click.native="toggle" class="nav-item"
        >Apply</router-link
      >
      <router-link to="/auth" @click.native="toggle" class="nav-item"
        >Sign In</router-link
      >
      -->
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
    // I think we should just use v-ifs instead of this logic, but let me know if theres a reason not to
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
