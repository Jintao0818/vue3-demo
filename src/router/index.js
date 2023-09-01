import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: import('@/views/demo/DemoPage.vue') },
    {
      path: '/:pathMatch(.*)*',
      component: () => import('@/views/notfound/NotFound.vue')
    }
  ]
})

export default router
