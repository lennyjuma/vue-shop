// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
//we need to include two import statements in the script section of main.js to make vue-material available in the project:
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'


//we’re activating VueMaterial by executing the Vue.use method:
Vue.use(VueMaterial)



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
