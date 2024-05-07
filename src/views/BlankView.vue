<script setup>
import { useServiceStore } from '@/stores/service'

const store = useServiceStore()
</script>

<template>
  <div class="notice">
    <h1>当前未选择服务器</h1>
    <h1>请点击右下角按钮进行选择</h1>
  </div>
  <div v-if="store.loading" class="example">
    <a-spin tip="加载中..." />
  </div>
</template>

<style scoped>
.example {
  text-align: center;
  background-color: rgb(255, 255, 255);
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
}
</style>
