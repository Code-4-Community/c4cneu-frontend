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
    //dateString: converts the date of the post to a readable date string.
    //Needs testing.
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

<style scoped></style>
