import {defineStore} from "pinia";
import routeSetting from "@/router/route-setting.js";
import {asyncRoutes} from "@/router/async-routes.js";
import {constantRoutes} from "@/router/constant-routes.js";
import store from "@/store/index.js";
import {ref} from "vue";

// 判断是否有权限
const hasPermission = (roles , route) => {
    const routeRoles = route.meta?.roles
    return routeRoles ? roles.some((role) => routeRoles.includes(role)):true
}
// 过滤动态路由
const filterAsyncRoutes = (routes, roles) => {
    const res = []
    routes.forEach((route) => {
        const tempRoute = { ...route }
        if(hasPermission(roles, tempRoute)) {
            if(tempRoute.children) {
                tempRoute.children = filterAsyncRoutes(tempRoute.children, roles)
            }
            res.push(tempRoute)
        }
    })
    return res
}

export const usePermissionStore = defineStore("permission",()=>{
    const routes = ref([])
    const newRoutes = ref([])
    const setRoutes = (roles) => {
        const accessRoutes = routeSetting.async ? filterAsyncRoutes(asyncRoutes, roles) : asyncRoutes
        newRoutes.value = accessRoutes
        routes.value = constantRoutes.concat(accessRoutes)
    }
    return {
        routes,
        newRoutes,
        setRoutes
    }
}, {
    persist: {
        enabled: true
    },
})
// 在 setup 外使用
export function usePermissionStoreHook() {
    return usePermissionStore(store)
}