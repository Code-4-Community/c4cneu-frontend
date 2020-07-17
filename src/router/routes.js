import Landing from "../views/Landing.vue";
import Auth from "../views/Auth.vue";
import Events from "../views/Events.vue";
import EventsAdmin from "../views/EventsAdmin.vue";
import Board from "../views/Board.vue";
import News from "../views/News.vue";
import Post from "../views/Post.vue";
import Apply from "../views/Apply.vue";
import EmailSignUp from "../views/EmailSignUp.vue";
import Gallery from "../views/Gallery";

export default [
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
    path: "/board",
    name: "board",
    component: Board
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
    component: News
  },
  {
    path: "/post/:id",
    name: "post",
    component: Post
  },
  {
    path: "/gallery",
    name: "gallery",
    component: Gallery
  },
  {
    path: "/apply",
    name: "apply",
    component: Apply
  },
  {
    path: "/emailsignup",
    name: "signup",
    component: EmailSignUp
  }
];
