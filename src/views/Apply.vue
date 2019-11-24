<template>
  <div class="container">
    <!-- TODO: ADD PARALLAX -->
    <h1>Apply to Code 4 Community</h1>
    <form>
      <div class="form-item">
        <label for="form-name">Name</label>
        <br />
        <input
          type="text"
          id="form-name"
          v-model="name"
          placeholder="Enter your name"
        />
      </div>
      <div class="form-item">
        <br />
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
        <label for="form-major">Major</label>
        <br />
        <input type="text" id="form-major" v-model="major" />
      </div>
      <div class="form-item">
        <label for="form-resume">Resume</label>
        <br />
        <input
          type="file"
          id="form-resume"
          ref="resume"
          v-on:change="handleFileUpload()"
        />
      </div>
      <div class="form-item">
        <label for="form-why-join"
          >Why do you want to join Code 4 Community?</label
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
      whyJoin: ""
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
    validWhyJoin: function() {
      return this.whyJoin.trim() !== "";
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
        this.validWhyJoin
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
        formData.append("whyJoin", this.whyJoin);
      }
    }
  }
};
</script>

<style scoped></style>
