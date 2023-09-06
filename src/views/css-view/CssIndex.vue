<script setup>

import CenterCss from "@/views/css-view/CenterCss.vue";
import {ref} from "vue";

const tabs = {
  CenterCss,
}
const dict = {
  'CenterCss': '居中'
}
let currentTab = ref('CenterCss')
</script>

<template>
  <div class="container">
    <div class="box">
      <el-button v-for="(_,tab) in tabs"
                 :key="tab"
                 :class="{ active: currentTab === tab }"
                 @click="currentTab=tab" >{{dict[tab]}}</el-button>
    </div>
    <div class="display">
      <component :is="tabs[currentTab]"></component>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .container {
    width: 100vw;
    height: 100vh;
    .box {
      display: flex;
    }
    .display {
      width: 90%;
      height: 90%;
      border: 1px solid #eee;
    }
    .active {
      background: #e0e0e0;
    }
  }
</style>