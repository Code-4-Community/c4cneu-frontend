<template>
  <div @click="handleOutsideClick">
    <div>
      <h1>Events</h1>
      <div class="content">
        <h2>Upcoming</h2>
        <list-card
          v-for="event in futureEvents"
          :key="event.id"
          :title="event.title"
          :subtitle="event.desc"
          :date="event.date"
          :imageUrl="event.imageUrl"
          @click.native="handleClickInParent(event.id)"
        />
        <h2>Past</h2>
        <list-card
          v-for="event in pastEvents"
          :key="event.id"
          :title="event.title"
          :subtitle="event.desc"
          :date="event.date"
          :imageUrl="event.imageUrl"
          @click.native="handleClickInParent(event.id)"
        />
      </div>
    </div>
    <event-modal
      :style="{ display: displayType }"
      :event="activeEvent"
      :past="activeIsPast"
    >
    </event-modal>
  </div>
</template>

<script>
import ListCard from "../components/ListCard.vue";
import EventModal from "../components/EventModal.vue";
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      activeEventIndex: null,
      displayType: "none",
      disableOutsideClick: false
    };
  },

  components: {
    ListCard,
    EventModal
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

    //futureEvents: returns an array of event objects for which the date of the event is later than 24 hours ago
    //Needs testing
    futureEvents() {
      return this.events.filter(event => !this.isPast(event.date));
    },

    //pastEvents: returns an array of event objects for which the date of the event is earlier than 24 hours ago
    //Needs testing
    pastEvents() {
      return this.events.filter(event => this.isPast(event.date));
    },

    activeEvent() {
      if (this.activeEventIndex != null) {
        return this.events[this.activeEventIndex];
      }
      return null;
    },

    activeIsPast() {
      return this.activeEvent ? this.isPast(this.activeEvent.date) : false;
    }
  },

  methods: {
    ...mapActions(["FETCH_EVENTS"]),

    //handleClickInParent: sets the activeEventIndex to the proper eventId
    handleClickInParent(eventId) {
      this.activeEventIndex = eventId - 1;
      this.displayType = "block";
      this.disableOutsideClick = true;
    },

    close() {
      this.displayType = "none";
    },

    //unixToDate: converts the given unix timestamp to a javascript date number
    unixToDate(unix) {
      return unix * 1000;
    },

    //Helper function: determines if a given date is more than 24 hours in the past
    isPast(date) {
      return this.unixToDate(date) <= Date.now() - 24 * 60 * 60 * 1000; //day in milliseconds
    },

    handleOutsideClick(event) {
      var popup = document.getElementById("popup-content");
      if (!this.disableOutsideClick && !popup.contains(event.target)) {
        this.close();
      } else {
        this.disableOutsideClick = false;
      }
    }
  }
};
</script>

<style scoped></style>
