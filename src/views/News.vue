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
        :subtitle="post.description"
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
      var posts = this.$store.getters.GET_POSTS;
      //Sorting function should return less than 0 when post1's date is before (<) post2's date:
      posts.sort((post1, post2) => {
        return post1.date - post2.date;
      });
      return posts;
    }
  },
  methods: {
    ...mapActions(["FETCH_POSTS"]),

    onClickPost(route) {
      this.$router.push(route);
    }
  }
};
</script>

<style scoped></style>
