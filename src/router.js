import Vue from 'vue'
import Router from 'vue-router'
import Characters from '@/views/Characters'
import Character from '@/views/Character'
import NotFound from '@/views/NotFound.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      name: 'notfound',
      component:NotFound
    },
    {
      path: '/',
      name: 'characters',
      component: Characters
    },
    {
      path: '/characters/:id',
      name: 'character',
      component: Character
    }
  ]
})
