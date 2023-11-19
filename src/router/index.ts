import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import SearchByIngredient from '../views/SearchByIngredient.vue'
import SearchByLetter from '../views/SearchByLetter.vue'
import SearchByName from '../views/SearchByName.vue'
import MealDetails from '../views/MealDetails.vue'
import MealsData from '../views/MealsData.vue'
import Ingredients from '../views/Ingredients.vue'
import DefaultLayout from '../components/DefaultLayout.vue'
import GuestLayout from '../components/GuestLayout.vue'
import CoachesList from '../views/coaches/CoachesList.vue'
import CoachDetails from '../views/coaches/CoachDetails.vue'
import CoachRegistration from '../views/coaches/CoachRegistration.vue'
import ContactCoach from '../views/requests/ContactCoach.vue'
import RequestsReceived from '../views/requests/RequestsReceived.vue'
import NotFound from '../views/NotFound.vue'

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
            path: '/coaches',
            name: 'coaches',
            component: CoachesList,
        },
        {
            path: '/coaches/:id',
            name: 'coach',
            component: CoachDetails,
            children: [
              {
                path: 'contact',
                name: 'contactCoach',
                component: ContactCoach,
              }
            ]
        },
        {
          path: '/register',
          name: 'register',
          component: CoachRegistration,
        },
        {
          path: '/requests',
          name: 'requests',
          component: RequestsReceived,
        },
        {
          path: '/:notFound(.*)',
          name: 'notFound',
          component: NotFound,
        },
        {
            path: '/meals-data',
            name: 'mealsData',
            component: MealsData,
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
            path: '/ingredients',
            name: 'ingredients',
            component: Ingredients,
        },
        {
            path: '/by-ingredient/:ingredient',
            name: 'byIngredient',
            component: SearchByIngredient,
        },
        {
            path: '/meal/:id',
            name: 'mealDetails',
            component: MealDetails
        }
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
