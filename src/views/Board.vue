<template>
  <div>
    <loading
      :active.sync="boardLoading"
      :can-cancel="true"
      :on-cancel="onCancel"
      :is-full-page="fullPage"
    ></loading>
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
  name: "eboard",

  components: {
    Person
  },

  mounted() {
    this.FETCH_BOARD();
    //makes it so that when taken to page from router, it goes to the top
    window.scrollTo(0, 0);
  },
  computed: {
    ...mapState(["board"]),

    people() {
      return this.$store.getters.GET_BOARD.boardArray;
    },

    boardLoading() {
      return this.$store.getters.GET_BOARD.isLoading;
    }
  },
  methods: {
    ...mapActions(["FETCH_BOARD"])
  }
};
</script>
