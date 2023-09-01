import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/HomeIndex.vue')
    },
    { path: '/', redirect: { name: 'Home' } }
]

const router = createRouter({
    // history: createWebHistory(), //使用历史模式
    history: createWebHashHistory(), //内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式
    routes
})

export default router