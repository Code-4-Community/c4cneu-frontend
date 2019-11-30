<template>
  <div class="sidebar-layout">
    <div class="events">
      <h1>Active Events</h1>
      <checkin-event
        v-on:eventSelected="handleClickInParent"
        v-for="fe in events"
        :eventTitle="fe.title"
        :eventDate="fe.date"
        :eventId="fe.id"
        v-bind:key="fe.title"
      ></checkin-event>
    </div>
    <form v-if="!(activeEventIndex === null)" class="form-layout">
      <h2>{{ events[activeEventIndex].title }}</h2>
      <div class="form-item">
        <label>Enter your code:</label>
        <input
          type="text"
          v-model.number="code"
          maxlength="4"
          input-code
          placeholder="4 digit code"
        />
      </div>
      <button
        class="form-item"
        v-bind:disabled="!codeIsValid"
        v-on:click="submitCheckIn()"
      >
        Submit
      </button>
      <p v-if="!codeIsValid" class="error" error-code>
        Please enter valid 4 digit code
      </p>
    </form>
  </div>
</template>

<script>
import CheckinEvent from "../components/CheckinEvent.vue";
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      activeEventIndex: null,
      code: null
    };
  },

  components: {
    CheckinEvent
  },

  mounted() {
    this.FETCH_EVENTS();
  },

  computed: {
    ...mapState(["events"]),

    //events: returns all of the events from the vuex store
    events() {
      return this.$store.getters.GET_EVENTS;
    },

    //filteredEvents: returns an array of event objects for which the date of the event is later than 24 hours ago
    //Needs testing
    filteredEvents() {
      var dayInSeconds = 24 * 60 * 60;
      return this.events.filter(
        event => this.unixToDate(event.date) > Date.now() - dayInSeconds
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
    ...mapActions(["FETCH_EVENTS"]),
    //handleClickInParent: sets the activeEventIndex to the proper eventId
    handleClickInParent(eventId) {
      this.activeEventIndex = eventId - 1;
    },

    //submitCheckIn: submits an attempt to check in to an event
    //Needs testing
    submitCheckIn() {
      var submittedEvent = this.events[this.activeEventIndex];
      submittedEvent["code"] = this.code;
      submittedEvent["checkin-time"] = Date.now() / 1000;

      //TODO: API call needs implementation
    },

    //unixToDate: converts the given unix timestamp to a javascript date number
    unixToDate(unix) {
      return unix * 1000;
    }
  }
};
</script>

<style scoped></style>
