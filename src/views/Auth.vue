<template>
  <div class="signin">
    <form v-if="isSigningIn" @submit.prevent="handleSignin">
      <label>Email address</label>
      <input
        ref="first"
        type="text"
        v-model="user.emailAddress"
        @focus="clearStatus"
      />
      <label>Password</label>
      <input type="text" v-model="user.password" @focus="clearStatus" />
      <button @click="openSignin">Sign in</button>
      <button @click="openSignup">Sign up</button>
    </form>

    <form v-if="!isSigningIn" @submit.prevent="handleSignup">
      <h1>Sign up</h1>
      <label>Name</label>
      <input type="text" v-model="newUser.name" @focus="clearStatus" />
      <label>Email address</label>
      <input type="text" v-model="newUser.emailAddress" @focus="clearStatus" />
      <label>Password</label>
      <input type="text" v-model="newUser.password" @focus="clearStatus" />
      <label>Confirm password</label>
      <input type="text" v-model="newUser.cPassword" @focus="clearStatus" />
      <button>Sign up!</button>
    </form>

    <p v-if="error">
      Please fill out all required fields and ensure everything is correct
    </p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "signin",
  data() {
    return {
      user: {
        emailAddress: "",
        password: ""
      },
      newUser: {
        name: "",
        emailAddress: "",
        password: "",
        cPassword: ""
      },
      submitting: false,
      error: false,
      success: false
    };
  },
  props: {
    isSigningIn: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    handleSignin() {
      this.submitting = true;
      this.clearStatus();
      if (this.invalidEmail || this.invalidPassword) {
        this.error = true;
        return;
      }
      //signin()
      this.user = {
        emailAddress: "",
        password: ""
      };
    },
    handleSignup() {
      this.submitting = true;
      this.clearStatus();
      if (
        this.invalidNewEmail ||
        this.invalidNewName ||
        this.invalidNewPassword
      ) {
        this.error = true;
        return;
      }
      //signup()
      this.newUser = {
        name: "",
        emailAddress: "",
        password: "",
        cPassword: ""
      };
    },
    clearStatus() {
      this.error = false;
      this.success = false;
    },
    openSignin() {
      this.isSigningIn = true;
      this.clearStatus();
    },
    openSignup() {
      this.isSigningIn = false;
      this.clearStatus();
    },
    signin() {
      axios.post("given url", {
        emailAddress: this.user.emailAddress,
        password: this.user.password
      });
    },
    signup() {
      axios.post("given url", {
        name: this.newUser.name,
        emailAddress: this.newUser.emailAddress,
        password: this.newUser.password
      });
    }
  },
  computed: {
    invalidEmail() {
      return this.user.emailAddress === "";
    },
    invalidPassword() {
      return this.user.password === "";
    },
    invalidNewEmail() {
      return this.newUser.emailAddress === "";
    },
    invalidNewName() {
      return this.newUser.name === "";
    },
    invalidNewPassword() {
      return (
        !(this.newUser.password === this.newUser.cPassword) ||
        this.newUser.password === ""
      );
    }
  }
};
</script>

<style scoped>
.signin {
  align-items: center;
  justify-content: center;
  align-content: center;
  text-align: center;
}
</style>
