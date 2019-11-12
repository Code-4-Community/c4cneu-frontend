<template>
  <div>
    <h1></h1>
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
        <h1>{{ events[activeEventIndex].title }}</h1>
        <p>Enter your code:</p>
        <input v-model.number="code" maxlength="4" input-code />
        <br />
        <button
          v-bind:disabled="!codeIsValid"
          v-on:click="submitCheckin()"
          class="submit"
        >
          Submit
        </button>
        <p v-if="!codeIsValid" class="error" error-code>
          Please enter valid 4 digit code
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import CheckinEvent from "../components/CheckinEvent.vue";
import axios from "axios";

export default {
  data() {
    return {
      //today: this.todaysDate,
      events: [],
      activeEventIndex: null,
      code: null
    };
  },
  mounted() {
    axios
      .get("https://my-json-server.typicode.com/willmt80/demo/events")
      .then(response => (this.events = response.data));
  },
  components: {
    CheckinEvent
  },
  computed: {
    filteredEvents() {
      var currentEvents = [];
      var ievent = null;
      var i;
      var eventDate;
      var todaysDate;
      for (i = 0; i < this.events.length; i++) {
        ievent = this.events[i];
        eventDate = new Date(ievent.date * 1000);
        todaysDate = new Date(Date.now());
        if (eventDate.getTime() <= todaysDate.getTime()) {
          eventDate.setHours(0, 0, 0, 0);
          todaysDate.setHours(0, 0, 0, 0);
          if (eventDate.getTime() === todaysDate.getTime()) {
            currentEvents.push(ievent);
          }
        }
      }
      return currentEvents;
    },
    codeIsValid() {
      // In future use regex to prevent leading zeros?
      return !isNaN(this.code) && this.code >= 1000 && this.code <= 9999;
    }
  },
  methods: {
    handleClickInParent(eventId) {
      this.activeEventIndex = eventId - 1;
    },
    submitCheckin() {
      var submittedEvent = this.events[this.activeEventIndex];
      submittedEvent["code"] = this.code;
      submittedEvent["checkin-time"] = Date.now();
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap");
@import url("https://fonts.googleapis.com/css?family=Merriweather:400,700&display=swap");

button {
  background-color: whitesmoke;
  margin-top: 1em;
  border-radius: 2px;
  border: 2px solid rgb(112, 231, 235);
}

h1 {
  font-family: "Source Sans Pro", sans-serif;
  font-size: 24px;
  font-weight: 600;
  color: #2c3e50;
  padding: 5px;
  margin: 0;
}

p {
  font-family: "Merriweather", serif;
  font-weight: 400;
  color: black;
  font-size: 16px;
  line-height: 32px;
  margin-right: 5%;
  margin-left: 5%;
}

.error {
  color: red;
  font-style: italic;
}
</style>
