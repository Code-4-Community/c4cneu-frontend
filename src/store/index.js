import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts: [
      {
        id: "abcdef",
        title: "Code 4 Community Develops New Website",
        imageUrl:
          "https://assets.pcmag.com/media/images/321816-computer-code.jpg?thumb=y&width=275&height=275",
        url: "",
        desc:
          "Code 4 Community's testing and security team is developing a new website for the club, using Vue.js on the front-end.",
        date: new Date(2019, 9, 29),
        content:
          "Code 4 Community's testing and security team is developing a new website for this club, suing Vue.js on the front-end. Here is some more content."
      },
      {
        id: "ghijklf",
        title: "Code 4 Community Receives $1,000,000 grant",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnX9c3ggBCEEz87U6EfHLv6KMEhopAI_sWBYE-CkS41VCoDiJ-ug&s",
        url: "",
        desc:
          "Code 4 Community receives generous $1,000,000 grant from billionaire and philanthropist Zach Goldberg.",
        date: new Date(2019, 10, 1),
        content:
          "Code 4 Community receives generous $1,000,00 grant from billionaire and philanthropist Zach Goldberg. Here is some more content."
      }
    ],
    //"https://my-json-server.typicode.com/willmt80/demo/events"
    events: [
      {
        id: 1,
        title: "Testing and Security Workshop",
        date: 1637146980230
      },
      {
        id: 2,
        title: "This was yesterday",
        date: 1637146980230
      },
      {
        id: 3,
        title: "This has started",
        date: 1637146980230
      },
      {
        id: 4,
        title: "This has not started",
        date: 1637146980230
      }
    ]
  },
  mutations: {},
  actions: {},
  modules: {}
});
