<template>
  <div>
    <section>
      <div class="parallax" id="plax_5">
        <h1>Executive Board</h1>
      </div>
    </section>
    <EboardPeople class="eboard" :eboard="eboard" />
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
  }
};
</script>

<style scoped>
/*SETS BACKGROUND IMAGE OF HEADER*/
/*#plax_1 {
  background-image: url("../assets/p5.png");
}*/
</style>
