<template>
  <div>
    <section>
      <div class="parallax" id="plax_5">
        <h1>Executive Board</h1>
      </div>
    </section>
    <EboardPeople class="eboard" :eboard="fullBoard" />
  </div>
</template>

<script>
import EboardPeople from "../components/EboardPeople";
import { mapState, mapActions } from "vuex";

export default {
  name: "eboard",

  components: {
    EboardPeople
  },

  mounted() {
    this.FETCH_BOARD();
    //makes it so that when taken to page from router, it goes to the top
    window.scrollTo(0, 0);
  },
  computed: {
    ...mapState(["posts"]),
    fullBoard() {
      return this.$store.getters.GET_BOARD;
    }
  },
  methods: {
    ...mapActions(["FETCH_BOARD"])
  }
};
</script>

<style scoped>
/*SETS BACKGROUND IMAGE OF HEADER*/
/*#plax_1 {
  background-image: url("../assets/p5.png");
}*/
</style>
