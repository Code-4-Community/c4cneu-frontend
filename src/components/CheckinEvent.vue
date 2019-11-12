<template>
  <div>
    <button class="eventButton" v-on:click="eventClick">
      <h2>{{ eventTitle }}</h2>
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
@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap");
@import url("https://fonts.googleapis.com/css?family=Merriweather:400,700&display=swap");
.eventButton {
  background-color: whitesmoke;
  margin-top: 1em;
  border-radius: 2px;
  border: 2px solid rgb(112, 231, 235);
  width: 20em;
}

h2 {
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 600;
  color: #2c3e50;
  padding: 5px;
  margin: 0;
}

p {
  font-family: "Merriweather", serif;
  font-weight: 400;
  color: black;
  font-size: 14px;
  line-height: 32px;
  margin-right: 5%;
  margin-left: 5%;
}
</style>
