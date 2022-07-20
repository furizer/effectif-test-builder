import { createRouter, createWebHistory } from 'vue-router'

import builderIndex from '@/pages/BuilderIndex'
import testConstructor from '@/pages/TestConstructor'
import oneTestPage from '@/pages/OneTest'

const rootRoute = '/test_builder'

const routes = [
  {
    path: `${rootRoute}`,
    name: 'builderIndex',
    component: builderIndex
  },
  {
    path: `${rootRoute}/constructor`,
    name: 'testConstructor',
    component: testConstructor
  },
  {
    // path: `${rootRoute}` + '/testList/test/:id',
    path: `${rootRoute}` + '/testList/:id',
    name: 'oneTestPage',
    component: oneTestPage
  },  


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

console.log(router);

export default router