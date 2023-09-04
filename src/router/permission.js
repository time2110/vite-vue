import {ElMessage} from "element-plus"
import {getToken} from "@/utils/cache/cookies.js"
import router from "@/router/index.js"
import { isWhiteList } from "@/router/white-list.js"
import {useUserStoreHook} from "@/store/user.js";
import routeSetting from "@/router/route-setting.js";
import {usePermissionStoreHook} from "@/store/permission.js";

router.beforeEach(async (to, from, next) => {
    const userStore = useUserStoreHook()
    const permissionStore = usePermissionStoreHook()
    // 判断用户是否登录
    if(getToken()) {
        if(to.path === '/login') {
            next({
                path: '/'
            })
        }else {
            // 检查用户是否获得权限角色
            if(userStore.roles.length === 0) {
                try {
                    if(routeSetting.async) {
                        await userStore.getUserInfo()
                        const roles = userStore.roles
                        // 根据角色生成可访问的 Routes（可访问路由 = 常驻路由 + 有访问权限的动态路由）
                        permissionStore.setRoutes(roles)
                    }else {
                        // 没有开启动态路由功能，则启用默认角色
                        userStore.setRoles(routeSetting.defaultRoles)
                        permissionStore.setRoutes(routeSetting.defaultRoles)
                    }
                    // 将'有访问权限的动态路由' 添加到 Router 中
                    permissionStore.newRoutes.forEach((route)=>{
                        router.addRoute(route)
                    })
                    // 设置 replace: true, 因此导航将不会留下历史记录
                    next({
                        ...to,
                        replace: true
                    })
                }catch (err) {
                    // 发生错误，重置 token
                    useUserStoreHook().resetToken()
                    ElMessage.error(err.message || "路由守卫过程发生错误")
                    next("/login")
                }
            }else {
                next()
            }
        }
    }else {
        // 判断是否在免登录白名单
        if(isWhiteList(to)) {
            next()
        }else {
            next({
                path: '/login'
            })
        }
    }
})

router.afterEach((to)=>{

})
