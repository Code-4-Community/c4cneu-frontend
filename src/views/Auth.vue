<template>
  <div class="container">
    <!-- TODO: MAKE TABS INSTEAD OF BUTTONS -->
    <button @click="openSignIn">Sign in</button>
    <button @click="openSignUp">Sign up</button>

    <!-- TODO: ADD LABEL-FOR TO MAKE LABELS WORK -->
    <sign-in v-if="isSigningIn" :signIn="signIn" />
    <sign-up v-if="!isSigningIn" :signUp="signUp" />
  </div>
</template>

<script>
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
export default {
  name: "Auth",
  components: {
    "sign-in": SignIn,
    "sign-up": SignUp
  },
  data() {
    return {
      isSigningIn: true
    };
  },

  methods: {
    //openSignIn: opens sign in form
    openSignIn() {
      this.isSigningIn = true;
      //this.clearStatus();
    },

    //openSignUp: opens sign up form
    openSignUp() {
      this.isSigningIn = false;
      //this.clearStatus();
    },

    //signIn: sends sign-in request to backend
    //Needs testing
    signIn(user) {
      //Temporary:
      user;
      // eslint-disable-next-line no-console
      console.log("Inside signIn()");
      //TODO: implement backend API call
    },

    //signUp: sends sign up request to backend
    //Needs testing
    signUp(newUser) {
      //Temporary:
      newUser;
      // eslint-disable-next-line no-console
      console.log("Inside signUp()");
      //TODO: implement backend API call
    }
  }
};
</script>

<style scoped></style>
