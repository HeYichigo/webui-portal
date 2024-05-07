<script setup>
import { useServiceStore } from '@/stores/service'

const store = useServiceStore()
</script>

<template>
  <div v-if="store.loading" class="example">
    <a-spin tip="加载中..." />
  </div>
  <div v-else class="notice">
    <h1>当前未选择服务器</h1>
    <h1>请点击右下角按钮进行选择</h1>
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
.background-img {
  height: 100vh;
  width: 100vw;
  background: url('../assets/58769465_p0.png') no-repeat;
  position: fixed;
  opacity: 0.6;
  top: 0;
  z-index: -10;
  background-size: cover;
}
</style>
