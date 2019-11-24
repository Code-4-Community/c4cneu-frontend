<template>
  <div>
    <h1>Apply for Code 4 Community!</h1>
    <form class="form-layout">
      <div class="form-item">
        <label for="form-name">Name:</label>
        <input
          type="text"
          id="form-name"
          v-model="name"
          placeholder="Enter your name"
        />
      </div>
      <div class="form-item">
        <p>Year:</p>
        <select v-model="year">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <div class="form-item">
        <label for="form-major">Major:</label>
        <input
          type="text"
          id="form-major"
          v-model="major"
          placeholder="CS, English ..."
        />
      </div>
      <div class="form-item">
        <label for="form-resume">Upload your resume here:</label>
        <input
          type="file"
          id="form-resume"
          ref="resume"
          v-on:change="handleFileUpload()"
        />
      </div>
      <div class="form-item">
        Which parts of Code 4 Community are you interested in?
        <input
          id="form-area-frontend"
          type="checkbox"
          v-model="areaInterests"
          value="frontend"
        />
        <label for="form-area-frontend">Frontend</label>
        <input
          id="form-area-backend"
          type="checkbox"
          v-model="areaInterests"
          value="backend"
        />
        <label for="form-area-backend">Backend</label>
        <input
          id="form-area-testing"
          type="checkbox"
          v-model="areaInterests"
          value="testing"
        />
        <label for="form-area-testing">Testing</label>
        <input
          id="form-area-security"
          type="checkbox"
          v-model="areaInterests"
          value="security"
        />
        <label for="form-area-security">Security</label>
        <input
          id="form-area-design"
          type="checkbox"
          v-model="areaInterests"
          value="design"
        />
        <label for="form-area-design">Design</label>
        <input
          id="form-area-outreach"
          type="checkbox"
          v-model="areaInterests"
          value="outreach"
        />
        <label for="form-area-outreach">Outreach</label>
      </div>
      <div class="form-item">
        <label for="form-prior-involvement">
          Have you had any prior involvement with C4C (e.g. attending
          workshops)? If so, explain.
        </label>
        <textarea id="form-prior-involvement" v-model="priorInvolvement" />
      </div>
      <div class="form-item">
        <label for="form-why-join">
          Why do you want to join Code 4 Community?
        </label>
        <textarea id="form-why-join" v-model="whyJoin" />
      </div>
      <div class="form-item">
        <input
          type="submit"
          :value="submitText"
          :disabled="!validForm()"
          v-on:click="handleSubmit($event)"
        />
      </div>
    </form>
  </div>
</template>

<script>
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
      areaInterests: []
    };
  },
  computed: {
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
      }
    }
  }
};
</script>

<style scoped></style>
