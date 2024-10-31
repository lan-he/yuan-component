import {
    createRouter,
    createWebHistory,
    createWebHashHistory,
} from 'vue-router'
// 路由信息
let routes = [
    {
        path: '/',
        redirect: '/weather-api',
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('@/views/about.vue'),
    },
    {
        path: '/weather-api',
        name: 'weather-api',
        component: () => import('@/views/weather-api.vue'),
    },
    {
        path: '/wiki-api',
        name: 'wiki-api',
        component: () => import('@/views/wiki-api.vue'),
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'notfound',
        component: () => import('@/views/not-found.vue'),
    },
]
// 路由器
const router = createRouter({
    // history: process.env.NODE_ENV == 'development' ? createWebHistory() : createWebHashHistory(),
    history: createWebHashHistory(),
    // history: createWebHistory(),
    routes,
})
export default router
