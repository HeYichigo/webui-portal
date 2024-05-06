import { ref } from 'vue'
const useDrawer = () => {
  const open = ref(false)
  const showDrawer = () => {
    open.value = true
  }

  const onClose = () => {
    open.value = false
  }

  return { open, showDrawer, onClose }
}

export { useDrawer }
