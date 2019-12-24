<template>
  <div class="content">
    <!-- TODO: MAKE TABS INSTEAD OF BUTTONS -->
    <button @click="openSignIn">Sign in</button>
    <button @click="openSignUp">Sign up</button>

    <!-- TODO: ADD LABEL-FOR TO MAKE LABELS WORK -->
    <form v-if="isSigningIn" class="center">
      <h1>Sign in</h1>
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
      <button type="button" class="form-item" @click="handleSignIn">
        Sign in
      </button>
    </form>

    <form class="form-layout center" v-if="!isSigningIn">
      <h1>Sign up</h1>
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
      <button type="button" class="form-item" @click="handleSignUp">
        Sign up
      </button>
    </form>

    <p v-if="error" class="error">{{ msg }}</p>
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
      isSigningIn: true,
      msg:
        "Something's not right. Please check that you filled in all the fields."
    };
  },

  methods: {
    //handleSignIn: processes submission of sign in form.
    //Needs testing
    handleSignIn() {
      this.submitting = true;
      this.clearStatus();

      if (this.invalidEmail() || this.invalidPassword()) {
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
        this.invalidNewEmail() ||
        this.invalidNewName() ||
        this.invalidNewPassword()
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
    },

    //TODO: Prevent invalid characters from being submitted
    invalidEmail() {
      //TODO: Better email validation
      var valid = this.user.emailAddress !== "";
      if (!valid) {
        this.msg = "Your email address is invalid.";
        return true;
      }
      return false;
    },
    invalidPassword() {
      var valid = this.user.password !== "";
      if (!valid) {
        this.msg = "Please enter a password.";
        return true;
      }
      return false;
    },
    invalidNewEmail() {
      //TODO: Better email validation
      var valid = this.newUser.emailAddress !== "";
      if (!valid) {
        this.msg = "Your email address is invalid.";
        return true;
      }
      return false;
    },
    invalidNewName() {
      var valid = this.newUser.name !== "";
      if (!valid) {
        this.msg = "Please enter a name.";
        return true;
      }
      return false;
    },
    invalidNewPassword() {
      var valid =
        this.newUser.password === this.newUser.cPassword &&
        this.newUser.password !== "";
      if (!valid) {
        this.msg = "Your passwords do not match.";
        return true;
      }
      return false;
    }
  }
};
</script>

<style scoped></style>
