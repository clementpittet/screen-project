import Vue from 'vue'
import Router from 'vue-router'
import BigScreen from '@/components/BigScreen'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'BigScreen',
      component: BigScreen
    },
    {
      path: '*',
      name: 'default',
      component: BigScreen
    }
  ]
})
