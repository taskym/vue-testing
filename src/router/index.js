import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Threadlist from '@/components/Threadlist'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/Threadlist',
      name: 'Threadlist',
      component: Threadlist
    }
  ]
})
