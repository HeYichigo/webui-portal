import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useServiceStore = defineStore('service', () => {
  const info = ref({
    service_list: []
  })
  const service_id = ref(-1)
  const can_clear = computed(() => service_id.value !== -1)
  const service_list = computed(() => info.value.service_list)

  const update_service_list = (new_list) => {
    info.value.service_list = new_list
  }

  const update_selected_service = (id) => {
    service_id.value = id
  }

  return { service_id, can_clear, service_list, update_selected_service, update_service_list }
})
