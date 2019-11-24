<template>
  <form class="form-layout">
    <h1>Sign up</h1>
    <p v-if="error">
      Please fill out all required fields and ensure everything is correct.
    </p>
    <div class="form-item">
      <label>Name</label>
      <br />
      <input
        type="text"
        v-model="newUser.name"
        @focus="clearStatus"
        placeholder="Full Name"
      />
    </div>
    <div class="form-item">
      <label>Email</label>
      <br />
      <input
        type="text"
        v-model="newUser.emailAddress"
        @focus="clearStatus"
        placeholder="Email"
      />
    </div>
    <div class="form-item">
      <label>Password</label>
      <br />
      <input
        type="password"
        v-model="newUser.password"
        @focus="clearStatus"
        placeholder="Password"
      />
    </div>
    <div class="form-item">
      <label>Confirm password</label>
      <br />
      <input
        type="password"
        v-model="newUser.cPassword"
        @focus="clearStatus"
        placeholder="Retype Password"
      />
    </div>
    <button class="form-item" @click="handleSignUp($event)">Sign up!</button>
  </form>
</template>

<script>
export default {
  name: "SignUp",
  props: {
    signUp: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      newUser: {
        name: "",
        emailAddress: "",
        password: "",
        cPassword: ""
      },
      error: false,
      success: false,
      submitting: false
    };
  },
  computed: {
    validName: function() {
      return this.newUser.name.trim() !== "";
    },
    validEmail: function() {
      return /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(
        this.newUser.emailAddress
      );
    },
    validPassword: function() {
      let { password, cPassword } = this.newUser;
      // TODO implement password policy
      return password !== "" && password === cPassword;
    }
  },
  methods: {
    clearStatus() {
      this.error = false;
      this.success = false;
      this.invalidFormMessage = "";
    },
    handleSignUp(event) {
      event.preventDefault();

      this.submitting = true;
      this.clearStatus();

      if (!this.validForm()) {
        this.error = true;
        return;
      }

      this.signUp(this.newUser);

      this.newUser = {
        name: "",
        emailAddress: "",
        password: "",
        cPassword: ""
      };
    },
    validForm() {
      return this.validName && this.validEmail && this.validPassword;
    }
  }
};
</script>
