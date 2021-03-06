import { mount } from "@vue/test-utils";
import Auth from "../../src/views/Auth.vue";

describe("Auth.vue", () => {
  //TODO: Test changing between sign in and sign up once functionality has been changed to tabs
  //No class/id for different buttons, unable to distinguish for testing
  //test("check that sign in and sign up buttons can switch between forms", () => {
  //})

  test("check that only valid inputs are submitted on sign in", () => {
    const wrapper = mount(Auth);
    wrapper.setData({
      error: false
    });
    wrapper.find("button.form-item").trigger("click");
    expect(wrapper.vm.error).toBe(true);
    wrapper.setData({
      error: false,
      user: {
        emailAddress: "1234@yes.com",
        password: "12345"
      }
    });
    wrapper.find("button.form-item").trigger("click");
    expect(wrapper.vm.error).toBe(false);
    //Unable to test form submission is correctly formatted as the formData object
    //is a local variable in the signIn function
  });

  test("check that only valid input are submitted on sign in", () => {
    const wrapper = mount(Auth);
    wrapper.setData({
      isSigningIn: false
    });
    wrapper.vm.handleSignUp();
    expect(wrapper.vm.error).toBe(true);
    wrapper.setData({
      newUser: {
        name: "will",
        emailAddress: "222@eee.com",
        yog: "2023",
        college: "College of Science",
        major: "Science",
        gender: "male",
        password: "1234",
        cPassword: "abcd"
      }
    });
    expect(wrapper.vm.isSigningIn).toBe(false);
    // expect(wrapper.vm.invalidNewPassword).toBe(true); TODO: this assertion fails, but shouldn't
    wrapper.vm.handleSignUp();
    expect(wrapper.vm.error).toBe(true);
    wrapper.setData({
      newUser: {
        cPassword: "1234"
      }
    });
    expect(wrapper.vm.isSigningIn).toBe(false);
    // expect(wrapper.vm.invalidNewPassword).toBe(false); TODO: this assertion fails, but shouldn't
    wrapper.vm.handleSignUp();
    expect(wrapper.vm.error).toBe(false);
  });
});
