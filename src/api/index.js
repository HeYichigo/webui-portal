import axios from 'axios'

const api = axios.create({
  //   baseURL: process.env.VUE_APP_BACKEND
  baseURL: 'http://127.0.0.1:7860'
})
async function get_service_list() {
  return await api.get('/services')
}

async function entry_service(service_id) {
  await api.post('/entry', { service_id: service_id })
}

async function exit_service(service_id) {
  await api.post('/exit', { service_id: service_id })
}

export { get_service_list, entry_service, exit_service }
