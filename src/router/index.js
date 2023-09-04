import { createRouter, createWebHashHistory } from 'vue-router'
import { constantRoutes } from "@/router/constant-routes.js"

const router = createRouter({
    // history: createWebHistory(), //使用历史模式
    history: createWebHashHistory(), //内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式
    routes: constantRoutes
})

// 重置路由
export function resetRouter() {
    // 所有动态路由必须带有 name 属性
    try {
        router.getRoutes().forEach((route)=>{
            const {name, meta} = route
            if(name && meta.roles?.length) {
                // 检查是否有此名称的路由并移除
                router.hasRoute(name) && router.removeRoute(name)
            }
        })
    }catch {
        // 强制刷新浏览器
        window.location.reload()
    }
}
export default router