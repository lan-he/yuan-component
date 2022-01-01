import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
      path: '/',
      name: 'HelloWorld',
      component: () => import('../components/HelloWorld.vue')
    },
    {
        path: '/input-number',
        name: 'input-number',
        component: () => import('../page/input-number.vue')
      }
  ];

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router