<template>
  <div class="post-item">
    <div>
      <img :src="imageUrl" />
    </div>
    <div>
      <p class="post-date">{{ dateString }}</p>
      <p class="big align-left">{{ title }}</p>
      <p class="align-left">{{ subtitle }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListCard",

  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      default: ""
    },
    imageUrl: {
      type: String,
      required: false
    },
    date: {
      type: Number,
      required: true
    }
  },

  computed: {
    dateString() {
      var options = { year: "numeric", month: "short", day: "numeric" };
      var postDate = new Date(this.date);
      return postDate.toLocaleDateString("en-US", options);
    }
  }
};
</script>

<style scoped></style>
