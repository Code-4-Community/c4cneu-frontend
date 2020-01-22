<template>
  <div>
    <section>
      <div class="parallax" id="plax_5">
        <h1>Executive Board</h1>
      </div>
    </section>
    <div class="content">
      <div class="grid-layout">
        <Person v-for="person in people" :key="person.id" :person="person" />
      </div>
    </div>
  </div>
</template>

<script>
import Person from "../components/Person";
import { mapState, mapActions } from "vuex";

export default {
  name: "eboard-view",
  components: {
    Person
  },
  mounted() {
    this.FETCH_BOARD();
    //makes it so that when taken to page from router, it goes to the top
    // I believe that it automatically scrolls to the top
    window.scrollTo(0, 0);
  },
  computed: {
    ...mapState(["posts"]),
    people() {
      return this.$store.getters.GET_BOARD;
    }
  },
  methods: {
    ...mapActions(["FETCH_BOARD"])
  }
};
</script>
