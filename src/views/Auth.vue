<template>
  <div class="wrapper">
    <form class="form-layout" v-if="isSigningIn">
      <h1>Sign in</h1>
      <div class="form-item">
        <label>Email address</label>
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
        <input
          type="password"
          v-model="user.password"
          @focus="clearStatus"
          placeholder="Password"
        />
      </div>
      <button class="form-item" @click="handleSignIn">Sign in</button>
    </form>

    <form class="form-layout" v-if="!isSigningIn">
      <h1>Sign up</h1>
      <div class="form-item">
        <label>Name</label>
        <input
          type="text"
          v-model="newUser.name"
          @focus="clearStatus"
          placeholder="Full Name"
        />
      </div>
      <div class="form-item">
        <label>Email address</label>
        <input
          type="text"
          v-model="newUser.emailAddress"
          @focus="clearStatus"
          placeholder="Email"
        />
      </div>
      <div class="form-item">
        <label>Password</label>
        <input
          type="password"
          v-model="newUser.password"
          @focus="clearStatus"
          placeholder="Password"
        />
      </div>
      <div class="form-item">
        <label>Confirm password</label>
        <input
          type="password"
          v-model="newUser.cPassword"
          @focus="clearStatus"
          placeholder="Retype Password"
        />
      </div>
      <button class="form-item" @click="handleSignUp">Sign up!</button>
    </form>

    <p>or</p>
    <div v-if="isSigningIn">
      <button @click="openSignUp">Sign up</button>
    </div>
    <div v-else>
      <button @click="openSignIn">Sign in</button>
    </div>

    <p v-if="error">
      Please fill out all required fields and ensure everything is correct
    </p>
  </div>
</template>

<script>
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
      success: false,
      isSigningIn: true
    };
  },

  methods: {
    //handleSignIn: processes submission of sign in form.
    //Needs testing
    handleSignIn() {
      this.submitting = true;
      this.clearStatus();

      if (this.invalidEmail || this.invalidPassword) {
        this.error = true;
        return;
      }

      this.signIn(this.user);

      this.user = {
        emailAddress: "",
        password: ""
      };
    },

    //handleSignUp: processes submission of sign up form.
    //Needs testing
    handleSignUp() {
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

      this.signUp(this.newUser);

      this.newUser = {
        name: "",
        emailAddress: "",
        password: "",
        cPassword: ""
      };
    },

    //clearStatus: clears status of form; sets error and success to false
    clearStatus() {
      this.error = false;
      this.success = false;
    },

    //openSignIn: opens sign in form
    openSignIn() {
      this.isSigningIn = true;
      this.clearStatus();
    },

    //openSignUp: opens sign up form
    openSignUp() {
      this.isSigningIn = false;
      this.clearStatus();
    },

    //signIn: sends sign-in request to backend
    //Needs testing
    signIn(user) {
      //Temporary:
      user;

      //TODO: implement backend API call
    },

    //signUp: sends sign up request to backend
    //Needs testing
    signUp(newUser) {
      //Temporary:
      newUser;

      //TODO: implement backend API call
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

<style scoped></style>
