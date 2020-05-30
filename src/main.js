import Vue from 'vue'
import App from './App.vue'
import VueAgile from 'vue-agile'
import Carousel3d from 'vue-carousel-3d';

Vue.config.productionTip = false
Vue.use(VueAgile)
Vue.use(Carousel3d)

new Vue({
  render: h => h(App),
}).$mount('#app')
