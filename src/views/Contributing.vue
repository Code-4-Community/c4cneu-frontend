<template>
  <div>
    <section>
      <div class="parallax" id="plax_6">
        <h1>The Contributing Members</h1>
        <nav>
          <button class="nav-item cont">Eboard</button>
          <button class="nav-item cont">Development</button>
          <button class="nav-item cont">Testing & Security</button>
          <button class="nav-item cont">Design</button>
        </nav>
      </div>
    </section>
  </div>
</template>

<style scoped>
button:focus {
  outline: 0;
}

nav {
  background: transparent;
  position: absolute;
  overflow: hidden;
  bottom: 0;
  width: 100%;
  padding-bottom: 25px;
}

.cont {
  background: transparent;
  color: white;
}

.cont:hover {
  color: rgb(175, 172, 172);
}

.nav-item:before {
  content: "";
  position: absolute;
  bottom: 0;
  background: white;
  height: 1px;
  z-index: -1;
  left: 51%;
  right: 51%;
  -webkit-transition-property: left, right;
  transition-property: left, right;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}
.nav-item:hover:before,
.nav-item:focus:before,
.nav-item:active:before {
  left: 0;
  right: 0;
}

.nav-item.router-link-exact-active {
  color: white;
}

.parallax {
  padding-top: 40vh;
  padding-bottom: 35vh;
  color: white;
  overflow: hidden;
  position: relative;
  width: 100%;
  background-attachment: fixed;
  background-size: cover;
  -moz-background-size: cover;
  -webkit-background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
}
</style>
