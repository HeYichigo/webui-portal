<script setup>
import { useServiceStore } from '@/stores/service'

const store = useServiceStore()
</script>

<template>
  <div v-if="store.loading" class="example">
    <a-spin tip="加载中..." />
  </div>
  <div v-else class="notice notice-font">
    <p>当前未选择服务器</p>
    <p style="font-size: large">Select a server please.</p>
    <p>请点击右下角按钮进行选择</p>
  </div>
  <div class="background-img"></div>
</template>

<style scoped>
.example {
  text-align: center;
  background-color: rgba(255, 255, 255, 0);
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 40%;
}
.notice {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0);
}
.notice-font {
  color: white;
  /* font-weight: bolder; */
  font-size: 30pt;
  font-family: HQVarType;
}
.background-img {
  height: 100vh;
  width: 100vw;
  background: url('../assets/video.gif') no-repeat;
  position: fixed;
  background-position: center;
  top: 0;
  z-index: -10;
  background-size: cover;
  background-color: rgb(13, 14, 13);
}
</style>
