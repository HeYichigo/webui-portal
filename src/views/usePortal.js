import { entry_service, exit_service, get_service_list } from '@/api'
import { useServiceStore } from '@/stores/service'
let timmer = null
const TIME_OUT = 1 * 1000
const usePortal = () => {
  const store = useServiceStore()
  const get_list = async () => {
    const list = await get_service_list()
    store.update_service_list(list.data)
  }
  if (timmer === null) {
    timmer = setInterval(get_list, TIME_OUT)
  }
  // 进入一个新的服务器
  const entry = async (id) => {
    let old_id = store.service_id()
    if (id !== old_id) {
      await exit(old_id)
      await entry_service(id)
      store.update_selected_service(id)
    }
  }
  // 重新进入某个服务器，仅在页面加载时
  const re_entry = async (id) => {
    await entry_service(id)
    store.update_selected_service(id)
  }
  // 退出某个服务器，在页面关闭或刷新时
  const force_exit = (id) => {
    let data = JSON.stringify({ service_id: id })
    window.navigator.sendBeacon('http://127.0.0.1:7860/beacon', data)
  }
  // 退出某个服务器
  const exit = async (id) => {
    if (store.can_clear()) {
      await exit_service(id)
      store.update_selected_service(-1)
    }
  }
  return { timmer, get_list, entry, exit, re_entry, force_exit }
}
export { usePortal }
