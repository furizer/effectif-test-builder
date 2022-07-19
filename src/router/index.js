import { createRouter, createWebHistory } from 'vue-router'
import index from '@/pages/indexPage'
import testConstructor from '@/pages/testConstructor'

const routes = [
  {
    path: '/',
    name: 'index',
    component: index
  },
  {
    path: '/testConstructor',
    name: 'testConstructor',
    component: testConstructor
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
