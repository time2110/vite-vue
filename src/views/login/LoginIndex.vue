
<script setup>
import { ref, reactive } from 'vue'
import {rules} from "@/utils/rules/rules.js";
import {useUserStore} from "@/store/user.js"
import router from "@/router/index.js";
import {ElMessage} from "element-plus";
import {getToken} from "@/utils/cache/cookies.js";

const formRef = ref()
const form = reactive({
  userName: 'admin',
  password: 'admin'
})

const handleSubmit = (formEl) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if(valid) {
      useUserStore()
          .login(form)
          .then(()=>{
            console.log(getToken())
            router.push('/')
          })
          .catch(err=>{
            ElMessage.error(err.response.data)
          })
    }else {
      return false
    }
  })
}

const resetForm = (formEl) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>

<template>
  <el-form ref="formRef" :model="form" label-width="120px">
    <el-form-item label="用户名"
                  prop="userName"
                  :rules="[{ required: true, message: '请输入用户名' }]"
    >
      <el-input v-model="form.userName"
                placeholder="请输入用户名" />
    </el-form-item>
    <el-form-item label="密码" :rules="rules.password" prop="password">
      <el-input v-model="form.password"
                type="password"
                placeholder="请输入密码"
                show-password />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="handleSubmit(formRef)">登录</el-button>
      <el-button @click="resetForm(formRef)">取消</el-button>
    </el-form-item>
  </el-form>
</template>




<style scoped lang="scss">

</style>