import Vue from 'vue'
import Router from 'vue-router'
import BigScreen from '@/components/BigScreen'
import BigScreenBlack from '@/components/BigScreenBlack'
import BigScreenBlock from '@/components/BigScreenBlock'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'BigScreenBlack',
      component: BigScreenBlack
    },
    {
      path: '/animate-1',
      name: 'BigScreen',
      component: BigScreen
    },
    {
      path: '/animate-2',
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
