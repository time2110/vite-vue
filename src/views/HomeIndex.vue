<script setup>
  import {getUserList} from "@/http/api/user.js";
  import {useUserStore} from "@/store/user.js";
  import {ElMessage} from "element-plus";
  import router from "@/router/index.js";

  function handleGetUserInfo() {
    useUserStore().getUserInfo().then(()=>{
      console.log(useUserStore().userInfo.userName)
    }).catch(err=>{
      ElMessage.error(err.message)
    })
  }
  function handleLogout() {
    useUserStore().logout().then(()=>{
      ElMessage.success('退出登录')
      router.push({
        path: '/'
      })
    }).catch(err=>{})
  }
</script>

<template>
  <el-button @click="handleGetUserInfo" v-if="useUserStore().token">获取用户数据</el-button>
  <el-button @click="router.push('/userList')" v-if="useUserStore().token">用户列表</el-button>
  <el-button @click="router.push('/login')" v-if="!useUserStore().token">登录</el-button>
  <el-button @click="handleLogout" v-if="useUserStore().token">登出</el-button>
  <el-button @click="router.push('/css')" >页面展示</el-button>
</template>

<style scoped>

</style>