import { useUtils } from '@/views/useUtil'
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
// tip: dev
const TIME_OUT = 1.5 * 10000
interface ServiceInfo {
  service_list: Array<any>
  service: string
  service_name: string
  count: number
}
export const useServiceStore = defineStore('service', () => {
  const info = ref<ServiceInfo>({
    service_list: [],
    service: '',
    service_name: '',
    count: 0
  })
  const { getServiceId, setServiceId, setFrame, getFrame, getName, setName } = useUtils()

  const service_id = getServiceId
  const can_clear = () => getServiceId() !== -1
  const service_list = computed(() => info.value.service_list)
  const service = computed(() => info.value.service)
  const service_name = computed(() => info.value.service_name)
  const service_count = computed(() => info.value.count)
  const showFrame = ref(false)
  // 刷新时重新执行此处

  const loading = ref(getFrame() !== null)

  const update_service_list = (new_list: ServiceInfo['service_list']) => {
    info.value.service_list = new_list
    let id = getServiceId()
    let item = new_list.find((i) => i.id === id)
    if (item !== undefined) {
      info.value.count = item.count
    }
  }

  const update_selected_service = (id: number) => {
    setServiceId(id)
    try {
      let list = info.value.service_list
      if (id === -1) {
        // 当未选择服务器或是退出上个服务器时进入Blank
        showFrame.value = false
        loading.value = false
      } else {
        let item = list[id - 1]
        let url = ''
        if (item.url.length > 0) {
          url = item.url
        } else {
          url = `http://{item.host}:{item.port}`
        }
        setFrame(url)
        setName(item.name)
        // 设置数秒后退出Blank并渲染画面
        loading.value = true
        setTimeout(() => {
          info.value.service_name = item.name
          info.value.service = url
          showFrame.value = true
          loading.value = false
        }, TIME_OUT)
      }
    } catch (error) {
      let url = getFrame()
      let name = getName()
      if (url === null) {
        // 曾经未选择过服务器进入Blank
        showFrame.value = false
        loading.value = false
      } else {
        // 设置数秒后退出Blank并渲染画面
        loading.value = true
        setTimeout(() => {
          info.value.service = url
          info.value.service_name = name
          showFrame.value = true
          loading.value = false
        }, TIME_OUT)
      }
    }
  }

  return {
    service_id,
    can_clear,
    loading,
    service_list,
    service_name,
    service_count,
    service,
    showFrame,
    update_selected_service,
    update_service_list
  }
})
