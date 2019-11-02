<template>
  <div>
    <div class="flexWrapper">
      <div class="row">
        <div class="column">
          <div class="blue-column">Some Text in Column One</div>
        </div>
        <div class="column">
          <div class="green-column">Some Text in Column Two</div>
        </div>
        <div class="column">
          <div class="orange-column">Some Text in Column Two</div>
        </div>
      </div>
      <div class="row">
        <div class="column">
          <div class="blue-column">Some Text in Column One</div>
        </div>
        <div class="column">
          <div class="green-column">Some Text in Column Two</div>
        </div>
        <div class="column">
          <div class="orange-column">Some Text in Column Two</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "people",
  props: ["eboard"]
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap");
@import url("https://fonts.googleapis.com/css?family=Merriweather:400,700&display=swap");
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");
h1 {
  font-family: "Source Sans Pro", sans-serif;
  font-size: 32px;
  font-weight: 600;
  color: white;
  padding: 20px;
  margin: 0;
}
h2 {
  font-family: "Source Sans Pro", sans-serif;
  font-size: 128px;
  font-weight: 600;
  line-height: 120px;
  letter-spacing: -4px;
  color: white;
  padding: 20px;
  margin: 0;
}
h3 {
  font-family: "Source Sans Pro", sans-serif;
  font-size: 22px;
  font-weight: 400;
  color: white;
  padding: 20px;
  margin: 0;
}
p {
  font-family: "Merriweather", serif;
  font-weight: 400;
  color: white;
  font-size: 16px;
  line-height: 32px;
  margin-right: 15%;
  margin-left: 15%;
}
pb {
  font-family: "Merriweather", serif;
  font-weight: 700;
  color: white;
  font-size: 16px;
  line-height: 32px;
}
@media only screen and (max-width: 768px) {
  h2 {
    font-size: 48px;
    letter-spacing: 0px;
  }
  p {
    margin-right: 2vh;
    margin-left: 2vh;
  }
}
@media only screen and (min-width: 769px) {
}

.flexWrapper {
  margin: 15px;
  background-color: red;
}

.row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
}

.column {
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
}

.blue-column {
  background-color: blue;
  height: 100px;
}

.green-column {
  height: 100px;
  background-color: green;
}

@media screen and (min-width: 800px) {
  .column {
    flex: 1;
  }
}
</style>
