<template>
  <div>
    <div class="flexWrapper">
      <div class="row">
        <div
          class="column"
          v-bind:key="person.id"
          v-for="person in eboard.slice(0, 3)"
        >
          <div>
            <Person v-bind:person="person" />
          </div>
        </div>
      </div>
      <div class="row">
        <div
          class="column"
          v-bind:key="person.id"
          v-for="person in eboard.slice(3, 6)"
        >
          <div>
            <Person v-bind:person="person" />
          </div>
        </div>
      </div>
      <div class="row">
        <div
          class="column"
          v-bind:key="person.id"
          v-for="person in eboard.slice(6, 7)"
        >
          <div>
            <Person v-bind:person="person" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Person from "./EboardPerson";
export default {
  name: "people",
  components: {
    Person
  },
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
  color: black;
  padding: 20px;
  margin: 0;
}
h2 {
  font-family: "Source Sans Pro", sans-serif;
  font-size: 128px;
  font-weight: 600;
  line-height: 120px;
  letter-spacing: -4px;
  color: black;
  padding: 20px;
  margin: 0;
}
h3 {
  font-family: "Source Sans Pro", sans-serif;
  font-size: 22px;
  font-weight: 400;
  color: black;
  padding: 20px;
  margin: 0;
}
p {
  font-family: "Merriweather", serif;
  font-weight: 400;
  color: black;
  font-size: 16px;
  line-height: 32px;
  margin-right: 15%;
  margin-left: 15%;
}
pb {
  font-family: "Merriweather", serif;
  font-weight: 700;
  color: black;
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

.row {
  display: flex;
  flex-wrap: wrap;
  padding: 0 4px;
  justify-content: center;
  padding-bottom: 40px;
}

/* Create four equal columns that sits next to each other */
.column {
  flex: 30%;
  max-width: 30%;
  padding: 0 4px;
  justify-content: center;
}

.column img {
  margin-top: 8px;
  vertical-align: middle;
  justify-content: center;
}

/* Responsive layout - makes a two column-layout instead of four columns */
@media (max-width: 800px) {
  .column {
    flex: 48%;
    max-width: 48%;
  }
}

/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
@media (max-width: 600px) {
  .column {
    flex: 100%;
    max-width: 100%;
  }
}
</style>
