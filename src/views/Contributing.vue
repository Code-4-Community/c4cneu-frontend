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
      <div class="content">
        <div class="grid-layout">
          <Person v-for="person in people" :key="person.id" :person="person" />
        </div>
      </div>
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

    <section class="becomeMember">
      <h1>
        If you are interested in becoming a contributing member go here to
        apply!
      </h1>
    </section>
  </div>
</template>

<script>
import Person from "../components/Person";
import { mapState, mapActions } from "vuex";

export default {
  name: "eboard",

  components: {
    Person
  },
  data() {
    return {
      isEboard: true,
      isDev: false,
      isTS: false,
      isDesign: false
    };
  },

  mounted() {
    this.FETCH_BOARD();
    //makes it so that when taken to page from router, it goes to the top
    window.scrollTo(0, 0);
  },

  computed: {
    ...mapState(["posts"]),
    people() {
      return this.$store.getters.GET_BOARD;
    }
  },

  methods: {
    ...mapActions(["FETCH_BOARD"]),

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
  margin-left: 2%;
  margin-right: 2%;
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

.becomeMember {
  background: lightgrey;
}
</style>
