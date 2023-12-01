import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
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
import UserAuth from '../views/auth/UserAuth.vue';
// import { useStore } from 'vuex';
import store from '../store/index.ts';

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
      },
      { 
        path: '/auth', 
        name: 'auth',
        component: UserAuth, 
        meta: { requiresUnauth: true } 
      },
      {
        path: '/coaches',
        name: 'coaches',
        component: CoachesListVue,
      },
      {
          path: '/coaches/:id',
          name: 'coach',
          props: true,
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
        meta: { requiresAuth: true }
      },
      {
        path: '/requests',
        name: 'requests',
        component: RequestsReceivedVue,
        meta: { requiresAuth: true }
      },
      {
        path: '/:notFound(.*)',
        name: 'notFound',
        component: NotFoundVue,
      },
    ]
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// const store = useStore();

router.beforeEach(function(to, _, next) {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next('/auth');
  } else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
    next('/coaches');
  } else {
    next();
  }
});

export default router;
