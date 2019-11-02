import Vue from "vue";
import VueRouter from "vue-router";
import Landing from "../views/Landing.vue";
import Auth from "../views/Auth.vue";
import CheckIn from "../views/CheckIn.vue";
import Eboard from "../views/Eboard.vue";

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
    path: "/eboard",
    name: "eboard",
    component: Eboard
  },

  {
    path: "/checkin",
    name: "checkin",
    component: CheckIn
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
