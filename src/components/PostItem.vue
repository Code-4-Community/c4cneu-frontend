<template>
  <div class="post-item" @click="handleOnClick()">
    <div>
      <img :src="imageUrl" />
    </div>
    <div>
      <p class="post-date">{{ dateString }}</p>
      <p class="big align-left">{{ title }}</p>
      <p class="align-left">{{ desc }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostItem",

  props: {
    id: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    imageUrl: {
      type: String,
      required: true
    },
    desc: {
      type: String,
      default: ""
    },
    url: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      required: true
    }
  },

  computed: {
    //dateString: converts the date of the post to a readable date string.
    //Needs testing.
    dateString: function() {
      var options = { year: "numeric", month: "short", day: "numeric" };
      return this.date.toLocaleDateString("en-US", options);
    }
  },

  methods: {
    handleOnClick() {
      this.$router.push(`/post/${this.id}`);
    }
  }
};
</script>

<style scoped></style>
