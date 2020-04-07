<template>
  <div>
    <section>
      <div class="parallax" id="plax_7">
        <h1>Apply to Code4Community</h1>
      </div>
    </section>
    <div class="row">
      <div class="column">
        <h1>Apply</h1>
        <form id="applyForm">
          <div @submit.prevent="onSubmit">
            <input
              type="text"
              id="form-name"
              placeholder="Name"
              v-model="name"
            />
          </div>
          <div class="form-item">
            <input
              type="text"
              id="form-major"
              placeholder="Major"
              v-model="major"
            />
          </div>
          <div class="form-item">
            <select v-model="year" id="year">
              <option value="" disabled selected hidden>Year</option>
              <option value="1">First</option>
              <option value="2">Second</option>
              <option value="3">Third</option>
              <option value="4">Fourth</option>
              <option value="5">Fifth</option>
            </select>
          </div>
          <div class="form-item">
            <label for="form-resume">Please upload your resume</label>
            <br />
            <input
              type="file"
              id="form-resume"
              ref="resume"
              v-on:change="handleFileUpload()"
            />
          </div>
          <div class="form-item">
            <label for="areaInterests"
              >What part of Code4Community are you most interested in?</label
            >
            <br />
            <select v-model="areaInterests" id="areaInterests">
              <option value="" disabled selected hidden>Options</option>
              <option value="frontend">Frontend</option>
              <option value="backend">Backend</option>
              <option value="testing">Testing</option>
              <option value="security">Security</option>
              <option value="design">Design</option>
              <option value="outreach">Outreach</option>
            </select>
          </div>
          <div class="form-item">
            <label for="form-prior-involvement">
              Have you had any prior involvement with C4C (e.g. attending
              workshops)? If so, explain.
            </label>
            <br />
            <textarea id="form-prior-involvement" v-model="priorInvolvement" />
          </div>
          <div class="form-item">
            <label for="form-why-join"
              >Why do you want to join Code4Community?</label
            >
            <br />
            <textarea id="form-why-join" v-model="whyJoin" />
          </div>
          <div class="form-item">
            <button
              type="submit"
              :disabled="!validForm()"
              v-on:click="handleSubmit($event)"
            >
              Apply
            </button>
          </div>
        </form>
      </div>
      <div class="column">
        <h1>Information</h1>
        <h5>
          Apply to become a contributing member using the form on this page.
          Contributing members are split up into four teams: Testing & Security,
          Outreach & Mentorship, Design or Development. Once accepted you will
          be placed into a team that most closely matches your skill set and
          interests. Most teams will expect their members to have 10 hours
          available each week to work on C4C related projects and meet once a
          week to discuss progress and plan work, so make sure you are willing
          and able to take on that responsibility. If you have any questions
          feel free to reach out using any of the links at the bottom of page!
        </h5>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Apply",
  data() {
    return {
      name: "",
      year: "",
      major: "",
      resume: null,
      priorInvolvement: "",
      whyJoin: "",
      areaInterests: [],
      errors: [],
      applicants: []
    };
  },
  computed: {
    applied() {
      return this.$store.getters.GET_APPLY;
    },
    validName: function() {
      return this.name.trim() !== "";
    },
    validYear: function() {
      return ["1", "2", "3", "4", "5"].includes(this.year);
    },
    validMajor: function() {
      return this.major.trim() !== "";
    },
    validResume: function() {
      return this.resume instanceof File;
    },
    validPriorInvolvement: function() {
      return this.priorInvolvement.trim() !== "";
    },
    validWhyJoin: function() {
      return this.whyJoin.trim() !== "";
    },
    validAreaInterests: function() {
      return this.areaInterests.length > 0;
    },
    // This computed property is never used
    submitText: function() {
      return this.validForm() ? "Apply!" : "Please complete the form.";
    }
  },
  methods: {
    handleFileUpload() {
      this.resume = this.$refs.resume.files.item(0);
    },
    validForm() {
      return (
        this.validName &&
        this.validYear &&
        this.validMajor &&
        this.validResume &&
        this.validPriorInvolvement &&
        this.validWhyJoin &&
        this.validAreaInterests
      );
    },
    handleSubmit(event) {
      if (this.validForm()) {
        event.preventDefault();
        let formData = new FormData();
        formData.append("name", this.name);
        formData.append("year", this.year);
        formData.append("major", this.major);
        formData.append("resume", this.resume);
        formData.append("priorInvolvement", this.priorInvolvement);
        formData.append("whyJoin", this.whyJoin);
        formData.append("areaInterests", this.areaInterests);
        axios
          .post(process.env.VUE_APP_APPLY_ENDPOINT, {
            name: this.name,
            year: this.year,
            major: this.major,
            resume: "TEMPORARY RESUME",
            priorInvolvement: this.priorInvolvement,
            whyJoin: this.whyJoin,
            areaInterests: this.areaInterests
          })
          .then(response => {
            this.applicants = response.data;
          })
          .catch(e => {
            this.errors.push(e);
          });
        this.$store.mutations.SET_APPLY(this.$store.state, formData);
      }
    }
  }
};
</script>

<style scoped>
.row {
  display: flex;
  width: 100%;
}

.column {
  flex: 50%;
  padding: 2%;
}

form {
  padding: 10px auto;
  text-align: center;
  width: 100%;
}

form label {
  text-align: left;
}

label {
  width: 80%;
}

input {
  padding: 8px;
  font-size: 18px;
  border: 1px solid #bec2f7;
}

button {
  background-color: #f0f0f0;
  width: 80%;
  border: none;
  padding: 15px 20px 14px 20px;
  margin: 0 0 0 0;
  font-size: 18px;
  text-transform: uppercase;
  border-radius: 1px;
}

select {
  border: 1px solid #bec2f7;
  font-size: 18px;
  width: 80%;
}

form div.form-item {
  margin: 10px 0 0 0;
}

input[type="text"] {
  width: 80%;
}

textarea {
  height: 100px;
  padding: 1px 5px;
}

h5 {
  margin: 30px 0px;
  line-height: 1.7em;
}
</style>
