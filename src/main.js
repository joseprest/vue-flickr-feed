import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App";
import vuetify from "./plugins/vuetify";
import routes from "./router";

import { getBetweenBy } from "./utilities/utility";

Vue.use(VueRouter);
Vue.config.productionTip = false;

Vue.prototype.$getBetweenBy = getBetweenBy;

const router = new VueRouter({
  mode: "hash",
  base: "/",
  fallback: true,
  routes,
});
new Vue({
  render: (h) => h(App),
  vuetify,
  router,
}).$mount("#app");
