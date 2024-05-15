import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSignupStore = defineStore('signup-popup', () => {
  const popup = ref(false)
  const open = () => {
    popup.value = true
  }
  const close = () => {
    popup.value = false
  }
  return { popup, open, close }
})
