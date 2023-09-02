
// 常驻路由
export const constantRoutes = [
    {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/HomeIndex.vue')
    },
    { path: '/', redirect: { name: 'Home' } },
    {
        path: '/login',
        name: 'Login',
        component: ()=> import('@/views/login/LoginIndex.vue')
    }
]