<template>
  <div>
    <div v-if="post">
      <h1 class="post-title">{{ post.title }}</h1>
      <h2 class="post-date">{{ post.date.toLocaleDateString() }}</h2>
      <img :src="post.imageUrl" />
      <p class="post-content">{{ post.content }}</p>
    </div>
    <div v-if="!post">
      <h1 class="post-title not-found">
        Oops! We couldn't find the post you requested.
      </h1>
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
    getPost(id) {
      return this.$store.state.posts.find(post => post.id === id);
    }
  }
};
</script>

<style scoped>
.post-title,
.post-date {
  font-family: "Source Sans Pro", sans-serif;
}

.post-content {
  font-family: "Merriweather", serif;
}

.not-found {
  color: red;
}
</style>
