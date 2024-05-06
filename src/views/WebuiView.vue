<template>
  <a-float-button
    shape="square"
    description="选择服务器"
    class="serve-select-btn"
    @click="showDrawer"
  >
    <template #icon>
      <DatabaseOutlined />
    </template>
  </a-float-button>
  <div class="fixed-position fixed-content fixed-content-border">
    <p>当前所在服务器:</p>
    <p>当前所在服务器:</p>
  </div>
  <a-drawer
    title="服务器列表"
    width="270"
    placement="right"
    :closable="false"
    :open="open"
    @close="onClose"
  >
    <Portal></Portal>
  </a-drawer>
  <div class="iframe-container">
    <iframe src="https://pinia.vuejs.org/zh/core-concepts/" frameborder="0"></iframe>
  </div>
</template>
<script lang="ts" setup>
import { DatabaseOutlined } from '@ant-design/icons-vue'
import Portal from './PortalComponent.vue'
import { useDrawer } from './useDrawer.js'
const { open, showDrawer, onClose } = useDrawer()
</script>
<style scoped>
.iframe-container {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: white;
}
iframe {
  width: 100%;
  height: 100%;
}
.serve-select-btn {
  right: 50px;
  width: 60px;
  height: 55px;
  bottom: 50px;
}
.fixed-position {
  position: fixed;
  width: 150px;
  height: 55px;
  bottom: 50px;
  right: 120px;
}
.fixed-content {
  padding: 4px;
  background-color: rgb(255, 252, 252);
}
.fixed-content-border {
  outline: dashed grey;
  outline-width: 1px;
  border-radius: 8px;
}
</style>
