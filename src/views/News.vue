<template>
  <div>
    <section>
      <div class="parallax" id="plax_2">
        <h1>Community News</h1>
      </div>
    </section>
    <div class="content">
      <list-card
        v-for="post in mediaPosts"
        :key="post.title"
        :title="post.title"
        :subtitle="post.desc"
        :date="post.date"
        :imageUrl="post.imageUrl"
        @click.native="onClickPost(`/post/${post.id}`)"
      />
    </div>
  </div>
</template>

<script>
import ListCard from "../components/ListCard.vue";
import { mapState, mapActions } from "vuex";

export default {
  name: "Media",

  components: {
    ListCard
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
    ...mapActions(["FETCH_POSTS"]),

    onClickPost(route) {
      // eslint-disable-next-line
      console.log("hello");
      this.$router.push(route);
    }
  }
};
</script>

<style scoped></style>
