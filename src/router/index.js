import Vue from "vue";
import VueRouter from "vue-router";
import Landing from "../views/Landing.vue";
import Auth from "../views/Auth.vue";
import CheckIn from "../views/CheckIn.vue";
import NewCheckin from "../views/NewCheckin/NewCheckin.vue";
import Media from "../views/Media.vue";
import Post from "../views/Post.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "landing",
    component: Landing
  },
  {
    path: "/auth",
    name: "auth",
    component: Auth
  },
  {
    path: "/checkin",
    name: "checkin",
    component: CheckIn
  },
  {
    path: "/newcheckin",
    name: "newcheckin",
    component: NewCheckin
  },
  {
    path: "/media",
    name: "media",
    component: Media
  },
  {
    path: "/post/:id",
    name: "post",
    component: Post
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
