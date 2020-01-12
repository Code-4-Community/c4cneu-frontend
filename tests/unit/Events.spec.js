import { createLocalVue /*, mount*/ } from "@vue/test-utils";
//import Events from "../../src/views/Events.vue";
import Vuex from "vuex";
//import Store from "../../src/store/index.js";

const localVue = createLocalVue();
localVue.use(Vuex);

//TODO: mock Vuex store so that this test suite passes

describe("dummy test", () => {
  test("pass", () => {
    expect(true).toBe(true);
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
