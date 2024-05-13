<script lang="ts" setup>
import WebuiView from '@/views/WebuiView.vue'
import { onUnmounted, onMounted } from 'vue'
import { usePortal } from '@/views/usePortal'
import { useUtils } from '@/views/useUtil'
import { useUserStore } from './stores/user'
import LoginView from './views/LoginView.vue'
const { re_entry, force_exit } = usePortal()
const { getServiceId } = useUtils()
const { info } = useUserStore()
const onload = async (event: Event) => {
  let id = getServiceId()
  if (id !== -1) {
    console.log('re entry service', id)
    await re_entry(id)
  }
}
const beforeunload = (event: Event) => {
  console.log('leave service')
  let id = getServiceId()
  force_exit(id)
}
onMounted(() => {
  window.addEventListener('load', onload)
  window.addEventListener('beforeunload', beforeunload)
})
onUnmounted(() => {
  window.removeEventListener('load', onload)
  window.removeEventListener('beforeunload', beforeunload)
})
</script>

<template>
  <!-- v-if 判断login状态来切换view组件 -->
  <WebuiView v-if="info.isLogin" />
  <LoginView v-else></LoginView>
</template>

<style scoped></style>
