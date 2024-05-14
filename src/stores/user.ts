import { useUtils } from '@/views/useUtil'
import { defineStore } from 'pinia'
import { ref } from 'vue'

interface UserInfo {
  isLogin: boolean
}
export const useUserStore = defineStore('user', () => {
  const { getToken } = useUtils()
  let token = getToken()
  let isLogin = false
  if (token) {
    isLogin = true
  }
  const info = ref<UserInfo>({
    isLogin: isLogin
  })

  const signin = () => {
    info.value.isLogin = true
  }
  const signout = () => {
    info.value.isLogin = false
  }

  return { info, signin, signout }
})
