import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/choose_folder',
      name: 'chooseFolder',
      component: () => import('@pages/ChooseFolderPage.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: { name: 'chooseFolder'},
    },
  ],
});

export default router;
