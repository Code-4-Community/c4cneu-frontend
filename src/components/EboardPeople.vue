<template>
  <div>
    <div class="flexWrapper">
      <div class="row">
        <div class="column" v-bind:key="person.id" v-for="person in eboard">
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

.flexWrapper {
  margin: 15px;
  justify-content: center;
}

.row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
}

.column {
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  justify-content: center;
}

@media screen and (min-width: 800px) {
  .column {
    flex: 1;
  }
}
</style>
