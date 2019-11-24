<template>
  <div class="gallery-container">
    <!--https://bootstrap-vue.js.org/docs/components/carousel/-->
    <div style="margin: auto;">
      <b-carousel id="carousel-fade" fade controls>
        <b-carousel-slide
          caption="First slide"
          img-src="https://picsum.photos/1024/480/?image=10"
        ></b-carousel-slide>
        <b-carousel-slide
          caption="Second Slide"
          img-src="https://picsum.photos/1024/480/?image=12"
        ></b-carousel-slide>
        <b-carousel-slide
          caption="Third Slide"
          img-src="https://picsum.photos/1024/480/?image=22"
        ></b-carousel-slide>
      </b-carousel>
    </div>
    <div>
      <div class="gallery">
        <a target="_blank" href="https://www.w3schools.com/css/img_5terre.jpg">
          <img
            src="https://www.w3schools.com/css/img_5terre.jpg"
            alt="Cinque Terre"
            width="600"
            height="400"
          />
        </a>
        <div class="desc">Add a description of the image here</div>
      </div>

      <div class="gallery">
        <a target="_blank" href="https://www.w3schools.com/css/img_5terre.jpg">
          <img
            src="https://www.w3schools.com/css/img_5terre.jpg"
            alt="Forest"
            width="600"
            height="400"
          />
        </a>
        <div class="desc">Add a description of the image here</div>
      </div>

      <div class="gallery">
        <a target="_blank" href="https://www.w3schools.com/css/img_5terre.jpg">
          <img
            src="https://www.w3schools.com/css/img_5terre.jpg"
            alt="Mountains"
            width="600"
            height="400"
          />
        </a>
        <div class="desc">Add a description of the image here</div>
      </div>

      <div class="gallery">
        <a target="_blank" href="https://www.w3schools.com/css/img_5terre.jpg">
          <img
            src="https://www.w3schools.com/css/img_5terre.jpg"
            alt="Mountains"
            width="600"
            height="400"
          />
        </a>
        <div class="desc">Add a description of the image here</div>
      </div>

      <div class="gallery">
        <a target="_blank" href="https://www.w3schools.com/css/img_5terre.jpg">
          <img
            src="https://www.w3schools.com/css/img_5terre.jpg"
            alt="Mountains"
            width="600"
            height="400"
          />
        </a>
        <div class="desc">Add a description of the image here</div>
      </div>

      <div class="gallery">
        <a target="_blank" href="https://www.w3schools.com/css/img_5terre.jpg">
          <img
            src="https://www.w3schools.com/css/img_5terre.jpg"
            alt="Mountains"
            width="600"
            height="400"
          />
        </a>
        <div class="desc">Add a description of the image here</div>
      </div>

      <div class="gallery">
        <a target="_blank" href="https://www.w3schools.com/css/img_5terre.jpg">
          <img
            src="https://www.w3schools.com/css/img_5terre.jpg"
            alt="Mountains"
            width="600"
            height="400"
          />
        </a>
        <div class="desc">Add a description of the image here</div>
      </div>

      <div class="gallery">
        <a target="_blank" href="https://www.w3schools.com/css/img_5terre.jpg">
          <img
            src="https://www.w3schools.com/css/img_5terre.jpg"
            alt="Mountains"
            width="600"
            height="400"
          />
        </a>
        <div class="desc">Add a description of the image here</div>
      </div>

      <div class="gallery">
        <a target="_blank" href="https://www.w3schools.com/css/img_5terre.jpg">
          <img
            src="https://www.w3schools.com/css/img_5terre.jpg"
            alt="Mountains"
            width="600"
            height="400"
          />
        </a>
        <div class="desc">Add a description of the image here</div>
      </div>

      <div class="gallery">
        <a target="_blank" href="https://www.w3schools.com/css/img_5terre.jpg">
          <img
            src="https://www.w3schools.com/css/img_5terre.jpg"
            alt="Mountains"
            width="600"
            height="400"
          />
        </a>
        <div class="desc">Add a description of the image here</div>
      </div>

      <div class="gallery">
        <a target="_blank" href="https://www.w3schools.com/css/img_5terre.jpg">
          <img
            src="https://www.w3schools.com/css/img_5terre.jpg"
            alt="Mountains"
            width="600"
            height="400"
          />
        </a>
        <div class="desc">Add a description of the image here</div>
      </div>
    </div>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

export default {
  name: "Gallery"
};
</script>

<style scoped>
#carousel-fade {
  text-shadow: 0px 0px 2px #000;
  width: 100%;
  height: 480px;
  display: flex;
  justify-content: center;
}

.gallery-container {
  display: flex;
  justify-content: space-between;
  align-content: center;
  flex-wrap: wrap;
  padding: 1%;
}

div.gallery {
  margin: 5px;
  border: 1px solid #ccc;
  float: left;
  width: 180px;
}

div.gallery img {
  width: 100%;
  height: auto;
}

div.desc {
  padding: 15px;
  text-align: center;
}
</style>
