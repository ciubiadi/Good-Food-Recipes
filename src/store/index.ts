import { createStore } from 'vuex';

import coachesModule from './modules/coaches/index.ts';
import requestsModule from './modules/requests/index.ts';
import mealsModule from './modules/meals/index.ts';
import authModule from './modules/auth/index.ts';

const store = createStore({
  modules: {
    meals: mealsModule,
    coaches: coachesModule,
    requests: requestsModule,
    auth: authModule
  },
});

export default store;