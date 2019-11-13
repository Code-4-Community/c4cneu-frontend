<template>
  <div>
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
    //mediaPosts: grabs all posts.
    //Needs testing
    mediaPosts: function() {
      //Temporary:
      return this.$store.state.posts;

      //API call needs to be implemented
    }
  }
};
</script>

<style scoped></style>
