import { useUtils } from '@/views/useUtil'
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
const TIME_OUT = 1.5 * 1000
export const useServiceStore = defineStore('service', () => {
  const info = ref({
    service_list: [],
    service: ''
  })
  const { getServiceId, setServiceId, setFrame, getFrame } = useUtils()

  const service_id = getServiceId
  const can_clear = () => getServiceId() !== -1
  const service_list = computed(() => info.value.service_list)
  const service = computed(() => info.value.service)
  const showFrame = ref(false)

  const update_service_list = (new_list) => {
    info.value.service_list = new_list
  }

  const update_selected_service = (id) => {
    setServiceId(id)
    try {
      let list = info.value.service_list
      if (id === -1) {
        showFrame.value = false
      } else {
        let item = list[id - 1]
        let url = ''
        if (item.url.length > 0) {
          url = item.url
        } else {
          url = `http://{item.host}:{item.port}`
        }
        setFrame(url)

        setTimeout(() => {
          info.value.service = url
        }, TIME_OUT)
        showFrame.value = true
      }
    } catch (error) {
      let url = getFrame()
      if (url === null) {
        showFrame.value = false
      } else {
        setTimeout(() => {
          info.value.service = url
        }, TIME_OUT)
      }
    }
  }

  return {
    service_id,
    can_clear,
    service_list,
    service,
    update_selected_service,
    update_service_list
  }
})
