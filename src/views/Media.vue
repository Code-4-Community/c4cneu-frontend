<template>
  <div>
    <h1 class="page-header">Media</h1>
    <div v-for="post in mediaPosts" :key="post.id">
      <post-item
        :id="post.id"
        :title="post.title"
        :imageUrl="post.imageUrl"
        :desc="post.desc"
        :url="post.url"
        :date="post.date"
      />
    </div>
  </div>
</template>

<script>
import PostItem from "../components/PostItem.vue";

export default {
  name: "Media",
  components: {
    "post-item": PostItem
  },
  computed: {
    mediaPosts: function() {
      return this.$store.state.posts;
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Merriweather:400,700|Source+Sans+Pro:300&display=swap");

.page-header {
  font-family: "Source Sans Pro", sans-serif;
}
</style>
