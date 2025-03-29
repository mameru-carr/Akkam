import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/pages/Home.vue";
import About from "@/pages/About.vue";
import Books from "@/pages/Books.vue";
import Papers from "@/pages/Papers.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'Home',
      path: '/',
      component: Home
    },
    {
      name: 'About',
      path: '/about',
      component: About
    },
    {
      name: 'Books',
      path: '/books',
      component: Books
    },
    {
      name: 'Papers',
      path: '/papers',
      component: Papers
    }
  ],
})

export default router
