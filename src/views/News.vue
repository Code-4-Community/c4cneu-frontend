<template>
  <div>
    <section>
      <div class="parallax" id="plax_2">
        <h1>Extra Extra!</h1>
      </div>
    </section>
    <div class="posts" v-for="post in mediaPosts" :key="post.id">
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
import { mapState, mapActions } from "vuex";

export default {
  name: "Media",

  components: {
    "post-item": PostItem
  },
  mounted() {
    this.FETCH_POSTS();
  },
  computed: {
    ...mapState(["posts"]),

    //mediaPosts: grabs all posts.
    //Needs testing
    mediaPosts() {
      //Temporary:
      return this.$store.getters.GET_POSTS;

      //API call needs to be implemented
    }
  },
  methods: {
    ...mapActions(["FETCH_POSTS"])
  }
};
</script>

<style scoped></style>
