<template>
  <div @click="handleOutsideClick">
    <section>
      <div class="parallax" id="plax_6">
        <h1>Upcoming Events</h1>
      </div>
    </section>
    <div>
      <div class="content">
        <h2 v-if="hasFuture">Upcoming Events</h2>
        <list-card
          v-for="event in futureEvents"
          :key="event.id"
          :title="event.title"
          :subtitle="event.subtitle"
          :date="event.date"
          :imageUrl="event.imageUrl"
          @click.native="handleClickInParent(event.id)"
        />
        <h2 v-if="hasPast">Past Events</h2>
        <list-card
          v-for="event in pastEvents"
          :key="event.id"
          :title="event.title"
          :subtitle="event.subtitle"
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
      displayType: "none", //"block" to display the modal, "none" to hide it
      disableOutsideClick: false //see method handleOutsideClick() for explanation
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

    //hasFuture: returns true if futureEvents returns an array of length >= 1
    hasFuture() {
      return this.futureEvents?.length > 0;
    },

    //hasFuture: returns true if futureEvents returns an array of length >= 1
    hasPast() {
      return this.pastEvents?.length > 0;
    },

    //activeEvent: returns the current active event
    activeEvent() {
      if (this.activeEventIndex != null) {
        return this.events[this.activeEventIndex];
      }
      return null;
    },

    //activeIsPast: returns true if the active event is in the past
    activeIsPast() {
      return this.isPast(this.activeEvent?.date);
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

    //handleOutsideClick: handles a click anywhere on the page with the intention of closing the modal if not on the modal
    handleOutsideClick(event) {
      var popup = document.getElementById("popup-content"); //get the element that contains the popup
      /* disableOutsideClick: when clicking on an element, the event handlers are called in the order CHILD -> PARENT
         this means that when you click on an event to show the modal, the handleClickInParent() method is called BEFORE handleOutsideClick()
         Because of this, this function will CLOSE() the modal right after it is opened because both functions will be called, so the modal cannot open
         Our solution is to set disableOutsideClick to true when the modal is first opened, and make it false the first time this method is called
         The next time this method is called, disableOutsideClick will be false, and we can close the modal
      */
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
