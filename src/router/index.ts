import { createRouter, createWebHistory } from 'vue-router'
import SideBar from '../components/SideBar.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: SideBar
    },
  ]
})

export default router
