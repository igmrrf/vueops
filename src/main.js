import Vue from "vue";
import Resource from "vue-resource";
import router from "./router";
import App from "./App.vue";

Vue.use(Resource);

new Vue({
    router,
    render: (h) => h(App),
}).$mount("#app");
