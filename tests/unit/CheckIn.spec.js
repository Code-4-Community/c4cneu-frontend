// import { mount } from "@vue/test-utils";
// import CheckIn from "../../src/views/CheckIn.vue";

// describe("Checkin.vue", () => {
//   test("ensure that valid emails will pass the email checker", () => {
//     const wrapper = mount(CheckIn);
//     wrapper.setData({
//       checkinSubmission: {
//         email: "abaca.b@husky.neu.edu"
//       }
//     });
//     expect(wrapper.vm.emailIsValid).toBe(true);
//     expect(wrapper.find("[error-email]").exists()).toBe(false);

//     wrapper.find("[input-email]").setValue("stacy@geedang.net");
//     // computed property is used to check rendering, assume checks imply true value for emailIsValid
//     expect(wrapper.find("[error-email]").exists()).toBe(false);
//   });

//   test("check that invalid emails render an error", () => {
//     const wrapper = mount(CheckIn);
//     wrapper.setData({
//       checkinSubmission: {
//         email: ""
//       }
//     });
//     expect(wrapper.vm.emailIsValid).toBe(false);
//     expect(wrapper.find("[error-email]").text()).toBe(
//       "Please enter valid email"
//     );

//     wrapper.find("[input-email]").setValue("abc@");
//     // computed property is used to check rendering, assume checks imply false value for emailIsValid
//     expect(wrapper.find("[error-email]").text()).toBe(
//       "Please enter valid email"
//     );

//     wrapper.find("[input-email]").setValue("12345");
//     expect(wrapper.find("[error-email]").text()).toBe(
//       "Please enter valid email"
//     );
//   });

//   test("check that valid codes will pass the code checker", () => {
//     const wrapper = mount(CheckIn);
//     wrapper.setData({
//       checkinSubmission: {
//         code: 1000
//       }
//     });
//     expect(wrapper.vm.codeIsValid).toBe(true);
//     expect(wrapper.find("[error-code]").exists()).toBe(false);

//     wrapper.find("[input-code]").setValue("9999");
//     // computed property is used to check rendering, assume checks imply true value for codeIsValid
//     expect(wrapper.find("[error-code]").exists()).toBe(false);
//   });

//   test("check that invalid codes will render an error", () => {
//     const wrapper = mount(CheckIn);
//     wrapper.setData({
//       checkinSubmission: {
//         code: null
//       }
//     });
//     expect(wrapper.vm.codeIsValid).toBe(false);
//     expect(wrapper.find("[error-code]").text()).toBe(
//       "Please enter valid 4 digit code"
//     );

//     wrapper.find("[input-code]").setValue("10000");
//     // computed property is used to check rendering, assume checks imply false value for codeIsValid
//     expect(wrapper.find("[error-code]").text()).toBe(
//       "Please enter valid 4 digit code"
//     );

//     wrapper.find("[input-code]").setValue("123");
//     expect(wrapper.find("[error-code]").text()).toBe(
//       "Please enter valid 4 digit code"
//     );

//     wrapper.find("[input-code]").setValue("123A");
//     expect(wrapper.find("[error-code]").text()).toBe(
//       "Please enter valid 4 digit code"
//     );

//     // This test passes because codeIsValid checks the value of the number and not the number of zeros
//     wrapper.find("[input-code]").setValue("0001");
//     expect(wrapper.find("[error-code]").text()).toBe(
//       "Please enter valid 4 digit code"
//     );
//   });

//   test("check that the submit button is disabled unless the email and code are valid", () => {
//     const wrapper = mount(CheckIn);
//     wrapper.setData({
//       checkinSubmission: {
//         email: null,
//         code: null
//       }
//     });
//     expect(wrapper.find("button.submit").is("[disabled]")).toBe(true);

//     wrapper.find("[input-code]").setValue("9999");
//     expect(wrapper.find("button.submit").is("[disabled]")).toBe(true);

//     wrapper.find("[input-code]").setValue("123");
//     wrapper.find("[input-email]").setValue("stacy@geedang.net");
//     expect(wrapper.find("button.submit").is("[disabled]")).toBe(true);

//     wrapper.find("[input-code]").setValue("9999");
//     wrapper.find("[input-email]").setValue();
//     expect(wrapper.find("button.submit").is("[disabled]")).toBe(true);

//     wrapper.find("[input-email]").setValue("stacy@geedang.net");
//     expect(wrapper.find("button.submit").is("[disabled]")).toBe(false);
//   });

//   //Not entirely positive what the best way to test the axios body w/o adding implementation
//   //temporarily so it will fail when fully implemented
// });
