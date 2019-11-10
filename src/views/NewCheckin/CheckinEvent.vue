<template>
  <div>
    <button class="eventButton" v-on:click="eventClick">
      <h3>{{ eventTitle }}</h3>
      <p>Date: {{ getDate }}</p>
      <p>Time: {{ getTime }}</p>
    </button>
  </div>
</template>

<script>
import moment from "moment";
export default {
  props: ["eventTitle", "eventDate", "eventId"],
  computed: {
    getMoment() {
      return moment.unix(this.eventDate);
    },

    getTime() {
      return this.getMoment.format("h:mm:ss a");
    },

    getDate() {
      return this.getMoment.format("MMMM Do YYYY");
    }
  },
  methods: {
    eventClick() {
      this.$emit("eventSelected", this.eventId);
    }
  }
};
</script>

<style>
.eventButton {
  background-color: whitesmoke;
  margin-top: 1em;
  border-radius: 2px;
  border: 2px solid rgb(112, 231, 235);
}
</style>
