<template>
  <div class="grid-gallery">
    <img :src="galleryCard.imageUrl" :alt="galleryCard.title" />

    <div class="desc">{{ galleryCard.title }}</div>
  </div>
</template>

<script>
export default {
  name: "galleryCard",
  props: ["galleryCard"]
};
</script>

<style scoped>
div.grid-gallery {
  margin: 5px;
  border: 1px solid #ccc;
  float: left;
  width: 180px;
}

div.grid-gallery img {
  width: 100%;
  height: 100%;
}

div.desc {
  padding: 15px;
  text-align: center;
}
</style>
