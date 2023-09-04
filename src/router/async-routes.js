// 动态路由
export const asyncRoutes = [
    {
        path: "/userList",
        component: () => import("@/views/user/UserList.vue"),
        name: "UserList",
        meta: {
            title: "用户列表",
            roles: ["admin"]
        }
    },
    {
        path: "/:pathMatch(.*)*", // 必须将 'ErrorPage' 路由放在最后
        redirect: "/404",
        name: "ErrorPage",
        meta: {
            hidden: true
        }
    }
]