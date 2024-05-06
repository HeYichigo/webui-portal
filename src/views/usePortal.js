import { entry_service, exit_service, get_service_list } from '@/api'
import { useServiceStore } from '@/stores/service'
let timmer = null
const usePortal = () => {
  const store = useServiceStore()
  const get_list = async () => {
    const list = await get_service_list()
    store.update_service_list(list.data)
  }
  if (timmer === null) {
    timmer = setInterval(get_list, 2 * 1000)
  }
  const entry = async (id) => {
    let old_id = store.service_id()
    if (id !== old_id) {
      await exit(old_id)
      await entry_service(id)
      store.update_selected_service(id)
    }
  }
  const re_entry = async (id) => {
    await entry_service(id)
    store.update_selected_service(id)
  }
  const exit = async (id) => {
    if (store.can_clear()) {
      await exit_service(id)
      store.update_selected_service(-1)
    }
  }
  return { timmer, get_list, entry, exit, re_entry }
}
export { usePortal }
