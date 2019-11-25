describe("passing test", () => {
  test("pass", () => {
    expect(true).toBe(true);
  });
});

// TODO: Reolve these tests

// import { mount } from "@vue/test-utils";
// import CheckInAdmin from "../../src/views/CheckInAdmin.vue";

// describe("CheckinAdmin.vue", () => {
//   test("check that new code of correct length is generated and displayed on button press", () => {
//     const wrapper = mount(CheckInAdmin);
//     wrapper.setData({
//       code: null,
//       error: null
//     });

//     // Test when code is null
//     expect(wrapper.find(".codeMessage").text()).toBe("No Live Code");
//     wrapper.find("button.enable").trigger("click");
//     expect(wrapper.vm.code).toBeGreaterThanOrEqual(1000);
//     expect(wrapper.vm.code).toBeLessThanOrEqual(9999);
//     expect(wrapper.find(".codeMessage").text()).toBe(
//       "Live Code: " + wrapper.vm.code
//     );
//     // Test when code is not null
//     // Unsure how to handle checking new random inputs on a button press
//     // For this scale this seems sufficient
//     wrapper.find("button.enable").trigger("click");
//     expect(wrapper.vm.code).toBeGreaterThanOrEqual(1000);
//     expect(wrapper.vm.code).toBeLessThanOrEqual(9999);
//     expect(wrapper.find(".codeMessage").text()).toBe(
//       "Live Code: " + wrapper.vm.code
//     );
//   });

//   test("disable code will remove code value and display new message", () => {
//     const wrapper = mount(CheckInAdmin);
//     wrapper.setData({
//       code: 1234,
//       error: null
//     });
//     expect(wrapper.find(".codeMessage").text()).toBe(
//       "Live Code: " + wrapper.vm.code
//     );

//     wrapper.find("button.disable").trigger("click");
//     expect(wrapper.vm.code).toBeNull();
//     expect(wrapper.find(".codeMessage").text()).toBe("No Live Code");
//   });

//   test("ensure that the disable code button is disabled if there is no live code", () => {
//     const wrapper = mount(CheckInAdmin);
//     wrapper.setData({
//       code: 1234,
//       error: null
//     });
//     expect(wrapper.find("button.disable").is("[disabled]")).toBe(false);

//     wrapper.find("button.disable").trigger("click");
//     expect(wrapper.find("button.disable").is("[disabled]")).toBe(true);
//   });

//   test("render an error message if DisableCode() is called when there is no live code", () => {
//     const wrapper = mount(CheckInAdmin);
//     wrapper.setData({
//       code: 1234,
//       error: null
//     });
//     wrapper.vm.disableCode();
//     expect(wrapper.find(".error").exists()).toBe(false);

//     wrapper.vm.disableCode();
//     expect(wrapper.vm.error).toBe("No active live code");
//     expect(wrapper.find(".error").text()).toBe("ERROR: " + wrapper.vm.error);
//   });
// });
