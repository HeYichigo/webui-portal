<script lang="ts" setup>
import { useServiceStore } from '@/stores/service'
import { onBeforeUnmount } from 'vue'
import { usePortal } from '@/views/usePortal'
const store = useServiceStore()
const { get_list, timmer, entry } = usePortal()

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
          <template #title>{{ item.name }}</template>
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
