import { createLocalVue, mount } from "@vue/test-utils";
import News from "../../src/views/News.vue";
import Vuex from "vuex";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("News.vue", () => {
  const state = {
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
      },
      {
        id: 2,
        title: "title 2",
        description: "description 2",
        imageUrl:
          "https://media.makeameme.org/created/1-million-dollars-tustiw.jpg",
        author: "author 2",
        date: "2222-22-2T22:22",
        content: "content 2"
      }
    ]
  };
  const actions = {
    FETCH_POSTS: jest.fn()
  };
  const getters = {
    GET_POSTS: () => {
      return state.posts;
    }
  };
  const store = new Vuex.Store({
    state: state,
    getters: getters,
    actions: actions
  });

  it("dispateches to posts and checks that the correct get is called", () => {
    const wrapper = mount(News, { store, localVue });
    expect(wrapper.find("mediaPosts")[0]).toEqual(getters.GET_POSTS[0]);
    expect(actions.FETCH_POSTS).toHaveBeenCalled();
  });
});
