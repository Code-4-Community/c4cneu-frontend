<template>
  <div>
    <section>
      <div class="parallax" id="plax_7">
        <h1>Apply to Code4Community</h1>
      </div>
    </section>
    <div class="content">
      <p>
        Use the form below to apply to become a contributing member.
        Contributing members are split up into four teams: Testing & Security,
        Outreach & Mentorship, Design or Development. Once accepted you will be
        placed into a team that most closely matches your skills and interests.
        Most teams will expect their members to have 10 hours available each
        week to work on C4C related projects and meet once a week to discuss
        progress and plan work, so make sure you are willing and able to take on
        that responsibility.
      </p>
      <form>
        <div class="form-item">
          <label for="form-name">Name</label>
          <br />
          <input type="text" id="form-name" v-model="name" />
        </div>
        <div class="form-item">
          <label for="year">Year</label>
          <br />
          <select v-model="year" id="year">
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
          <label for="areaInterests"
            >What part of Code4Community are you most interested in?</label
          >
          <br />
          <select v-model="areaInterests" id="areaInterests">
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
      }
    }
  }
};
</script>

<style scoped></style>
