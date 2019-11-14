<template>
  <div class="grid-layout">
    <Person v-for="person in eboard" :key="person.id" :person="person" />
  </div>
</template>

<script>
import Person from "./EboardPerson";
export default {
  name: "people",

  components: {
    Person
  },

  props: ["eboard"]
};
</script>

<style scoped></style>
