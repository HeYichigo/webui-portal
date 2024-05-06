import { useUtils } from '@/views/useUtil'
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
export const useServiceStore = defineStore('service', () => {
  const info = ref({
    service_list: []
  })
  const { getServiceId, setServiceId } = useUtils()

  const service_id = getServiceId
  const can_clear = () => getServiceId() !== -1
  const service_list = computed(() => info.value.service_list)

  const update_service_list = (new_list) => {
    info.value.service_list = new_list
  }

  const update_selected_service = (id) => {
    setServiceId(id)
  }

  return { service_id, can_clear, service_list, update_selected_service, update_service_list }
})
