<template>
  <div>
    <section>
      <div class="parallax" id="plax_6">
        <h1>The Contributing Members</h1>
        <nav>
          <button class="nav-item cont" @click="changeView('1')">Eboard</button>
          <button class="nav-item cont" @click="changeView('2')">
            Development
          </button>
          <button class="nav-item cont" @click="changeView('3')">
            Testing & Security
          </button>
          <button class="nav-item cont" @click="changeView('4')">Design</button>
        </nav>
      </div>
    </section>

    <section v-show="isEboard">
      <h1>1</h1>
    </section>

    <section v-show="isDev">
      <h1>2</h1>
    </section>

    <section v-show="isTS">
      <h1>3</h1>
    </section>

    <section v-show="isDesign">
      <h1>4</h1>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isEboard: true,
      isDev: false,
      isTS: false,
      isDesign: false
    };
  },

  methods: {
    changeView: function(num) {
      if (num === "1") {
        this.isEboard = true;
        this.isDev = false;
        this.isTS = false;
        this.isDesign = false;
        return;
      } else if (num === "2") {
        this.isEboard = false;
        this.isDev = true;
        this.isTS = false;
        this.isDesign = false;
        return;
      } else if (num === "3") {
        this.isEboard = false;
        this.isDev = false;
        this.isTS = true;
        this.isDesign = false;
        return;
      } else if (num === "4") {
        this.isEboard = false;
        this.isDev = false;
        this.isTS = false;
        this.isDesign = true;
        return;
      }
    }
  }
};
</script>

<style scoped>
button:focus {
  outline: 0;
}

nav {
  background: transparent;
  position: absolute;
  overflow: hidden;
  bottom: 0;
  width: 100%;
  padding-bottom: 25px;
}

.cont {
  background: transparent;
  color: white;
}

.cont:hover {
  color: rgb(175, 172, 172);
}

.cont:before {
  background: white;
}

.nav-item.router-link-exact-active {
  color: white;
}

.parallax {
  padding-top: 40vh;
  padding-bottom: 35vh;
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
</style>
