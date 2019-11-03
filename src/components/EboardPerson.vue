<template>
  <div>
    <div v-bind:key="person.id" v-for="person in eboard">
      <img
        src="src/assets/Eboard/stephen_alt.jpg"
        alt="Member"
        style="width:100%"
      />
      <div class="container">
        <pb>{{ person.name }}</pb>
        <p class="title">{{ person.position }}</p>
        <p>{{ person.bio }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "person",
  props: ["eboard"]
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap");
@import url("https://fonts.googleapis.com/css?family=Merriweather:400,700&display=swap");
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");

.p {
  font-family: "Merriweather", serif;
  font-weight: 400;
  color: black;
  font-size: 16px;
  line-height: 32px;
  margin-right: 15%;
  margin-left: 15%;
}
.pb {
  font-family: "Merriweather", serif;
  font-weight: 700;
  color: black;
  font-size: 16px;
  line-height: 32px;
}
@media only screen and (max-width: 768px) {
  .h2 {
    font-size: 48px;
    letter-spacing: 0px;
  }
  .p {
    margin-right: 2vh;
    margin-left: 2vh;
  }
}
@media only screen and (min-width: 769px) {
}

.title {
  color: grey;
  font-style: italic;
}
</style>
