<template>
  <div>
    <section>
      <div class="parallax" id="plax_8">
        <h1>Sign In / Sign Up</h1>
      </div>
    </section>
    <div class="content">
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
            v-model="user.email"
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
            type="email"
            v-model="newUser.email"
            @focus="clearStatus"
            placeholder="Email"
          />
        </div>
        <div class="form-item">
          <label>Current Year</label>
          <br />
          <select v-model="newUser.currentYear">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5+</option>
          </select>
        </div>
        <div class="form-item">
          <label>Year of graduation</label>
          <br />
          <input
            type="number"
            v-model="newUser.yog"
            @focus="clearStatus"
            placeholder="Year of graduation"
          />
        </div>
        <div class="form-item">
          <label>College</label>
          <br />
          <select name="College" v-model="newUser.college">
            <option value="College of Arts, Media and Design">CAMD</option>
            <option value="D’Amore-McKim School of Business">DMSB</option>
            <option value="Khoury College of Computer Sciences">CCIS</option>
            <option value="College of Engineering">COE</option>
            <option value="Bouvé College of Health Sciences">Bouvé</option>
            <option value="College of Social Sciences and Humanities"
              >CSSH</option
            >
            <option value="College of Professional Studies">CPS</option>
            <option value="College of Science">COS</option>
            <option value="School of Law">NUSL</option>
          </select>
        </div>
        <div class="form-item">
          <label>Major</label>
          <br />
          <input
            type="text"
            v-model="newUser.major"
            @focus="clearStatus"
            placeholder="Major"
          />
        </div>
        <div class="form-item">
          <label>Gender</label>
          <br />
          <input
            type="radio"
            value="male"
            v-model="newUser.gender"
            @focus="clearStatus"
          />
          Male
          <input
            type="radio"
            value="female"
            v-model="newUser.gender"
            @focus="clearStatus"
          />
          Female
          <input
            type="radio"
            value="other"
            v-model="newUser.gender"
            @focus="clearStatus"
          />
          Other<br />
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
            placeholder="Re-enter Password"
          />
        </div>
        <button type="button" class="form-item" @click="handleSignUp">
          Sign up
        </button>
      </form>

      <p v-if="error" class="error">{{ msg }}</p>
      <p v-if="success" class="success">{{ msg }}</p>
    </div>
  </div>
</template>

<script>
import Axios from "axios";

export default {
  name: "signin",
  data() {
    return {
      user: {
        email: "",
        password: ""
      },
      newUser: {
        firstName: "",
        lastName: "",
        email: "",
        currentYear: null,
        yog: null,
        college: "",
        major: "",
        gender: "",
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
        email: "",
        password: ""
      };
    },

    //handleSignUp: processes submission of sign up form.
    //Needs testing
    handleSignUp() {
      this.submitting = true;
      this.clearStatus();

      if (
        this.invalidNewFirstName() ||
        this.invalidNewLastName() ||
        this.invalidNewEmail() ||
        this.invalidNewCurrentYear() ||
        this.invalidNewYOG() ||
        this.invalidNewCollege() ||
        this.invalidNewMajor() ||
        this.invalidNewGender() ||
        this.invalidNewPassword()
      ) {
        this.error = true;
        return;
      }

      this.signUp(this.newUser);

      this.newUser = {
        firstName: "",
        lastName: "",
        email: "",
        yog: "",
        college: "",
        major: "",
        gender: "",
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
      let data = JSON.stringify({
        email: user.email,
        password: user.password
      });
      Axios.post(process.env.VUE_APP_LOGIN_ENDPOINT, data, {
        headers: {
          "content-type": "application/json"
        }
      }).then(
        response => {
          this.success = true;
          this.msg = response;
        },
        error => {
          error = true;
          this.msg = error;
        }
      );
    },

    //signUp: sends sign up request to backend
    //Needs testing
    signUp(newUser) {
      let data = JSON.stringify({
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        email: newUser.email,
        currentYear: newUser.currentYear,
        yog: newUser.yog,
        college: newUser.college,
        major: newUser.major,
        gender: newUser.gender,
        password: newUser.password
      });
      Axios.post(process.env.VUE_APP_SIGNUP_ENDPOINT, data, {
        headers: {
          "content-type": "application/json"
        }
      }).then(
        response => {
          this.success = true;
          this.msg = response;
        },
        error => {
          error = true;
          this.msg = error;
        }
      );
    },

    //TODO: Prevent invalid characters from being submitted
    invalidEmail() {
      //TODO: Better email validation
      var valid = this.user.email !== "";
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
      var valid = this.newUser.email !== "";
      if (!valid) {
        this.msg = "Your email address is invalid.";
        return true;
      }
      return false;
    },
    invalidNewFirstName() {
      var valid = this.newUser.firstName !== "";
      if (!valid) {
        this.msg = "Please enter a first name.";
        return true;
      }
      return false;
    },
    invalidNewLastName() {
      var valid = this.newUser.lastName !== "";
      if (!valid) {
        this.msg = "Please enter a last name.";
        return true;
      }
      return false;
    },
    invalidNewCurrentYear() {
      var valid = !!this.newUser.currentYear;
      if (!valid) {
        this.msg = "Please select a current year.";
      }
    },
    invalidNewYOG() {
      var valid = this.newUser.yog !== "";
      if (!valid) {
        this.msg = "Please enter a year of graduation.";
        return true;
      }
      return false;
    },
    invalidNewCollege() {
      var valid = this.newUser.college !== "";
      if (!valid) {
        this.msg = "Please select a college.";
        return true;
      }
      return false;
    },
    invalidNewMajor() {
      var valid = this.newUser.major !== "";
      if (!valid) {
        this.msg = "Please enter a major.";
        return true;
      }
      return false;
    },
    invalidNewGender() {
      var valid = this.newUser.gender !== "";
      if (!valid) {
        this.msg = "Please select a gender.";
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
