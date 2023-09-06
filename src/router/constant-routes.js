
// 常驻路由
export const constantRoutes = [
    {
        path: "/404",
        component: () => import("@/views/error-page/404.vue"),
        meta: {
            hidden: true
        },
        alias: "/:pathMatch(.*)*"
    },
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
    },
    {
        path: '/css',
        name: 'CSS',
        component: ()=> import('@/views/css-view/CssIndex.vue')
    }
]