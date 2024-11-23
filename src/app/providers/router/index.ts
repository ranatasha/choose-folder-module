import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'chooseFolder',
      component: () => import('@pages/ChooseFolderPage.vue'),
    },
  ],
});

export default router;
