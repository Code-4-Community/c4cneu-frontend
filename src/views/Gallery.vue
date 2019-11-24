<template>
  <div class="gallery-container">
    <div class="gallery autoplay items-3">
      <div id="item-1" class="control-operator"></div>
      <div id="item-2" class="control-operator"></div>
      <div id="item-3" class="control-operator"></div>

      <figure class="item">
        <img src="https://www.w3schools.com/bootstrap/chicago.jpg" />
      </figure>

      <figure class="item">
        <img src="https://www.w3schools.com/bootstrap/la.jpg" />
      </figure>

      <figure class="item">
        <img src="https://www.w3schools.com/bootstrap/ny.jpg" />
      </figure>

      <div class="controls">
        <a href="#item-1" class="control-button">•</a>
        <a href="#item-2" class="control-button">•</a>
        <a href="#item-3" class="control-button">•</a>
      </div>
    </div>

    <div>
      <div class="grid-gallery">
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

      <div class="grid-gallery">
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

      <div class="grid-gallery">
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

      <div class="grid-gallery">
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

      <div class="grid-gallery">
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

      <div class="grid-gallery">
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

      <div class="grid-gallery">
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

      <div class="grid-gallery">
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

      <div class="grid-gallery">
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

      <div class="grid-gallery">
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

      <div class="grid-gallery">
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
export default {
  name: "Gallery"
};
</script>

<style scoped>
@import url("https://s3.amazonaws.com/gallery-css/gallery.prefixed.css");

.gallery {
  width: 50%;
  margin: auto;
}

.item img {
  width: 100%;
  height: 100%;
}

.gallery-container {
  display: flex;
  justify-content: space-between;
  align-content: center;
  flex-wrap: wrap;
  padding: 1%;
}

div.grid-gallery {
  margin: 5px;
  border: 1px solid #ccc;
  float: left;
  width: 180px;
}

div.grid-gallery img {
  width: 100%;
  height: auto;
}

div.desc {
  padding: 15px;
  text-align: center;
}
</style>
