import {createRouter, createWebHistory} from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import LinkImagesView from '@/views/LinkImagesView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/link-images',
      name: 'link-images',
      component: LinkImagesView,
    },
  ],
});

export default router;
