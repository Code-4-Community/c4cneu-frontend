<template>
  <div class="grid-layout">
    <template v-for="person in eboard">
      <Person :key="person.id" :person="person" />
    </template>
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
