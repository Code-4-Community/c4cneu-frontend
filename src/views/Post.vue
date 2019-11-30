<template>
  <div>
    <div class="content">
      <div class="post-header" v-if="post">
        <div>
          <h1 class="post-title">{{ post.title }}</h1>
          <h2 class="post-date">{{ dateString }}</h2>
        </div>
        <img class="post-image" :src="post.imageUrl" />
      </div>
      <p class="post-content">{{ post.content }}</p>
      <div v-if="!post">
        <p class="error">
          Oops! We couldn't find the post you requested.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Post",
  data() {
    return {
      post: this.getPost(this.$route.params.id)
    };
  },
  mounted() {
    this.FETCH_POSTS();
  },
  computed: {
    ...mapState(["posts"]),
    dateString() {
      var postDate = new Date(this.post.date * 1000);
      return postDate.toLocaleDateString();
    }
  },
  methods: {
    ...mapActions(["FETCH_POSTS"]),
    //getPost: returns the post corresponding with the given ID
    //Needs testing
    getPost(id) {
      //TICKET: implement backend API call
      return this.$store.getters.GET_POST_BY_ID(id);
    }
  }
};
</script>

<style scoped></style>
