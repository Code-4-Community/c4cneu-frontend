<template>
  <div class="post-item" @click="handleOnClick()">
    <section>
      <div class="container">
        <div class="card">
          <div class="row">
            <div class="col-md-6">
              <div class="card-block">
                <h3 class="card-title">{{ title }}</h3>
                <h4 class="post-date">{{ dateString }}</h4>
                <p class="card-text">{{ desc }}</p>
              </div>
            </div>
            <div class="col-md-6">
              <img :src="imageUrl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "PostItem",
  props: {
    id: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    imageUrl: {
      type: String,
      required: true
    },
    desc: {
      type: String,
      default: ""
    },
    url: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      required: true
    }
  },
  computed: {
    dateString: function() {
      return this.date.toLocaleDateString();
    }
  },
  methods: {
    handleOnClick() {
      this.$router.push(`/post/${this.id}`);
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Merriweather:400,700|Source+Sans+Pro:300&display=swap");

.post-item {
  width: 80%;
  margin: 50px auto;
}

.card-title:hover {
  cursor: pointer;
}

.post-item-image {
  display: inline-block;
  height: 100%;
  border: 1px solid black;
}

.post-item-content {
  display: inline-block;
  height: 100%;
  border: 1px solid black;
  padding: 10px;
}

.post-title,
.post-date {
  font-family: "Source Sans Pro", sans-serif;
}

.post-desc {
  font-family: "Merriweather", serif;
}
</style>
