<template>
  <div>
    <button class="event" v-on:click="eventClick">
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
    //getMoment: returns the unix timestamp of the event start
    //Needs testing
    getMoment() {
      return moment.unix(this.eventDate);
    },

    //getTime: returns a readable h:mm:ss string representing the time of the event start
    //Needs testing
    getTime() {
      return this.getMoment.format("h:mm:ss a");
    },

    //getDate: returns the date of the event
    //Needs testing
    getDate() {
      return this.getMoment.format("MMMM Do YYYY");
    }
  },
  methods: {
    //eventClick: signals to parent that the event is selected
    eventClick() {
      this.$emit("eventSelected", this.eventId);
    }
  }
};
</script>

<style></style>
