<template>
  <div>
    <h1>Active Events</h1>
    <checkin-event
      v-on:eventSelected="handleClickInParent"
      v-for="fe in filteredEvents"
      :eventTitle="fe.title"
      :eventDate="fe.date"
      :eventId="fe.id"
      v-bind:key="fe.title"
    ></checkin-event>
    <div v-if="!(activeEventIndex === null)">
      <h2>{{ events[activeEventIndex].title }}</h2>
      <p>Enter your code:</p>
      <input v-model.number="code" maxlength="4" input-code />
      <br />
      <button
        v-bind:disabled="!codeIsValid"
        v-on:click="submitCheckIn()"
        class="submit"
      >
        Submit
      </button>
      <p v-if="!codeIsValid" class="error" error-code>
        Please enter valid 4 digit code
      </p>
    </div>
  </div>
</template>

<script>
import CheckinEvent from "../components/CheckinEvent.vue";
import axios from "axios";

export default {
  data() {
    return {
      events: [],
      activeEventIndex: null,
      code: null
    };
  },

  //TODO: Implement API call to our own backend
  mounted() {
    axios
      .get("https://my-json-server.typicode.com/willmt80/demo/events")
      .then(response => (this.events = response.data));
  },

  components: {
    CheckinEvent
  },

  computed: {
    //filteredEvents: returns an array of event objects for which the date of the event is later than 24 hours ago
    //Needs testing
    filteredEvents() {
      var dayInSeconds = 24 * 60 * 60;
      return this.events.filter(
        event => event.date > Date.now() - dayInSeconds
      );
    },

    //codeIsValid: returns true iff the code is valid.
    //Needs testing
    codeIsValid() {
      //TODO: Use regex to prevent leading zeros?
      return !isNaN(this.code) && this.code >= 1000 && this.code <= 9999;
    }
  },

  methods: {
    //handleClickInParent: sets the activeEventIndex to the proper eventId
    handleClickInParent(eventId) {
      this.activeEventIndex = eventId - 1;
    },

    //submitCheckIn: submits an attempt to check in to an event
    //Needs testing
    submitCheckIn() {
      var submittedEvent = this.events[this.activeEventIndex];
      submittedEvent["code"] = this.code;
      submittedEvent["checkin-time"] = Date.now();

      //TODO: API call needs implementation
    }
  }
};
</script>

<style scoped></style>
