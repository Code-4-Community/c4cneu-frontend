<template>
  <figure>
    <img :src="galleryCard.imageUrl" alt="Gallery Card" />
    <figcaption>
      <strong>{{ galleryCard.title }}</strong>
    </figcaption>
  </figure>
</template>

<script>
export default {
  name: "galleryCard",
  props: ["galleryCard"]
};
</script>

<style scoped>
figure {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-color: #000000;
  height: 470px;
  border-radius: 5%;
}
</style>
