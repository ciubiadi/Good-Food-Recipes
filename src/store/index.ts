import { createStore } from 'vuex';

import coachesModule from './modules/coaches/index.ts';
import requestsModule from './modules/requests/index.ts';
import mealsModule from './modules/requests/index.ts';

const store = createStore({
  modules: {
    meals: mealsModule,
    coaches: coachesModule,
    requests: requestsModule
  },
  state() {
    return {
      userId: 'c3',
      searchedMeals: [],
      mealsByLetter: [],
      mealsByIngredient: [],
      pinnedMeals: [],
      ingredient: {},
      loading: false,
    };
  },
  getters: {
    userId(state) {
      return state.userId;
    }
  }
});

export default store;