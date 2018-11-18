import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueResource from 'vue-resource';
// import axios from 'axios'
// import VueAxios from 'vue-axios'

// Vue.use(VueAxios, axios)


// export const blogBus = new Vue();
Vue.use(VueResource);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
