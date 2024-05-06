<script setup>
import WebuiView from '@/views/WebuiView.vue'
import { onUnmounted, onMounted } from 'vue'
import { usePortal } from '@/views/usePortal'
import { useUtils } from '@/views/useUtil'
const { re_entry, force_exit } = usePortal()
const { getServiceId } = useUtils()
const onload = async (event) => {
  let id = getServiceId()
  if (id !== -1) {
    console.log('re entry service', id)
    await re_entry(id)
  }
}
const beforeunload = async (event) => {
  console.log('leave service')
  let id = getServiceId()
  await force_exit(id)
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
  <WebuiView />
</template>

<style scoped></style>
