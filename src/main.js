import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueResource from 'vue-resource';
import axios from 'axios'
import VueAxios from 'vue-axios'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faCompactDisc } from '@fortawesome/free-solid-svg-icons'
import { faBookOpen } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faPlay,faCompactDisc,faBookOpen)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueAxios, axios)


// export const blogBus = new Vue();
// Vue.use(VueResource);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
