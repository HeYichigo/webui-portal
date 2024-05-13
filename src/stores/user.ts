import { defineStore } from 'pinia'
import { ref } from 'vue'

interface UserInfo {
  isLogin: boolean
}
export const useUserStore = defineStore('user', () => {
  const info = ref<UserInfo>({
    isLogin: false
  })

  const signin = () => {
    info.value.isLogin = true
  }
  const signout = () => {
    info.value.isLogin = false
  }

  return { info, signin, signout }
})
