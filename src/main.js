import Vue from "vue";
import Resource from "vue-resource";

import { store } from "./store";
import { router } from "./helpers";
import App from "./App.vue";

Vue.use(Resource);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
