<script setup>
import { entry_service, exit_service, get_service_list } from '@/api'
import { useServiceStore } from '@/stores/service'
import { onBeforeUnmount, onMounted } from 'vue'
const store = useServiceStore()
const get_list = async () => {
  const list = await get_service_list()
  store.update_service_list(list.data)
}
get_list()
const timmer = setInterval(get_list, 2 * 1000)

const entry = async (id) => {
  let old_id = store.service_id
  await exit(old_id)
  await entry_service(id)
  store.update_selected_service(id)
}
const exit = async (id) => {
  if (store.can_clear) {
    await exit_service(id)
    store.update_selected_service(-1)
  }
}
onBeforeUnmount(() => {
  clearInterval(timmer)
})
</script>

<template>
  <main>
    <h1>WebUI 服务器列表</h1>
    <v-row no-gutters>
      <v-col v-for="(item, i) in store.service_list" :key="i" cols="2" md="4">
        <v-card
          variant="elevated"
          class="mx-auto"
          color="surface-variant"
          max-width="300"
          @click="entry(item.id)"
        >
          <template v-slot:title>{{ item.host }}</template>
          <template v-slot:subtitle> 当前使用人数: {{ item.count }} </template>
        </v-card>
      </v-col>
    </v-row>
  </main>
</template>
<style scoped>
.service_card {
  width: 350px;
}
</style>
