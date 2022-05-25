import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueAwesomeSwiper from "vue-awesome-swiper";

Vue.use(VueAwesomeSwiper);

// import "swiper/css";

// import "/node_modules/swiper/swiper-bundle.css";
// import "swiper/scss/navigation";
// import "swiper/scss/pagination";

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
