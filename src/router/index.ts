import { createRouter, createWebHistory } from 'vue-router'
import * as components from '../views'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: components.Home
    },
    {
      path: '/about',
      name: 'about',
      component: components.About
    },
    {
      path: '/skills',
      name: 'skills',
      component: components.Skills
    },
    {
      path: '/experience',
      name: 'experience',
      component: components.Experience
    },
    {
      path: '/education',
      name: 'education',
      component: components.Education
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: components.Portfolio
    },
    {
      path: '/contact',
      name: 'contact',
      component: components.Contact
    },
  ]
})

export default router
