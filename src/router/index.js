import { createRouter, createWebHistory } from 'vue-router'
// 路由信息
let routes = [
    {
        path: '/',
        redirect: '/home',
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('@/views/home.vue'),
    },
    {
        path: '/weather',
        name: 'weather',
        component: () => import('@/views/weather/index.vue'),
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('@/views/about/index.vue'),
    },
    { path: '/:pathMatch(.*)*', name: 'notfound', component: () => import('@/views/common/404.vue') },
]
// 路由器
const router = createRouter({
    history: createWebHistory(), // HTML5模式
    routes,
})
export default router
