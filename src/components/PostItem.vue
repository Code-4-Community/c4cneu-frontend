<template>
  <div class="post-item" @click="handleOnClick()">
    <div class="post-item-image">
      <img :src="imageUrl" />
    </div>
    <div class="post-item-content">
      <h2 class="post-title">{{ title }}</h2>
      <h3 class="post-date">{{ dateString }}</h3>
      <p class="post-desc">{{ desc }}</p>
    </div>
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
  display: flex;
  height: 50vh;
  width: 80%;
  margin: 50px auto;
}

.post-item:hover {
  cursor: pointer;
}

.post-item-image {
  display: inline-block;
  flex: 1, 0, 100%;
}

.post-item-content {
  display: inline-block;
  flex: 1;

  padding: 0px;
}

.post-title,
.post-date {
  font-family: "Source Sans Pro", sans-serif;
}

.post-desc {
  font-family: "Merriweather", serif;
  margin-left: 25px;
  margin-right: 25px;
}
</style>
