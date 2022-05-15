import Vue from 'vue'
import App from './App.vue'
import VueMeta from 'vue-meta'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'fontawesome-free/css/all.css'
import 'fontawesome-free/js/all.js'

Vue.config.productionTip = false
Vue.use(VueMeta)
new Vue({
  render: h => h(App),
}).$mount('#app')
