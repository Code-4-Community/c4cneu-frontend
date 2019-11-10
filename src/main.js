import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { Datetime } from "vue-datetime";
import { Settings } from "luxon";

Settings.defaultLocale = "es";

library.add(faUserSecret, faTrashAlt, faPencilAlt);

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.component("datetime", Datetime);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
