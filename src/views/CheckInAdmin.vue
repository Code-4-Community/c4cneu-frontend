<template>
  <div>
    <div class="frame">
      <h1>Descriptive header checkinAdmin</h1>
      <button v-on:click="newCode()" class="enable">New Code</button>
      <br />
      <button
        v-bind:disabled="!code"
        v-on:click="disableCode()"
        class="disable"
      >
        Disable Code
      </button>
      <p v-if="code === null" class="codeMessage">No Live Code</p>
      <p v-else class="codeMessage">Live Code: {{ code }}</p>
      <p class="error" v-if="error !== null">ERROR: {{ error }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      code: null,
      error: null
    };
  },
  methods: {
    newCode: function() {
      this.error = null;
      this.code = Math.floor(1000 + Math.random() * 9000);
    },
    disableCode: function() {
      // This may be redundant as the button will be disabled is there is no live code
      // but it is good to ensure that if this method somehow got called nothing would happen
      // to the live code
      if (this.code === null) {
        this.error = "No active live code";
      } else {
        this.code = null;
      }
    }
  }
};
</script>

<style scoped>
button {
  width: 5em;
  margin-top: 1em;
  border-radius: 0.5em;
  border: none;
}
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
.enable {
  background-color: rgb(112, 231, 235);
}
.disable {
  background-color: rgb(240, 187, 187);
}
.error {
  color: red;
}
</style>
