<template>
  <div>
    <form
      action="https://gmail.us4.list-manage.com/subscribe/post?u=4b534cd2e8fe8be8150d03977&amp;id=b1915b8b8b"
      method="post"
      id="mc-embedded-subscribe-form"
      name="mc-embedded-subscribe-form"
      class="validate"
      target="_blank"
      novalidate
    >
      <h3>Join our mailing list to get updates on C4C!</h3>
      <div class="form-item">
        <label for="email">Email</label> <span class="required">*</span>
        <br />
        <input
          type="email"
          value=""
          name="email"
          class="email"
          id="mce-EMAIL"
          v-model="email"
          required="required"
        />
      </div>

      <div class="form-item">
        <label for="first">First Name</label> <span class="required">*</span>
        <br />
        <input
          type="text"
          value=""
          name="first"
          class=""
          id="mce-FNAME"
          v-model="first"
          required="required"
        />
      </div>

      <div class="form-item">
        <label for="last">Last Name</label> <span class="required">*</span>
        <br />
        <input
          type="text"
          value=""
          name="last"
          class=""
          id="mce-LNAME"
          v-model="last"
          required="required"
        />
      </div>

      <div class="form-item">
        <label for="year">Year in School</label>
        <br />
        <input type="text" value="" name="year" class="" id="mce-MMERGE5" />
      </div>

      <div class="form-item">
        <label for="college">Northeastern College</label>
        <br />
        <input type="text" value="" name="college" class="" id="mce-MMERGE6" />
      </div>

      <div class="form-item">
        <label for="interest">Year in School</label>
        <br />
        <input type="text" value="" name="interest" class="" id="mce-MMERGE7" />
      </div>

      <p v-if="error" class="error">Please enter valid credentials</p>
      <div id="mce-responses" class="clear">
        <div class="response" id="mce-error-response" style="display:none" />
        <div class="response" id="mce-success-response" style="display:none" />
      </div>
      <input
        type="submit"
        :disabled="disableButton"
        value="Subscribe"
        name="subscribe"
        id="mc-embedded-subscribe"
        class="button"
      />
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      first: "",
      last: "",
      error: false
    };
  },

  methods: {
    ajaxSaveToEmailList() {
      if (this.invalidNewEmail()) {
        this.error = true;
        return;
      }

      //Backend ajax call
    }
  },

  computed: {
    disableButton() {
      return (
        this.first.length === 0 ||
        this.last.legnth === 0 ||
        this.email.length === 0
      );
    }
  },

  invalidEmail() {
    //Regex for email validation
    return this.email.length() > 0;
  }
};
</script>
