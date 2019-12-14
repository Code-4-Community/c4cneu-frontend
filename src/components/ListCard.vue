<template>
  <div class="post-item" @click="handleOnClick()">
    <div>
      <img :src="imageUrl" />
    </div>
    <div>
      <p class="post-date">{{ dateString }}</p>
      <p class="big align-left">{{ title }}</p>
      <p class="align-left">{{ desc }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListCard",

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
