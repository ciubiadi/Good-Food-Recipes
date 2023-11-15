import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import SearchByIngredient from '../views/SearchByIngredient.vue'
import SearchByLetter from '../views/SearchByLetter.vue'
import SearchByName from '../views/SearchByName.vue'
import DefaultLayout from '../components/DefaultLayout.vue'
import GuestLayout from '../components/GuestLayout.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/by-name/:name?',
            name: 'byName',
            component: SearchByName,
        },
        {
            path: '/by-letter/:letter?',
            name: 'byLetter',
            component: SearchByLetter,
        },
        {
            path: '/by-ingredient/:ingredient?',
            name: 'byIngredient',
            component: SearchByIngredient,
        },
    ]
  },
  {
    path: '/auth',
    component: GuestLayout,
  }

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
