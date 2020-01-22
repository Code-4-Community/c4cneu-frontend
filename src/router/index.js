import Vue from "vue";
import VueRouter from "vue-router";
import LandingView from "../views/LandingView.vue";
import Auth from "../views/Auth.vue";
import Events from "../views/Events.vue";
import EventsAdmin from "../views/EventsAdmin.vue";
import EBoardView from "../views/EBoardView.vue";
import NewsView from "../views/NewsView.vue";
import Post from "../views/Post.vue";
import Apply from "../views/Apply.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "landing",
    component: LandingView
  },
  {
    path: "/auth",
    name: "auth",
    component: Auth
  },
  {
    path: "/board",
    name: "board",
    component: EBoardView
  },
  {
    path: "/events",
    name: "events",
    component: Events
  },
  {
    path: "/eventsadmin",
    name: "eventsadmin",
    component: EventsAdmin
  },
  {
    path: "/news",
    name: "news",
    component: NewsView
  },
  {
    path: "/post/:id",
    name: "post",
    component: Post
  },
  {
    path: "/apply",
    name: "apply",
    component: Apply
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
