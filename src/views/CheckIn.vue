<template>
  <div>
    <div class="frame">
      <h1>Descriptive header checkin</h1>
      <p>Enter your email:</p>
      <input v-model="checkinSubmission.email" input-email />
      <p v-if="!emailIsValid" class="error" error-email>
        Please enter valid email
      </p>
      <p>Enter your code:</p>
      <input v-model.number="checkinSubmission.code" maxlength="4" input-code />
      <p v-if="!codeIsValid" class="error" error-code>
        Please enter valid 4 digit code
      </p>
      <button
        v-bind:disabled="!emailIsValid || !codeIsValid"
        v-on:click="checkin(JSON.stringify(checkinSubmission))"
        class="submit"
      >
        Submit
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checkinSubmission: {
        email: "",
        code: null,
        date: Date.now() //current UNIX timestamp
      }
    };
  },
  computed: {
    emailIsValid() {
      // Checks that the structure of the given email is correct. Taken from Vue.js website
      // eslint-disable-next-line no-useless-escape
      var emailChar = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return emailChar.test(this.checkinSubmission.email);
    },
    codeIsValid() {
      // In future use regex to prevent leading zeros?
      return (
        !isNaN(this.checkinSubmission.code) &&
        this.checkinSubmission.code >= 1000 &&
        this.checkinSubmission.code <= 9999
      );
    }
  },

  methods: {
    checkin(submission) {
      // An attempt at pushing JSON body to a custom JSON server
      /* const checkinIsValid = this.emailIsValid && this.codeIsValid;
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
    }
  }
};
</script>

<style scoped>
.frame {
  width: 20%;
  margin: auto;
  background-color: rgb(245, 245, 255);
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
