import { createWebHashHistory, createRouter, type RouteRecordRaw } from 'vue-router'

import About from '@/views/about.vue'
const routes: RouteRecordRaw[] = [
  {
    path: '/about',
    // name: 'about',
    component: About,
  },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
})
