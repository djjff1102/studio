import Vue from 'vue'
import Router from 'vue-router'
import about from '@/pages/about'
import enter from '@/pages/enter'
import index from '@/pages/index'
import timeline from '@/pages/timeline'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/enter',
      name: 'enter',
      component: enter
    },
    {
      path: '/timeline',
      name: 'timeline',
      component: timeline
    }

  ]
})
