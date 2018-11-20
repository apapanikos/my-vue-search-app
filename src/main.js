import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueResource from 'vue-resource';
import axios from 'axios'
import VueAxios from 'vue-axios'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMusic } from '@fortawesome/free-solid-svg-icons'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faCompactDisc } from '@fortawesome/free-solid-svg-icons'
import { faBookOpen } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import 'vue-loaders/dist/vue-loaders.css';
import { BallGridPulseLoader} from 'vue-loaders';

Vue.component(BallGridPulseLoader.name, BallGridPulseLoader);

library.add(faMusic,faPlay,faCompactDisc,faBookOpen)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueAxios, axios)

Vue.use(require('vue-moment'));

export const EventBus = new Vue();


// export const blogBus = new Vue();
// Vue.use(VueResource);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
