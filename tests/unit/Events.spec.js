import { createLocalVue, mount /*, mount*/ } from "@vue/test-utils";
import Events from "../../src/views/Events.vue";
import Vuex from "vuex";

const localVue = createLocalVue();
localVue.use(Vuex);

//TODO: mock Vuex store so that this test suite passes

describe("dummy test", () => {
  test("pass", () => {
    expect(true).toBe(true);
  });
});

describe("Events.vue", () => {
  const state = {
    events: [
      {
        id: 1,
        name: "name 1",
        subtitle: "sub title 1",
        date: "1111-11-1T11:11",
        description: "desc 1",
        imageUrl:
          "https://media.makeameme.org/created/1-million-dollars-tustiw.jpg",
        open: false,
        code: "1111"
      },
      {
        id: 2,
        name: "name 2",
        subtitle: "sub title 2",
        date: "2222-22-2T22:22",
        description: "desc 2",
        imageUrl: "https://media.makeameme.org/created/number-2-thsrvb.jpg",
        open: true,
        code: "2222"
      }
    ]
  };
  const actions = {
    FETCH_EVENTS: jest.fn()
  };
  const getters = {
    GET_EVENTS: () => {
      return state.events;
    }
  };
  const store = new Vuex.Store({
    state: state,
    getters: getters,
    actions: actions
  });

  it("dispatches to events and checks that the correct get event is being called", () => {
    const wrapper = mount(Events, { store, localVue });
    expect(wrapper.find("events")[1]).toEqual(getters.GET_EVENTS[1]);
    expect(actions.FETCH_EVENTS).toHaveBeenCalled();
  });
});

/*
describe("Events.vue", () => {

    const wrapper = mount(Events, { Store, localVue });
    const event = wrapper.find("list-card");
    const modal = wrapper.find("event-modal");

    //The modal starts out invisible
    expect(modal.isVisible).toBe(false);

    //When we click on a list-card, the modal should appear...
    event.trigger("click");
    expect(modal.isVisible).toBe(true);

    //If we click on the modal, it will stay visible...
    modal.trigger("click");
    expect(modal.isVisible).toBe(true);

    //But if we click anywhere else, it should disappear...
    event.trigger("click");
    expect(modal.isVisible).toBe(false);
  });
});
*/
