import { useUtils } from '@/views/useUtil'
import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_APP_BACKEND
})
api.interceptors.request.use((config) => {
  const { getToken } = useUtils()
  let token = getToken()
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})
async function get_service_list() {
  return await api.get('/services')
}

async function entry_service(service_id: number) {
  await api.post('/entry', { service_id: service_id })
}

async function exit_service(service_id: number) {
  await api.post('/exit', { service_id: service_id })
}

async function get_orgs_list() {
  return await api.get('/orgs')
}

async function login(username: string, password: string) {
  return await api.post(
    '/token',
    {
      username,
      password
    },
    {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }
  )
}
async function signup(name: string, username: string, password: string, org: number) {
  await api.post('/users', {
    name,
    username,
    password,
    org_id: org
  })
}

export { get_service_list, entry_service, exit_service, login, signup, get_orgs_list }
