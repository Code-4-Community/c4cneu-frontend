<template>
  <div>
    <form>
      <h1>Sign in</h1>
      <p v-if="error">
        Please fill out all required fields and make sure everything is correct.
      </p>
      <div class="form-item">
        <label>Email</label>
        <br />
        <input
          ref="first"
          type="text"
          v-model="user.emailAddress"
          @focus="clearStatus"
          placeholder="Email"
        />
      </div>
      <div class="form-item">
        <label>Password</label>
        <br />
        <input
          type="password"
          v-model="user.password"
          @focus="clearStatus"
          placeholder="Password"
        />
      </div>
      <button class="form-item" @click="handleSignIn($event)">Sign in</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "SignIn",
  props: {
    signIn: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      user: {
        emailAddress: "",
        password: ""
      },
      submitting: false, // What is this?
      error: false,
      success: false // What is this?
    };
  },
  computed: {
    validEmail: function() {
      return /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(
        this.user.emailAddress
      );
    },
    validPassword: function() {
      return this.user.password !== "";
    }
  },
  methods: {
    clearStatus() {
      this.error = false;
      this.success = false;
    },
    handleSignIn(event) {
      event.preventDefault();
      if (this.validForm()) {
        this.submitting = true;
        this.clearStatus();
        this.signIn(this.user);
      } else {
        this.error = true;
      }
    },
    validForm() {
      return this.validEmail && this.validPassword;
    }
  }
};
</script>
