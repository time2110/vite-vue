import { ref, computed } from 'vue'
import { defineStore } from "pinia"
import {loginApi} from "@/http/api/user.js";
import {getToken, setToken} from "@/utils/cache/cookies.js";

export const useUserStore = defineStore('user', ()=>{
    const token = ref(getToken())
    /*登录*/
    const login = async (loginData)=>{
        const {data} = await loginApi(loginData)
        setToken(data)
        token.value = data
    }
    return {
        login
    }
}, {
    persist: {
        enabled: true
    },
})