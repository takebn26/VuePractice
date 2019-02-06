import Vue from 'vue'
import App from './App'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faAngleRight)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

import '../scss/application.scss'

new Vue({
  el: '#app',
  template: '<App />',
  components: { App }
});
