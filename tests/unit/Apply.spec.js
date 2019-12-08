describe("passing test", () => {
  test("pass", () => {
    expect(true).toBe(true);
  });
});

import { mount } from "@vue/test-utils";
import Apply from "../../src/views/Apply.vue";

describe("Apply.vue", () => {
  test("check that apply button is disabled until all data fields are full", () => {
    const wrapper = mount(Apply);
    expect(wrapper.find("button").is("[disabled]")).toBe(true);

    wrapper.setData({
      name: "will",
      year: "3",
      whyJoin: "cause I want to"
    });
    expect(wrapper.find("button").is("[disabled]")).toBe(true);
    var f = new File([""], "filename");
    wrapper.setData({
      major: "Cs",
      resume: f,
      priorInvolvement: "nothing",
      areaInterests: "Backend"
    });
    expect(wrapper.find("button").is("[disabled]")).toBe(false);
    wrapper.setData({
      name: " "
    });
    expect(wrapper.find("button").is("[disabled]")).toBe(true);
    wrapper.setData({
      name: "will",
      resume: "hi"
    });
    expect(wrapper.find("button").is("[disabled]")).toBe(true);
    wrapper.setData({
      resume: f,
      year: 6
    });
    expect(wrapper.find("button").is("[disabled]")).toBe(true);
  });

  //Unable to test form submission is correctly formatted as the formData object
  //is a local variable in the handleSubmit function
});
