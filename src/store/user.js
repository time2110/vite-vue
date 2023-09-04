import { ref, computed } from 'vue'
import { defineStore } from "pinia"
import {getUserInfoApi, loginApi, logoutApi} from "@/http/api/user.js";
import {getToken, removeToken, setToken} from "@/utils/cache/cookies.js";
import store from "@/store/index.js";
import routeSetting from "@/router/route-setting.js";
import {resetRouter} from "@/router/index.js";

export const useUserStore = defineStore('user', ()=>{
    const token = ref(getToken())
    const roles = ref([])
    const userInfo = ref({})
    // 设置角色数组
    const setRoles = (val) => {
        roles.value = val
    }
    // 登录
    const login = async (loginData)=>{
        const {data} = await loginApi(loginData)
        setToken(data)
        token.value = data
    }
    // 获取用户详情
    const getUserInfo = async () => {
        try {
            const { data } = await getUserInfoApi()
            userInfo.value = data
            roles.value = data.roles?.length > 0 ? data.roles : routeSetting.defaultRoles
        }catch (err){
            await logout()
        }
    }
    // 登出
    const logout = async () => {
        await logoutApi(token)
        removeToken()
        token.value = ''
        roles.value = []
        resetRouter()
    }
    const resetToken = () => {
        removeToken()
        token.value = ""
        roles.value = []
    }
    return {
        token, roles, userInfo, setRoles, login, getUserInfo, logout, resetToken
    }
}, {
    persist: {
        enabled: true
    },
})

// 在 setup 外使用
export function useUserStoreHook() {
    return useUserStore(store)
}