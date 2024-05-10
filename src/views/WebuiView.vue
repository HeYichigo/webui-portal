<template>
  <FloatBtn></FloatBtn>
  <div v-if="store.showFrame" class="iframe-container">
    <iframe :src="store.service" frameborder="0"></iframe>
  </div>
  <Blank v-else></Blank>
</template>
<script lang="ts" setup>
import Blank from '@/views/BlankView.vue'
import FloatBtn from '@/components/FloatButton.vue'
import { useServiceStore } from '@/stores/service'
const store = useServiceStore()
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
</style>
