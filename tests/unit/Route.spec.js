import { mount, createLocalVue } from "@vue/test-utils";
import App from "../../src/App.vue";
import VueRouter from "vue-router";
import Vuex from "vuex";
import routes from "../../src/router/routes.js";
import Landing from "../../src/views/Landing.vue";
import Auth from "../../src/views/Auth.vue";
import Events from "../../src/views/Events.vue";
//import EventsAdmin from "../../src/views/EventsAdmin.vue";
import Board from "../../src/views/Board.vue";
import News from "../../src/views/News.vue";
import Post from "../../src/views/Post.vue";
import Apply from "../../src/views/Apply.vue";
//import EmailSignUp from "../../src/views/EmailSignUp.vue";

const localVue = createLocalVue();
localVue.use(VueRouter);
localVue.use(Vuex);

describe("App", () => {
  const state = {
    board: [],
    posts: [
      {
        id: 1,
        title: "title 1",
        description: "description 1",
        imageUrl:
          "https://media.makeameme.org/created/1-million-dollars-tustiw.jpg",
        author: "author 1",
        date: "1111-11-1T11:11",
        content: "content 1"
      }
    ],
    events: []
  };
  const getters = {
    GET_EVENTS: () => {
      return state.events;
    },
    GET_POSTS: () => {
      return state.posts;
    },
    GET_POST_BY_ID: state => id => {
      return state.posts.find(post => post.id == id);
    },
    GET_BOARD: () => {
      return state.board;
    }
  };
  const actions = {
    FETCH_EVENTS: jest.fn(),
    FETCH_POSTS: jest.fn(),
    FETCH_BOARD: jest.fn()
  };

  const store = new Vuex.Store({
    state: state,
    getters: getters,
    actions: actions
  });

  const router = new VueRouter({ routes: routes, mode: "abstract" });
  const wrapper = mount(App, {
    store,
    localVue,
    router
  });

  it("checks that landing page route exists", async () => {
    router.push("/");
    await wrapper.vm.$nextTick();
    expect(wrapper.find(Landing).exists()).toBe(true);
  });

  it("checks for mounting on events page", async () => {
    router.push("/events");
    await wrapper.vm.$nextTick();
    expect(wrapper.find(Events).exists()).toBe(true);
    expect(actions.FETCH_EVENTS).toHaveBeenCalled();
  });

  it("checks for mounting on board page", async () => {
    router.push("/board");
    await wrapper.vm.$nextTick();
    expect(wrapper.find(Board).exists()).toBe(true);
    expect(actions.FETCH_BOARD).toHaveBeenCalled();
  });

  it("checks for mounting on news page", async () => {
    router.push("/news");
    await wrapper.vm.$nextTick();
    expect(wrapper.find(News).exists()).toBe(true);
    expect(actions.FETCH_POSTS).toHaveBeenCalled();
  });

  it("checks for mounting on post component", async () => {
    router.push("/post/1");
    await wrapper.vm.$nextTick();
    expect(wrapper.find(Post).exists()).toBe(true);
    expect(actions.FETCH_POSTS).toHaveBeenCalled();
  });

  it("checks that Auth page exists", async () => {
    router.push("/auth");
    await wrapper.vm.$nextTick();
    expect(wrapper.find(Auth).exists()).toBe(true);
  });

  it("checks that Auth page exists", async () => {
    router.push("/apply");
    await wrapper.vm.$nextTick();
    expect(wrapper.find(Apply).exists()).toBe(true);
  });
});
