<template>
  <div>
    <div v-if="post">
      <h1 class="post-title">{{ post.title }}</h1>
      <h2 class="post-date">{{ post.date.toLocaleDateString() }}</h2>
      <img :src="post.imageUrl" />
      <p class="post-content">{{ post.content }}</p>
    </div>
    <div v-if="!post">
      <p class="error">
        Oops! We couldn't find the post you requested.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Post",

  data() {
    return {
      post: this.getPost(this.$route.params.id)
    };
  },

  methods: {
    //getPost: returns the post corresponding with the given ID
    //Needs testing
    getPost(id) {
      //TICKET: implement backend API call
      return this.$store.state.posts.find(post => post.id === id);
    }
  }
};
</script>

<style scoped></style>
