<template>
  <div>
    <section>
      <div class="parallax" id="plax_5">
        <h1>Executive Board</h1>
      </div>
    </section>
    <div class="content">
      <EboardPeople class="eboard" :eboard="eboard" />
    </div>
  </div>
</template>

<script>
import EboardPeople from "../components/EboardPeople";

export default {
  name: "eboard",

  components: {
    EboardPeople
  },

  data() {
    return {
      eboard: this.$store.state.eboard
    };
  },
  //makes it so that when taken to page from router, it goes to the top
  mounted() {
    window.scrollTo(0, 0);
  }
};
</script>

<style scoped>
/*SETS BACKGROUND IMAGE OF HEADER*/
/*#plax_1 {
  background-image: url("../assets/p5.png");
}*/
</style>
