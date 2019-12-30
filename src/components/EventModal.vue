<template>
  <div class="popup">
    <div class="popup-content" id="popup-content">
      <button class="close" @click="close">&times;</button>
      <h2>{{ title }}</h2>
      <br />
      <p>{{ desc }}</p>
      <div v-if="past">
        <p>This event occurred on {{ dateString }}.</p>
      </div>
      <div v-else>
        <div class="form-item">
          <label>Enter your check-in code:</label>
          <br />
          <input
            type="text"
            v-model.number="code"
            maxlength="4"
            input-code
            class="code"
            placeholder="1234"
          />
        </div>
        <br />
        <button
          class="form-item"
          :disabled="!codeIsValid"
          @click="submitCheckIn()"
        >
          Check in
        </button>
        <p v-if="!codeIsValid" class="error" error-code>
          Please enter valid 4 digit code
        </p>
        <p v-if="badCode" class="error" error-code>
          The code you entered was incorrect.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EventModal",

  props: {
    event: {
      validator: prop => typeof prop === "object" || prop === null,
      required: true
    },
    past: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      code: null,
      badCode: false
    };
  },

  computed: {
    dateString() {
      var options = { year: "numeric", month: "short", day: "numeric" };
      var postDate = new Date(this.date * 1000); //multiply by 1000 because unix timestamp is in seconds, whereas Date constructor takes ms
      return postDate.toLocaleDateString("en-US", options);
    },

    //title, desc, date: return the respective property of the active event
    title() {
      return this.event?.title;
    },

    desc() {
      return this.event?.desc;
    },

    date() {
      return this.event?.date;
    },

    //codeIsValid: returns true iff the code is valid.
    //Needs testing
    codeIsValid() {
      //TODO: Use regex to prevent leading zeros?
      return !isNaN(this.code) && this.code >= 1000 && this.code <= 9999;
    }
  },

  methods: {
    close() {
      this.$parent.close();
    },

    submitCheckIn() {
      this.badCode = false;

      //TODO: implement API call
      //If the code is wrong, set this.badCode = true
    }
  }
};
</script>

<style scoped>
.popup {
  display: none;
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}

.popup-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%; /* Could be more or less, depending on screen size */
  max-width: 600px;
}

/* The Close Button */
.popup-close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}
</style>
