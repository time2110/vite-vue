<script setup>
  import {getUserList} from "@/http/api/user.js";

  async function handleGetUserList() {
    const data = await getUserList()
    console.log(data)
  }
</script>

<template>
  <el-button @click="handleGetUserList">获取用户列表数据</el-button>
</template>

<style scoped lang="scss">

</style>