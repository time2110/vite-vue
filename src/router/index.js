import { createRouter, createWebHashHistory } from 'vue-router'
import { constantRoutes } from "@/router/constantRoutes.js"
import {asyncRoutes} from "@/router/asyncRoutes.js";

const routes = [
    ...constantRoutes,
    ...asyncRoutes
]
const router = createRouter({
    // history: createWebHistory(), //使用历史模式
    history: createWebHashHistory(), //内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式
    routes
})

export default router