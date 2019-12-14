<template>
  <div class="page">
    <div class="container">
      <figure>
        <img :src="person.imageUrl" alt="Member" style="width:100%" />
        <figcaption>
          <strong>{{ person.name }}</strong>
        </figcaption>
      </figure>
      <p class="title">{{ person.position }}</p>
      <p class="linkedin">
        <a v-bind:href="`mailto:${person.email}`"> {{ person.email }} </a>
        <br />
        <a v-bind:href="person.linkedinLink"> LinkedIn </a>
      </p>
      <p>{{ person.bio }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "person",
  props: ["person"]
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap");
@import url("https://fonts.googleapis.com/css?family=Merriweather:400,700&display=swap");
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");

.page {
  padding: 1em;
}

p {
  font-family: "Merriweather", serif;
  font-weight: 400;
  color: black;
  font-size: 16px;
  line-height: 25px;
}

.title {
  color: grey;
  font-style: italic;
}

.container {
  width: auto;
  text-align: left;
  margin: auto;
  height: auto;
  padding-left: 20px;
  padding-right: 20px;
}

.pb {
  font-family: "Merriweather", serif;
  font-weight: 700;
  color: black;
  font-size: 16px;
  line-height: 32px;
}

img {
  width: 100%;
  height: 100%;
}

@media only screen and (max-width: 1303px) {
  .h2 {
    font-size: 48px;
    letter-spacing: 0px;
  }
  .p {
    margin-right: 2vh;
    margin-left: 2vh;
  }

  .container {
    width: 340px;
  }
}

@media only screen and (min-width: 769px) {
}
</style>
