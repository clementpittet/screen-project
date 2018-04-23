// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueLodash from 'vue-lodash'

import App from './App'
import router from './router'

Vue.use(VueResource)
Vue.use(VueLodash)

Vue.config.productionTip = false
Vue.http.options.root = 'https://jsonplaceholder.typicode.com'
Vue.http.headers.common['Authorization'] = 'Basic YXBpOnBhc3N3b3Jk'

Vue.http.interceptors.push((request, next) => {
  next((response) => {
    if (request.after) {
      request.after(this, response)
    }
  })
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
