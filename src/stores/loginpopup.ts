import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useLoginPopupStore = defineStore('login-popup', () => {
  const popup = ref(false)
  const open = () => {
    popup.value = true
  }
  const close = () => {
    popup.value = false
  }
  return { popup, open, close }
})
