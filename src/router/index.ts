import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import SearchByIngredient from '../views/meals/SearchByIngredient.vue'
import SearchByLetter from '../views/meals/SearchByLetter.vue'
import SearchByName from '../views/meals/SearchByName.vue'
import MealDetails from '../views/meals/MealDetails.vue'
import MealsData from '../views/meals/MealsData.vue'
import Ingredients from '../views/meals/Ingredients.vue'
import DefaultLayout from '../components/layout/DefaultLayout.vue'
import GuestLayout from '../components/layout/GuestLayout.vue'
import CoachesList from '../views/coaches/CoachesList.vue'
import CoachDetails from '../views/coaches/CoachDetails.vue'
import CoachRegistration from '../views/coaches/CoachRegistration.vue'
import ContactCoach from '../views/requests/ContactCoach.vue'
import RequestsReceived from '../views/requests/RequestsReceived.vue'
import NotFound from '../views/NotFound.vue'
import DefaultLayoutVue from '../components/layout/DefaultLayout.vue';
import HomeVue from '../views/Home.vue';
import CoachesListVue from '../views/coaches/CoachesList.vue';
import CoachDetailsVue from '../views/coaches/CoachDetails.vue';
import ContactCoachVue from '../views/requests/ContactCoach.vue';
import CoachRegistrationVue from '../views/coaches/CoachRegistration.vue';
import RequestsReceivedVue from '../views/requests/RequestsReceived.vue';
import NotFoundVue from '../views/NotFound.vue';
import MealsDataVue from '../views/meals/MealsData.vue';
import SearchByNameVue from '../views/meals/SearchByName.vue';
import SearchByLetterVue from '../views/meals/SearchByLetter.vue';
import IngredientsVue from '../views/meals/Ingredients.vue';
import SearchByIngredientVue from '../views/meals/SearchByIngredient.vue';
import MealDetailsVue from '../views/meals/MealDetails.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: DefaultLayoutVue,
    children: [
        {
            path: '/',
            name: 'home',
            component: HomeVue,
        },
        {
            path: '/coaches',
            name: 'coaches',
            component: CoachesListVue,
        },
        {
            path: '/coaches/:id',
            name: 'coach',
            component: CoachDetailsVue,
            children: [
              {
                path: 'contact',
                name: 'contactCoach',
                component: ContactCoachVue,
              }
            ]
        },
        {
          path: '/register',
          name: 'register',
          component: CoachRegistrationVue,
        },
        {
          path: '/requests',
          name: 'requests',
          component: RequestsReceivedVue,
        },
        {
          path: '/:notFound(.*)',
          name: 'notFound',
          component: NotFoundVue,
        },
        {
            path: '/meals-data',
            name: 'mealsData',
            component: MealsDataVue,
        },
        {
            path: '/by-name/:name?',
            name: 'byName',
            component: SearchByNameVue,
        },
        {
            path: '/by-letter/:letter?',
            name: 'byLetter',
            component: SearchByLetterVue,
        },
        {
            path: '/ingredients',
            name: 'ingredients',
            component: IngredientsVue,
        },
        {
            path: '/by-ingredient/:ingredient',
            name: 'byIngredient',
            component: SearchByIngredientVue,
        },
        {
            path: '/meal/:id',
            name: 'mealDetails',
            component: MealDetailsVue
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
