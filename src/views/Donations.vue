<template>
  <div>
    <div class="title"><h1>Donations</h1></div>

    <div class="inspirationalTxt">
      <h2>Donate to support Lucy's Love Bus through C4C!</h2>
    </div>

    <div class="paypal">
      <router-link to="/"
        ><img src="../assets/paypal-donate-button.png"
      /></router-link>
      {{ /* Link this to a paypal buttonn link later */ }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style scoped>
@font-face {
  font-family: "Source Sans Pro", sans-serif;
  src: url("/fonts/Source_Sans_Pro/SourceSansPro-Regular.ttf");
}

h2 {
  width: 100%;
  font-family: "Source Sans Pro", sans-serif;
  font-size: 25px;
}
</style>
