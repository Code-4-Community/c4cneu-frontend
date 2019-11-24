<template>
  <div class="post-item" @click="handleOnClick()">
    <div class="card">
      <div class="card-date">
        <h4 class="post-date">{{ dateString }}</h4>
      </div>
      <div class="card-block">
        <h3 class="card-title">{{ title }}</h3>
        <p class="card-text">{{ desc }}</p>
      </div>
      <div>
        <img :src="imageUrl" />
      </div>
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
      type: Number,
      required: true
    }
  },

  computed: {
    //dateString: converts the date of the post to a readable date string.
    //Needs testing.
    dateString() {
      var options = { year: "numeric", month: "short", day: "numeric" };
      var postDate = new Date(this.date * 1000);
      return postDate.toLocaleDateString("en-US", options);
    }
  },

  methods: {
    handleOnClick() {
      this.$router.push(`/post/${this.id}`);
    }
  }
};
</script>

<style scoped></style>
