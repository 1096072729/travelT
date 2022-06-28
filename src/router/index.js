import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/HomeView.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: Home
    },
    {
      path: 'hello',
      name: 'HelloWorld',
      component: () => import('../views/HomeView.vue')
    }
  ]
})
