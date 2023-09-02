<script setup>
  import {getUserList} from "@/http/api/user.js";
  import { userStore } from '@/store/index.js'
  // 可以在组件中的任意位置访问 `store` 变量 ✨
  const user = userStore()
  async function handleGetUserList() {
    const data = await getUserList()
    console.log(data)
  }
</script>

<template>
  <el-button @click="handleGetUserList">获取数据</el-button>
  <router-link to="/login">登录</router-link>
  <p>name: {{ user.name }}</p>
  <p>age: {{ user.age }}</p>
  <p>count: {{ user.count }}</p>
  <p>countDouble: {{ user.countDouble }}</p>
  <button class="btn" @click="user.countAdd()">增加</button>
</template>

<style scoped>

</style>