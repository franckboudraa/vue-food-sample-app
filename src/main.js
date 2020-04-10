import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import SuiVue from "semantic-ui-vue";

Vue.use(SuiVue);
Vue.config.productionTip = false;

Vue.prototype.$appName = "VueFood";

/*const fetchDB = async () => {
  const db = await fetch("/db.json");

    console.log(await db.json());
};

fetchDB();
*/

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
