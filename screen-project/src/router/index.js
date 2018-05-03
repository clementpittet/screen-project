import Vue from 'vue'
import Router from 'vue-router'
import BigScreen from '@/components/BigScreen'
import BigScreenBlock from '@/components/BigScreenBlock'

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
      path: '/animate-1',
      name: 'BigScreenBlock',
      component: BigScreenBlock
    },
    {
      path: '*',
      name: 'default',
      component: BigScreen
    }
  ]
})
