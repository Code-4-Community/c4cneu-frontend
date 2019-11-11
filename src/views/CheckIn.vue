<template>
  <div>
    <form class="form" @submit.prevent="handleCheckin">
      <h1>Check in</h1>

      <div>
        <select @change="changeEvent($event)">
          <option value selected disabled>Select an event</option>
          <option
            v-for="event in validEvents"
            :value="event.id"
            :key="event.id"
            >{{ event.name }}</option
          >
        </select>
      </div>

      <p v-if="eventSelected">Code</p>
      <input
        v-if="eventSelected"
        @focus="clearStatus"
        maxlength="4"
        v-model="submission.code"
      />
      <p v-if="eventSelected && error" class="error">
        Please enter a 4 digit code
      </p>
      <br />
      <button
        v-on:click="handleCheckin(JSON.stringify(submission))"
        v-if="eventSelected"
      >
        Check in
      </button>
    </form>
  </div>
</template>

<script>
import { isNull } from "util";
export default {
  data() {
    return {
      submission: {
        event: this.selectedEvent,
        code: null
      },
      validEvents: [
        { id: 1, name: "Event 1", eventDate: "Date 1", eventCode: 1111 },
        { id: 2, name: "Event 2", eventDate: "Date 2", eventCode: 2222 },
        { id: 3, name: "Event 3", eventDate: "Date 3", eventCode: 3333 },
        { id: 4, name: "Event 4", eventDate: "Date 4", eventCode: 4444 }
      ],
      selectedEvent: null,
      error: false,
      submitting: false
    };
  },

  computed: {
    validCode() {
      //is it a valid code?
      return this.submission.code >= 1000 && this.submission.code <= 9999;
    },
    eventSelected() {
      return !isNull(this.selectedEvent);
    }
  },

  methods: {
    handleCheckin(submission) {
      this.submitting = true;
      this.clearStatus();

      if (!this.validCode) {
        this.error = true;
        return;
      }

      // An attempt at pushing JSON body to a custom JSON server
      /* const checkinIsValid = this.validCode;
        if (checkinIsValid) {
          axios.post('https://my-json-server.typicode.com/willmt80/demo/checkins', {
            data: this.submission,
          })
        .then(response => {})
        .catch((e) => {
          console.error(e)
        })
        } 
        */

      return submission;
    },
    clearStatus() {
      this.error = false;
    },
    changeEvent(event) {
      this.selectedEvent =
        event.target.options[event.target.options.selectedIndex].text;
    },
    fetchEvents() {
      // An attempt at fetching the data from the server
      /*
      newEvents = axios
        .get("/event", {
          params: {
            eventDate: Date.now(), //not sure about format of date
          }
        })
        .then(function (response) {
          // add the retrieved events to the valid events list
          console.log(response);
        })
        .catch(function (error) {
          // throw exception
          console.log (error);
        })
        
       for (int i = 0; i < newEvents.length; i++) {
         if ((Date.now() - this.validEvents[i].eventDate) < 0) {
           newEvents[i].pop();
         }
       }
       */
    }
  }
};
</script>

<style scoped>
.form {
  width: 20%;
  margin: auto;
}
@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  [class="frame"] {
    width: 100%;
  }
}
@media only screen and (max-width: 1200px) and (min-width: 769px) {
  /* For mobile phones: */
  [class="frame"] {
    width: 40%;
  }
}
.error {
  color: red;
  font-style: italic;
}
button {
  width: 5em;
  background-color: rgb(112, 231, 235);
  margin-top: 1em;
  border-radius: 0.5em;
  border: none;
}
input {
  border-radius: 0.5em;
  border: 1px solid rgb(200, 200, 220);
}
</style>
