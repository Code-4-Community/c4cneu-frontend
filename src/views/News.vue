<template>
  <div>
    <loading
      :active.sync="postsLoading"
      :can-cancel="true"
      :on-cancel="onCancel"
      :is-full-page="fullPage"
    ></loading>
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
import Loading from "vue-loading-overlay";

export default {
  name: "Media",

  components: {
    ListCard,
    Loading
  },

  mounted() {
    this.FETCH_POSTS();
  },

  computed: {
    ...mapState(["posts"]),

    postsLoading() {
      return this.$store.getters.GET_POSTS.isloading;
    },

    mediaPosts() {
      var posts = this.$store.getters.GET_POSTS.postArray;
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
