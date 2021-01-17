import Vue from "vue";
import VueMeta from "vue-meta";
import app from "@/app";
import router from "@/router";

Vue.use(VueMeta);
new Vue({
  router,
  render: h => h(app)
}).$mount("#app");