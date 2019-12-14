<template>
  <div>
    <section>
      <div class="parallax" id="plax_2">
        <h1>Community News</h1>
      </div>
    </section>
    <div class="content">
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
  </div>
</template>

<script>
import ListCard from "../components/ListCard.vue";
import { mapState, mapActions } from "vuex";

export default {
  name: "Media",

  components: {
    "post-item": ListCard
  },
  mounted() {
    this.FETCH_POSTS();
  },
  computed: {
    ...mapState(["posts"]),

    mediaPosts() {
      return this.$store.getters.GET_POSTS;
    }
  },
  methods: {
    ...mapActions(["FETCH_POSTS"])
  }
};
</script>

<style scoped></style>
