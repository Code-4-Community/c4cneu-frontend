<template>
  <div>
    <div class="content">
      <div class="grid-layout">
        <GalleryCard
          v-for="galleryCard in gallery"
          :key="galleryCard.url"
          :galleryCard="galleryCard"
        />
      </div>
    </div>
  </div>
</template>

<script>
import GalleryCard from "../components/GalleryCard";
import { mapState, mapActions } from "vuex";

export default {
  name: "Gallery",

  components: {
    GalleryCard
  },

  mounted() {
    this.FETCH_GALLERY();
    //makes it so that when taken to page from router, it goes to the top
    window.scrollTo(0, 0);
  },

  computed: {
    ...mapState(["gallery"]),
    gallery() {
      return this.$store.getters.GET_GALLERY;
    }
  },

  methods: {
    ...mapActions(["FETCH_GALLERY"])
  }
};
</script>

<style>
@import url("https://s3.amazonaws.com/gallery-css/gallery.prefixed.css");

/*
.gallery {
  width: 50%;
  margin: auto;
}

.item img {
  width: 100%;
  height: 100%;
} */

.gallery-container {
  display: flex;
  justify-content: space-between;
  align-content: center;
  flex-wrap: wrap;
  padding: 1%;
}
</style>
