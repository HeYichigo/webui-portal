import { createRouter, createWebHistory } from 'vue-router'
import webui from '@/views/WebuiView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'portal',
      component: webui
    }
  ]
})

export default router
