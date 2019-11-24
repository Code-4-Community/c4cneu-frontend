import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";
import VueAxios from "vue-axios";

Vue.use(Vuex);
Vue.use(VueAxios, Axios);

export default new Vuex.Store({
  state: {
    board: [],
    posts: [],
    events: []
  },
  getters: {
    BOARD: state => {
      return state.board;
    },
    POSTS: state => {
      return state.posts;
    },
    GET_POST_BY_ID: state => id => {
      return state.posts.find(post => post.id === id);
    },
    EVENTS: state => {
      return state.events;
    }
  },
  mutations: {
    SET_BOARD(state, eboard) {
      state.board = eboard;
    },
    SET_POSTS(state, posts) {
      state.posts = posts;
    },
    SET_EVENTS(state, events) {
      state.events = events;
    }
  },
  actions: {
    FETCH_BOARD: async ({ commit }) => {
      let { data } = await Axios.get(
        "https://my-json-server.typicode.com/willmt80/demo/eboard"
      );
      commit("SET_BOARD", data);
    },
    FETCH_POSTS: async ({ commit }) => {
      let { data } = await Axios.get(
        "https://my-json-server.typicode.com/willmt80/demo/posts"
      );
      commit("SET_POSTS", data);
    },
    FETCH_EVENTS: async ({ commit }) => {
      let { data } = await Axios.get(
        "https://my-json-server.typicode.com/willmt80/demo/events"
      );
      commit("SET_EVENTS", data);
    }
  }
});
