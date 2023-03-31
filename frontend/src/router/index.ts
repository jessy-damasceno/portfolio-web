import { createRouter, createWebHistory } from 'vue-router';
import * as components from '../views';

const router = createRouter({
  history: createWebHistory(),
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
      path: '/projects',
      name: 'projects',
      component: components.Portfolio
    },
    {
      path: '/contact',
      name: 'contact',
      component: components.Contact
    }
  ]
});

export default router;
