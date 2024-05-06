<script setup>
import { useServiceStore } from '@/stores/service'
import { onBeforeUnmount } from 'vue'
import { usePortal } from './usePortal'
const store = useServiceStore()
const { get_list, timmer, entry, exit } = usePortal()

get_list()

onBeforeUnmount(() => {
  clearInterval(timmer)
})
</script>

<template>
  <div class="card-container">
    <div v-for="(item, i) in store.service_list" :key="i">
      <a-card hoverable class="mx-auto" size="small" max-width="200" @click="entry(item.id)">
        <a-card-meta>
          <template #title>{{ item.host }}</template>
          <template #description>当前使用人数: {{ item.count }}</template>
        </a-card-meta>
      </a-card>
    </div>
  </div>
</template>
<style scoped>
.card-container {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  gap: 10px;
  width: 220px;
}
</style>
