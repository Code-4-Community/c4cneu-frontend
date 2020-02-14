<template>
  <div>
    <form class="form-layout center">
      <div class="form-item">
        <label for="email">Email</label>
        <br />
        <input name="email" type="text" v-model="email" />
      </div>

      <div class="form-item">
        <label for="first">First Name</label>
        <br />
        <input name="first" type="text" v-model="first" />
      </div>

      <div class="form-item">
        <label for="last">Last Name</label>
        <br />
        <input name="last" type="text" v-model="last" />
      </div>

      <p v-if="error" class="error">Please enter valid credentials</p>

      <button :disabled="disableButton" @click="ajaxSaveToEmailList">
        Submit
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      first: "",
      last: "",
      error: false
    };
  },

  methods: {
    ajaxSaveToEmailList() {
      if (this.invalidNewEmail()) {
        this.error = true;
        return;
      }

      //Backend ajax call
    }
  },

  computed: {
    disableButton() {
      return (
        this.first.length === 0 ||
        this.last.legnth === 0 ||
        this.email.length === 0
      );
    }
  },

  invalidEmail() {
    //Regex for email validation
    return this.email.length() > 0;
  }
};
</script>
